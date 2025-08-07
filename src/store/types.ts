export interface ChatStats {
    totalRooms: number;
    activeRooms: number;
    totalMessages: number;
    onlineUsers: number;
}

export interface ChatStore {
    stats: ChatStats;
}
  