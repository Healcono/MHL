import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Menu, X, GraduationCap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentSessionId: number;
  completedSessions: number[];
  onSelectSession: (id: number) => void;
  totalSessions: number;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentSessionId, 
  completedSessions, 
  onSelectSession,
  totalSessions
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b z-30 flex items-center justify-between px-4 shadow-sm">
        <div className="flex items-center gap-2">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            <Menu size={24} />
          </button>
          <span className="font-bold text-health-900 flex items-center gap-2">
            <GraduationCap className="text-health-600" />
            سواد سلامت رسانه‌ای
          </span>
        </div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 right-0 h-screen w-80 bg-white border-l shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-4 border-b h-16">
           <h1 className="font-bold text-health-900 text-lg flex items-center gap-2">
            <GraduationCap className="text-health-600" />
            سواد سلامت رسانه‌ای
          </h1>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1 text-slate-500">
            <X size={24} />
          </button>
        </div>
        
        <div className="h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar">
          <Sidebar 
            currentSessionId={currentSessionId}
            completedSessions={completedSessions}
            onSelectSession={(id) => {
              onSelectSession(id);
              setIsSidebarOpen(false);
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full lg:w-auto pt-16 lg:pt-0 overflow-y-auto h-screen scroll-smooth">
        <div className="max-w-4xl mx-auto p-4 md:p-8 pb-32">
          <div className="mb-6 flex items-center justify-between">
            <div>
               <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">دوره آموزشی دانشگاهی</h2>
               <div className="text-xs text-slate-400">Dr. Fatemeh Zarei</div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-health-700 mb-1">
                پیشرفت دوره: {Math.round((completedSessions.length / totalSessions) * 100)}%
              </span>
              <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-health-500 transition-all duration-500 ease-out"
                  style={{ width: `${(completedSessions.length / totalSessions) * 100}%` }}
                />
              </div>
            </div>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};