import React, { useEffect, useState } from 'react';
import Button from '@/components/common/button/Button';
import './ChatDashboard.scss';

const ChatDashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initDashboard = async () => {
      try {
        setIsLoading(true);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    initDashboard();
  }, []);

  if (isLoading) {
    return (
      <div className="chat_dashboard_loading">
        <div className="loading_spinner" />
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div className="chat_dashboard">
      <div className="chat_dashboard_header">
        <h1 className="chat_dashboard_title">실시간 채팅 대시보드</h1>
        <div className="chat_dashboard_actions">
          <Button
            text="새 채팅방"
            size="small"
            color="primary"
            onClick={() => {}}
          />
          <Button
            text="설정"
            size="small"
            color="secondary"
            onClick={() => {}}
          />
        </div>
      </div>

      <div className="chat_dashboard_content">
        <div className="chat_dashboard_sidebar">
          sidebar
        </div>

        <div className="chat_dashboard_main">
          main
        </div>
      </div>
    </div>
  );
};

export default ChatDashboard; 