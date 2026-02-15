
import { createIcons, GraduationCap, Circle, CircleDot, Mail, Instagram, Menu, X, CheckCircle2, AlertCircle, Camera, Music, Target, Users } from 'lucide';

declare global {
  interface Window {
    appNavigateTo: (id: number) => void;
    toggleSidebar: () => void;
    checkQuiz: (btn: HTMLElement, isCorrect: boolean, explanation: string) => void;
  }
}

// Added videoUrl to session objects to fix type inference errors
const sessions = [
  {
    id: 1,
    title: "پارادایم جدید در سلامت عمومی",
    description: "کاوشی در تلاقی رسانه و سلامت؛ از سواد سنتی تا مدیریت بحران‌های اطلاعاتی (اینفودمیک).",
    videoUrl: undefined as string | undefined,
    content: `
      <div class="space-y-16 text-justify leading-loose text-slate-700 animate-fade-in">
        <section>
          <div class="flex items-center gap-4 mb-8">
            <span class="w-12 h-12 rounded-2xl bg-nude-900 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-nude-200">۰۱</span>
            <h3 class="text-3xl font-black text-nude-950 tracking-tighter">تحول مفهوم سواد سلامت</h3>
          </div>
          <p class="text-lg text-slate-600 mb-6">
            در دهه‌های گذشته, سواد سلامت تنها به توانایی‌های پایه مانند خواندن برچسب داروها محدود می‌شد. اما در عصر نوین, ما با مفهومی به نام <span class="text-nude-800 font-black border-b-2 border-nude-200">سواد سلامت رسانه‌ای (MHL)</span> روبرو هستیم. 
          </p>
          <div class="bg-white border-2 border-nude-100 p-8 rounded-[2rem] shadow-sm relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-2 h-full bg-nude-400"></div>
            <h4 class="text-nude-900 font-black mb-3 text-xl italic">چرا پزشکِ آینده باید متخصص رسانه باشد؟</h4>
            <p class="text-slate-600 m-0 leading-relaxed text-lg">
              زیرا بیماران پیش از مراجعه به کلینیک, توسط <strong class="text-nude-800">«الگوریتم‌های شبکه‌های اجتماعی»</strong> ویزیت شده‌اند. عدم شناخت این فضا توسط کادر درمان, شکاف عمیقی در اعتماد بیمار ایجاد می‌کند.
            </p>
          </div>
        </section>

        <section>
          <div class="flex items-center gap-4 mb-8">
            <span class="w-12 h-12 rounded-2xl bg-nude-900 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-nude-200">۰۲</span>
            <h3 class="text-3xl font-black text-nude-950 tracking-tighter">کالبدشکافی پدیده اینفودمیک</h3>
          </div>
          <p class="mb-10 text-lg">
            سازمان جهانی بهداشت (WHO) واژه <strong class="text-nude-900">Infodemic</strong> را ترکیبی از Information و Epidemic می‌داند. در یک بحران, سرعت انتشار اطلاعات غلط از خودِ ویروس بیشتر است.
          </p>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="p-8 rounded-[2.5rem] bg-nude-50 border border-nude-100 transition-all hover:scale-[1.02] hover:shadow-xl">
              <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">📢</div>
              <strong class="text-nude-950 text-xl block mb-3">Mis-information</strong>
              <p class="text-sm text-slate-500 leading-7">انتشار ناآگاهانه اطلاعات غلط. فرد گمان می‌کند در حال کمک به دیگران است.</p>
            </div>
            <div class="p-8 rounded-[2.5rem] bg-nude-100/50 border border-nude-200 transition-all hover:scale-[1.02] hover:shadow-xl">
              <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">🎯</div>
              <strong class="text-nude-950 text-xl block mb-3">Dis-information</strong>
              <p class="text-sm text-slate-500 leading-7">تولید هوشمندانه دروغ برای فریب, کسب درآمد یا اهداف سیاسی.</p>
            </div>
            <div class="p-8 rounded-[2.5rem] bg-nude-900 text-nude-50 transition-all hover:scale-[1.02] hover:shadow-xl shadow-lg shadow-nude-200">
              <div class="w-14 h-14 bg-nude-800 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">⚔️</div>
              <strong class="text-white text-xl block mb-3">Mal-information</strong>
              <p class="text-sm text-nude-200/80 leading-7">استفاده از اطلاعات واقعی برای آسیب زدن به یک شخص یا نهاد علمی.</p>
            </div>
          </div>
        </section>

        <section class="bg-white border-2 border-nude-100 p-10 rounded-[3rem] shadow-2xl shadow-nude-100/50">
          <div class="flex items-center gap-4 mb-10">
             <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                <i data-lucide="check-circle-2"></i>
             </div>
             <h3 class="text-2xl font-black text-nude-950">کوییز تعاملی (سنجش آنی)</h3>
          </div>
          
          <div class="space-y-10">
            <div class="quiz-item">
              <p class="text-xl font-bold text-slate-800 mb-6">۱. آیا تکرار یک خبر در چندین کانال مختلف نشانه صحت آن است؟</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onclick="window.checkQuiz(this, false, 'اشتباه است! این خطای شناختی «اثر حقیقت واهی» نام دارد. تکرار, دروغ را تبدیل به حقیقت نمی‌کند.')" class="p-5 text-right border-2 border-nude-50 rounded-2xl hover:bg-nude-50 transition-all font-medium">بله, تکرار نشانه تایید عمومی است.</button>
                <button onclick="window.checkQuiz(this, true, 'کاملاً صحیح! مغز ما تمایل دارد چیزی را که بیشتر می‌شنود راحت‌تر باور کند (اثر حقیقت واهی), حتی اگر غلط باشد.')" class="p-5 text-right border-2 border-nude-50 rounded-2xl hover:bg-nude-50 transition-all font-medium">خیر, این صرفاً یک خطای شناختی است.</button>
              </div>
              <div class="feedback mt-4 hidden p-4 rounded-xl text-sm"></div>
            </div>
          </div>
        </section>

        <footer class="pt-8 opacity-40 border-t border-nude-100 text-[10px] flex justify-between">
          <span>منابع: WHO - UNESCO Media Literacy 2024</span>
          <span>دوره تخصصی دکتر فاطمه زارعی</span>
        </footer>
      </div>
    `,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "پشت پرده پیام‌ها؛ چه کسی و چگونه؟",
    description: "درک ساختار پیام‌های رسانه‌ای و آشنایی با تکنیک‌های اقناع در تبلیغات سلامت.",
    videoUrl: "https://www.aparat.com/video/video/embed/videohash/a2769/vt/frame" as string | undefined,
    content: `
      <div class="space-y-16 text-justify leading-loose text-slate-700 animate-fade-in">
        
        <!-- Section 1: Construction -->
        <section>
          <div class="flex items-center gap-4 mb-8">
            <span class="w-12 h-12 rounded-2xl bg-nude-900 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-nude-200">۰۱</span>
            <h3 class="text-3xl font-black text-nude-950 tracking-tighter">اصل اول: رسانه «ساختگی» است</h3>
          </div>
          <p class="text-lg mb-8">هیچ پیامی در رسانه اتفاقی نیست. پیام‌ها مانند یک ساختمان آجر به آجر چیده می‌شوند. چیزهایی انتخاب می‌شوند تا دیده شوند و چیزهایی عمداً حذف می‌شوند.</p>
          
          <div class="bg-nude-50 border-2 border-nude-100 p-8 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center">
            <div class="md:w-1/3">
              <div class="bg-white p-4 rounded-3xl shadow-sm rotate-3">
                <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500" class="rounded-2xl" alt="Burger Ad">
                <div class="mt-4 text-[10px] text-center font-bold text-nude-400 uppercase">Representation vs Reality</div>
              </div>
            </div>
            <div class="flex-1">
              <h4 class="text-xl font-black text-nude-900 mb-4">مثال: همبرگر تبلیغاتی</h4>
              <p class="text-slate-600 leading-relaxed italic mb-4">آنچه در بیلبورد می‌بینید:</p>
              <ul class="space-y-3 text-sm">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-nude-400 rounded-full"></span> استفاده از <strong>مقوا</strong> برای لایه‌بندی و حجیم نشان دادن همبرگر.</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-nude-400 rounded-full"></span> استفاده از <strong>رنگ روغن</strong> برای براق و تازه نشان دادن نان.</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-nude-400 rounded-full"></span> استفاده از <strong>پنبه نسوز</strong> برای تولید دود مصنوعی به جای بخار واقعی.</li>
              </ul>
              <div class="mt-6 p-4 bg-white rounded-2xl border border-nude-200 text-sm font-bold text-nude-900">نتیجه: آنچه می‌بینیم, واقعیت نیست؛ بلکه «بازنمایی» (Representation) واقعیت است.</div>
            </div>
          </div>
        </section>

        <!-- Section 2: Persuasion Techniques -->
        <section>
          <div class="flex items-center gap-4 mb-10">
            <span class="w-12 h-12 rounded-2xl bg-nude-900 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-nude-200">۰۲</span>
            <h3 class="text-3xl font-black text-nude-950 tracking-tighter">تکنیک‌های اقناع</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="group p-8 bg-white border border-nude-100 rounded-[2.5rem] hover:bg-nude-950 hover:text-white transition-all duration-500 shadow-xl shadow-nude-100">
               <span class="text-4xl mb-6 block grayscale group-hover:grayscale-0">😂</span>
               <h5 class="text-xl font-bold mb-3">تکنیک طنز</h5>
               <p class="text-sm opacity-70 leading-7">وقتی می‌خندیم, گارد دفاعی مغز ما باز می‌شود و پیام را بدون نقدِ علمی, راحت‌تر می‌پذیریم.</p>
            </div>
            <div class="group p-8 bg-white border border-nude-100 rounded-[2.5rem] hover:bg-rose-600 hover:text-white transition-all duration-500 shadow-xl shadow-nude-100">
               <span class="text-4xl mb-6 block grayscale group-hover:grayscale-0">⚠️</span>
               <h5 class="text-xl font-bold mb-3">تکنیک ترس</h5>
               <p class="text-sm opacity-70 leading-7">«اگر این محصول را نخری, سلامتی‌ات در خطر است!» استفاده از غریزه بقا برای فروش سریع.</p>
            </div>
            <div class="group p-8 bg-white border border-nude-100 rounded-[2.5rem] hover:bg-indigo-600 hover:text-white transition-all duration-500 shadow-xl shadow-nude-100">
               <span class="text-4xl mb-6 block grayscale group-hover:grayscale-0">🌟</span>
               <h5 class="text-xl font-bold mb-3">تکنیک تداعی</h5>
               <p class="text-sm opacity-70 leading-7">گره زدن یک سلبریتی محبوب به یک کالا. مغز محبوبیت شخص را به کیفیت محصول تعمیم می‌دهد.</p>
            </div>
            <div class="group p-8 bg-white border border-nude-100 rounded-[2.5rem] hover:bg-emerald-600 hover:text-white transition-all duration-500 shadow-xl shadow-nude-100">
               <span class="text-4xl mb-6 block grayscale group-hover:grayscale-0">💬</span>
               <h5 class="text-xl font-bold mb-3">تکنیک گواهی گرفتن</h5>
               <p class="text-sm opacity-70 leading-7">استفاده از افراد معمولی که می‌گویند: «من هم مثل شما بودم و این محصول معجزه کرد.»</p>
            </div>
          </div>
        </section>

        <!-- Section 3: Activities Zone -->
        <section class="bg-nude-950 text-white p-12 rounded-[4rem] shadow-2xl">
          <h3 class="text-3xl font-black mb-12 flex items-center gap-4">
            <span class="p-3 bg-nude-800 rounded-2xl"><i data-lucide="target" class="w-6 h-6"></i></span>
            منطقه فعالیت و بازی (Activity Zone)
          </h3>
          
          <div class="space-y-8">
            <div class="p-8 bg-nude-900 rounded-3xl border border-nude-800 hover:border-nude-700 transition-colors">
              <div class="flex items-center gap-4 mb-4">
                <i data-lucide="camera" class="text-nude-400"></i>
                <h4 class="text-xl font-bold">بازی اول: کارگردانِ فریبکار</h4>
              </div>
              <p class="text-nude-300 text-sm leading-8">کلاس را به گروه‌های ۳ نفره تقسیم کنید. یک وسیله بی‌ارزش (مثل سنگ یا لنگه جوراب) به آن‌ها بدهید. ماموریت: نوشتن سناریوی ۳۰ ثانیه‌ای برای فروش آن به عنوان یک کالای لوکس!</p>
            </div>

            <div class="p-8 bg-nude-900 rounded-3xl border border-nude-800 hover:border-nude-700 transition-colors">
              <div class="flex items-center gap-4 mb-4">
                <i data-lucide="music" class="text-nude-400"></i>
                <h4 class="text-xl font-bold">بازی دوم: صداگذاری متفاوت</h4>
              </div>
              <p class="text-nude-300 text-sm leading-8">یک ویدیوی طبیعت را یک بار با موسیقی ترسناک و بار دوم با موسیقی کلاسیک آرام ببینید. چه تغییری در احساس شما نسبت به حیوانِ درون ویدیو ایجاد شد؟</p>
            </div>
          </div>
        </section>

        <!-- Section 4: Practical Cases -->
        <section>
           <h3 class="text-2xl font-black text-nude-950 mb-8 tracking-tighter">تحلیل نمونه‌های واقعی</h3>
           <div class="grid md:grid-cols-2 gap-8">
              <div class="p-8 bg-white border border-nude-100 rounded-3xl">
                <h4 class="font-bold text-rose-600 mb-3 flex items-center gap-2">📱 کات‌های اینستاگرامی</h4>
                <p class="text-sm text-slate-500 leading-7">بلاگرها فقط «لحظات طلایی» را تدوین می‌کنند. کارهای سخت و تکراری حذف می‌شوند. این یک «پیام ساخته شده» است, نه تمامِ زندگی.</p>
              </div>
              <div class="p-8 bg-white border border-nude-100 rounded-3xl">
                <h4 class="font-bold text-blue-600 mb-3 flex items-center gap-2">📰 جادوی کلمات در خبر</h4>
                <p class="text-sm text-slate-500 leading-7">تفاوت «تجمع چند نفر» با «حضور پرشور مردم»؛ واقعیت یکی است اما انتخاب کلمات, احساس شما را مدیریت می‌کند.</p>
              </div>
           </div>
        </section>

        <!-- Quiz 2 -->
        <section class="bg-nude-50 border-2 border-nude-200 p-10 rounded-[3rem]">
           <h3 class="text-2xl font-black text-nude-950 mb-10">ارزشیابی جلسه دوم</h3>
           <div class="quiz-item">
              <p class="text-xl font-bold text-slate-800 mb-6">در تبلیغات, گره زدن یک نوشابه به یک قهرمان ورزشی از کدام تکنیک استفاده می‌کند؟</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onclick="window.checkQuiz(this, true, 'درست است! این تکنیک تداعی (Association) نام دارد.')" class="p-5 text-right border-2 border-white bg-white rounded-2xl hover:bg-nude-100 transition-all font-medium">تکنیک تداعی</button>
                <button onclick="window.checkQuiz(this, false, 'اشتباه است. طنز باعث خنده می‌شود, اما اینجا هدف انتقال محبوبیتِ شخص به کالا است.')" class="p-5 text-right border-2 border-white bg-white rounded-2xl hover:bg-nude-100 transition-all font-medium">تکنیک طنز</button>
              </div>
              <div class="feedback mt-4 hidden p-4 rounded-xl text-sm"></div>
           </div>
        </section>

        <section class="p-10 border-2 border-dashed border-nude-200 rounded-[3rem] text-center">
           <h4 class="font-black text-nude-900 mb-2">🏠 تکلیف منزل:</h4>
           <p class="text-slate-500 text-sm italic">یک تبلیغ تلویزیونی را انتخاب کنید و بنویسید برای اینکه «صادقانه‌تر» باشد, چه بخشی را باید به آن اضافه می‌کردند؟</p>
        </section>

        <footer class="pt-8 opacity-40 border-t border-nude-100 text-[10px] flex justify-between">
          <span>Module 2: Media Construction</span>
          <span>دکتر فاطمه زارعی</span>
        </footer>
      </div>
    `,
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1000"
  },
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 3,
    title: `جلسه ${i + 3}: در حال تدوین`,
    description: "محتوای این جلسه به زودی توسط تیم آموزشی بارگذاری خواهد شد.",
    videoUrl: undefined as string | undefined,
    content: `<div class='py-32 text-center text-nude-300 font-bold'>محتوای این جلسه در دسترس نیست.</div>`,
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000"
  }))
];

