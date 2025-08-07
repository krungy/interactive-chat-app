import React from 'react';
import './ChatStats.scss';
import { ChatStats as ChatStatsType } from '@/store/types';

interface ChatStatsProps {
  stats: ChatStatsType;
}

const ChatStats: React.FC<ChatStatsProps> = ({ stats }) => {
  return (
    <div className="chat_stats">
      <h3 className="stats_title">채팅 통계</h3>
      
      <div className="stats_grid">
        <div className="stat_item">
          <div className="stat_value">{stats.totalRooms}</div>
          <div className="stat_label">총 채팅방</div>
        </div>
        
        <div className="stat_item">
          <div className="stat_value">{stats.activeRooms}</div>
          <div className="stat_label">활성 채팅방</div>
        </div>
        
        <div className="stat_item">
          <div className="stat_value">{stats.totalMessages}</div>
          <div className="stat_label">총 메시지</div>
        </div>
        
        <div className="stat_item">
          <div className="stat_value">{stats.onlineUsers}</div>
          <div className="stat_label">온라인 사용자</div>
        </div>
      </div>
    </div>
  );
};

export default ChatStats; 