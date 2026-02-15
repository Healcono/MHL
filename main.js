import { sessions } from './data/sessions.js';

// مدیریت وضعیت
let currentSessionId = 1;

// توابع گلوبال برای فراخوانی از HTML
window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');
};

window.selectSession = function(id) {
    currentSessionId = id;
    const url = new URL(window.location);
    url.searchParams.set('s', id);
    window.history.pushState({}, '', url);
    renderApp();
    if (window.innerWidth < 1024) window.toggleSidebar();
};

// رندر کل برنامه
function renderApp() {
    renderSidebar();
    renderContent();
    updateProgress();
    if (window.lucide) window.lucide.createIcons();
}

function renderSidebar() {
    const list = document.getElementById('session-list');
    list.innerHTML = sessions.map(s => {
        const isActive = s.id === currentSessionId;
        return `
            <button onclick="selectSession(${s.id})" class="w-full text-right px-4 py-3 flex items-start gap-3 transition-all border-r-4 ${isActive ? 'active-session' : 'border-transparent text-slate-600 hover:bg-slate-50'}">
                <div class="mt-1">
                    <i data-lucide="${isActive ? 'play-circle' : 'circle'}" class="${isActive ? 'text-health-600' : 'text-slate-300'} w-4 h-4"></i>
                </div>
                <div>
                    <div class="text-[10px] font-bold text-slate-400">جلسه ${s.id}</div>
                    <div class="text-sm font-medium ${isActive ? 'text-health-900' : 'text-slate-700'}">${s.title}</div>
                </div>
            </button>
        `;
    }).join('');
}

function renderContent() {
    const session = sessions.find(s => s.id === currentSessionId);
    const container = document.getElementById('session-view');
    
    // ساختار ویدیو (اگر موجود باشد)
    const videoHTML = session.videoUrl ? `
        <div class="aparat-container animate-fade">
            <iframe src="${session.videoUrl}" allowFullScreen="true"></iframe>
        </div>
    ` : '';

    // رندر مستقیم استرینگ محتوا بدون دستکاری
    container.innerHTML = `
        <div class="animate-fade">
            <div class="mb-6">
                <h1 class="text-3xl font-black text-health-950 mb-2">${session.title}</h1>
                <p class="text-slate-500">${session.description}</p>
            </div>
            
            ${videoHTML}
            
            <div id="inner-content">
                ${session.content}
            </div>
        </div>
    `;
    
    // اسکرول به بالا در هر تغییر جلسه
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress() {
    const percent = Math.round((currentSessionId / sessions.length) * 100);
    const text = document.getElementById('progress-text');
    const bar = document.getElementById('progress-bar');
    if (text) text.innerText = `پیشرفت: ${percent}٪`;
    if (bar) bar.style.width = `${percent}%`;
}

// مقداردهی اولیه بر اساس URL
function init() {
    const params = new URLSearchParams(window.location.search);
    const sId = parseInt(params.get('s'));
    if (sId && sessions.find(s => s.id === sId)) {
        currentSessionId = sId;
    }
    renderApp();
}

// هندل کردن دکمه Back مرورگر
window.onpopstate = () => {
    const params = new URLSearchParams(window.location.search);
    currentSessionId = parseInt(params.get('s')) || 1;
    renderApp();
};

init();