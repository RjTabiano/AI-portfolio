export type Role = "system" | "user";

export interface ChatMessage {
  role: Role;
  content: string;
}

export interface Message {
  text: string;
  sender: 'user' | 'ai';
}