// Access window helpers and translations dynamically to prevent timing/evaluation order bugs
const t = new Proxy({}, {
  get(target, prop) {
    return window.t ? window.t[prop] : undefined;
  }
});

const initTheme = () => {
  if (typeof window.initTheme === 'function') return window.initTheme();
  console.error('window.initTheme is not a function');
};

const toggleTheme = () => {
  if (typeof window.toggleTheme === 'function') return window.toggleTheme();
  console.error('window.toggleTheme is not a function');
};

const applyTheme = (theme) => {
  if (typeof window.applyTheme === 'function') return window.applyTheme(theme);
  console.error('window.applyTheme is not a function');
};

const initLang = () => {
  if (typeof window.initLang === 'function') return window.initLang();
  console.error('window.initLang is not a function');
};

const toggleLang = () => {
  if (typeof window.toggleLang === 'function') return window.toggleLang();
  console.error('window.toggleLang is not a function');
};

const applyLang = (lang) => {
  if (typeof window.applyLang === 'function') return window.applyLang(lang);
  console.error('window.applyLang is not a function');
};

// Application State
const state = {
  activeFile: 'about_me.md',
  openTabs: ['about_me.md'],
  editorMode: 'preview', // 'code' or 'preview'
  activeLang: 'en',
  activeTheme: 'light',
  terminalHistory: [],
  terminalHistoryIndex: -1,
  sidebarOpen: false,
  terminalHeight: 180, // default height
  terminalCollapsed: false
};

// Files data definition
const filesList = [
  { id: 'about_me.md', icon: 'markdown', type: 'md', path: 'about_me.md' },
  { id: 'skills.json', icon: 'json', type: 'json', path: 'skills.json' },
  { id: 'experience.csv', icon: 'csv', type: 'csv', path: 'experience.csv' },
  { id: 'education.txt', icon: 'text', type: 'txt', path: 'education.txt' },
  { id: 'contact_me.js', icon: 'js', type: 'js', path: 'contact_me.js' }
];

const projectFiles = [
  { id: 'medflow.json', icon: 'json', type: 'json', path: 'projects/medflow.json', key: 'medflow', github: '#', live: 'https://med-flow-frontend.vercel.app' },
  { id: 'otasky.json', icon: 'json', type: 'json', path: 'projects/otasky.json', key: 'otasky', github: '#', live: 'https://otasky.com' },
  { id: 'nexflow.json', icon: 'json', type: 'json', path: 'projects/nexflow.json', key: 'nexflow', github: 'https://github.com/Hazem-Soliman-dev/nextflow', live: 'https://next-flow-taupe.vercel.app' },
  { id: 'hireflow.json', icon: 'json', type: 'json', path: 'projects/hireflow.json', key: 'hireflow', github: 'https://github.com/Hazem-Soliman-dev/HireFlow', live: 'https://hire-flow-eosin.vercel.app' },
  { id: 'insight_agent.json', icon: 'json', type: 'json', path: 'projects/insight_agent.json', key: 'insightagent', github: 'https://github.com/Hazem-Soliman-dev/Insight-Agent', live: 'https://insight-agent-frontend-lilac.vercel.app' },
  { id: 'proposligo.json', icon: 'json', type: 'json', path: 'projects/proposligo.json', key: 'proposligo', github: 'https://github.com/Hazem-Soliman-dev/ProposliGo', live: 'https://proposligo.vercel.app' },
  { id: 'electro_pi.json', icon: 'json', type: 'json', path: 'projects/electro_pi.json', key: 'electropi', github: 'https://github.com/Hazem-Soliman-dev/Electro', live: 'https://electro-pink.vercel.app' },
  { id: 'mosanada.json', icon: 'json', type: 'json', path: 'projects/mosanada.json', key: 'mosanada', github: 'https://github.com/Hazem-Soliman-dev/mosanada', live: 'https://mosanada-production.up.railway.app/api/docs' },
];

// Combine all file keys for lookup
const allFilesMap = {};
filesList.forEach(f => { allFilesMap[f.id] = f; });
projectFiles.forEach(f => { allFilesMap[f.id] = f; });

