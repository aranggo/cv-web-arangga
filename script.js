(() => {
  'use strict';

  const data = window.CV_DATA;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHtml = (value) => String(value == null ? '' : value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  }[character]));
  const architectureIconUrls = {
    aws: 'https://cdn.simpleicons.org/amazonaws/FF9900',
    azure: 'https://cdn.simpleicons.org/microsoftazure/0078D4',
    ec2: 'https://cdn.simpleicons.org/amazonec2/FF9900',
    s3: 'https://cdn.simpleicons.org/amazons3/569A31',
    rds: 'https://cdn.simpleicons.org/amazonrds/527FFF',
    microsoft: 'https://cdn.simpleicons.org/microsoft/737373',
    microsoft365: 'https://cdn.simpleicons.org/microsoft365/D83B01',
    fortinet: 'https://cdn.simpleicons.org/fortinet/EE3124',
    zimbra: 'https://cdn.simpleicons.org/zimbra/3399CC'
  };
  const architectureIcon = (icon, label = 'node') => architectureIconUrls[icon]
    ? `<img class="arch-node-icon" src="${architectureIconUrls[icon]}" alt="" aria-hidden="true" loading="lazy" />`
    : `<span class="arch-node-fallback" aria-hidden="true">${escapeHtml(label.slice(0, 3).toUpperCase())}</span>`;

  if (!data) return;

  let currentLanguage = 'en';
  try {
    const savedLanguage = localStorage.getItem('cv-language');
    if (savedLanguage === 'id' || savedLanguage === 'en') currentLanguage = savedLanguage;
  } catch (error) { /* Use English when storage is unavailable. */ }

  const t = (key) => key.split('.').reduce((value, part) => value && value[part], data.translations[currentLanguage]);
  const localizedItem = (section, index) => (t(`${section}.items`) || [])[index] || {};

  const applyLanguage = () => {
    document.documentElement.lang = currentLanguage;
    $$('[data-i18n]').forEach((element) => {
      const value = t(element.dataset.i18n);
      if (typeof value === 'string') element.textContent = value;
    });
    $$('[data-i18n-html]').forEach((element) => {
      const value = t(element.dataset.i18nHtml);
      if (typeof value === 'string') element.innerHTML = value;
    });
    $$('[data-i18n-placeholder]').forEach((element) => {
      const value = t(element.dataset.i18nPlaceholder);
      if (typeof value === 'string') element.setAttribute('placeholder', value);
    });
    $('#language-toggle').textContent = currentLanguage === 'en' ? 'EN / ID' : 'ID / EN';
    $('#language-toggle').setAttribute('aria-label', currentLanguage === 'en' ? 'Switch to Indonesian' : 'Switch to English');
    $('#menu-toggle').setAttribute('aria-label', $('#nav-links').classList.contains('open') ? (currentLanguage === 'id' ? 'Tutup menu' : 'Close menu') : (currentLanguage === 'id' ? 'Buka menu' : 'Open menu'));
    $('#theme-toggle').setAttribute('aria-label', document.body.classList.contains('light-theme') ? (currentLanguage === 'id' ? 'Aktifkan mode gelap' : 'Enable dark mode') : (currentLanguage === 'id' ? 'Aktifkan mode terang' : 'Enable light mode'));
  };

  const showToast = (message) => {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => toast.classList.remove('show'), 3500);
  };

  const renderProfile = () => {
    $('#availability-label').textContent = t('hero.availability');
    $('.status-dot').classList.toggle('inactive', !data.profile.availability.active);
    $('#hero-tagline').textContent = t('hero.tagline');
    $('#hero-description').textContent = t('hero.description');
    $('#profile-name').textContent = data.profile.name;
    $('#profile-role').textContent = data.profile.shortRole;
    $('#profile-location').textContent = data.profile.location;
    $('#profile-experience').textContent = t('hero.experienceValue');
    $('#stack-list').innerHTML = data.stack.map((item) => `<span class="stack-item">${escapeHtml(item)}</span>`).join('');
    $('#about-copy').innerHTML = t('about.summary').map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('');
    $('#strength-list').innerHTML = t('about.strengths').map((item, index) => `
      <article class="strength-item">
        <span class="strength-number">0${index + 1}</span>
        <div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></div>
      </article>`).join('');
  };

  let activeSkillCategory = 'All';
  const renderSkillFilters = () => {
    const categories = ['All', ...data.skills.map((skill) => skill.category)];
    $('#skill-filters').innerHTML = categories.map((category) => `
      <button class="filter-button${category === activeSkillCategory ? ' active' : ''}" type="button" role="tab" aria-selected="${category === activeSkillCategory}" data-skill-filter="${escapeHtml(category)}">${category === 'All' ? escapeHtml(t('skills.all')) : escapeHtml(t(`skills.categories.${category}`))}</button>`).join('');
  };

  const renderSkills = () => {
    const skills = activeSkillCategory === 'All' ? data.skills : data.skills.filter((skill) => skill.category === activeSkillCategory);
    const localizedSkills = t('skills.cards');
    $('#skills-grid').innerHTML = skills.map((skill) => {
      const copy = localizedSkills[data.skills.indexOf(skill)] || {};
      return `
      <article class="skill-card reveal">
        <div class="skill-card-top"><span class="skill-icon">${escapeHtml(skill.icon)}</span><span class="skill-category">${escapeHtml(skill.category)}</span></div>
        <h3>${escapeHtml(copy.label || skill.label)}</h3>
        <p class="skill-card-description">${escapeHtml(copy.description || skill.description)}</p>
        <div class="skill-tags">${skill.items.map((item) => `<span class="skill-tag">${escapeHtml(item)}</span>`).join('')}</div>
      </article>`;
    }).join('');
    observeReveals();
  };

  const renderExperience = () => {
    $('#experience-list').innerHTML = data.experience.map((item, index) => {
      const copy = localizedItem('experience', index);
      return `
      <article class="timeline-item reveal">
        <div class="timeline-date">${escapeHtml(copy.period || item.period)}</div>
        <div class="timeline-content">
          <h3>${escapeHtml(item.title)}</h3>
          <div class="company-line"><span>${escapeHtml(item.company)}</span><span>·</span><span>${escapeHtml(item.location)}</span></div>
          <p class="timeline-summary">${escapeHtml(copy.summary || item.summary)}</p>
          <button class="expand-button" type="button" aria-expanded="false" aria-controls="experience-detail-${index}" data-expand="experience-detail-${index}">${escapeHtml(t('experience.view'))} <span>＋</span></button>
          <div class="timeline-details" id="experience-detail-${index}">
            <ul>${(copy.details || item.details).map((detail) => `<li>${escapeHtml(detail)}</li>`).join('')}</ul>
            <div class="tech-tags">${item.technologies.map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('')}</div>
          </div>
        </div>
      </article>`;
    }).join('');
  };

  let activeProjectCategory = 'All';
  const renderProjectFilters = () => {
    const categories = ['All', ...new Set(data.projects.map((project) => project.category))];
    $('#project-filters').innerHTML = categories.map((category) => `
      <button class="filter-button${category === activeProjectCategory ? ' active' : ''}" type="button" role="tab" aria-selected="${category === activeProjectCategory}" data-project-filter="${escapeHtml(category)}">${category === 'All' ? escapeHtml(t('projects.all')) : escapeHtml(category)}</button>`).join('');
  };

  const renderProjects = () => {
    const query = $('#project-search').value.trim().toLowerCase();
    const projects = data.projects.filter((project) => {
      const matchesCategory = activeProjectCategory === 'All' || project.category === activeProjectCategory;
      const copy = localizedItem('projects', data.projects.indexOf(project));
      const searchable = `${project.title} ${copy.overview || project.overview} ${project.stack.join(' ')}`.toLowerCase();
      return matchesCategory && searchable.includes(query);
    });

    $('#projects-grid').innerHTML = projects.length ? projects.map((project, index) => {
      const copy = localizedItem('projects', data.projects.indexOf(project));
      return `
      <article class="project-card reveal">
        <div class="project-visual ${project.accent === 'violet' ? 'visual-violet' : project.accent === 'amber' ? 'visual-amber' : ''}">
          <span class="project-number">0${data.projects.indexOf(project) + 1} / ${escapeHtml(project.category.toUpperCase())}</span>
          <span class="project-visual-label">${project.category === 'Cloud' ? 'AWS' : project.category === 'Microsoft' ? 'HYBRID' : 'MAIL'}</span>
        </div>
        <div class="project-info">
          <p class="project-type">${escapeHtml(project.type)} · ${escapeHtml(project.period)}</p>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="project-overview">${escapeHtml(copy.overview || project.overview)}</p>
          <div class="tech-tags">${project.stack.slice(0, 4).map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('')}</div>
          <button class="project-button" type="button" data-project-id="${escapeHtml(project.id)}">${escapeHtml(t('projects.open'))}</button>
        </div>
      </article>`;
    }).join('') : `<div class="empty-state"><strong>${escapeHtml(t('projects.noMatch'))}</strong><p>${escapeHtml(t('projects.tryAgain'))}</p></div>`;
    observeReveals();
  };

  const renderCredentials = () => {
    const educationTitle = currentLanguage === 'id' ? 'Sistem Komputer (Sarjana)' : data.education[0].title;
    $('#education-list').innerHTML = data.education.map((item) => `
      <article class="credential-item"><h3>${escapeHtml(educationTitle)}</h3><p>${escapeHtml(item.organization)}</p><p class="credential-period">${escapeHtml(item.period)}</p></article>`).join('');
    $('#certification-list').innerHTML = data.certifications.length ? data.certifications.map((item) => {
      const issued = currentLanguage === 'id' ? item.issuedId : item.issued;
      const expires = currentLanguage === 'id' ? item.expiresId : item.expires;
      const status = currentLanguage === 'id' ? ({ Active: 'Aktif', 'Legacy exam': 'Ujian legacy', 'Expired / Legacy': 'Kedaluwarsa / Legacy' }[item.status] || item.status) : item.status;
      const dateLine = `${t('credentials.issued')}: ${issued}${expires ? ` · ${t('credentials.expires')}: ${expires}` : ''}`;
      const image = item.image ? `<div class="credential-image-wrap"><img class="credential-image" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt || item.title)}" loading="lazy" decoding="async" /></div>` : '';
      return `<article class="credential-item${item.image ? ' credential-item-featured' : ''}">${image}<div class="credential-status ${item.status.indexOf('Expired') >= 0 ? 'is-expired' : ''}">${escapeHtml(status)}</div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.organization)}</p><p class="credential-meta">${escapeHtml(dateLine)}</p>${item.url ? `<a class="credential-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(t('credentials.verify'))}</a>` : `<span class="credential-link muted">${escapeHtml(t('credentials.pending'))}</span>`}</article>`;
    }).join('') : `<div class="empty-state"><strong>${escapeHtml(t('credentials.noCert'))}</strong><p>${escapeHtml(t('credentials.addCert'))}</p></div>`;
  };

  const renderContactLinks = () => {
    const configuredLinks = [
      data.links.linkedin ? `<a class="contact-link" href="${escapeHtml(data.links.linkedin)}" target="_blank" rel="noreferrer">LinkedIn ↗</a>` : `<span class="contact-link muted">${escapeHtml(t('contact.linkedInMissing'))}</span>`,
      data.links.github ? `<a class="contact-link" href="${escapeHtml(data.links.github)}" target="_blank" rel="noreferrer">GitHub ↗</a>` : `<span class="contact-link muted">${escapeHtml(t('contact.githubMissing'))}</span>`,
      data.links.whatsapp ? `<a class="contact-link" href="${escapeHtml(data.links.whatsapp)}" target="_blank" rel="noreferrer">WhatsApp ↗</a>` : ''
    ].filter(Boolean);
    $('#contact-links').innerHTML = [`<a class="contact-link" href="mailto:${escapeHtml(data.profile.email)}">${escapeHtml(data.profile.email)} ↗</a>`, `<a class="contact-link" href="CV-Abdurachman-Ranggana.pdf" download>${t('hero.downloadFooter')} ↓</a>`, ...configuredLinks].join('');
  };

  const renderArchitectureTabs = () => {
    $('#architecture-tabs').innerHTML = Object.entries(data.architectures).map(([key, architecture], index) => `
      <button class="arch-tab${index === 0 ? ' active' : ''}" type="button" role="tab" aria-selected="${index === 0}" data-architecture="${escapeHtml(key)}">${architectureIcon(architecture.icon, key)}<span>${escapeHtml(t(`architecture.tabs.${key}`))}</span></button>`).join('');
  };

  const renderArchitecture = (key) => {
    const architecture = data.architectures[key];
    const copy = t(`architecture.items.${key}`);
    const nodeMap = Object.fromEntries(architecture.nodes.map((node) => [node.id, node]));
    const lines = architecture.edges.map(([fromId, toId]) => {
      const from = nodeMap[fromId];
      const to = nodeMap[toId];
      return `<line class="arch-line" x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" />`;
    }).join('');
    $('#architecture-canvas').innerHTML = `<svg class="arch-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>${architecture.nodes.map((node) => `<button class="arch-node tone-${escapeHtml(node.tone)}" type="button" style="left:${node.x}%;top:${node.y}%" data-node-id="${escapeHtml(node.id)}">${architectureIcon(node.icon, copy.nodes[node.id].label)}<span class="arch-node-label">${escapeHtml(copy.nodes[node.id].label)}</span></button>`).join('')}`;
    $('#architecture-details').innerHTML = `<p class="section-label">${escapeHtml(t('architecture.map'))}</p><h3>${escapeHtml(copy.title)}</h3><p>${escapeHtml(copy.description)}</p><div class="node-detail" id="node-detail">${escapeHtml(t('architecture.selectNode'))}</div>`;
  };

  const openProjectModal = (projectId) => {
    const project = data.projects.find((item) => item.id === projectId);
    if (!project) return;
    const copy = localizedItem('projects', data.projects.indexOf(project));
    $('#modal-content').innerHTML = `
      <p class="modal-type">${escapeHtml(project.type)}</p><h2 id="modal-title">${escapeHtml(project.title)}</h2><p class="modal-period">${escapeHtml(project.period)} · ${escapeHtml(project.category)}</p>
      <div class="modal-section"><h3>${escapeHtml(t('ui.overview'))}</h3><p>${escapeHtml(copy.overview || project.overview)}</p></div>
      <div class="modal-section"><h3>${escapeHtml(t('ui.problem'))}</h3><p>${escapeHtml(copy.problem || project.problem)}</p></div>
      <div class="modal-section"><h3>${escapeHtml(t('ui.solution'))}</h3><p>${escapeHtml(copy.solution || project.solution)}</p></div>
      <div class="modal-section"><h3>${escapeHtml(t('ui.outcome'))}</h3><p>${escapeHtml(copy.outcome || project.outcome)}</p></div>
      <div class="modal-section"><h3>${escapeHtml(t('ui.stack'))}</h3><div class="tech-tags">${project.stack.map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('')}</div></div>`;
    $('#project-modal').hidden = false;
    document.body.style.overflow = 'hidden';
    $('#modal-close').focus();
  };

  const closeProjectModal = () => {
    $('#project-modal').hidden = true;
    document.body.style.overflow = '';
  };

  const toggleTheme = () => {
    const isLight = document.body.classList.toggle('light-theme');
    try { localStorage.setItem('cv-theme', isLight ? 'light' : 'dark'); } catch (error) { /* Storage may be unavailable in file previews. */ }
    $('#theme-toggle').textContent = isLight ? '☾' : '☼';
    $('#theme-toggle').setAttribute('aria-label', isLight ? (currentLanguage === 'id' ? 'Aktifkan mode gelap' : 'Enable dark mode') : (currentLanguage === 'id' ? 'Aktifkan mode terang' : 'Enable light mode'));
  };

  const setupForm = () => {
    $('#contact-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const name = $('#form-name');
      const email = $('#form-email');
      const message = $('#form-message');
      [name, email, message].forEach((field) => field.classList.toggle('invalid', !field.value.trim() || (field === email && !email.validity.valid)));
      if ([name, email, message].some((field) => field.classList.contains('invalid'))) {
        $('#form-note').textContent = t('contact.invalid');
        return;
      }
      const subject = encodeURIComponent(`Portfolio contact from ${name.value.trim()}`);
      const body = encodeURIComponent(`${message.value.trim()}\n\nDari: ${name.value.trim()}\nEmail: ${email.value.trim()}`);
      $('#form-note').textContent = t('contact.opening');
      showToast(t('contact.opening'));
      window.location.href = `mailto:${data.profile.email}?subject=${subject}&body=${body}`;
    });
  };

  const observeReveals = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      $$('.reveal').forEach((element) => element.classList.add('visible'));
      return;
    }
    if (!observeReveals.observer) {
      observeReveals.observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observeReveals.observer.unobserve(entry.target);
        }
      }), { threshold: .08 });
    }
    $$('.reveal:not(.visible)').forEach((element) => observeReveals.observer.observe(element));
  };

  const setupNavigation = () => {
    $('#menu-toggle').addEventListener('click', () => {
      const open = $('#nav-links').classList.toggle('open');
      $('#menu-toggle').setAttribute('aria-expanded', String(open));
      $('#menu-toggle').setAttribute('aria-label', open ? (currentLanguage === 'id' ? 'Tutup menu' : 'Close menu') : (currentLanguage === 'id' ? 'Buka menu' : 'Open menu'));
    });
    $$('#nav-links a').forEach((link) => link.addEventListener('click', () => $('#nav-links').classList.remove('open')));
    $('#theme-toggle').addEventListener('click', toggleTheme);
    $('#language-toggle').addEventListener('click', () => {
      currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
      try { localStorage.setItem('cv-language', currentLanguage); } catch (error) { /* Storage may be unavailable in file previews. */ }
      applyLanguage();
      renderProfile();
      renderSkillFilters();
      renderSkills();
      renderExperience();
      renderProjectFilters();
      renderProjects();
      renderCredentials();
      renderContactLinks();
      renderArchitectureTabs();
      renderArchitecture(Object.keys(data.architectures)[0]);
      showToast(currentLanguage === 'id' ? 'Bahasa diubah ke Indonesia.' : 'Language changed to English.');
    });
    $('#back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => $('#back-to-top').classList.toggle('visible', window.scrollY > 500), { passive: true });
    const sections = $$('main section[id]');
    const links = $$('.nav-links a');
    const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }), { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));
  };

  const setupInteractions = () => {
    $('#skill-filters').addEventListener('click', (event) => {
      const button = event.target.closest('[data-skill-filter]');
      if (!button) return;
      activeSkillCategory = button.dataset.skillFilter;
      renderSkillFilters();
      renderSkills();
    });
    $('#project-filters').addEventListener('click', (event) => {
      const button = event.target.closest('[data-project-filter]');
      if (!button) return;
      activeProjectCategory = button.dataset.projectFilter;
      renderProjectFilters();
      renderProjects();
    });
    $('#project-search').addEventListener('input', renderProjects);
    $('#experience-list').addEventListener('click', (event) => {
      const button = event.target.closest('[data-expand]');
      if (!button) return;
      const details = $(`#${button.dataset.expand}`);
      const open = details.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
    $('#projects-grid').addEventListener('click', (event) => {
      const button = event.target.closest('[data-project-id]');
      if (button) openProjectModal(button.dataset.projectId);
    });
    $('#architecture-tabs').addEventListener('click', (event) => {
      const button = event.target.closest('[data-architecture]');
      if (!button) return;
      $$('.arch-tab').forEach((tab) => { const active = tab === button; tab.classList.toggle('active', active); tab.setAttribute('aria-selected', String(active)); });
      renderArchitecture(button.dataset.architecture);
    });
    $('#architecture-canvas').addEventListener('click', (event) => {
      const node = event.target.closest('[data-node-id]');
      if (!node) return;
      $$('.arch-node').forEach((item) => item.classList.toggle('selected', item === node));
      const currentArchitecture = Object.keys(data.architectures).find((key) => {
        const tab = $(`[data-architecture="${key}"]`);
        return tab && tab.classList.contains('active');
      });
      const selected = data.architectures[currentArchitecture].nodes.find((item) => item.id === node.dataset.nodeId);
      const selectedCopy = t(`architecture.items.${currentArchitecture}.nodes.${node.dataset.nodeId}`);
      $('#node-detail').textContent = selectedCopy ? selectedCopy.detail : selected.detail;
      $('#node-detail').classList.add('visible');
    });
    $$('.scene-node').forEach((node) => node.addEventListener('click', () => {
      $$('.scene-node').forEach((item) => item.classList.toggle('active', item === node));
      showToast(currentLanguage === 'id' ? `Lapisan aktif: ${node.textContent}` : `Active layer: ${node.textContent}`);
    }));
    $('#three-scene').addEventListener('pointermove', (event) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
      event.currentTarget.style.transform = `rotateY(${x * 3}deg) rotateX(${y * -3}deg)`;
    });
    $('#three-scene').addEventListener('pointerleave', (event) => { event.currentTarget.style.transform = ''; });
    $('#modal-close').addEventListener('click', closeProjectModal);
    $('#project-modal').addEventListener('click', (event) => { if (event.target === $('#project-modal')) closeProjectModal(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeProjectModal(); });
  };

  const init = () => {
    applyLanguage();
    try { if (localStorage.getItem('cv-theme') === 'light') toggleTheme(); } catch (error) { /* Use dark mode when storage is unavailable. */ }
    renderProfile();
    renderSkillFilters();
    renderSkills();
    renderExperience();
    renderProjectFilters();
    renderProjects();
    renderCredentials();
    renderContactLinks();
    renderArchitectureTabs();
    renderArchitecture(Object.keys(data.architectures)[0]);
    $('#current-year').textContent = new Date().getFullYear();
    setupNavigation();
    setupInteractions();
    setupForm();
    observeReveals();
  };

  init();
})();
