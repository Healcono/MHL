export const sessions = [
  {
    id: 1,
    title: "پارادایم جدید در سلامت عمومی",
    description: "گذار از سواد سنتی به سواد دیجیتال و بررسی پدیده اینفودمیک.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=1000",
    content: `
      <div class="prose max-w-none">
        <h3>۱. مقدمه: گذار از سواد سنتی به سواد دیجیتال</h3>
        <p>در دهه‌های گذشته، سواد سلامت تنها به توانایی خواندن نسخه‌ها یا درک دستورالعمل‌های پزشک محدود می‌شد. اما با ظهور عصر دیجیتال، مفهوم جدیدی به نام <strong>سواد سلامت رسانه‌ای (Media Health Literacy)</strong> متولد شد.</p>
        <div class="bg-health-50 border-r-4 border-health-500 p-6 rounded-l-2xl my-6">
          <strong class="text-health-900 block mb-2 text-lg">سواد سلامت رسانه‌ای (MHL)</strong>
          <p class="text-health-800 m-0">نقطه‌ی تلاقی سواد سلامت و سواد رسانه‌ای که به معنای مهارتِ واکاوی نقادانه‌ی پیام‌های سلامتی است.</p>
        </div>
        <h3>۲. پدیده اینفودمیک (Infodemic)</h3>
        <p>واژه‌ی Infodemic به معنای شیوع بیش از حد اطلاعات در حین یک اپیدمی است که تشخیص سره از ناسره را دشوار می‌کند.</p>
      </div>
    `,
    quiz: [
      { id: 1, text: "کدام گزینه تعریف صحیح Infodemic است؟", options: ["کمبود اطلاعات", "شیوع بیش از حد اطلاعات", "اطلاعات کاملاً علمی", "ارتباط حضوری"], correct: 1 }
    ]
  },
  {
    id: 2,
    title: "پشت پرده پیام‌ها؛ چه کسی و چگونه؟",
    description: "درک ساختار پیام‌های رسانه‌ای و آشنایی با تکنیک‌های اقناع.",
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.aparat.com/video/video/embed/videohash/a2769/vt/frame",
    content: `
      <div class="prose max-w-none">
        <h3>۱. اصل اول: رسانه «ساختگی» است</h3>
        <p>پیام‌های رسانه‌ای مانند یک ساختمان ساخته می‌شوند. قطعاتی انتخاب می‌شوند و قطعاتی کنار گذاشته می‌شوند.</p>
        <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100 my-6">
          <h4 class="font-bold text-blue-900 mb-2">تکنیک‌های اقناع</h4>
          <p>رسانه‌ها از تکنیک‌هایی مثل طنز، ترس، تداعی و گواهی گرفتن برای جلب توجه شما استفاده می‌کنند.</p>
        </div>
      </div>
    `,
    quiz: [
      { id: 1, text: "کدام تکنیک با خنداندن گارد دفاعی مغز را باز می‌کند؟", options: ["ترس", "تداعی", "طنز", "تکرار"], correct: 2 }
    ]
  }
];

// تولید جلسات خالی برای پر کردن لیست تا ۱۷ جلسه
for (let i = 3; i <= 17; i++) {
  sessions.push({
    id: i,
    title: `جلسه ${i}: در حال آماده‌سازی`,
    description: "محتوای این جلسه به زودی بارگذاری خواهد شد.",
    content: `<div class="py-20 text-center text-slate-400">محتوای این جلسه در دسترس نیست.</div>`,
    quiz: []
  });
}
