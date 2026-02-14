import React from 'react';
import { sessions } from '../data/sessions';
import { CheckCircle, Circle, PlayCircle } from 'lucide-react';

interface SidebarProps {
  currentSessionId: number;
  completedSessions: number[];
  onSelectSession: (id: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentSessionId, 
  completedSessions, 
  onSelectSession 
}) => {
  return (
    <div className="py-2">
      {sessions.map((session, index) => {
        const isCompleted = completedSessions.includes(session.id);
        const isActive = currentSessionId === session.id;
        
        return (
          <button
            key={session.id}
            onClick={() => onSelectSession(session.id)}
            className={`w-full text-right px-4 py-3 border-l-4 transition-all hover:bg-slate-50 flex items-start gap-3
              ${isActive 
                ? 'border-health-600 bg-health-50/50' 
                : 'border-transparent text-slate-600'
              }
            `}
          >
            <div className="mt-1 flex-shrink-0">
              {isCompleted ? (
                <CheckCircle size={18} className="text-health-500" />
              ) : isActive ? (
                <PlayCircle size={18} className="text-health-600 animate-pulse" />
              ) : (
                <Circle size={18} className="text-slate-300" />
              )}
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-1">جلسه {index + 1}</div>
              <div className={`text-sm font-medium leading-tight ${isActive ? 'text-health-900' : 'text-slate-700'}`}>
                {session.title}
              </div>
            </div>
          </button>
        );
      })}
      
      <div className="mt-8 px-4 pb-8 border-t pt-4">
        <div className="bg-slate-100 rounded-lg p-4 text-xs text-slate-500">
          <p className="font-bold text-slate-700 mb-2">ارتباط با مدرس</p>
          <p>Dr. Fatemeh Zarei</p>
          <p>healcono@gmail.com</p>
          <p>@healthcono</p>
        </div>
      </div>
    </div>
  );
};