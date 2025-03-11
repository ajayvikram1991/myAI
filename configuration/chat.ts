import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant. I can answer questions related to Ajay's professional and MBA experience. Some of his key skills include Finance, Investments, Marketing, Consulting, Technology, Data Analysis, Strategy, Project Management & Sustainability. 
You can ask questions such as
What are some finance projects Ajay has worked on? 
Summarize Ajay’s key experience
What are Ajay’s skill sets?
Is he a good fit for XYZ role?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Sorry, that was too long. I need a break`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
