import { db } from "@/firebase/admin";

export async function signUp(params: SignUpParams){
    const{uid, name, email} = params;

    try {
      const userRecord = await db.collection("users").doc(uid).get();

      if (userRecord.exists) {
        return {
          success: false,
          message: "User already exists. Please sign in instead.",
        };
      }
      await db.collection("users").doc(uid).set({
        name,
        email,
      });
    } catch (error) {
      console.error("Error creating a user", error);

      if (typeof error === "object" && error !== null && "code" in error) {
        if ((error as { code: string }).code === "auth/email-already-exists") {
          return {
            success: false,
            message: "This email is already in use.",
          };
        }
      }
    }

}