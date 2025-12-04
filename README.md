# 🎯 AI Interview - Your Personal Interview Coach

> **Transform your interview preparation with AI-powered voice interviews and intelligent feedback**

An innovative full-stack web application that revolutionizes interview preparation by simulating real-world technical and behavioral interviews using cutting-edge AI technology. Get instant, detailed feedback on your performance and track your progress over time.

---

## 🌟 What Makes This Special?

This isn't just another interview prep tool—it's a **complete interview simulation platform** that:

- 🎙️ **Conducts real-time voice interviews** using advanced AI voice technology (Vapi AI)
- 🤖 **Generates personalized interview questions** based on your role, tech stack, and experience level
- 📊 **Provides comprehensive AI-powered feedback** analyzing communication, technical knowledge, problem-solving, and more
- 🔄 **Creates dynamic interview experiences** that adapt to your responses in real-time
- 📈 **Tracks your interview history** and helps you improve with each session

---

## ✨ Key Features

### 🎤 Real-Time Voice Interviews

Experience authentic interview scenarios with an AI interviewer that:

- Listens and responds naturally to your answers
- Asks follow-up questions based on your responses
- Maintains professional yet friendly conversation flow
- Provides visual feedback during the conversation (speaking indicators, live transcripts)

### 🧠 Intelligent Interview Generation

The platform intelligently creates customized interviews by:

- Accepting your target role (e.g., Frontend Developer, Full Stack Engineer)
- Considering your tech stack (supports 100+ technologies including React, Node.js, Python, Java, AWS, and more)
- Adjusting difficulty based on experience level (Junior, Mid-level, Senior)
- Generating relevant technical and behavioral questions

### 📊 Comprehensive AI Feedback System

After each interview, receive detailed analysis powered by Google's Gemini AI:

- **Overall Score** (0-100) with category breakdowns
- **Communication Skills** - Clarity, articulation, and response structure
- **Technical Knowledge** - Understanding of key concepts
- **Problem-Solving** - Analytical thinking and solution approach
- **Cultural Fit** - Alignment with professional expectations
- **Confidence & Clarity** - Engagement and presentation quality
- **Strengths** - What you did well
- **Areas for Improvement** - Specific actionable feedback
- **Final Assessment** - Comprehensive summary and recommendations

### 🔐 Secure Authentication

- Firebase Authentication integration
- Secure user sessions and data management
- Personalized interview history and progress tracking

### 📚 Interview Library

- Browse interviews created by other users
- Access a variety of interview scenarios
- Practice with different roles and tech stacks

---

## 🛠️ Tech Stack

This project showcases proficiency in modern web development technologies:

### Frontend

- **Next.js 16** - React framework with App Router for optimal performance
- **React 19** - Latest React features with Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern, responsive UI design
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon system

### Backend & APIs

- **Next.js API Routes** - Serverless API endpoints
- **Firebase Admin SDK** - Server-side Firebase operations
- **Vapi AI** - Voice AI integration for real-time conversations
- **Google AI (Gemini)** - Advanced AI for feedback generation

### Database & Authentication

- **Firebase Firestore** - NoSQL cloud database
- **Firebase Authentication** - Secure user management

### AI & Voice Technologies

- **Vapi AI Web SDK** - Real-time voice conversation
- **Deepgram** - Speech-to-text transcription
- **ElevenLabs** - Natural voice synthesis
- **Anthropic Claude** - Conversational AI for interviews
- **Google Gemini 2.5 Flash** - Intelligent feedback analysis

### Form Management & Validation

- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation integration

### Developer Experience

- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **Day.js** - Date manipulation
- **Sonner** - Toast notifications

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase project set up
- Vapi AI account and API keys
- Google AI API key

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ai-interview
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory with the following:

   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Firebase Admin (Server-side)
   FIREBASE_ADMIN_PRIVATE_KEY=your_admin_private_key
   FIREBASE_ADMIN_CLIENT_EMAIL=your_admin_client_email

   # Vapi AI
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id

   # Google AI
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action!

---

## 📖 How It Works

### 1. **Create Your Interview**

- Navigate to the interview generation page
- Specify your target role (e.g., "Full Stack Developer")
- Select your tech stack from 100+ supported technologies
- Choose your experience level
- Let the AI generate personalized interview questions

