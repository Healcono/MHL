import { Session } from '../types';

export const sessions: Session[] = [
  {
    id: 1,
    title: "پارادایم جدید در سلامت عمومی",
    description: "گذار از سواد سنتی به سواد دیجیتال و بررسی پدیده اینفودمیک.",
    content: `
      <div class="mb-8 p-6 bg-health-50 border-r-4 border-health-600 rounded-l-2xl animate-fade-in">
        <h2 class="text-2xl md:text-3xl font-black text-health-900 mb-2">جلسه اول: گذار از سواد سنتی به سواد دیجیتال</h2>
        <p class="text-health-700 font-medium">مدرس: دکتر فاطمه زارعی</p>
      </div>

      <div class="space-y-10 text-justify leading-relaxed text-slate-700">
        
        <!-- Section 1: Introduction -->
        <section>
          <h3 class="text-xl font-bold text-health-800 mb-4 flex items-center gap-2">
            <span class="w-2 h-8 bg-health-500 rounded-full"></span>
            ۱. مقدمه: ظهور اتاق‌های انتظار مجازی
          </h3>
          <p class="mb-4">
            در دهه‌های گذشته، سواد سلامت تنها به توانایی خواندن نسخه‌ها یا درک دستورالعمل‌های پزشک محدود می‌شد. اما با ظهور عصر دیجیتال و درهم‌تنیدگی رسانه‌ها با زیست‌جهان انسان، مفهوم جدیدی به نام <strong>سواد سلامت رسانه‌ای (Media Health Literacy)</strong> متولد شد.
          </p>
          <p>
            امروزه رسانه‌ها دیگر صرفاً ابزار انتقال پیام نیستند، بلکه سازنده واقعیت‌های سلامت محور هستند. دانشجویان علوم پزشکی و پیراپزشکی باید بدانند که بیمارِ امروز، پیش از ملاقات با پزشک، در «اتاق‌های انتظار مجازی» و «شبکه‌های اجتماعی» با انبوهی از داده‌ها مواجه شده است که لزوماً همگی علمی نیستند.
          </p>
        </section>

        <!-- Section 2: Definitions -->
        <section class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 class="text-xl font-bold text-health-800 mb-6">۲. تعاریف و مرزهای مفهومی</h3>
          <div class="grid gap-4">
            <div class="p-4 bg-slate-50 rounded-lg border-r-4 border-slate-400">
              <strong class="text-slate-900 block mb-1">سواد سلامت (Health Literacy):</strong>
              ظرفیت کسب، پردازش و درک اطلاعات اولیه سلامت و خدمات مورد نیاز برای تصمیم‌گیری درست.
            </div>
            <div class="p-4 bg-slate-50 rounded-lg border-r-4 border-slate-400">
              <strong class="text-slate-900 block mb-1">سواد رسانه‌ای (Media Literacy):</strong>
              توانایی دسترسی، تحلیل، ارزیابی و تولید پیام در قالب‌های مختلف رسانه‌ای.
            </div>
            <div class="p-4 bg-health-50 rounded-lg border-r-4 border-health-500">
              <strong class="text-health-900 block mb-1">سواد سلامت رسانه‌ای (MHL):</strong>
              نقطه‌ی تلاقی این دو که به معنای مهارتِ واکاوی نقادانه‌ی پیام‌های سلامتی است که از فیلتر رسانه‌های جمعی و اجتماعی عبور کرده‌اند.
            </div>
          </div>
        </section>

        <!-- Section 3: Infodemic -->
        <section>
          <h3 class="text-xl font-bold text-health-800 mb-4 flex items-center gap-2">
            <span class="w-2 h-8 bg-health-500 rounded-full"></span>
            ۳. پدیده اینفودمیک و اختلالات اطلاعاتی
          </h3>
          <p class="mb-4">
            واژه‌ی <strong>Infodemic</strong> (ترکیب Information و Epidemic) که توسط سازمان جهانی بهداشت (WHO) به رسمیت شناخته شد، به معنای شیوع بیش از حد اطلاعات (درست یا نادرست) در حین یک اپیدمی است.
          </p>
          <div class="grid md:grid-cols-3 gap-4 mt-6">
            <div class="bg-blue-50 p-4 rounded-xl">
              <div class="font-bold text-blue-800 mb-2">Mis-information</div>
              <p class="text-sm text-blue-700">اطلاعات نادرستی که بدون نیت بد منتشر می‌شوند (مثل بازنشر یک شایعه از روی دلسوزی).</p>
            </div>
            <div class="bg-red-50 p-4 rounded-xl">
              <div class="font-bold text-red-800 mb-2">Dis-information</div>
              <p class="text-sm text-red-700">اطلاعات غلطی که به عمد برای فریب دادن یا سودجویی تولید می‌شوند (مثل تبلیغات داروهای تقلبی).</p>
            </div>
            <div class="bg-orange-50 p-4 rounded-xl">
              <div class="font-bold text-orange-800 mb-2">Mal-information</div>
              <p class="text-sm text-orange-700">اطلاعات درستی که برای آسیب زدن به یک فرد یا نهاد (خارج از متن اصلی) منتشر می‌شوند.</p>
            </div>
          </div>
        </section>

        <!-- Section 4: Psychology -->
        <section>
          <h3 class="text-xl font-bold text-health-800 mb-4">۴. چرا مغز ما فریب می‌خورد؟ (روانشناسی شایعه)</h3>
          <ul class="space-y-3 list-disc list-inside marker:text-health-500">
            <li><strong>سوگیری تایید (Confirmation Bias):</strong> تمایل ما به پذیرش اطلاعاتی که با باورهای قبلی ما (مثلاً طب سنتی یا مدرن) سازگار است.</li>
            <li><strong>اثر تکرار (Illusory Truth Effect):</strong> وقتی یک مطلب نادرست را بارها در گروه‌های مختلف می‌بینیم، مغز ما به اشتباه «تکرار» را معادل «حقیقت» می‌پندارد.</li>
            <li><strong>اتاق‌های پژواک (Echo Chambers):</strong> الگوریتم‌های شبکه‌های اجتماعی ما را در فضایی قرار می‌دهند که فقط نظرات مشابه خودمان را بشنویم.</li>
          </ul>
        </section>

        <!-- Section 5: Dimensions -->
        <section class="bg-health-900 text-white p-6 rounded-2xl shadow-lg">
          <h3 class="text-lg font-bold mb-4 text-health-100">۵. ابعاد چهارگانه سواد سلامت رسانه‌ای</h3>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div class="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <div class="font-bold text-health-200">۱. دسترسی (Access)</div>
              <div>توانایی جستجوی موثر و فیلتر کردن نویزها.</div>
            </div>
            <div class="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <div class="font-bold text-health-200">۲. تحلیل (Analysis)</div>
              <div>درک ساختار پیام (خبر علمی یا رپرتاژ؟).</div>
            </div>
            <div class="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <div class="font-bold text-health-200">۳. ارزیابی (Evaluation)</div>
              <div>سنجش اعتبار منبع و شواهد (Evidence-based).</div>
            </div>
            <div class="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <div class="font-bold text-health-200">۴. تولید (Communication)</div>
              <div>توانایی تولید محتوای صحیح و مقابله با شایعات.</div>
            </div>
          </div>
        </section>

        <!-- Section 6: Necessity -->
        <section class="border-t pt-4">
          <h3 class="text-lg font-bold text-slate-800 mb-2">ضرورت برای متخصصان سلامت</h3>
          <p>
            متخصص سلامتِ آینده، علاوه بر گوشی پزشکی، باید به <strong>«سپر سواد رسانه‌ای»</strong> مجهز باشد. اگر ما نتوانیم سواد رسانه‌ای جامعه را ارتقا دهیم، بهترین پروتکل‌های درمانی نیز تحت تاثیر شایعات (مانند جنبش‌های ضد واکسن) شکست خواهند خورد.
          </p>
        </section>

      </div>
    `,
    imageUrl: "https://picsum.photos/800/400?random=1",
    visualAnalysisPrompt: "آخرین باری که یک خبر سلامتی را در اینستاگرام دیدید و بدون تحقیق برای دیگران فرستادید کی بود؟ چه عاملی باعث شد به آن اعتماد کنید؟ (رنگ‌بندی صفحه؟ تعداد لایک‌ها؟ یا عنوان دکتر؟)",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder remains as per request structure
    factOrMyth: [
       {
        id: 1,
        statement: "تکرار یک خبر در چندین کانال تلگرامی مختلف، نشان‌دهنده صحت آن خبر است.",
        isFact: false,
        explanation: "خیر، این پدیده «اثر حقیقت واهی» نام دارد. تکرار یک دروغ آن را تبدیل به حقیقت نمی‌کند، فقط مغز را با آن آشناتر می‌کند."
      },
      {
        id: 2,
        statement: "سواد سلامت رسانه‌ای شامل توانایی تولید محتوای صحیح توسط کادر درمان نیز می‌شود.",
        isFact: true,
        explanation: "بله، بعد چهارم این سواد (Communication)، به توانایی تولید و انتقال صحیح پیام‌های سلامت اشاره دارد."
      }
    ],
    quiz: [
      {
        id: 1,
        text: "کدام گزینه تعریف صحیحی از «Dis-information» است؟",
        options: [
          "اطلاعات نادرستی که بدون قصد قبلی منتشر می‌شوند.",
          "اطلاعات درستی که برای آسیب زدن استفاده می‌شوند.",
          "اطلاعات غلطی که با هدف فریب و سودجویی تولید می‌شوند.",
          "شیوع بیش از حد اطلاعات در زمان اپیدمی."
        ],
        correctIndex: 2,
        explanation: "دیس‌اینفورمیشن (Disinformation) اطلاعاتی است که عمداً غلط ساخته شده است (مانند تبلیغ داروی تقلبی)."
      },
      {
        id: 2,
        text: "پدیده «اتاق‌های پژواک» (Echo Chambers) چگونه بر قضاوت ما تاثیر می‌گذارد؟",
        options: [
          "ما را در معرض نظرات مخالف قرار می‌دهد.",
          "باعث می‌شود فقط نظرات مشابه خودمان را بشنویم و از نقد دور بمانیم.",
          "دقت ما را در بررسی منابع افزایش می‌دهد.",
          "هیچ تاثیری بر سوگیری شناختی ندارد."
        ],
        correctIndex: 1,
        explanation: "اتاق‌های پژواک با فیلتر کردن نظرات مخالف، باعث تقویت تعصبات و سوگیری‌های قبلی ما می‌شوند."
      },
      {
        id: 3,
        text: "ارزیابی اینکه «آیا نویسنده یک مطلب ذینفع مالی است یا خیر»، مربوط به کدام بعد سواد سلامت رسانه‌ای است؟",
        options: [
          "دسترسی (Access)",
          "ارزیابی (Evaluation)",
          "تحلیل (Analysis)",
          "تولید (Communication)"
        ],
        correctIndex: 1,
        explanation: "سنجش اعتبار منبع و بررسی تضاد منافع، بخشی از مهارت ارزیابی (Evaluation) است."
      }
    ]
  },
  {
    id: 2,
    title: "اطلاعات نادرست و اخبار جعلی در سلامت",
    description: "چگونه شایعات پزشکی را شناسایی کنیم؟",
    content: `
      <h3 class="text-xl font-bold mb-4 text-health-800">انواع اطلاعات نادرست</h3>
      <p class="mb-4 leading-8">
        اطلاعات نادرست (Misinformation) و اطلاعات عمداً غلط (Disinformation) دو تهدید اصلی در فضای سلامت آنلاین هستند.
        بسیاری از شایعات بدون قصد قبلی و صرفاً از روی ناآگاهی بازنشر می‌شوند.
      </p>
      <div class="bg-yellow-50 p-4 border-r-4 border-yellow-500 rounded my-4">
        <strong>نکته کلیدی:</strong> همیشه قبل از بازنشر یک خبر پزشکی، منبع آن را چک کنید. عبارت‌هایی مثل «پزشکان ژاپنی کشف کردند» یا «معجزه قرن» معمولاً نشانه‌های خطر هستند.
      </div>
    `,
    imageUrl: "https://picsum.photos/800/400?random=2",
    visualAnalysisPrompt: "در تصویر، چه احساساتی برای ترغیب مخاطب به کلیک کردن استفاده شده است؟ (ترس، امید واهی، یا کنجکاوی؟)",
    factOrMyth: [
      {
        id: 1,
        statement: "نوشیدن آب گرم ویروس‌ها را از بین می‌برد.",
        isFact: false,
        explanation: "این یک شایعه رایج است. دمای بدن و اسید معده مکانیزم‌های خود را دارند و آب گرم تأثیر مستقیم ویروس‌کشی ندارد."
      },
      {
        id: 2,
        statement: "واکسن‌ها قبل از تایید عمومی مراحل کارآزمایی بالینی را طی می‌کنند.",
        isFact: true,
        explanation: "بله، تمام واکسن‌های معتبر باید مراحل سخت‌گیرانه کارآزمایی بالینی را بگذرانند."
      },
      {
        id: 3,
        statement: "محصولات طبیعی و گیاهی همیشه بی‌خطر هستند.",
        isFact: false,
        explanation: "طبیعی بودن به معنای بی‌خطر بودن نیست. بسیاری از گیاهان تداخلات دارویی جدی دارند."
      }
    ],
    quiz: [
      {
        id: 1,
        text: "تفاوت Misinformation و Disinformation چیست؟",
        options: [
          "تفاوت خاصی ندارند",
          "اولی اطلاعات غلط بدون قصد و دومی با قصد فریب است",
          "اولی مربوط به اخبار سیاسی و دومی پزشکی است",
          "اولی متنی است و دومی تصویری"
        ],
        correctIndex: 1,
        explanation: "Disinformation با هدف فریب دادن تولید می‌شود، در حالی که Misinformation ممکن است سهواً منتشر شود."
      }
    ]
  },
  {
    id: 3,
    title: "تحلیل تبلیغات پزشکی و دارویی",
    description: "شناسایی تکنیک‌های اقناع در تبلیغات سلامت.",
    content: `
      <h3 class="text-xl font-bold mb-4 text-health-800">تکنیک‌های فریب در تبلیغات</h3>
      <p class="mb-4 leading-8">
        تبلیغات کالاهای سلامت‌محور اغلب از احساسات مخاطب سوءاستفاده می‌کنند. استفاده از روپوش سفید (تکنیک انتقال اعتبار)،
        استفاده از واژه‌های علمی پیچیده اما بی‌معنی (تکنوسل)، و وعده‌های درمان قطعی و سریع از روش‌های رایج هستند.
      </p>
    `,
    imageUrl: "https://picsum.photos/800/400?random=3",
    visualAnalysisPrompt: "این پوستر تبلیغاتی را تحلیل کنید. از چه رنگ‌ها و فونت‌هایی برای القای حس اعتماد استفاده شده است؟",
    quiz: [
      {
        id: 1,
        text: "کدام یک از عبارات زیر در یک تبلیغ پزشکی شک‌برانگیز است؟",
        options: [
          "نیاز به مشورت با پزشک دارد",
          "درمان قطعی و ۱۰۰٪ تضمینی در ۳ روز",
          "دارای مجوز از وزارت بهداشت",
          "مکمل غذایی کمکی"
        ],
        correctIndex: 1,
        explanation: "در پزشکی هیچ درمان قطعی و ۱۰۰ درصدی وجود ندارد. این عبارات معمولاً نشانه کلاهبرداری هستند."
      }
    ]
  },
  {
    id: 4,
    title: "شبکه‌های اجتماعی و تصویر بدن",
    description: "تاثیر رسانه‌ها بر ادراک ما از زیبایی و سلامتی.",
    content: `
      <h3 class="text-xl font-bold mb-4 text-health-800">کمال‌گرایی سمی</h3>
      <p class="mb-4 leading-8">
        تصاویری که در اینستاگرام و سایر شبکه‌ها می‌بینیم اغلب دستکاری شده (فوتوشاپ، فیلتر) هستند. 
        مقایسه بدن خود با این تصاویر غیرواقعی می‌تواند منجر به نارضایتی از بدن، اختلالات خوردن و افسردگی شود.
      </p>
    `,
    imageUrl: "https://picsum.photos/800/400?random=4",
    factOrMyth: [
      {
        id: 1,
        statement: "همه عکس‌های مدل‌های تناسب اندام در اینستاگرام واقعی هستند.",
        isFact: false,
        explanation: "اکثر تصاویر با نورپردازی خاص، زاویه دوربین و ویرایش نرم‌افزاری بهبود یافته‌اند."
      },
      {
        id: 2,
        statement: "سلامتی همیشه با داشتن سیکس‌پک (Six-pack) برابر است.",
        isFact: false,
        explanation: "سلامتی شاخص‌های متعددی مثل فشار خون، قند خون و سلامت روان دارد و ظاهر عضلانی تنها یکی از فرم‌های بدن است."
      }
    ],
    quiz: [
      {
        id: 1,
        text: "سندروم «مقایسه اجتماعی» در فضای مجازی چه پیامدی دارد؟",
        options: [
          "افزایش انگیزه ورزشی",
          "بهبود رژیم غذایی",
          "کاهش اعتماد به نفس و نارضایتی از بدن",
          "یادگیری تکنیک‌های عکاسی"
        ],
        correctIndex: 2,
        explanation: "مقایسه ظاهر طبیعی خود با ظاهر ویرایش شده دیگران معمولاً به کاهش عزت نفس منجر می‌شود."
      }
    ]
  },
  {
    id: 5,
    title: "ارزیابی منابع آنلاین سلامت",
    description: "چک‌لیست بررسی اعتبار وب‌سایت‌های پزشکی.",
    content: "محتوای آموزشی جلسه ۵...",
    quiz: []
  },
  {
    id: 6,
    title: "سایبرکندریا (خودبیمارانگاری اینترنتی)",
    description: "وقتی جستجوی علائم در گوگل باعث اضطراب می‌شود.",
    content: "محتوای آموزشی جلسه ۶...",
    quiz: []
  },
  {
    id: 7,
    title: "حریم خصوصی سلامت دیجیتال",
    description: "داده‌های سلامت ما در اپلیکیشن‌ها چگونه استفاده می‌شود؟",
    content: "محتوای آموزشی جلسه ۷...",
    quiz: []
  },
  {
    id: 8,
    title: "اینفلوئنسرها و توصیه‌های پزشکی",
    description: "آیا بلاگرها صلاحیت تجویز نسخه دارند؟",
    content: "محتوای آموزشی جلسه ۸...",
    quiz: []
  },
  {
    id: 9,
    title: "روزنامه‌نگاری سلامت در برابر کلیک‌بیت",
    description: "تشخیص تیترهای زرد از اخبار علمی واقعی.",
    content: "محتوای آموزشی جلسه ۹...",
    quiz: []
  },
  {
    id: 10,
    title: "هوش مصنوعی در سلامت",
    description: "فرصت‌ها و تهدیدهای AI در تشخیص و درمان.",
    content: "محتوای آموزشی جلسه ۱۰...",
    quiz: []
  },
  {
    id: 11,
    title: "سلامت روان در عصر دیجیتال",
    description: "تاثیرات فضای مجازی بر افسردگی و اضطراب.",
    content: "محتوای آموزشی جلسه ۱۱...",
    quiz: []
  },
  {
    id: 12,
    title: "مدیریت زمان صفحه نمایش (Screen Time)",
    description: "راهکارهایی برای سم‌زدایی دیجیتال (Digital Detox).",
    content: "محتوای آموزشی جلسه ۱۲...",
    quiz: []
  },
  {
    id: 13,
    title: "اپلیکیشن‌های سلامت همراه (mHealth)",
    description: "کدام اپلیکیشن‌ها علمی و مفید هستند؟",
    content: "محتوای آموزشی جلسه ۱۳...",
    quiz: []
  },
  {
    id: 14,
    title: "اخلاق در پزشکی از راه دور (Telemedicine)",
    description: "چالش‌های ویزیت آنلاین.",
    content: "محتوای آموزشی جلسه ۱۴...",
    quiz: []
  },
  {
    id: 15,
    title: "تفکر انتقادی در بحران‌ها (پاندمی)",
    description: "مدیریت اطلاعات در زمان شیوع بیماری‌های واگیر.",
    content: "محتوای آموزشی جلسه ۱۵...",
    quiz: []
  },
  {
    id: 16,
    title: "کودکان و رسانه‌های دیجیتال",
    description: "والدگری دیجیتال و محافظت از سلامت کودکان.",
    content: "محتوای آموزشی جلسه ۱۶...",
    quiz: []
  },
  {
    id: 17,
    title: "جمع‌بندی و آینده سلامت دیجیتال",
    description: "مسیر پیش رو برای شهروند هوشمند.",
    content: `
      <h3 class="text-xl font-bold mb-4 text-health-800">پایان دوره</h3>
      <p class="mb-4 leading-8">
        تبریک می‌گوییم! شما ۱۷ جلسه دوره سواد رسانه‌ای در سلامت را به پایان رساندید.
        امیدواریم این آموزه‌ها به شما در داشتن زندگی سالم‌تر و آگاهانه‌تر کمک کند.
      </p>
      <p class="mb-4 leading-8 font-bold text-center text-health-600">
        «سواد رسانه‌ای واکسنی است در برابر ویروس‌های اطلاعاتی.»
      </p>
    `,
    imageUrl: "https://picsum.photos/800/400?random=17",
    quiz: []
  }
];