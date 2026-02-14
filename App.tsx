import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { SessionContent } from './components/SessionContent';
import { sessions } from './data/sessions';
import { Session } from './types';

export default function App() {
  const [currentSessionId, setCurrentSessionId] = useState<number>(1);
  const [completedSessions, setCompletedSessions] = useState<number[]>([]);

  // Initialize from local storage if available
  useEffect(() => {
    const saved = localStorage.getItem('completedSessions');
    if (saved) {
      try {
        setCompletedSessions(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved progress", e);
      }
    }
  }, []);

  const handleSessionComplete = (id: number) => {
    if (!completedSessions.includes(id)) {
      const newCompleted = [...completedSessions, id];
      setCompletedSessions(newCompleted);
      localStorage.setItem('completedSessions', JSON.stringify(newCompleted));
    }
  };

  const currentSession = sessions.find(s => s.id === currentSessionId) || sessions[0];

  return (
    <Layout
      currentSessionId={currentSessionId}
      completedSessions={completedSessions}
      onSelectSession={setCurrentSessionId}
      totalSessions={sessions.length}
    >
      <SessionContent 
        session={currentSession} 
        onComplete={() => handleSessionComplete(currentSession.id)}
        isCompleted={completedSessions.includes(currentSession.id)}
      />
    </Layout>
  );
}