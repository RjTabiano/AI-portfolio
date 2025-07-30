import axios from "../axios";
import { ChatMessage } from "../../types";
import { SEND_MESSAGE } from "../api";

export interface ChatResponse {
  response: string;
  toolCalls?: string | null;
}

export async function sendChatMessage(messages: ChatMessage[]): Promise<ChatResponse> {
  try {
    const response = await axios.post(SEND_MESSAGE, { messages });
    return {
      response: response.data.response,
      toolCalls: response.data.tool_call || null
    };
  } catch (error) {
    console.error("Error sending chat message:", error);
    return {
      response: "Sorry, something went wrong.",
      toolCalls: null
    };
  }
}