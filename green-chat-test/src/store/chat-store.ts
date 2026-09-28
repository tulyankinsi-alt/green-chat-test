import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Message } from "../shared/types/base";

interface ChatState {
  chatsIds: number[];
  messages: Message[];
  addChat: (chatId: number) => void;
  addMessage: (message: Message) => void;
  clear: () => void;
};

const EMPTY_CHATS: number[] = [];
const EMPTY_MESSAGES: Message[] = []; 

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      chatsIds: [],
      messages: [],
      addChat(chatId) {
        set((state) => ({chatsIds: [...state.chatsIds, chatId]}))
      },
      addMessage(message) {
        set((state) => ({messages: [...state.messages, message]}))
      },
      clear() {
        set({
          chatsIds: EMPTY_CHATS,
          messages: EMPTY_MESSAGES
        })
      }
    }),
    {
      name: "green-api-chat",
    },
  ),
);
