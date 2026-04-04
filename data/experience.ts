export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Shopify",
    role: "Software Engineer Intern",
    startDate: "Sep 2025",
    endDate: "Dec 2025",
    description: [
      "Increased merchant feature adoption by 12% across a base of 10K+ users by developing and deploying a full-stack incentive banner.",
      "Enabled high-speed querying of terabyte-scale datasets by architecting a GraphQL API layer integrated with Google BigQuery.",
      "Scaled data processing to 500K+ daily interaction records by engineering an automated pipeline for multimodal LLM data using Google Cloud Run and Cloud Storage.",
      "Achieved 100% code reliability across both frontend and backend stacks by implementing comprehensive test suites using Jest and Minitest.",
    ],
  },
  {
    id: "exp-2",
    company: "Wiz Robotics",
    role: "Machine Learning Engineer Intern",
    startDate: "Jan 2025",
    endDate: "Apr 2025",
    description: [
      "Extracted engagement signals for 500+ concurrent users by building a real-time meeting analyzer using LangChain and DeepSeek.",
      "Reduced content creation time by 60% by designing a multimodal LLM workflow with Gemini to automate PDF-to-JSON parsing.",
      "Increased UI search accuracy by 40% by implementing a hybrid RAG system utilizing Pinecone and BM25 for context-aware retrieval.",
      "Cut deployment time by 50% by containerizing multimodal LLM pipelines with Docker and integrating automated CI workflows.",
    ],
  },
  {
    id: "exp-3",
    company: "SpeechDojo",
    role: "Software Engineer",
    startDate: "Jul 2024",
    endDate: "Jul 2025",
    description: [
      "Reduced interview preparation time by 65% by building a multi-agent interview bot using LangChain and GPT-4o to generate custom questions.",
      "Maintained 99.9% uptime for 100+ concurrent weekly users by architecting a scalable interview platform with FastAPI and PostgreSQL.",
      "Processed 500+ weekly audio assessments by developing a Django API and React speech-to-text pipeline utilizing OpenAI Whisper.",
      "Enabled real-time structured outputs across 5+ tools by engineering a tool-calling agent system integrated with Brave Search API and Pydantic.",
    ],
  },
  {
    id: "exp-4",
    company: "LaunchSTEM",
    role: "Software Developer",
    startDate: "Apr 2024",
    endDate: "Sept 2024",
    description: [
      "Reduced page load time by 45% across mobile and desktop by building a high-performance React.js and Tailwind CSS website with Next.js SSR.",
      "Automated lead capture for 500+ emails by engineering a Google Apps Script funnel into PostgreSQL and triggering Mailchimp campaigns.",
      "Delivered structured educational content to 1,000+ active learners by developing a full-stack learning platform using Express.js and MongoDB.",
      "Scaled real-time quiz infrastructure to 500+ concurrent sessions by building a Redis-cached REST API handling 10,000+ daily requests.",
    ],
  },
];