### 2. **Take the Interview**

- Click "Call" to start the voice interview
- Speak naturally with the AI interviewer
- See real-time transcripts of the conversation
- Answer questions as you would in a real interview
- Click "End" when you're finished

### 3. **Receive Feedback**

- Get instant, comprehensive feedback powered by Google's Gemini AI
- Review your scores across 5 key categories
- Read detailed analysis of your strengths
- Identify specific areas for improvement
- Use insights to prepare for your next interview

### 4. **Track Progress**

- View your interview history on the dashboard
- Compare performance across different interviews
- Practice with various roles and tech stacks
- Build confidence through repeated practice

---

## 🎨 Project Structure

```
ai-interview/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   ├── (root)/                   # Main application pages
│   │   ├── page.tsx              # Dashboard/Home
│   │   └── interview/            # Interview pages
│   ├── api/                      # API routes
│   │   └── vapi/                 # Vapi integration endpoints
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── Agent.tsx                 # Voice interview component
│   ├── AuthForm.tsx              # Authentication forms
│   ├── InterviewCard.tsx         # Interview display card
│   ├── DisplayTechIcons.tsx      # Tech stack icons
│   └── ui/                       # Reusable UI components
├── lib/                          # Utility functions and actions
│   ├── actions/                  # Server actions
│   │   ├── auth.action.ts        # Authentication logic
│   │   └── general.action.ts     # Interview & feedback logic
│   ├── vapi.sdk.ts               # Vapi SDK initialization
│   └── utils.ts                  # Helper functions
├── firebase/                     # Firebase configuration
│   ├── admin.ts                  # Firebase Admin SDK
│   └── config.ts                 # Client-side Firebase
├── constants/                    # Application constants
│   └── index.ts                  # Tech mappings, schemas, configs
├── types/                        # TypeScript type definitions
└── public/                       # Static assets
```

---

## 🔑 Key Technical Highlights

### Advanced Voice AI Integration

- Seamless real-time voice conversations using Vapi AI
- Integration with Deepgram for accurate speech recognition
- ElevenLabs voice synthesis for natural-sounding responses
- Custom voice assistant configuration with Anthropic Claude

### Intelligent Feedback Generation

- Structured AI analysis using Google's Gemini 2.5 Flash
- Type-safe feedback schema with Zod validation
- Comprehensive scoring across multiple dimensions
- Actionable insights and improvement suggestions

### Modern Full-Stack Architecture

- Server Components for optimal performance
- API routes for serverless backend logic
- Real-time data synchronization with Firestore
- Type-safe development with TypeScript throughout

### Scalable Database Design

- Efficient Firestore queries with proper indexing
- User-based data isolation and security
- Interview history and feedback storage
- Optimized data fetching with Promise.all

---

## 🎯 Use Cases

- **Job Seekers** - Practice for upcoming interviews and build confidence
- **Students** - Prepare for campus placements and internship interviews
- **Career Switchers** - Get comfortable with new domain interviews
- **Professionals** - Stay interview-ready and sharpen communication skills
- **Educators** - Use as a teaching tool for interview preparation courses

---

## 🔮 Future Enhancements

- 📹 Video interview support with facial expression analysis
- 📊 Advanced analytics dashboard with progress tracking over time
- 🎓 Interview preparation courses and learning paths
- 👥 Peer review and community feedback features
- 🌍 Multi-language interview support
- 📱 Mobile application for on-the-go practice

---

## 🤝 Contributing

This is a personal project, but suggestions and feedback are always welcome! Feel free to open issues or reach out with ideas.

---

## 📄 License

This project is a personal portfolio piece. All rights reserved.

---

## 👨‍💻 About the Developer

Built with passion and attention to detail, this project demonstrates:

- Full-stack development expertise
- AI/ML integration capabilities
- Modern web development best practices
- User-centric design thinking
- Complex system architecture skills

---

## 🙏 Acknowledgments

- **Vapi AI** - For the incredible voice AI platform
- **Google AI** - For the powerful Gemini models
- **Firebase** - For reliable backend infrastructure
- **Vercel** - For seamless deployment and hosting
- **Next.js Team** - For the amazing React framework

---

<div align="center">

**Made with ❤️ and lots of ☕**

_Transforming interview preparation, one conversation at a time_

</div>
