import React, { useState } from 'react';
import { Session } from '../types';
import { BookOpen, MonitorPlay, BrainCircuit, CheckSquare, MessageCircle, Eye } from 'lucide-react';
import { FactOrMyth } from './FactOrMyth';
import { Quiz } from './Quiz';
import { Contact } from './Contact';

interface SessionContentProps {
  session: Session;
  onComplete: () => void;
  isCompleted: boolean;
}

export const SessionContent: React.FC<SessionContentProps> = ({ session, onComplete, isCompleted }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'visual' | 'video' | 'interactive' | 'quiz'>('content');
  const [visualRevealed, setVisualRevealed] = useState(false);

  // Reset states when session changes
  React.useEffect(() => {
    setActiveTab('content');
    setVisualRevealed(false);
  }, [session.id]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in">
      {/* Header Image */}
      <div className="h-48 md:h-64 w-full bg-slate-200 relative overflow-hidden">
        {session.imageUrl && (
          <img 
            src={session.imageUrl} 
            alt={session.title} 
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-health-950/90 to-transparent flex items-end p-6 md:p-8">
          <div className="animate-fade-in-up">
             <span className="inline-block px-3 py-1 bg-health-500/20 backdrop-blur-md border border-health-400/30 text-white text-xs rounded-full mb-2 font-medium">جلسه {session.id}</span>
             <h1 className="text-2xl md:text-3xl font-bold text-white shadow-sm">{session.title}</h1>
             <p className="text-health-50 mt-2 text-sm md:text-base max-w-2xl">{session.description}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b overflow-x-auto no-scrollbar">
        {[
          { id: 'content', icon: BookOpen, label: 'درسنامه' },
          { id: 'visual', icon: Eye, label: 'تحلیل تصویری' },
          { id: 'video', icon: MonitorPlay, label: 'ویدیو آموزشی' },
          { id: 'interactive', icon: BrainCircuit, label: 'بازی و تعامل' },
          { id: 'quiz', icon: CheckSquare, label: 'آزمون' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`
              flex-1 min-w-[100px] py-4 px-4 text-sm font-medium flex flex-col items-center gap-2 border-b-2 transition-all duration-300
              ${activeTab === tab.id 
                ? 'border-health-600 text-health-800 bg-health-50/50' 
                : 'border-transparent text-slate-500 hover:text-health-600 hover:bg-slate-50'
              }
            `}
          >
            <tab.icon size={20} className={activeTab === tab.id ? "text-health-600" : ""} />
            <span className="whitespace-nowrap">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Body */}
      <div className="p-6 md:p-8 min-h-[400px]">
        
        {/* TEXT CONTENT */}
        {activeTab === 'content' && (
          <div className="prose prose-lg prose-slate max-w-none text-justify animate-fade-in">
            <div dangerouslySetInnerHTML={{ __html: session.content }} />
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setActiveTab('visual')}
                className="px-6 py-2 bg-health-600 text-white rounded-lg hover:bg-health-700 transition-colors shadow-sm hover:shadow-md"
              >
                مرحله بعد: تحلیل تصویری
              </button>
            </div>
          </div>
        )}

        {/* VISUAL ANALYSIS */}
        {activeTab === 'visual' && (
          <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in">
            <div className="bg-slate-100 p-2 rounded-xl w-full max-w-2xl shadow-inner relative group">
              <img 
                src={session.imageUrl || "https://picsum.photos/800/600"} 
                alt="Visual Analysis" 
                className={`w-full rounded-lg transition-all duration-1000 ease-in-out ${visualRevealed ? 'filter-none' : 'blur-md grayscale'}`}
              />
              {!visualRevealed && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button 
                    onClick={() => setVisualRevealed(true)}
                    className="px-6 py-3 bg-health-600 text-white rounded-full shadow-lg hover:bg-health-700 transform hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <Eye size={20} />
                    <span>کلیک برای تحلیل</span>
                  </button>
                </div>
              )}
            </div>
            
            {visualRevealed && (
              <div className="max-w-2xl bg-health-50 p-6 rounded-xl border border-health-100 animate-fade-in-up">
                <h4 className="font-bold text-health-900 mb-2 flex items-center gap-2">
                  <BrainCircuit size={20} className="text-health-600" />
                  پرسش تحلیلی:
                </h4>
                <p className="text-health-800 leading-7">
                  {session.visualAnalysisPrompt || "به عناصر موجود در تصویر دقت کنید. چه پیامی به صورت پنهان منتقل می‌شود؟"}
                </p>
                <div className="mt-4">
                    <textarea 
                        className="w-full p-3 border border-health-200 rounded-lg text-sm focus:ring-2 focus:ring-health-500 outline-none bg-white" 
                        placeholder="تحلیل خود را اینجا بنویسید..."
                        rows={3}
                    ></textarea>
                </div>
              </div>
            )}
             <div className="w-full flex justify-end mt-4">
              <button 
                onClick={() => setActiveTab('video')}
                className="px-6 py-2 bg-health-600 text-white rounded-lg hover:bg-health-700 transition-colors shadow-sm hover:shadow-md"
              >
                مرحله بعد: ویدیو
              </button>
            </div>
          </div>
        )}

        {/* VIDEO PLAYER */}
        {activeTab === 'video' && (
          <div className="flex flex-col items-center animate-fade-in">
             <div className="w-full max-w-3xl aspect-video bg-slate-900 rounded-xl overflow-hidden shadow-lg mb-6">
               {session.videoUrl ? (
                 <iframe 
                   src={session.videoUrl} 
                   className="w-full h-full" 
                   frameBorder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen
                   title={session.title}
                 ></iframe>
               ) : (
                 <div className="flex items-center justify-center h-full text-slate-400 flex-col gap-3">
                   <MonitorPlay size={48} />
                   <p>ویدیو برای این جلسه بارگذاری نشده است.</p>
                 </div>
               )}
             </div>
             <p className="text-slate-600 text-center max-w-2xl mb-8">
               ویدیو را با دقت تماشا کنید. نکات کلیدی در آزمون پایانی مورد پرسش قرار می‌گیرند.
             </p>
             <div className="w-full flex justify-end">
              <button 
                onClick={() => setActiveTab('interactive')}
                className="px-6 py-2 bg-health-600 text-white rounded-lg hover:bg-health-700 transition-colors shadow-sm hover:shadow-md"
              >
                مرحله بعد: بازی
              </button>
            </div>
          </div>
        )}

        {/* INTERACTIVE GAME */}
        {activeTab === 'interactive' && (
          <div className="animate-fade-in">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-health-800 mb-2">چالش واقعیت یا شایعه</h3>
              <p className="text-slate-600">کارتهای زیر را بر اساس واقعیت یا شایعه بودن دسته‌بندی کنید.</p>
            </div>
            {session.factOrMyth && session.factOrMyth.length > 0 ? (
              <FactOrMyth items={session.factOrMyth} />
            ) : (
              <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-12 text-center text-slate-400">
                <BrainCircuit size={48} className="mx-auto mb-4 opacity-50" />
                <p>بازی تعاملی برای این جلسه در دسترس نیست.</p>
              </div>
            )}
            <div className="w-full flex justify-end mt-8">
              <button 
                onClick={() => setActiveTab('quiz')}
                className="px-6 py-2 bg-health-600 text-white rounded-lg hover:bg-health-700 transition-colors shadow-sm hover:shadow-md"
              >
                مرحله بعد: آزمون
              </button>
            </div>
          </div>
        )}

        {/* QUIZ */}
        {activeTab === 'quiz' && (
          <div className="animate-fade-in">
             <Quiz 
               questions={session.quiz} 
               onComplete={onComplete}
             />
             {isCompleted && (
                <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-fade-in-up">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full text-green-600 mb-3">
                    <CheckSquare size={24} />
                  </div>
                  <h4 className="text-green-800 font-bold text-lg mb-1">جلسه تکمیل شد!</h4>
                  <p className="text-green-700 text-sm">شما این جلسه را با موفقیت گذراندید.</p>
                </div>
             )}
          </div>
        )}

      </div>
      
      {/* Footer Contact Teaser */}
      {session.id === 17 && activeTab === 'content' && <Contact />}

    </div>
  );
};