import Vapi from "@vapi-ai/web";

// Initialize Vapi only on the client side to avoid SSR issues
export const vapi =
  typeof window !== "undefined"
    ? new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!)
    : (null as any);