// Get raw contents of files for the "Code" editor tab view
function getRawFileContent(fileName, lang) {
  const strings = t[lang];
  
  if (fileName === 'about_me.md') {
    return `# ${strings.name}
## ${strings.title}

> ${strings.subtitle}

📍 ${strings.location}
📧 ${strings.email}

### 🧑‍💻 Bio
${strings.aboutBio}

### 🏥 Current Status
${strings.aboutCurrently}

### 🌍 Contributions
${strings.aboutContributed}

### 🧠 Recent Releases
${strings.aboutShipped}

### 🎓 Academic
${strings.aboutEducation}

### 🤝 Leadership
${strings.aboutLeadership}
`;
  }
  
  if (fileName === 'skills.json') {
    const skillsData = {
      languages: ["TypeScript", "JavaScript", "PHP", "Python", "C#", "SQL"],
      backend: ["NestJS", "Node.js", "Express", "Laravel", ".NET"],
      frontend: ["React", "Next.js", "Angular", "Tailwind CSS", "ShadCN", "Radix UI", "Material UI"],
      databases_orms: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Sequelize", "Drizzle"],
      cloud_devops: ["AWS", "Supabase", "Docker", "Vercel", "Railway", "Cloudflare", "Git"],
      integrations: ["Stripe", "Polar", "Clerk", "Twilio", "Swagger", "Cloudinary", "UploadThing"],
      ai_integrations: ["OpenAI", "Groq"]
    };
    return JSON.stringify(skillsData, null, 2);
  }
  
  if (fileName === 'experience.csv') {
    let csv = `"Role","Company","Period","Type","Description"\n`;
    strings.experience.forEach(e => {
      csv += `"${e.role}","${e.company}","${e.period}","${e.type}","${e.desc.replace(/"/g, '""')}"\n`;
    });
    return csv;
  }
  
  if (fileName === 'education.txt') {
    let txt = `=========================================\n`;
    txt += `          EDUCATION & CREDENTIALS        \n`;
    txt += `=========================================\n\n`;
    strings.education.forEach(e => {
      txt += `${strings.eduSchool}: ${e.school}\n`;
      txt += `${strings.eduProgram}: ${e.program}\n`;
      txt += `${strings.eduGrade}: ${e.grade}\n`;
      txt += `-----------------------------------------\n`;
    });
    txt += `\n=========================================\n`;
    txt += `               LEADERSHIP                \n`;
    txt += `=========================================\n\n`;
    strings.leadership.forEach(l => {
      txt += `* ${l.role} - ${l.org}\n  ${l.desc}\n\n`;
    });
    return txt;
  }
  
  if (fileName === 'contact_me.js') {
    return `/**
 * Hazem Soliman - Contact Information
 */
class HazemContact {
  constructor() {
    this.email = "${strings.email}";
    this.location = "${strings.location}";
    this.availability = "Open to remote work globally";
    this.linkedin = "https://www.linkedin.com/in/hazem-soliman-swd";
    this.github = "https://github.com/Hazem-Soliman-dev";
  }

  sendMessage(senderName, senderEmail, messageText) {
    if (!senderName || !senderEmail || !messageText) {
      throw new Error("All fields are required");
    }
    console.log(\`Sending message from \${senderName}...\`);
    return { success: true, message: "Thank you for reaching out!" };
  }
}`;
  }

  // Project file
  const proj = projectFiles.find(p => p.id === fileName);
  if (proj) {
    const data = strings.projects[proj.key];
    const rawProj = {
      project: data.title,
      summary: data.desc,
      stack: strings.projects[proj.key].bullets ? strings.projects[proj.key].bullets : [],
      keyDeliverables: data.bullets
    };
    return JSON.stringify(rawProj, null, 2);
  }

  return '';
}