let currentSessionId = 1;

function renderApp() {
    const session = sessions.find(s => s.id === currentSessionId) || sessions[0];
    
    const listArea = document.getElementById('session-list');
    if (listArea) {
        listArea.innerHTML = sessions.map(s => {
            const isActive = s.id === currentSessionId;
            return `
                <button onclick="window.appNavigateTo(${s.id})" class="w-full text-right px-6 py-4 flex items-start gap-4 transition-all border-r-4 ${isActive ? 'active-session bg-nude-50/80' : 'border-transparent text-nude-400 hover:bg-nude-50/30 hover:text-nude-600'}">
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

    const displayArea = document.getElementById('main-display-area');
    if (displayArea) {
        const videoHTML = session.videoUrl ? `
            <div class="aparat-container">
                <iframe src="${session.videoUrl}" allowFullScreen="true"></iframe>
            </div>
        ` : '';

        displayArea.innerHTML = `
            <div class="animate-fade">
                <div class="relative h-72 md:h-96 bg-nude-100 overflow-hidden">
                    <img src="${session.imageUrl}" class="w-full h-full object-cover scale-110 motion-safe:animate-slow-zoom">
                    <div class="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="px-3 py-1 bg-nude-950 text-white text-[10px] font-black rounded-full uppercase tracking-tighter shadow-xl">Module ${session.id}</span>
                            <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        </div>
                        <h1 class="text-4xl md:text-6xl font-black text-nude-950 tracking-tighter leading-tight drop-shadow-sm">${session.title}</h1>
                        <p class="text-nude-800 mt-4 text-xl font-medium max-w-3xl leading-relaxed">${session.description}</p>
                    </div>
                </div>

                <div class="p-8 md:p-16 max-w-5xl mx-auto">
                    ${videoHTML}
                    <div class="raw-content-area">
                        ${session.content}
                    </div>
                </div>
            </div>
        `;
    }

    const percent = Math.round((currentSessionId / sessions.length) * 100);
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    const counter = document.getElementById('session-counter');
    
    if (progressText) progressText.innerText = `LEARNING PROGRESS: ${percent}%`;
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (counter) counter.innerText = `جلسه ${currentSessionId}`;

    createIcons({
        icons: { GraduationCap, Circle, CircleDot, Mail, Instagram, Menu, X, CheckCircle2, AlertCircle, Camera, Music, Target, Users }
    });
}

window.checkQuiz = (btn: HTMLElement, isCorrect: boolean, explanation: string) => {
    const parent = btn.closest('.quiz-item');
    if (!parent) return;
    
    const feedback = parent.querySelector('.feedback') as HTMLElement;
    const buttons = parent.querySelectorAll('button');
    
    buttons.forEach(b => {
        b.disabled = true;
        b.classList.add('opacity-50');
    });

    btn.classList.remove('opacity-50');
    btn.classList.add(isCorrect ? 'bg-emerald-50' : 'bg-rose-50', isCorrect ? 'border-emerald-500' : 'border-rose-500');
    
    feedback.classList.remove('hidden');
    feedback.classList.add(isCorrect ? 'bg-emerald-50' : 'bg-rose-50', isCorrect ? 'text-emerald-800' : 'text-rose-800');
    feedback.innerHTML = `
        <div class="flex items-start gap-3">
            <span class="text-lg">${isCorrect ? '✅' : '❌'}</span>
            <div>
                <strong class="block mb-1">${isCorrect ? 'پاسخ صحیح!' : 'پاسخ نادرست'}</strong>
                ${explanation}
            </div>
        </div>
    `;
};

window.appNavigateTo = (id: number) => {
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

document.addEventListener('DOMContentLoaded', renderApp);
renderApp();
