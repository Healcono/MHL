import { sessions } from './data/sessions.js';

// --- State Management ---
let currentSessionId = 1;
let completedSessions = JSON.parse(localStorage.getItem('completedSessions') || '[]');

// --- Routing Logic ---
function init() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('s'));
    if (id && sessions.find(s => s.id === id)) {
        currentSessionId = id;
    }
    renderApp();
    window.onpopstate = () => {
        const params = new URLSearchParams(window.location.search);
        currentSessionId = parseInt(params.get('s')) || 1;
        renderApp();
    };
}

// Make functions available globally for HTML onclick attributes
window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');
};

window.selectSession = function(id) {
    currentSessionId = id;
    window.history.pushState({}, '', `?s=${id}`);
    renderApp();
    if (window.innerWidth < 1024) window.toggleSidebar();
};

window.markComplete = function(id) {
    if (!completedSessions.includes(id)) {
        completedSessions.push(id);
        localStorage.setItem('completedSessions', JSON.stringify(completedSessions));
        renderApp();
    }
};

window.switchTab = function(tabId) {
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');
    
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('border-health-600', 'text-health-800', 'bg-health-50/30');
        b.classList.add('border-transparent', 'text-slate-500');
    });
    
    // Using event.currentTarget via a safer lookup if needed, but since it's inline onclick:
    const activeBtn = event.currentTarget;
    activeBtn.classList.remove('border-transparent', 'text-slate-500');
    activeBtn.classList.add('border-health-600', 'text-health-800', 'bg-health-50/30');
};

window.checkAnswer = function(sessionId, qIdx, selected, correct) {
    const feedback = document.getElementById(`feedback-${qIdx}`);
    const opts = event.currentTarget.parentElement.querySelectorAll('.quiz-opt');
    
    opts.forEach(o => o.disabled = true);
    feedback.classList.remove('hidden');
    
    if (selected === correct) {
        event.currentTarget.classList.add('bg-green-100', 'border-green-500', 'text-green-900');
        feedback.classList.add('bg-green-50', 'text-green-800');
        feedback.innerText = 'صحیح! آفرین.';
        document.getElementById('complete-btn-container').classList.remove('hidden');
    } else {
        event.currentTarget.classList.add('bg-red-100', 'border-red-500', 'text-red-900');
        feedback.classList.add('bg-red-50', 'text-red-800');
        feedback.innerText = 'نادرست. دوباره تلاش کنید.';
        setTimeout(() => {
            opts.forEach(o => {
                o.disabled = false;
                o.classList.remove('bg-red-100', 'border-red-500', 'text-red-900');
            });
            feedback.classList.add('hidden');
        }, 2000);
    }
};

// --- Rendering Logic ---
function renderApp() {
    renderSidebar();
    renderSessionView();
    updateProgress();
    if (window.lucide) window.lucide.createIcons();
}

function updateProgress() {
    const percent = Math.round((completedSessions.length / sessions.length) * 100);
    const textEl = document.getElementById('progress-text');
    const barEl = document.getElementById('progress-bar');
    if (textEl) textEl.innerText = `پیشرفت: ${percent}٪`;
    if (barEl) barEl.style.width = `${percent}%`;
}

function renderSidebar() {
    const container = document.getElementById('session-list');
    if (!container) return;
    container.innerHTML = sessions.map(s => {
        const isActive = s.id === currentSessionId;
        const isCompleted = completedSessions.includes(s.id);
        return `
            <button onclick="selectSession(${s.id})" class="w-full text-right px-4 py-3 flex items-start gap-3 transition-all border-r-4 ${isActive ? 'active-session' : 'border-transparent text-slate-600 hover:bg-slate-50'}">
                <div class="mt-1">
                    ${isCompleted ? '<i data-lucide="check-circle" class="text-health-500 w-4 h-4"></i>' : (isActive ? '<i data-lucide="play-circle" class="text-health-600 w-4 h-4 animate-pulse"></i>' : '<i data-lucide="circle" class="text-slate-300 w-4 h-4"></i>')}
                </div>
                <div>
                    <div class="text-[10px] font-bold text-slate-400">جلسه ${s.id}</div>
                    <div class="text-sm font-medium ${isActive ? 'text-health-900' : 'text-slate-700'}">${s.title}</div>
                </div>
            </button>
        `;
    }).join('');
}

function renderSessionView() {
    const session = sessions.find(s => s.id === currentSessionId);
    const container = document.getElementById('session-view');
    if (!container) return;
    
    container.innerHTML = `
        <div class="animate-fade">
            <!-- Header -->
            <div class="h-48 md:h-64 w-full bg-slate-200 relative">
                <img src="${session.imageUrl || 'https://picsum.photos/800/600?grayscale'}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-health-950/90 to-transparent flex items-end p-6 md:p-8">
                    <div>
                        <span class="bg-health-500/20 backdrop-blur px-3 py-1 text-white text-[10px] rounded-full border border-white/20">جلسه ${session.id}</span>
                        <h1 class="text-2xl md:text-3xl font-bold text-white mt-2">${session.title}</h1>
                        <p class="text-health-50 text-sm mt-1 opacity-90">${session.description}</p>
                    </div>
                </div>
            </div>

            <!-- Tabs -->
            <div class="flex border-b overflow-x-auto bg-white sticky top-0 z-10">
                <button onclick="switchTab('tab-content')" class="tab-btn flex-1 py-4 text-sm font-bold border-b-2 border-health-600 text-health-800 bg-health-50/30">درسنامه</button>
                <button onclick="switchTab('tab-video')" class="tab-btn flex-1 py-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:bg-slate-50">ویدیو</button>
                <button onclick="switchTab('tab-quiz')" class="tab-btn flex-1 py-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:bg-slate-50">آزمون</button>
            </div>

            <!-- Tab Content -->
            <div id="tab-container" class="p-6 md:p-8">
                <div id="tab-content" class="tab-pane">${session.content}</div>
                <div id="tab-video" class="tab-pane hidden">
                    ${session.videoUrl ? `
                        <div class="aparat-container">
                            <iframe src="${session.videoUrl}" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                        </div>
                    ` : '<div class="text-center py-20 text-slate-400">ویدیو برای این جلسه موجود نیست.</div>'}
                </div>
                <div id="tab-quiz" class="tab-pane hidden">
                    ${renderQuiz(session.quiz)}
                </div>
            </div>
        </div>
    `;
}

function renderQuiz(quiz) {
    if (!quiz || quiz.length === 0) return '<div class="text-center py-20 text-slate-400">آزمونی تعریف نشده است.</div>';
    
    return quiz.map((q, idx) => `
        <div class="bg-white border rounded-xl p-6 shadow-sm mb-6">
            <h4 class="font-bold text-lg mb-4">${idx + 1}. ${q.text}</h4>
            <div class="space-y-3">
                ${q.options.map((opt, oIdx) => `
                    <button onclick="checkAnswer(${currentSessionId}, ${idx}, ${oIdx}, ${q.correct})" class="w-full text-right p-4 rounded-lg border-2 border-slate-100 hover:bg-slate-50 transition-all quiz-opt">
                        ${opt}
                    </button>
                `).join('')}
            </div>
            <div id="feedback-${idx}" class="mt-4 hidden p-4 rounded-lg text-sm"></div>
        </div>
    `).join('') + `
        <div id="complete-btn-container" class="flex justify-end hidden">
            <button onclick="markComplete(${currentSessionId})" class="bg-health-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-health-700">تکمیل جلسه و مرحله بعد</button>
        </div>
    `;
}

// Kick off
init();