// Generate the visual preview HTML for a file
function getPreviewHTML(fileName, lang) {
  const strings = t[lang];

  if (fileName === 'about_me.md') {
    return `
      <div class="ag-preview-about ag-fade-in">
        <div class="ag-about-header">
          <div class="ag-about-header-meta">
            <h1 class="ag-about-name">${strings.name}</h1>
            <p class="ag-about-title">${strings.title}</p>
            <div class="ag-about-badges">
              <span class="ag-badge">${strings.location}</span>
              <span class="ag-badge">${strings.email}</span>
            </div>
          </div>
        </div>
        
        <div class="ag-divider"></div>
        
        <div class="ag-about-section">
          <h2>${lang === 'ar' ? 'نبذة عني' : 'About Me'}</h2>
          <p class="ag-bio-text">${strings.aboutBio}</p>
        </div>

        <div class="ag-about-grid">
          <div class="ag-card-about">
            <div>
              <h3>${lang === 'ar' ? 'النشاط الحالي' : 'Current Work'}</h3>
              <p>${strings.aboutCurrently}</p>
            </div>
          </div>
          <div class="ag-card-about">
            <div>
              <h3>${lang === 'ar' ? 'مساهمات سابقة' : 'Past Contributions'}</h3>
              <p>${strings.aboutContributed}</p>
            </div>
          </div>
          <div class="ag-card-about">
            <div>
              <h3>${lang === 'ar' ? 'أطلق مؤخراً' : 'Recently Shipped'}</h3>
              <p>${strings.aboutShipped}</p>
            </div>
          </div>
          <div class="ag-card-about">
            <div>
              <h3>${lang === 'ar' ? 'الشهادة الأكاديمية' : 'Education'}</h3>
              <p>${strings.aboutEducation}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (fileName === 'skills.json') {
    const categories = [
      { key: 'languages', title: strings.skillsLanguages, list: ["TypeScript", "JavaScript", "PHP", "Python", "C#", "SQL"] },
      { key: 'backend', title: strings.skillsBackend, list: ["NestJS", "Node.js", "Express", "Laravel", ".NET"] },
      { key: 'frontend', title: strings.skillsFrontend, list: ["React", "Next.js", "Angular", "Tailwind CSS", "ShadCN", "Radix UI", "Material UI"] },
      { key: 'databases_orms', title: strings.skillsDatabases, list: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Sequelize", "Drizzle"] },
      { key: 'cloud_devops', title: strings.skillsCloud, list: ["AWS", "Supabase", "Docker", "Vercel", "Railway", "Cloudflare", "Git"] },
      { key: 'integrations', title: strings.skillsIntegrations, list: ["Stripe", "Polar", "Clerk", "Twilio", "Swagger", "Cloudinary", "UploadThing"] },
      { key: 'ai_integrations', title: strings.skillsAI, list: ["OpenAI", "Groq"] }
    ];

    let html = `
      <div class="ag-preview-skills ag-fade-in">
        <h2><i class="ag-icon-code"></i> ${strings.skillsTitle}</h2>
        <div class="ag-skills-container">
    `;

    categories.forEach(cat => {
      html += `
        <div class="ag-card ag-skill-card">
          <h3>${cat.title}</h3>
          <div class="ag-skill-chips">
            ${cat.list.map(skill => `<span class="ag-skill-chip">${skill}</span>`).join('')}
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
    return html;
  }

  if (fileName === 'experience.csv') {
    let html = `
      <div class="ag-preview-exp ag-fade-in">
        <h2><i class="ag-icon-briefcase"></i> ${strings.experienceTitle}</h2>
        <div class="ag-timeline">
    `;

    strings.experience.forEach((e, idx) => {
      html += `
        <div class="ag-timeline-item">
          <div class="ag-timeline-marker"></div>
          <div class="ag-timeline-content ag-card">
            <span class="ag-timeline-date">${e.period}</span>
            <h3>${e.role}</h3>
            <h4>${e.company} <span class="ag-badge-type">${e.type}</span></h4>
            <p class="ag-timeline-desc">${e.desc}</p>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
    return html;
  }

  if (fileName === 'education.txt') {
    let html = `
      <div class="ag-preview-edu ag-fade-in">
        <h2><i class="ag-icon-graduation"></i> ${strings.educationTitle}</h2>
        <div class="ag-edu-list">
    `;

    strings.education.forEach(e => {
      html += `
        <div class="ag-card ag-edu-card">
          <h3>${e.program}</h3>
          <h4>${e.school}</h4>
          <span class="ag-edu-grade">${strings.eduGrade}: <strong>${e.grade}</strong></span>
        </div>
      `;
    });

    html += `
        </div>

        <div class="ag-divider" style="margin: var(--ag-sp-6) 0;"></div>

        <h2><i class="ag-icon-users"></i> ${strings.leadershipTitle || 'Leadership'}</h2>
        <div class="ag-lead-list">
    `;

    strings.leadership.forEach(l => {
      html += `
        <div class="ag-card ag-lead-card">
          <h3>${l.role}</h3>
          <h4>${l.org}</h4>
          <p>${l.desc}</p>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
    return html;
  }

  if (fileName === 'contact_me.js') {
    return `
      <div class="ag-preview-contact ag-fade-in">
        <div class="ag-contact-grid">
          <div class="ag-card ag-contact-form-card">
            <h2><i class="ag-icon-envelope"></i> ${strings.contactTitle}</h2>
            <p class="ag-contact-sub">${strings.contactSubtitle}</p>
            <form id="ag-contact-form" class="ag-form">
              <div class="ag-form-group">
                <label for="c-name">${strings.contactName}</label>
                <input type="text" id="c-name" class="ag-input" required />
              </div>
              <div class="ag-form-group">
                <label for="c-email">${strings.contactEmail}</label>
                <input type="email" id="c-email" class="ag-input" required />
              </div>
              <div class="ag-form-group">
                <label for="c-message">${strings.contactMessage}</label>
                <textarea id="c-message" class="ag-textarea" rows="5" required></textarea>
              </div>
              <button type="submit" id="c-submit" class="ag-btn-primary">
                <span>${strings.contactSubmit}</span>
              </button>
            </form>
          </div>
          
          <div class="ag-contact-info-wrap">
            <div class="ag-card ag-contact-info-card">
              <h3>${strings.contactInfoTitle}</h3>
              <p class="ag-contact-info-line"><i class="ag-icon-location"></i> ${strings.contactLocation}</p>
              <p class="ag-contact-info-line"><i class="ag-icon-globe"></i> ${strings.contactAvailable}</p>
              <p class="ag-contact-info-line"><i class="ag-icon-email"></i> <a href="mailto:${strings.email}">${strings.email}</a></p>
            </div>
            
            <div class="ag-card ag-socials-card">
              <h3>${strings.socialLinks}</h3>
              <div class="ag-social-links">
                <a href="https://www.linkedin.com/in/hazem-soliman-swd" target="_blank" class="ag-social-btn linkedin">
                  LinkedIn
                </a>
                <a href="mailto:hazem.soliman.dev@gmail.com" class="ag-social-btn email">
                  Email
                </a>
                <a href="https://github.com/Hazem-Soliman-dev" target="_blank" class="ag-social-btn github">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Project visual file preview
  const proj = projectFiles.find(p => p.id === fileName);
  if (proj) {
    const data = strings.projects[proj.key];
    const techStack = getTechStack(proj.key);
    
    return `
      <div class="ag-preview-project ag-fade-in">
        <div class="ag-project-meta-header">
          <h2>${data.title}</h2>
          <p class="ag-project-desc">${data.desc}</p>
          
          <div class="ag-project-actions">
            <a href="${proj.github || 'https://github.com/Hazem-Soliman-dev'}" target="_blank" class="ag-btn-primary">
              <i class="ag-icon-github"></i> ${strings.repoLink}
            </a>
            <a href="${proj.live || '#'}" ${proj.live && proj.live !== '#' ? 'target="_blank"' : ''} class="ag-btn-secondary"${!proj.live || proj.live === '#' ? ' style="opacity:0.5; cursor:not-allowed;" onclick="event.preventDefault();"' : ''}>
              <i class="ag-icon-globe"></i> ${strings.liveLink}
            </a>
          </div>
        </div>

        <div class="ag-divider" style="margin: var(--ag-sp-4) 0;"></div>

        <h3>${strings.projectStack}</h3>
        <div class="ag-hscroll-wrap" role="region" aria-label="Tech Stack Scroll">
          <div class="ag-hscroll">
            ${techStack.map(t => `<span class="ag-skill-chip bg-accent">${t}</span>`).join('')}
          </div>
        </div>

        <div class="ag-card ag-project-bullets-card" style="margin-top: var(--ag-sp-5);">
          <h3>${strings.projectAchievements}</h3>
          <ul class="ag-project-bullets">
            ${data.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  return '';
}

function getTechStack(key) {
  const stacks = {
    medflow: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Next.js", "Zustand", "React Query", "Radix UI", "Cloudinary", "Twilio", "Railway"],
    otasky: ["Next.js", "Node.js", "Express", "TypeScript", "PostgreSQL", "Sequelize", "Stripe", "AWS", "Twilio", "Firebase"],
    nexflow: ["Next.js 16", "React 19", "Tailwind CSS v4", "ShadCN", "Radix UI", "Prisma", "PostgreSQL", "NextAuth.js v5", "dnd-kit", "Recharts", "jsPDF"],
    hireflow: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Groq SDK", "dnd-kit", "UploadThing", "Nodemailer", "Recharts", "Tailwind CSS"],
    electropi: ["Next.js 16", "React 19", "TypeScript", "Drizzle ORM", "PostgreSQL", "Clerk", "Polar", "UploadThing", "Tailwind CSS v4"],
    insightagent: ["NestJS", "Prisma", "PostgreSQL", "Redis", "Groq SDK", "Clerk", "Polar", "Next.js 14", "ShadCN", "Radix UI", "Tailwind CSS", "Recharts"],
    proposligo: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Groq SDK", "Polar", "Tailwind CSS"],
    mosanada: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "JWT", "Swagger", "Vercel"],
    promptrefiner: ["Next.js", "TypeScript", "Tailwind CSS", "Groq AI"],
    kontainar: ["Next.js 16", "TypeScript", "Tailwind CSS", "Zustand", "React 19", "Material-UI", "Laravel 12", "MySQL", "Redis"],
    crmdashboard: ["Next.js 14", "TypeScript", "Tailwind CSS", "ShadCN", "TanStack Table", "Recharts", "Zod", "MySQL", "JWT"],
    ecommerce_mean: ["Angular", "Node.js", "Express", "MongoDB", "JWT", "bcrypt", "Multer"]
  };
  return stacks[key] || [];
}

// Function to copy content of code view to clipboard
window.copyActiveCode = function() {
  const codeText = document.getElementById('ag-code-pre').textContent;
  navigator.clipboard.writeText(codeText).then(() => {
    const copyBtn = document.querySelector('.ag-copy-btn');
    const strings = t[state.activeLang];
    copyBtn.textContent = strings.copied;
    setTimeout(() => {
      copyBtn.textContent = strings.copyCode;
    }, 2000);
  });
};

// Open a file tab
function openTab(fileName) {
  if (!state.openTabs.includes(fileName)) {
    state.openTabs.push(fileName);
  }
  state.activeFile = fileName;
  
  // Highlight folder tree active node
  document.querySelectorAll('.ag-file-node').forEach(node => {
    if (node.dataset.id === fileName) {
      node.classList.add('active');
    } else {
      node.classList.remove('active');
    }
  });

  renderTabs();
  renderActiveFile();
  
  // Update status bar file info
  const barFile = document.getElementById('ag-status-file');
  if (barFile) barFile.textContent = fileName;
}

// Close a tab
function closeTab(fileName, event) {
  if (event) event.stopPropagation();
  
  const index = state.openTabs.indexOf(fileName);
  if (index > -1) {
    state.openTabs.splice(index, 1);
  }
  
  if (state.openTabs.length === 0) {
    // Keep at least about_me
    state.openTabs.push('about_me.md');
    state.activeFile = 'about_me.md';
  } else if (state.activeFile === fileName) {
    // Switch to adjacent tab
    state.activeFile = state.openTabs[Math.max(0, index - 1)];
  }
  
  openTab(state.activeFile);
}

// Render open tabs list in header
function renderTabs() {
  const tabsContainer = document.getElementById('ag-tabs-list');
  if (!tabsContainer) return;

  const strings = t[state.activeLang];
  tabsContainer.innerHTML = '';
  
  state.openTabs.forEach(tabName => {
    const file = allFilesMap[tabName];
    const fileClass = file ? `icon-${file.icon}` : '';
    const isActive = tabName === state.activeFile ? 'active' : '';
    
    const tabEl = document.createElement('div');
    tabEl.className = `ag-tab ${isActive}`;
    tabEl.innerHTML = `
      <span class="ag-tab-icon ${fileClass}"></span>
      <span class="ag-tab-name">${tabName}</span>
      <button class="ag-tab-close" aria-label="${strings.closeTab}">×</button>
    `;
    
    tabEl.addEventListener('click', () => openTab(tabName));
    tabEl.querySelector('.ag-tab-close').addEventListener('click', (e) => closeTab(tabName, e));
    
    tabsContainer.appendChild(tabEl);
  });
}

// Render active file content inside editor
function renderActiveFile() {
  const container = document.getElementById('ag-editor-content');
  const codeToggle = document.getElementById('ag-btn-code-mode');
  const previewToggle = document.getElementById('ag-btn-preview-mode');
  if (!container) return;

  const strings = t[state.activeLang];

  // Configure toggles active states
  if (state.editorMode === 'code') {
    codeToggle.classList.add('active');
    previewToggle.classList.remove('active');
    
    const code = getRawFileContent(state.activeFile, state.activeLang);
    container.innerHTML = `
      <div class="ag-code-container">
        <button class="ag-copy-btn" onclick="copyActiveCode()">${strings.copyCode}</button>
        <pre><code id="ag-code-pre">${escapeHTML(code)}</code></pre>
      </div>
    `;
  } else {
    codeToggle.classList.remove('active');
    previewToggle.classList.add('active');
    
    const preview = getPreviewHTML(state.activeFile, state.activeLang);
    container.innerHTML = preview;
    
    // Bind contact form events if loaded
    if (state.activeFile === 'contact_me.js') {
      const form = document.getElementById('ag-contact-form');
      if (form) {
        form.addEventListener('submit', handleContactSubmit);
      }
    }
  }
}

// Utility to escape HTML strings for display inside code block
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Setup form submit logic
function handleContactSubmit(e) {
  e.preventDefault();
  const strings = t[state.activeLang];
  const submitBtn = document.getElementById('c-submit');
  const name = document.getElementById('c-name').value;
  const email = document.getElementById('c-email').value;
  const msg = document.getElementById('c-message').value;

  if (!name || !email || !msg) {
    alert(strings.contactFormError);
    return;
  }

  submitBtn.disabled = true;
  submitBtn.querySelector('span').textContent = strings.contactSending;

  const targetEmail = strings.email || "hazem.soliman.dev@gmail.com";

  fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: msg,
      _subject: `New Portfolio Message from ${name}`,
      _captcha: "false"
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    submitBtn.disabled = false;
    submitBtn.querySelector('span').textContent = strings.contactSubmit;
    document.getElementById('ag-contact-form').reset();
    
    // Announcer for screen reader
    const announcer = document.getElementById('ag-announcer');
    if (announcer) {
      announcer.textContent = strings.contactFormSuccess;
    }
    
    alert(strings.contactFormSuccess);
  })
  .catch(error => {
    console.error('Error sending message:', error);
    submitBtn.disabled = false;
    submitBtn.querySelector('span').textContent = strings.contactSubmit;
    alert(state.activeLang === 'ar' ? 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.' : 'Failed to send message. Please try again later.');
  });
}

// Update translations across global shell items
function updateShellTranslations() {
  const strings = t[state.activeLang];
  
  // Breadcrumbs title
  const breadcrumb = document.getElementById('ag-breadcrumb-active');
  if (breadcrumb) {
    breadcrumb.textContent = state.activeFile;
  }
  
  // Explorer Title
  const explorerTitle = document.getElementById('ag-explorer-title');
  if (explorerTitle) {
    explorerTitle.textContent = strings.files;
  }

  // Workspace explorer title
  const workspaceTitle = document.getElementById('ag-workspace-title');
  if (workspaceTitle) {
    workspaceTitle.textContent = strings.workspace;
  }

  // Toggles and Search Inputs
  const searchInput = document.getElementById('ag-search-input');
  if (searchInput) {
    searchInput.placeholder = strings.searchPlaceholder;
  }

  const btnCode = document.getElementById('ag-btn-code-mode');
  if (btnCode) btnCode.textContent = strings.codeMode;

  const btnPreview = document.getElementById('ag-btn-preview-mode');
  if (btnPreview) btnPreview.textContent = strings.previewMode;

  const langLabel = document.getElementById('ag-lang-label');
  if (langLabel) langLabel.textContent = strings.language;
  
  // Status Bar elements
  const statusBranch = document.getElementById('ag-status-branch');
  if (statusBranch) statusBranch.textContent = strings.gitBranch + 'main';

  const statusMsg = document.getElementById('ag-status-message');
  if (statusMsg) statusMsg.textContent = strings.statusOpenForWork;

  const statusReady = document.getElementById('ag-status-ready');
  if (statusReady) statusReady.textContent = strings.statusReady;

  // Terminal Title
  const termTitle = document.getElementById('ag-terminal-title');
  if (termTitle) termTitle.textContent = strings.terminalTitle;

  // Mobile Footer Navigation
  document.querySelectorAll('.ag-footer-btn').forEach(btn => {
    const key = btn.dataset.key;
    if (key && strings[key]) {
      const labelEl = btn.querySelector('.ag-footer-label');
      if (labelEl) labelEl.textContent = strings[key];
    }
  });

  // Sidebar file labels
  document.querySelectorAll('.ag-file-node .ag-file-name').forEach(node => {
    const fileId = node.parentElement.dataset.id;
    if (fileId === 'about_me.md') node.textContent = strings.fileAbout;
    else if (fileId === 'skills.json') node.textContent = strings.fileSkills;
    else if (fileId === 'experience.csv') node.textContent = strings.fileExperience;
    else if (fileId === 'education.txt') node.textContent = strings.fileEducation;
    else if (fileId === 'contact_me.js') node.textContent = strings.fileContact;
  });

  document.querySelectorAll('.ag-folder-node .ag-folder-name').forEach(node => {
    const folderId = node.parentElement.dataset.id;
    if (folderId === 'projects') node.textContent = strings.dirProjects;
  });
}

// ── Search Logic ──
function setupSearch() {
  const searchInput = document.getElementById('ag-search-input');
  const resultsContainer = document.getElementById('ag-search-results');
  if (!searchInput || !resultsContainer) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      resultsContainer.classList.add('hidden');
      return;
    }

    const strings = t[state.activeLang];
    const results = [];

    // Search static files
    filesList.forEach(file => {
      const label = strings[getFileLabelKey(file.id)].toLowerCase();
      if (label.includes(query) || file.id.includes(query)) {
        results.push({ id: file.id, type: 'file', label: strings[getFileLabelKey(file.id)] });
      }
    });

    // Search project items
    projectFiles.forEach(proj => {
      const title = strings.projects[proj.key].title.toLowerCase();
      const desc = strings.projects[proj.key].desc.toLowerCase();
      const stack = getTechStack(proj.key).join(' ').toLowerCase();

      if (title.includes(query) || desc.includes(query) || stack.includes(query)) {
        results.push({ id: proj.id, type: 'project', label: strings.projects[proj.key].title });
      }
    });

    // Render results
    resultsContainer.innerHTML = '';
    if (results.length > 0) {
      resultsContainer.classList.remove('hidden');
      results.forEach(res => {
        const itemEl = document.createElement('div');
        itemEl.className = 'ag-search-result-item';
        itemEl.innerHTML = `<span class="res-type">${res.type}</span> ${res.label}`;
        itemEl.addEventListener('click', () => {
          openTab(res.id);
          searchInput.value = '';
          resultsContainer.classList.add('hidden');
        });
        resultsContainer.appendChild(itemEl);
      });
    } else {
      resultsContainer.classList.remove('hidden');
      resultsContainer.innerHTML = `<div class="ag-search-no-results">${state.activeLang === 'ar' ? 'لا توجد نتائج' : 'No results found'}</div>`;
    }
  });

  // Hide dropdown on blur
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
      resultsContainer.classList.add('hidden');
    }
  });
}

