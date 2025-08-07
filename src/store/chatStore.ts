import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { ChatStore } from './types';

const useChatStore = create<ChatStore>()(
  devtools(
    immer((set, get) => ({
      stats: {
        totalRooms: 0,
        activeRooms: 0,
        totalMessages: 0,
        onlineUsers: 0,
      },
      actions: {},
    }))
  )
);

export default useChatStore;