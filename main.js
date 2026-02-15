import { sessions } from './data/sessions.js';

/**
 * APPLICATION ENGINE - VANILLA JS VERSION
 * Handles: Routing, Content Rendering, Sidebar, and State.
 */

let state = {
    currentId: 1,
    completed: JSON.parse(localStorage.getItem('mhl_completed') || '[]')
};

/**
 * Initialize the application
 */
function init() {
    // Parse URL for ?id=X
    const params = new URLSearchParams(window.location.search);
    const idParam = parseInt(params.get('id'));
    
    if (idParam && sessions.find(s => s.id === idParam)) {
        state.currentId = idParam;
    }

    render();
    
    // Listen for browser back/forward buttons
    window.onpopstate = () => {
        const backParams = new URLSearchParams(window.location.search);
        state.currentId = parseInt(backParams.get('id')) || 1;
        render();
    };
}

/**
 * Global functions for UI interaction
 */
window.toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');
};

window.navigateTo = (id) => {
    state.currentId = id;
    const url = new URL(window.location);
    url.searchParams.set('id', id);
    window.history.pushState({}, '', url);
    
    render();
    
    // Auto-close sidebar on mobile
    if (window.innerWidth < 1024) window.toggleSidebar();
    
    // Smooth scroll to top
    document.querySelector('main').scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Core rendering function
 */
function render() {
    const session = sessions.find(s => s.id === state.currentId);
    const displayArea = document.getElementById('main-display-area');
    const listArea = document.getElementById('session-list');
    
    // 1. Render Sidebar
    listArea.innerHTML = sessions.map(s => {
        const isActive = s.id === state.currentId;
        return `
            <button onclick="navigateTo(${s.id})" class="w-full text-right px-6 py-4 flex items-start gap-4 transition-all border-r-4 ${isActive ? 'active-session' : 'border-transparent text-nude-400 hover:bg-nude-50/50 hover:text-nude-600'}">
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

    // 2. Render Main Content (preserving HTML strings mo-be-mo)
    const videoHTML = session.videoUrl ? `
        <div class="aparat-container">
            <iframe src="${session.videoUrl}" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </div>
    ` : '';

    displayArea.innerHTML = `
        <div class="animate-fade">
            <!-- Hero Header -->
            <div class="relative h-64 md:h-80 bg-nude-100">
                <img src="${session.imageUrl || 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000'}" class="w-full h-full object-cover mix-blend-multiply opacity-60">
                <div class="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <span class="inline-block px-3 py-1 bg-nude-900 text-white text-[10px] font-black rounded-full mb-4">جلسه آموزشی ${session.id}</span>
                    <h1 class="text-3xl md:text-5xl font-black text-nude-950 tracking-tighter leading-tight">${session.title}</h1>
                    <p class="text-nude-600 mt-3 text-lg font-medium">${session.description}</p>
                </div>
            </div>

            <!-- Content Container -->
            <div class="p-8 md:p-12">
                <!-- Aparat Video rendered ABOVE content as requested -->
                ${videoHTML}

                <!-- Preserved Raw HTML Content -->
                <div class="raw-content-area">
                    ${session.content}
                </div>
            </div>
        </div>
    `;

    // 3. Update Progress and Icons
    updateUIState();
    if (window.lucide) window.lucide.createIcons();
}

function updateUIState() {
    const percent = Math.round((state.currentId / sessions.length) * 100);
    document.getElementById('progress-text').innerText = `میزان پیشرفت: ${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
    document.getElementById('session-counter').innerText = `جلسه ${state.currentId}`;
}

// Kickstart
init();