function getFileLabelKey(fileId) {
  if (fileId === 'about_me.md') return 'fileAbout';
  if (fileId === 'skills.json') return 'fileSkills';
  if (fileId === 'experience.csv') return 'fileExperience';
  if (fileId === 'education.txt') return 'fileEducation';
  if (fileId === 'contact_me.js') return 'fileContact';
  return '';
}

// ── Terminal Simulator ──
const terminalCommands = {
  help: {
    en: 'List of available commands: help, ls, cat [file], clear, contact, theme [dark/light], lang [en/ar], skills, projects',
    ar: 'قائمة الأوامر المتاحة: help, ls, cat [file], clear, contact, theme [dark/light], lang [en/ar], skills, projects'
  },
  invalid: {
    en: 'Command not found. Type "help" for a list of commands.',
    ar: 'الأمر غير موجود. اكتب "help" لعرض قائمة الأوامر المتاحة.'
  }
};

function initTerminal() {
  const termBody = document.getElementById('ag-terminal-output');
  const termInput = document.getElementById('ag-terminal-input');
  if (!termBody || !termInput) return;

  const strings = t[state.activeLang];
  
  // Output welcome banner
  termBody.innerHTML = `<div class="term-line term-welcome">${strings.terminalWelcome}</div>`;

  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const line = termInput.value.trim();
      termInput.value = '';
      if (!line) return;

      // Add to command history
      state.terminalHistory.push(line);
      state.terminalHistoryIndex = state.terminalHistory.length;

      executeTerminalCommand(line);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (state.terminalHistoryIndex > 0) {
        state.terminalHistoryIndex--;
        termInput.value = state.terminalHistory[state.terminalHistoryIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (state.terminalHistoryIndex < state.terminalHistory.length - 1) {
        state.terminalHistoryIndex++;
        termInput.value = state.terminalHistory[state.terminalHistoryIndex];
      } else {
        state.terminalHistoryIndex = state.terminalHistory.length;
        termInput.value = '';
      }
    }
  });
}

