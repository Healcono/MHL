
import { createIcons, GraduationCap, Circle, CircleDot, Mail, Instagram, Menu, X, CheckCircle2, AlertCircle, Camera, Music, Target, Lightbulb, HelpCircle } from 'lucide';

// --- DATA: Sessions Content ---
const sessions = [
  {
    id: 1,
    title: "پارادایم نوین سلامت در عصر دیجیتال",
    description: "کاوشی در تلاقی رسانه و سلامت؛ از سواد سنتی تا مدیریت بحران‌های اطلاعاتی (اینفودمیک).",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=1000",
    videoUrl: null,
    content: `
      <div class="space-y-12 animate-fade text-justify leading-loose">
        
        <!-- Introduction -->
        <section class="border-r-4 border-nude-900 pr-6">
          <h3 class="text-2xl font-black text-nude-950 mb-4">مقدمه: عبور از مرزهای سنتی</h3>
          <p class="text-slate-600 text-lg">
            در دهه‌های گذشته، سواد سلامت تنها به توانایی خواندن نسخه‌ها یا درک دستورالعمل‌های ساده پزشک محدود می‌شد. اما با ظهور عصر دیجیتال، مفهوم جدیدی به نام <span class="font-bold text-nude-800">سواد سلامت رسانه‌ای (Media Health Literacy)</span> متولد شده است. امروزه رسانه‌ها فقط ناقل پیام نیستند، بلکه سازنده واقعیت‌های ذهنی ما درباره بیماری و سلامت هستند.
          </p>
        </section>

        <!-- Why Media Expert? -->
        <section class="bg-white p-8 rounded-[2.5rem] border border-nude-100 shadow-sm">
          <h3 class="text-xl font-bold text-nude-900 mb-4 flex items-center gap-2">
            <span class="w-8 h-8 bg-nude-100 rounded-full flex items-center justify-center text-sm">۱</span>
            چرا پزشکِ آینده باید متخصص رسانه باشد؟
          </h3>
          <p class="text-slate-600">
            بیمارِ امروز، پیش از ملاقات با متخصص، در «اتاق‌های انتظار مجازی» و شبکه‌های اجتماعی با انبوهی از داده‌ها مواجه شده است. این داده‌ها لزوماً علمی نیستند و می‌توانند روند درمان را مختل کنند. سواد سلامت رسانه‌ای یعنی مهارتِ واکاوی نقادانه‌ی پیام‌هایی که از فیلتر رسانه‌ها عبور کرده‌اند.
          </p>
        </section>

        <!-- Infodemic Section -->
        <section>
          <h3 class="text-xl font-bold text-nude-900 mb-6 flex items-center gap-2">
            <span class="w-8 h-8 bg-nude-100 rounded-full flex items-center justify-center text-sm">۲</span>
            پدیده اینفودمیک (Infodemic) چیست؟
          </h3>
          <p class="mb-8">ترکیب «اطلاعات» و «اپیدمی»؛ شیوع بیش از حد اطلاعات (درست یا نادرست) که باعث سردرگمی جامعه می‌شود.</p>
          
          <div class="grid md:grid-cols-3 gap-4">
            <div class="p-6 bg-nude-50 rounded-3xl border border-nude-100 hover:shadow-md transition-shadow">
              <div class="text-2xl mb-3">📢</div>
              <h4 class="font-bold text-nude-900 mb-2">Mis-information</h4>
              <p class="text-xs text-slate-500 leading-6">اخبار غلطی که بدون نیت بد و صرفاً از روی ناآگاهی منتشر می‌شوند (مثل بازنشر دلسوزانه یک داروی گیاهی تایید نشده).</p>
            </div>
            <div class="p-6 bg-nude-100/50 rounded-3xl border border-nude-200 hover:shadow-md transition-shadow">
              <div class="text-2xl mb-3">🎯</div>
              <h4 class="font-bold text-nude-900 mb-2">Dis-information</h4>
              <p class="text-xs text-slate-500 leading-6">اطلاعات غلطی که به عمد و با هدف فریب دادن، کسب درآمد یا ایجاد هراس تولید می‌شوند.</p>
            </div>
            <div class="p-6 bg-nude-900 text-white rounded-3xl hover:shadow-md transition-shadow">
              <div class="text-2xl mb-3">⚔️</div>
              <h4 class="font-bold mb-2 text-nude-50">Mal-information</h4>
              <p class="text-xs text-nude-50 leading-6 font-medium">اطلاعات درستی که برای آسیب زدن به اعتبار یک شخص یا نهاد علمی منتشر می‌شوند.</p>
            </div>
          </div>
        </section>

        <!-- Quiz Section -->
        <section class="bg-white p-10 rounded-[3rem] border-2 border-nude-100 shadow-xl shadow-nude-100/20">
          <div class="flex items-center gap-3 mb-8">
            <div class="p-2 bg-emerald-50 text-emerald-600 rounded-xl"><i data-lucide="help-circle"></i></div>
            <h3 class="text-2xl font-black text-nude-950">خودارزیابی جلسه اول</h3>
          </div>

          <div class="quiz-item space-y-6">
            <p class="text-lg font-bold text-slate-800">پرسش: آیا تکرار یک خبر در چندین کانال مختلف، نشان‌دهنده صحت آن است؟</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button onclick="window.checkQuiz(this, false, 'اشتباه! در روانشناسی رسانه پدیده‌ای به نام «اثر حقیقت واهی» وجود دارد. تکرار زیاد، دروغ را به حقیقت تبدیل نمی‌کند.')" class="quiz-btn w-full p-5 text-right border-2 border-nude-50 rounded-2xl hover:bg-nude-50 transition-all font-medium">بله، تکرار نشانه تایید عمومی است.</button>
              <button onclick="window.checkQuiz(this, true, 'آفرین! مغز ما تمایل دارد چیزی را که بیشتر می‌شنود، راحت‌تر باور کند (اثر حقیقت واهی)، حتی اگر کاملاً غیرعلمی باشد.')" class="quiz-btn w-full p-5 text-right border-2 border-nude-50 rounded-2xl hover:bg-nude-50 transition-all font-medium">خیر، تکرار صرفاً یک خطای شناختی است.</button>
            </div>
            <div class="feedback hidden p-5 rounded-2xl text-sm leading-7"></div>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 2,
    title: "پشت پرده پیام‌ها؛ چه کسی و چگونه؟",
    description: "درک ساختار پیام‌های رسانه‌ای و آشنایی با تکنیک‌های اقناع در تبلیغات سلامت.",
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.aparat.com/video/video/embed/videohash/a2769/vt/frame",
    content: `
      <div class="space-y-16 animate-fade text-justify leading-loose">
        
        <!-- Section 1 -->
        <section>
          <div class="flex items-center gap-4 mb-8">
            <span class="w-12 h-12 bg-nude-900 text-white rounded-2xl flex items-center justify-center font-black text-xl">۰۱</span>
            <h3 class="text-2xl font-black text-nude-950">اصل اول: رسانه «ساختگی» است</h3>
          </div>
          <p class="text-lg text-slate-600 mb-8">پیام‌های رسانه‌ای مانند یک ساختمان ساخته می‌شوند. قطعاتی انتخاب می‌شوند و قطعاتی کنار گذاشته می‌شوند.</p>
          
          <div class="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-[3rem] border border-nude-100 shadow-sm items-center">
            <div class="md:w-1/3 rotate-2">
              <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500" class="rounded-3xl shadow-xl" alt="Ad burger">
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-nude-900 text-xl mb-4 italic">واقعیت پشتِ بیلبورد:</h4>
              <ul class="space-y-3 text-slate-500">
                <li class="flex items-start gap-2 text-sm"><span class="mt-1 w-2 h-2 bg-nude-400 rounded-full flex-shrink-0"></span> استفاده از مقوا برای لایه‌بندی همبرگر</li>
                <li class="flex items-start gap-2 text-sm"><span class="mt-1 w-2 h-2 bg-nude-400 rounded-full flex-shrink-0"></span> رنگ روغن برای براق کردن نان</li>
                <li class="flex items-start gap-2 text-sm"><span class="mt-1 w-2 h-2 bg-nude-400 rounded-full flex-shrink-0"></span> پنبه نسوز برای تولید دود مصنوعی</li>
              </ul>
              <div class="mt-6 p-4 bg-nude-50 rounded-xl text-nude-900 font-bold text-sm">نتیجه: آنچه می‌بینیم، واقعیت نیست؛ بلکه «بازنمایی» واقعیت است.</div>
            </div>
          </div>
        </section>

        <!-- Section 2 -->
        <section>
          <h3 class="text-2xl font-black text-nude-950 mb-10 text-center">تکنیک‌های اقناع (چطور ما را راضی می‌کنند؟)</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-8 bg-white border border-nude-100 rounded-[2.5rem] hover:bg-nude-50 transition-colors">
              <span class="text-4xl mb-4 block">😂</span>
              <h5 class="font-bold text-lg mb-2">تکنیک طنز</h5>
              <p class="text-sm text-slate-500">وقتی می‌خندیم، گارد دفاعی مغز ما باز می‌شود و پیام را راحت‌تر می‌پذیریم.</p>
            </div>
            <div class="p-8 bg-white border border-nude-100 rounded-[2.5rem] hover:bg-rose-50 transition-colors">
              <span class="text-4xl mb-4 block">⚠️</span>
              <h5 class="font-bold text-lg mb-2 text-rose-900">تکنیک ترس</h5>
              <p class="text-sm text-slate-500">«اگر این خمیردندان را نزنی، دندان‌هایت را از دست می‌دهی!» استفاده از غریزه بقا برای فروش محصول.</p>
            </div>
          </div>
        </section>

        <!-- Activities Zone -->
        <section class="bg-nude-950 text-white p-12 rounded-[4rem] shadow-2xl overflow-hidden relative">
          <div class="absolute top-0 left-0 w-32 h-32 bg-nude-900 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <h3 class="text-3xl font-black mb-12 flex items-center gap-4">
            <div class="p-3 bg-nude-900 rounded-2xl"><i data-lucide="target"></i></div>
            منطقه فعالیت و بازی‌های کلاسی
          </h3>
          
          <div class="space-y-8 relative z-10">
            <div class="group p-8 bg-nude-900 rounded-3xl border border-nude-800 transition-all hover:border-nude-400">
              <div class="flex items-center gap-4 mb-4">
                <i data-lucide="camera" class="text-nude-400 group-hover:scale-110 transition-transform"></i>
                <h4 class="text-xl font-bold text-white">بازی اول: کارگردانِ فریبکار</h4>
              </div>
              <p class="text-nude-50 text-sm leading-8 font-medium">ماموریت: گروه‌های ۳ نفره تشکیل دهید و یک وسیله بی‌ارزش (مثل لنگه جوراب) را به عنوان یک کالای لوکس در یک سناریوی ۳۰ ثانیه‌ای بفروشید!</p>
            </div>

            <div class="group p-8 bg-nude-900 rounded-3xl border border-nude-800 transition-all hover:border-nude-400">
              <div class="flex items-center gap-4 mb-4">
                <i data-lucide="music" class="text-nude-400 group-hover:scale-110 transition-transform"></i>
                <h4 class="text-xl font-bold text-white">بازی دوم: صداگذاری متفاوت</h4>
              </div>
              <p class="text-nude-50 text-sm leading-8 font-medium">روش: یک ویدیو را یکبار با موسیقی ترسناک و بار دوم با موسیقی خنده‌دار تماشا کنید. درک خواهید کرد که موسیقی چطور احساسات شما را مدیریت می‌کند.</p>
            </div>
          </div>
        </section>

        <!-- Quiz Section Session 2 -->
        <section class="bg-nude-50 p-10 rounded-[3rem] border-2 border-nude-100">
          <h3 class="text-2xl font-black text-nude-950 mb-8">آزمون کوتاه جلسه دوم</h3>
          <div class="quiz-item space-y-6">
            <p class="text-lg font-bold text-slate-800">پرسش: چرا بلاگرها همیشه در حال خوردن غذاهای لوکس یا سفر هستند؟</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button onclick="window.checkQuiz(this, true, 'آفرین! آن‌ها فقط «لحظات طلایی» را تدوین می‌کنند و بخش‌های خسته‌کننده زندگی را حذف می‌کنند. این یک پیام ساخته شده است.')" class="quiz-btn w-full p-5 text-right border-2 border-white bg-white rounded-2xl hover:bg-nude-100 transition-all font-medium">چون آن‌ها فقط بخش‌های گلچین شده (Highlight) را نمایش می‌دهند.</button>
              <button onclick="window.checkQuiz(this, false, 'خیر! هیچ‌کس زندگی ۱۰۰٪ بی نقصی ندارد. آنچه می‌بینید یک تدوین رسانه‌ای است.')" class="quiz-btn w-full p-5 text-right border-2 border-white bg-white rounded-2xl hover:bg-nude-100 transition-all font-medium">چون زندگی آن‌ها واقعاً و در تمام لحظات همین‌قدر عالی است.</button>
            </div>
            <div class="feedback hidden p-5 rounded-2xl text-sm leading-7"></div>
          </div>
        </section>
      </div>
    `
  },
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 3,
    title: `جلسه ${i + 3}: در حال تدوین`,
    description: "محتوای این جلسه به زودی توسط تیم آموزشی بارگذاری خواهد شد.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000",
    videoUrl: null,
    content: `<div class='py-32 text-center text-nude-300 font-bold'>محتوای این جلسه در دسترس نیست.</div>`
  }))
];

// --- APP STATE ---
let currentSessionId = 1;

// --- CORE RENDER FUNCTION ---
function renderApp() {
    const session = sessions.find(s => s.id === currentSessionId) || sessions[0];
    
    // 1. Render Sidebar List
    const listArea = document.getElementById('session-list');
    if (listArea) {
        listArea.innerHTML = sessions.map(s => {
            const isActive = s.id === currentSessionId;
            return `
                <button onclick="window.appNavigateTo(${s.id})" class="w-full text-right px-6 py-4 flex items-start gap-4 transition-all border-r-4 ${isActive ? 'bg-nude-50/80 border-nude-700 text-nude-950' : 'border-transparent text-nude-400 hover:bg-nude-50/30 hover:text-nude-600'}">
                    <div class="mt-1">
                        <i data-lucide="${isActive ? 'circle-dot' : 'circle'}" class="w-4 h-4"></i>
                    </div>
                    <div>
                        <div class="text-[10px] font-black opacity-40 uppercase tracking-widest">بخش ${s.id}</div>
                        <div class="text-sm font-bold leading-snug">${s.title}</div>
                    </div>
                </button>
            `;
        }).join('');
    }

    // 2. Render Main Content
    const displayArea = document.getElementById('session-content');
    if (displayArea) {
        const videoHTML = session.videoUrl ? `
            <div class="aparat-container mb-12">
                <iframe src="${session.videoUrl}" allowFullScreen="true"></iframe>
            </div>
        ` : '';

        displayArea.innerHTML = `
            <div class="animate-fade">
                <!-- Hero Section -->
                <div class="relative h-72 md:h-96 bg-nude-100 overflow-hidden">
                    <img src="${session.imageUrl}" class="w-full h-full object-cover scale-110 motion-safe:animate-slow-zoom opacity-80">
                    <div class="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="px-3 py-1 bg-nude-950 text-white text-[10px] font-black rounded-full uppercase tracking-tighter">Educational Module ${session.id}</span>
                            <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        </div>
                        <h1 class="text-4xl md:text-6xl font-black text-nude-950 tracking-tighter leading-tight drop-shadow-sm">${session.title}</h1>
                        <p class="text-nude-800 mt-4 text-xl font-medium max-w-3xl leading-relaxed">${session.description}</p>
                    </div>
                </div>

                <!-- Content Body -->
                <div class="p-8 md:p-16 max-w-5xl mx-auto bg-white rounded-t-[4rem] -mt-10 relative z-10 shadow-2xl">
                    ${videoHTML}
                    <div class="raw-content-area">
                        ${session.content}
                    </div>
                </div>
            </div>
        `;
    }

    // 3. Update Progress Stats
    const percent = Math.round((currentSessionId / sessions.length) * 100);
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    const counter = document.getElementById('session-counter');
    
    if (progressText) progressText.innerText = `میزان پیشرفت: ${percent}%`;
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (counter) counter.innerText = `جلسه ${currentSessionId}`;

    // 4. Re-initialize Icons
    createIcons({
        icons: { GraduationCap, Circle, CircleDot, Mail, Instagram, Menu, X, CheckCircle2, AlertCircle, Camera, Music, Target, Lightbulb, HelpCircle }
    });
}

// --- GLOBAL HELPERS (Attached to Window for HTML onClick) ---
window.checkQuiz = (btn, isCorrect, explanation) => {
    const parent = btn.closest('.quiz-item');
    if (!parent) return;
    
    const feedback = parent.querySelector('.feedback');
    const buttons = parent.querySelectorAll('.quiz-btn');
    
    buttons.forEach(b => {
        b.disabled = true;
        b.classList.add('opacity-40');
    });

    btn.classList.remove('opacity-40');
    btn.classList.add(isCorrect ? 'bg-emerald-50' : 'bg-rose-50', isCorrect ? 'border-emerald-500' : 'border-rose-500');
    
    feedback.classList.remove('hidden');
    feedback.classList.add(isCorrect ? 'bg-emerald-50' : 'bg-rose-50', isCorrect ? 'text-emerald-800' : 'text-rose-800');
    feedback.innerHTML = `
        <div class="flex items-start gap-3">
            <span class="text-lg">${isCorrect ? '✅' : '❌'}</span>
            <div>
                <strong class="block mb-1 font-black">${isCorrect ? 'پاسخ صحیح!' : 'پاسخ نادرست'}</strong>
                ${explanation}
            </div>
        </div>
    `;
};

window.appNavigateTo = (id) => {
    currentSessionId = id;
    renderApp();
    const main = document.querySelector('main');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.innerWidth < 1024) window.toggleSidebar();
};

window.toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('translate-x-full');
        overlay.classList.toggle('hidden');
    }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Check URL params for deep linking (e.g. ?id=2)
    const params = new URLSearchParams(window.location.search);
    const idParam = parseInt(params.get('id'));
    if (idParam && sessions.find(s => s.id === idParam)) {
        currentSessionId = idParam;
    }
    
    renderApp();
});
