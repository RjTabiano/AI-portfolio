import axios from "../axios";
import { ChatMessage } from "../../types/ai";
import { SEND_MESSAGE } from "../api";

export async function sendChatMessage(messages: ChatMessage[]): Promise<string> {
  try {
    const response = await axios.post(SEND_MESSAGE, { messages });
    console.log(response.data.tool_call);
    return response.data.response;
  } catch (error) {
    console.error("Error sending chat message:", error);
    return "Sorry, something went wrong.";
  }
}
