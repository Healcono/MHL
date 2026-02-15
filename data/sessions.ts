import { Session } from '../types';

export const sessions: Session[] = [
  {
    id: 1,
    title: "پارادایم جدید در سلامت عمومی",
    description: "گذار از سواد سنتی به سواد دیجیتال و بررسی پدیده اینفودمیک.",
    content: `
      <div class="space-y-12 text-justify leading-loose text-slate-700 animate-fade-in">
        <section>
          <h3 class="text-2xl font-bold text-health-900 mb-4 flex items-center gap-2">
            ۱. مقدمه: گذار از سواد سنتی به سواد دیجیتال
          </h3>
          <p>
            در دهه‌های گذشته، سواد سلامت تنها به توانایی خواندن نسخه‌ها یا درک دستورالعمل‌های پزشک محدود می‌شد. اما با ظهور عصر دیجیتال و درهم‌تنیدگی رسانه‌ها با زیست‌جهان انسان، مفهوم جدیدی به نام <strong>سواد سلامت رسانه‌ای (Media Health Literacy)</strong> متولد شد.
          </p>
          <p>
            امروزه رسانه‌ها دیگر صرفاً ابزار انتقال پیام نیستند، بلکه سازنده واقعیت‌های سلامت محور هستند. دانشجویان علوم پزشکی و پیراپزشکی باید بدانند که بیمارِ امروز، پیش از ملاقات با پزشک، در «اتاق‌های انتظار مجازی» و «شبکه‌های اجتماعی» با انبوهی از داده‌ها مواجه شده است که لزوماً همگی علمی نیستند.
          </p>
        </section>

        <div class="bg-health-50 border-r-4 border-health-500 p-6 rounded-l-2xl">
          <strong class="text-health-900 block mb-2 text-lg">سواد سلامت رسانه‌ای (MHL)</strong>
          <p class="text-health-800 m-0">نقطه‌ی تلاقی سواد سلامت و سواد رسانه‌ای که به معنای مهارتِ واکاوی نقادانه‌ی پیام‌های سلامتی است که از فیلتر رسانه‌های جمعی و اجتماعی عبور کرده‌اند.</p>
        </div>

        <section>
          <h3 class="text-2xl font-bold text-health-900 mb-4">۳. پدیده اینفودمیک (Infodemic) و سلامت عمومی</h3>
          <p>
            واژه‌ی <strong>Infodemic</strong> به معنای شیوع بیش از حد اطلاعات (درست یا نادرست) در حین یک اپیدمی است. در اینفودمیک، ما با سه نوع اختلال اطلاعاتی روبرو هستیم:
          </p>
          <div class="grid md:grid-cols-3 gap-4 mt-6">
            <div class="bg-blue-50 p-5 rounded-2xl border border-blue-100 text-sm">
              <strong class="text-blue-900 block mb-1">Mis-information</strong>
              اطلاعات نادرستی که بدون نیت بد منتشر می‌شوند.
            </div>
            <div class="bg-red-50 p-5 rounded-2xl border border-red-100 text-sm">
              <strong class="text-red-900 block mb-1">Dis-information</strong>
              اطلاعات غلطی که به عمد برای فریب دادن تولید می‌شوند.
            </div>
            <div class="bg-orange-50 p-5 rounded-2xl border border-orange-100 text-sm">
              <strong class="text-orange-900 block mb-1">Mal-information</strong>
              اطلاعات درستی که برای آسیب زدن منتشر می‌شوند.
            </div>
          </div>
        </section>

        <section class="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
          <h4 class="text-emerald-400 font-bold mb-4">تامل نقادانه:</h4>
          <p class="text-slate-300">
            آخرین باری که یک خبر سلامتی را در اینستاگرام دیدید و بدون تحقیق برای دیگران فرستادید کی بود؟ چه عاملی باعث شد به آن اعتماد کنید؟ رنگ‌بندی صفحه؟ تعداد لایک‌ها؟ یا عنوان دکتر؟
          </p>
        </section>
      </div>
    `,
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=1000",
    visualAnalysisPrompt: "آخرین باری که یک خبر سلامتی را در اینستاگرام دیدید و بدون تحقیق برای دیگران فرستادید کی بود؟ چه عاملی باعث شد به آن اعتماد کنید؟",
    factOrMyth: [
      {
        id: 1,
        statement: "تکرار یک خبر در چندین کانال مختلف، نشان‌دهنده صحت آن خبر است.",
        isFact: false,
        explanation: "خیر، این پدیده «اثر حقیقت واهی» نام دارد. تکرار یک دروغ آن را تبدیل به حقیقت نمی‌کند."
      }
    ],
    quiz: [
      {
        id: 1,
        text: "کدام گزینه تعریف صحیحی از «Dis-information» است؟",
        options: ["اطلاعات نادرست بدون قصد قبلی", "اطلاعات درستی که برای آسیب زدن استفاده می‌شوند", "اطلاعات غلط با هدف فریب و سودجویی", "شیوع بیش از حد اطلاعات"],
        correctIndex: 2,
        explanation: "دیس‌اینفورمیشن اطلاعاتی است که عمداً غلط ساخته شده است."
      }
    ]
  },
  {
    id: 2,
    title: "پشت پرده پیام‌ها؛ چه کسی و چگونه؟",
    description: "هدف درس: درک ساختار پیام‌های رسانه‌ای و آشنایی با تکنیک‌های اقناع.",
    content: `
      <div class="space-y-12 text-justify leading-loose text-slate-700 animate-fade-in">
        <section>
          <h3 class="text-2xl font-bold text-health-900 mb-4 flex items-center gap-2">
            ۱. اصل اول: رسانه «ساختگی» است
          </h3>
          <p>
            اولین چیزی که باید بدانیم این است که پیام‌های رسانه‌ای (فیلم، خبر، پست اینستاگرام، تبلیغات) مانند یک ساختمان ساخته می‌شوند. قطعاتی انتخاب می‌شوند و قطعاتی کنار گذاشته می‌شوند.
          </p>
          <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-center">
             <div class="flex-1">
                <h4 class="font-bold text-health-700 mb-2">مثال واقعی: همبرگر تبلیغاتی</h4>
                <p class="text-sm">در واقعیت تبلیغات، از مقوا برای لایه‌بندی، از رنگ روغن برای براق کردن نان و حتی از پنبه نسوز برای تولید دود استفاده می‌شود. آنچه می‌بینیم، واقعیت نیست؛ بلکه <strong>بازنمایی (Representation)</strong> واقعیت است.</p>
             </div>
          </div>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-health-900 mb-6">۲. تکنیک‌های اقناع (چطور ما را راضی می‌کنند؟)</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <strong class="text-blue-900 block mb-2">تکنیک طنز 😂</strong>
              <p class="text-sm text-blue-800">وقتی می‌خندیم، گارد دفاعی مغز ما باز می‌شود و پیام را راحت‌تر می‌پذیریم.</p>
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

        <section class="bg-slate-100 p-8 rounded-3xl">
          <h3 class="text-xl font-bold text-slate-800 mb-6">۳. بازی‌های کلاسی و فعالیت‌ها</h3>
          <div class="space-y-6 text-sm">
            <div class="bg-white p-4 rounded-xl shadow-sm border-r-4 border-indigo-500">
              <strong>بازی اول: «کارگردانِ فریبکار»</strong>
              <p class="mt-2 text-slate-600 leading-6">یک وسیله کاملاً بی‌ارزش (مثل یک لنگه جوراب) انتخاب کنید. ماموریت شما نوشتن سناریویی ۳۰ ثانیه‌ای است تا این وسیله را به عنوان یک کالای لوکس به بقیه بفروشید.</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm border-r-4 border-pink-500">
              <strong>بازی دوم: «صداگذاری متفاوت»</strong>
              <p class="mt-2 text-slate-600 leading-6">یک ویدیو واحد را با دو موسیقی مختلف (ترسناک و خنده‌دار) تماشا کنید. درک می‌کنید که موسیقی چطور احساسات ما را مدیریت می‌کند.</p>
            </div>
          </div>
        </section>

        <section class="bg-health-900 text-white p-8 rounded-3xl">
          <h3 class="text-xl font-bold mb-4">۵. پرسش‌های کلیدی جلسه</h3>
          <p class="mb-4 opacity-90">هر وقت پیامی را دیدید، این دو سوال را بپرسید:</p>
          <ul class="list-disc list-inside space-y-2 text-emerald-300">
            <li>چه کسی این پیام را با چه هدفی (پول، قدرت، آموزش) ساخته است؟</li>
            <li>از چه تکنیکی برای جلب توجه من استفاده کرده است؟</li>
          </ul>
        </section>
      </div>
    `,
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1000",
    visualAnalysisPrompt: "چه کسی این پیام را با چه هدفی (پول، قدرت، آموزش) ساخته است؟ از چه تکنیکی برای جلب توجه من استفاده کرده است؟",
    factOrMyth: [
      {
        id: 1,
        statement: "رسانه دقیقاً خودِ واقعیت را به ما نشان می‌دهد.",
        isFact: false,
        explanation: "رسانه «بازنمایی» واقعیت است؛ یعنی قطعاتی انتخاب و قطعاتی حذف می‌شوند."
      }
    ],
    quiz: [
      {
        id: 1,
        text: "کدام تکنیک اقناع از 'سلبریتی‌ها' برای فروش محصول استفاده می‌کند؟",
        options: ["طنز", "ترس", "تداعی", "گواهی گرفتن"],
        correctIndex: 2,
        explanation: "تکنیک تداعی، محبوبیت سلبریتی را به محصول گره می‌زند."
      }
    ]
  },
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 3,
    title: `جلسه ${i + 3}`,
    description: "در حال آماده‌سازی محتوا توسط تیم آموزشی...",
    content: "<div class='py-20 text-center text-slate-400'>محتوای این جلسه به زودی بارگذاری خواهد شد.</div>",
    quiz: []
  }))
];