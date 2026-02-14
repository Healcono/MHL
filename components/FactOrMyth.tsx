import React, { useState } from 'react';
import { FactMythItem } from '../types';
import { Check, X, HelpCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

interface Props {
  items: FactMythItem[];
}

export const FactOrMyth: React.FC<Props> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleGuess = (guessIsFact: boolean) => {
    const currentItem = items[currentIndex];
    const isCorrect = guessIsFact === currentItem.isFact;

    setFeedback(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) setScore(s => s + 1);

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex < items.length - 1) {
        setCurrentIndex(c => c + 1);
      } else {
        setFinished(true);
      }
    }, 2500);
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setFinished(false);
    setFeedback(null);
  };

  if (finished) {
    return (
      <div className="bg-gradient-to-br from-health-50 to-emerald-50 p-8 rounded-xl text-center border border-health-100 animate-fade-in">
        <h3 className="text-2xl font-bold text-health-900 mb-4">پایان بازی!</h3>
        <p className="text-lg text-health-700 mb-6">
          امتیاز شما: <span className="font-bold text-2xl">{score}</span> از {items.length}
        </p>
        <button 
          onClick={resetGame}
          className="px-6 py-2 bg-health-600 text-white rounded-lg hover:bg-health-700 transition shadow-lg shadow-health-200"
        >
          شروع مجدد
        </button>
      </div>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden min-h-[300px] flex flex-col">
        {/* Progress Bar */}
        <div className="h-2 bg-slate-100 w-full">
          <div 
            className="h-full bg-health-500 transition-all duration-300"
            style={{ width: `${((currentIndex) / items.length) * 100}%` }}
          />
        </div>

        <div className="flex-1 p-8 flex flex-col items-center justify-center text-center animate-fade-in">
          <div className="mb-6">
            <span className="bg-health-100 text-health-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              سوال {currentIndex + 1} از {items.length}
            </span>
          </div>
          
          <h4 className="text-xl md:text-2xl font-bold text-slate-800 leading-normal mb-8">
            {currentItem.statement}
          </h4>

          {feedback === null ? (
            <div className="flex gap-4 w-full max-w-md justify-center">
              <button
                onClick={() => handleGuess(true)}
                className="flex-1 py-4 px-6 bg-emerald-50 border-2 border-emerald-200 text-emerald-700 rounded-xl hover:bg-emerald-100 hover:border-emerald-300 transition flex flex-col items-center gap-2"
              >
                <ThumbsUp size={24} />
                <span className="font-bold">واقعیت است</span>
              </button>
              <button
                onClick={() => handleGuess(false)}
                className="flex-1 py-4 px-6 bg-rose-50 border-2 border-rose-200 text-rose-700 rounded-xl hover:bg-rose-100 hover:border-rose-300 transition flex flex-col items-center gap-2"
              >
                <ThumbsDown size={24} />
                <span className="font-bold">شایعه است</span>
              </button>
            </div>
          ) : (
            <div className={`w-full p-4 rounded-xl border ${feedback === 'correct' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} animate-fade-in-up`}>
              <div className="flex items-center justify-center gap-2 mb-2 font-bold text-lg">
                {feedback === 'correct' ? (
                  <span className="text-green-600 flex items-center gap-2"><Check /> صحیح!</span>
                ) : (
                  <span className="text-red-600 flex items-center gap-2"><X /> اشتباه!</span>
                )}
              </div>
              <p className="text-slate-700 text-sm">{currentItem.explanation}</p>
              <div className="mt-4 text-xs text-slate-400">سوال بعدی در حال بارگذاری...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};