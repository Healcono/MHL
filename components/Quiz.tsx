import React, { useState } from 'react';
import { Question } from '../types';
import { CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

interface QuizProps {
  questions: Question[];
  onComplete: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="text-center p-8 text-slate-500 bg-slate-50 rounded-lg">
        آزمونی برای این جلسه تعریف نشده است.
      </div>
    );
  }

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    if (userAnswers.includes(-1)) {
      alert("لطفاً به تمام سوالات پاسخ دهید.");
      return;
    }
    setSubmitted(true);
    
    // Calculate score
    const score = userAnswers.reduce((acc, ans, idx) => {
        return acc + (ans === questions[idx].correctIndex ? 1 : 0);
    }, 0);

    // Mark complete if score is > 50% (simple logic)
    if (score >= Math.ceil(questions.length / 2)) {
        onComplete();
    }
  };

  const resetQuiz = () => {
      setUserAnswers(new Array(questions.length).fill(-1));
      setSubmitted(false);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-health-900">آزمون ارزشیابی</h3>
          {!submitted && (
              <span className="text-sm text-slate-500">{userAnswers.filter(a => a !== -1).length} از {questions.length} پاسخ داده شده</span>
          )}
      </div>

      {questions.map((q, qIdx) => (
        <div key={q.id} className="bg-white border rounded-xl p-6 shadow-sm">
          <h4 className="font-bold text-lg mb-4 flex gap-2">
            <span className="text-health-500">{qIdx + 1}.</span> {q.text}
          </h4>
          <div className="space-y-3">
            {q.options.map((opt, oIdx) => {
              let btnClass = "w-full text-right p-4 rounded-lg border-2 transition-all flex items-center justify-between ";
              
              if (submitted) {
                 if (oIdx === q.correctIndex) {
                     btnClass += "bg-green-100 border-green-500 text-green-900";
                 } else if (userAnswers[qIdx] === oIdx && oIdx !== q.correctIndex) {
                     btnClass += "bg-red-50 border-red-300 text-red-900";
                 } else {
                     btnClass += "bg-slate-50 border-transparent text-slate-400 opacity-50";
                 }
              } else {
                 if (userAnswers[qIdx] === oIdx) {
                     btnClass += "bg-health-50 border-health-500 text-health-900";
                 } else {
                     btnClass += "bg-white border-slate-200 hover:bg-slate-50 text-slate-700";
                 }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelect(qIdx, oIdx)}
                  className={btnClass}
                  disabled={submitted}
                >
                  <span>{opt}</span>
                  {submitted && oIdx === q.correctIndex && <CheckCircle size={20} className="text-green-600" />}
                  {submitted && userAnswers[qIdx] === oIdx && oIdx !== q.correctIndex && <AlertCircle size={20} className="text-red-600" />}
                </button>
              );
            })}
          </div>
          
          {submitted && (
            <div className="mt-4 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm leading-6">
              <strong>توضیح:</strong> {q.explanation}
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-end pt-4">
        {!submitted ? (
             <button 
                onClick={handleSubmit}
                className="px-8 py-3 bg-health-700 text-white font-bold rounded-lg shadow hover:bg-health-800 transition-colors flex items-center gap-2"
             >
                ثبت پاسخ‌ها
             </button>
        ) : (
             <button 
                onClick={resetQuiz}
                className="px-8 py-3 bg-slate-600 text-white font-bold rounded-lg shadow hover:bg-slate-700 transition-colors flex items-center gap-2"
             >
                <ArrowLeft size={18} />
                آزمون مجدد
             </button>
        )}
      </div>
    </div>
  );
};