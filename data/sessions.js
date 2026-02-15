export const sessions = [
  {
    id: 1,
    title: "پارادایم جدید در سلامت عمومی",
    description: "کاوشی در تلاقی رسانه و سلامت؛ از سواد سنتی تا مدیریت بحران‌های اطلاعاتی (اینفودمیک).",
    content: `
      <div class="space-y-12 text-justify leading-loose text-slate-700 animate-fade-in">
        
        <section>
          <h3 class="text-2xl font-bold text-nude-900 mb-6 flex items-center gap-2 border-b border-nude-200 pb-2">
            ۱. تحول مفهوم سواد سلامت
          </h3>
          <p class="mb-4">
            در پارادایم سنتی، <strong>سواد سلامت (Health Literacy)</strong> تنها به توانایی‌های پایه مانند خواندن برچسب داروها یا درک دستورات پزشک محدود می‌شد. اما در عصر نوین، ما با مفهومی به نام <span class="text-nude-700 font-bold">سواد سلامت رسانه‌ای (MHL)</span> روبرو هستیم.
          </p>
          <p>
            این مهارت به معنای توانایی دسترسی، تحلیل، ارزیابی و انتقال پیام‌های سلامتی در اشکال مختلف رسانه‌ای است. دانشجویان علوم پزشکی باید درک کنند که در دنیای امروز، «رسانه» فقط ناقل خبر نیست، بلکه «سازنده» رفتار سلامت در جامعه است.
          </p>
        </section>

        <div class="bg-nude-50 border-r-8 border-nude-400 p-8 rounded-2xl shadow-sm">
          <h4 class="text-nude-900 font-bold mb-3 text-lg italic">چرا پزشکِ آینده باید متخصص رسانه باشد؟</h4>
          <p class="text-nude-800 m-0 leading-relaxed">
            زیرا بیماران پیش از مراجعه به کلینیک، توسط «الگوریتم‌های شبکه‌های اجتماعی» ویزیت شده‌اند. عدم شناخت این فضا، شکاف عمیقی بین درمانگر و بیمار ایجاد می‌کند.
          </p>
        </div>

        <section>
          <h3 class="text-2xl font-bold text-nude-900 mb-6">۲. کالبدشکافی پدیده اینفودمیک</h3>
          <p class="mb-6">
            سازمان جهانی بهداشت (WHO) واژه <strong>Infodemic</strong> را ترکیبی از Information و Epidemic می‌داند. در یک بحران سلامتی، سرعت انتشار اطلاعات غلط گاهی از خودِ ویروس بیشتر است.
          </p>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="group hover:bg-white p-6 rounded-2xl border border-nude-100 transition-all shadow-sm">
              <span class="text-3xl mb-4 block">📢</span>
              <strong class="text-slate-900 block mb-2">Mis-information</strong>
              <p class="text-xs text-slate-500">انتشار ناآگاهانه اطلاعات غلط. فرد گمان می‌کند در حال کمک به دیگران است.</p>
            </div>
            <div class="group hover:bg-white p-6 rounded-2xl border border-nude-100 transition-all shadow-sm">
              <span class="text-3xl mb-4 block">🎯</span>
              <strong class="text-slate-900 block mb-2">Dis-information</strong>
              <p class="text-xs text-slate-500">تولید هوشمندانه دروغ برای فریب، کسب درآمد یا اهداف سیاسی و ضد سلامت.</p>
            </div>
            <div class="group hover:bg-white p-6 rounded-2xl border border-nude-100 transition-all shadow-sm">
              <span class="text-3xl mb-4 block">⚔️</span>
              <strong class="text-slate-900 block mb-2">Mal-information</strong>
              <p class="text-xs text-slate-500">استفاده از اطلاعات واقعی برای آسیب زدن به یک شخص، نهاد یا اعتبار علمی.</p>
            </div>
          </div>
        </section>

        <section class="bg-white border-2 border-nude-100 p-8 rounded-3xl">
          <h3 class="text-xl font-bold text-nude-900 mb-6 flex items-center gap-2">
             <span class="bg-nude-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">؟</span>
             خودارزیابی و پرسش‌های کلیدی
          </h3>
          
          <div class="space-y-6">
            <div class="border-b border-nude-50 pb-4">
              <p class="font-bold text-slate-800 mb-2">پرسش ۱: آیا تکرار یک خبر در چندین کانال تلگرامی نشانه صحت آن است؟</p>
              <p class="text-nude-700 text-sm"><strong>پاسخ:</strong> خیر. این خطای شناختی «اثر حقیقت واهی» نام دارد. مغز ما تمایل دارد چیزی را که بیشتر می‌شنود، راحت‌تر باور کند، حتی اگر کاملاً غیرعلمی باشد.</p>
            </div>

            <div class="border-b border-nude-50 pb-4">
              <p class="font-bold text-slate-800 mb-2">پرسش ۲: اولین قدم در مواجهه با یک خبر جنجالی پزشکی چیست؟</p>
              <p class="text-nude-700 text-sm"><strong>پاسخ:</strong> بررسی منبع (Source) و تاریخ انتشار. بسیاری از شایعات، خبرهای قدیمی یا تحریف شده‌ای هستند که با تیترهای هیجانی بازنشر می‌شوند.</p>
            </div>
          </div>
        </section>

        <footer class="pt-8 opacity-60 border-t border-nude-100 text-xs">
          منابع: سازمان جهانی بهداشت (WHO) - یونسکو (Media Literacy 2024)
        </footer>
      </div>
    `,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "پشت پرده پیام‌ها؛ چه کسی و چگونه؟",
    description: "هدف درس: درک ساختار پیام‌های رسانه‌ای و آشنایی با تکنیک‌های اقناع.",
    videoUrl: "https://www.aparat.com/video/video/embed/videohash/a2769/vt/frame",
    content: `
      <div class="space-y-12 text-justify leading-loose text-slate-700">
        <section>
          <h3 class="text-2xl font-bold text-nude-900 mb-4 flex items-center gap-2">
            ۱. اصل اول: رسانه «ساختگی» است
          </h3>
          <p>
            اولین چیزی که باید بدانیم این است که پیام‌های رسانه‌ای (فیلم، خبر، پست اینستاگرام، تبلیغات) مانند یک ساختمان ساخته می‌شوند. قطعاتی انتخاب می‌شوند و قطعاتی کنار گذاشته می‌شوند.
          </p>
          <div class="bg-white border border-nude-200 p-6 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-center">
             <div class="flex-1">
                <h4 class="font-bold text-nude-700 mb-2">مثال واقعی: همبرگر تبلیغاتی</h4>
                <p class="text-sm">در واقعیت تبلیغات، از مقوا برای لایه‌بندی، از رنگ روغن برای براق کردن نان و حتی از پنبه نسوز برای تولید دود استفاده می‌شود. آنچه می‌بینیم، واقعیت نیست؛ بلکه <strong>بازنمایی (Representation)</strong> واقعیت است.</p>
             </div>
          </div>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-nude-900 mb-6">۲. تکنیک‌های اقناع (چطور ما را راضی می‌کنند؟)</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-6 bg-nude-100 rounded-2xl border border-nude-200">
              <strong class="text-nude-900 block mb-2">تکنیک طنز 😂</strong>
              <p class="text-sm text-nude-800">وقتی می‌خندیم، گارد دفاعی مغز ما باز می‌شود و پیام را راحت‌تر می‌پذیریم.</p>
            </div>
            <div class="p-6 bg-red-50 rounded-2xl border border-red-100">
              <strong class="text-red-900 block mb-2">تکنیک ترس ⚠️</strong>
              <p class="text-sm text-red-800">«اگر این خمیردندان را نزنی، دندان‌هایت را از دست می‌دهی!» استفاده از ترس برای فروش محصول.</p>
            </div>
            <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
              <strong class="text-purple-900 block mb-2">تکنیک تداعی 🌟</strong>
              <p class="text-sm text-purple-800">استفاده از یک سلبریتی محبوب کنار یک نوشابه. مغز ما محبوبیت آن شخص را به آن نوشابه ربط می‌دهد.</p>
            </div>
            <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
              <strong class="text-emerald-900 block mb-2">تکنیک گواهی گرفتن 💬</strong>
              <p class="text-sm text-emerald-800">استفاده از افرادی شبیه مردم عادی که می‌گویند: «من هم از این استفاده کردم و عالی بود.»</p>
            </div>
          </div>
        </section>
      </div>
    `,
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1000"
  },
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 3,
    title: `جلسه ${i + 3}: در حال تدوین`,
    description: "محتوای این جلسه به زودی توسط تیم آموزشی بارگذاری خواهد شد.",
    content: `<div class='py-32 text-center text-nude-300 font-bold'>محتوای این جلسه در دسترس نیست.</div>`,
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000"
  }))
];