function executeTerminalCommand(cmdLine) {
  const termBody = document.getElementById('ag-terminal-output');
  const prompt = t[state.activeLang].terminalPrompt;
  
  // Output typed command
  const inputLine = document.createElement('div');
  inputLine.className = 'term-line';
  inputLine.innerHTML = `<span class="term-prompt">${prompt}</span> <span>${escapeHTML(cmdLine)}</span>`;
  termBody.appendChild(inputLine);

  const tokens = cmdLine.split(/\s+/);
  const cmd = tokens[0].toLowerCase();
  const args = tokens.slice(1);
  const strings = t[state.activeLang];

  let responseHTML = '';

  switch (cmd) {
    case 'help':
      responseHTML = `<div>${terminalCommands.help[state.activeLang]}</div>`;
      break;

    case 'clear':
      termBody.innerHTML = '';
      return;

    case 'ls':
      responseHTML = `<div class="term-grid">
        <span class="term-item-file">about_me.md</span>
        <span class="term-item-file">skills.json</span>
        <span class="term-item-dir">projects/</span>
        <span class="term-item-file">experience.csv</span>
        <span class="term-item-file">education.txt</span>
        <span class="term-item-file">contact_me.js</span>
      </div>`;
      break;

    case 'theme':
      if (args[0] === 'dark' || args[0] === 'light') {
        applyTheme(args[0]);
        responseHTML = `<div>Theme changed to ${args[0]}</div>`;
      } else {
        responseHTML = `<div>Usage: theme [dark/light]. Current: ${state.activeTheme}</div>`;
      }
      break;

    case 'lang':
      if (args[0] === 'en' || args[0] === 'ar') {
        applyLang(args[0]);
        responseHTML = `<div>Language changed to ${args[0]}</div>`;
      } else {
        responseHTML = `<div>Usage: lang [en/ar]. Current: ${state.activeLang}</div>`;
      }
      break;

    case 'contact':
      responseHTML = `<div>
        <strong>Email:</strong> ${strings.email}<br/>
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hazem-soliman-swd" target="_blank">linkedin.com/in/hazem-soliman-swd</a><br/>
        <strong>GitHub:</strong> <a href="https://github.com/Hazem-Soliman-dev" target="_blank">github.com/Hazem-Soliman-dev</a>
      </div>`;
      break;

    case 'cat':
      if (!args[0]) {
        responseHTML = `<div>Usage: cat [filename]</div>`;
      } else {
        let cleanName = args[0].replace('projects/', '');
        let content = getRawFileContent(cleanName, state.activeLang);
        if (!content) {
          content = getRawFileContent(args[0], state.activeLang);
        }
        
        if (content) {
          responseHTML = `<pre class="term-cat-out">${escapeHTML(content)}</pre>`;
          // Open in editor as well!
          let foundFile = filesList.find(f => f.id === cleanName) || projectFiles.find(p => p.id === cleanName);
          if (foundFile) {
            openTab(foundFile.id);
          }
        } else {
          responseHTML = `<div class="term-error">File not found: ${args[0]}</div>`;
        }
      }
      break;

    case 'skills':
      responseHTML = `<div class="term-skills-list">
        <strong>${strings.skillsLanguages}:</strong> TypeScript, JavaScript, PHP, Python, C#, SQL<br/>
        <strong>${strings.skillsBackend}:</strong> NestJS, Node.js, Express, Laravel, .NET<br/>
        <strong>${strings.skillsFrontend}:</strong> React, Next.js, Angular, Tailwind CSS, ShadCN<br/>
        <strong>${strings.skillsDatabases}:</strong> PostgreSQL, MySQL, MongoDB, Redis, Prisma, Drizzle<br/>
        <strong>${strings.skillsCloud}:</strong> AWS, Supabase, Docker, Vercel, Railway, Cloudflare, Git
      </div>`;
      break;

    case 'projects':
      responseHTML = `
        <table class="term-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Tech Stack</th>
            </tr>
          </thead>
          <tbody>
            ${projectFiles.map(p => {
              return `<tr>
                <td style="color:var(--ag-accent)">${strings.projects[p.key].title.split('—')[0].trim()}</td>
                <td>${getTechStack(p.key).slice(0, 4).join(', ')}...</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      `;
      break;

    default:
      responseHTML = `<div class="term-error">${terminalCommands.invalid[state.activeLang]}</div>`;
  }

  const outputLine = document.createElement('div');
  outputLine.className = 'term-output-block';
  outputLine.innerHTML = responseHTML;
  termBody.appendChild(outputLine);
  
  // Scroll terminal to bottom
  const container = document.getElementById('ag-terminal-body');
  container.scrollTop = container.scrollHeight;
}

// Mobile sidebar controls
function toggleSidebar(forceState) {
  const sidebar = document.getElementById('ag-sidebar');
  const overlay = document.getElementById('ag-sidebar-overlay');
  
  state.sidebarOpen = typeof forceState === 'boolean' ? forceState : !state.sidebarOpen;
  
  if (state.sidebarOpen) {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  } else {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }
}

// ── Startup Initialization ──
document.addEventListener('DOMContentLoaded', () => {
  // Read saved styles and load managers
  initTheme();
  initLang();

  // Listen to lang changes
  window.addEventListener('langChanged', (e) => {
    state.activeLang = e.detail.lang;
    updateShellTranslations();
    renderTabs();
    renderActiveFile();
    
    // Reset terminal welcome line
    const welcome = document.querySelector('.term-welcome');
    if (welcome) {
      welcome.textContent = t[state.activeLang].terminalWelcome;
    }
  });

  // Listen to theme changes
  window.addEventListener('themeChanged', (e) => {
    state.activeTheme = e.detail.theme;
  });

  state.activeLang = document.documentElement.lang || 'en';
  state.activeTheme = document.documentElement.getAttribute('data-theme') || 'light';

  // Folders accordion toggle
  document.querySelectorAll('.ag-folder-toggle').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const sublist = el.nextElementSibling;
      const arrow = el.querySelector('.ag-folder-arrow');
      
      if (sublist.classList.contains('collapsed')) {
        sublist.classList.remove('collapsed');
        arrow.style.transform = 'rotate(90deg)';
      } else {
        sublist.classList.add('collapsed');
        arrow.style.transform = 'rotate(0deg)';
      }
    });
  });

  // File nodes navigation trigger
  document.querySelectorAll('.ag-file-node').forEach(node => {
    node.addEventListener('click', () => {
      const fileId = node.dataset.id;
      if (fileId) {
        openTab(fileId);
        // Auto-close sidebar in mobile on file click
        if (window.innerWidth < 1024) {
          toggleSidebar(false);
        }
      }
    });
  });

  // Theme & Lang clicks
  const themeToggleBtn = document.getElementById('ag-theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      toggleTheme();
    });
  }

  const langToggleBtn = document.getElementById('ag-lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      toggleLang();
    });
  }

  // Toggle editor preview/code modes
  document.getElementById('ag-btn-code-mode').addEventListener('click', () => {
    state.editorMode = 'code';
    renderActiveFile();
  });

  document.getElementById('ag-btn-preview-mode').addEventListener('click', () => {
    state.editorMode = 'preview';
    renderActiveFile();
  });

  // Search setup
  setupSearch();

  // Terminal setup
  initTerminal();

  // Collapsible bottom terminal pane triggers
  const termHeader = document.getElementById('ag-terminal-header');
  const termBodyWrap = document.getElementById('ag-terminal-body-wrap');
  const termCollapseBtn = document.getElementById('ag-terminal-collapse-btn');
  const agShell = document.querySelector('.ag-shell');

  if (termHeader && termCollapseBtn) {
    termCollapseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.terminalCollapsed = !state.terminalCollapsed;
      
      if (state.terminalCollapsed) {
        termBodyWrap.style.display = 'none';
        agShell.style.setProperty('--terminal-h', '32px');
        termCollapseBtn.style.transform = 'rotate(180deg)';
      } else {
        termBodyWrap.style.display = 'flex';
        agShell.style.setProperty('--terminal-h', `${state.terminalHeight}px`);
        termCollapseBtn.style.transform = 'rotate(0deg)';
      }
    });
  }

  // Mobile drawer overlay close trigger
  const overlay = document.getElementById('ag-sidebar-overlay');
  if (overlay) {
    overlay.addEventListener('click', () => toggleSidebar(false));
  }

  // Mobile Footer navigation triggers
  document.querySelectorAll('.ag-footer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      
      // Remove active states
      document.querySelectorAll('.ag-footer-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (key === 'files') {
        toggleSidebar(true);
      } else if (key === 'editor') {
        toggleSidebar(false);
        // scroll/focus editor
        document.getElementById('ag-editor-content').scrollIntoView({ behavior: 'smooth' });
      } else if (key === 'run') {
        toggleSidebar(false);
        // Expand terminal and run help
        state.terminalCollapsed = false;
        termBodyWrap.style.display = 'flex';
        agShell.style.setProperty('--terminal-h', `${state.terminalHeight}px`);
        termCollapseBtn.style.transform = 'rotate(0deg)';
        executeTerminalCommand('help');
        document.getElementById('ag-terminal-body').scrollIntoView({ behavior: 'smooth' });
      } else if (key === 'search') {
        toggleSidebar(false);
        document.getElementById('ag-search-input').focus();
        document.getElementById('ag-topbar').scrollIntoView({ behavior: 'smooth' });
      } else if (key === 'settings') {
        toggleSidebar(false);
        openTab('contact_me.js');
      }
    });
  });

  // Render initial layouts
  updateShellTranslations();
  openTab('about_me.md');

  // Collapse terminal on mobile devices initially to optimize view space
  if (window.innerWidth < 640) {
    const termBodyWrap = document.getElementById('ag-terminal-body-wrap');
    const termCollapseBtn = document.getElementById('ag-terminal-collapse-btn');
    const agShell = document.querySelector('.ag-shell');
    
    state.terminalCollapsed = true;
    if (termBodyWrap) termBodyWrap.style.display = 'none';
    if (agShell) agShell.style.setProperty('--terminal-h', '32px');
    if (termCollapseBtn) termCollapseBtn.style.transform = 'rotate(180deg)';
  }
});
