import React from 'react';
import { Mail, Instagram, Globe } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="mt-16 bg-gradient-to-r from-health-900 to-health-800 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl animate-fade-in">
      <h3 className="text-2xl font-bold mb-4">ارتباط با مدرس دوره</h3>
      <p className="text-health-50 mb-8 max-w-xl mx-auto opacity-90">
        برای پرسش و پاسخ، دریافت منابع تکمیلی و مشاوره در زمینه سواد سلامت رسانه‌ای با ما در ارتباط باشید.
        <br/>
        <strong className="text-white mt-2 block text-lg">Dr. Fatemeh Zarei</strong>
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <a href="mailto:healcono@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm border border-white/10 shadow-sm hover:shadow-md">
          <Mail size={20} className="text-health-200" />
          <span>healcono@gmail.com</span>
        </a>
        <a href="https://instagram.com/healthcono" className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm border border-white/10 shadow-sm hover:shadow-md">
          <Instagram size={20} className="text-pink-300" />
          <span>@healthcono</span>
        </a>
      </div>
      
      <div className="mt-8 pt-8 border-t border-health-700/50 text-xs text-health-200">
        © 2024 Media Health Literacy Course. All rights reserved.
      </div>
    </div>
  );
};