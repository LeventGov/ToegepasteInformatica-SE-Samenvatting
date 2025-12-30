function toggleSection(section) {
    if (!section) return;
    section.classList.toggle('expanded');
    if (section.classList.contains('expanded') && window.innerWidth <= 768) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
}

function collapseAllSummaries(exceptId) {
    document.querySelectorAll('.summary-section').forEach(sec => {
        if (!exceptId || ('#' + sec.id) !== exceptId) {
            sec.classList.remove('expanded');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflowX = 'hidden';

    const firstSection = document.querySelector('.summary-section');
    if (firstSection) {
        firstSection.classList.add('expanded');
    }

    if (window.location.hash.startsWith('#lecture')) {
        setTimeout(() => {
            const element = document.querySelector(window.location.hash);
            if (element) {
                collapseAllSummaries(window.location.hash);
                const section = element.closest('.summary-section') || element;
                if (section) {
                    section.classList.add('expanded');
                    setTimeout(() => {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            }
        }, 100);
    }

    document.querySelectorAll('a[href^="#lecture"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                collapseAllSummaries(link.getAttribute('href'));
                const section = target.closest('.summary-section') || target;
                if (section) {
                    section.classList.add('expanded');
                    setTimeout(() => {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
                const lecturesSection = document.getElementById('lectures-section');
                if (lecturesSection) {
                    lecturesSection.classList.remove('expanded');
                }
            }
        });
    });

    const lecturesSection = document.getElementById('lectures-section');
    if (lecturesSection) {
        const header = lecturesSection.querySelector('.section-header');
        if (header) {
            header.addEventListener('click', () => toggleSection(lecturesSection));
            const btn = header.querySelector('.expand-btn');
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleSection(lecturesSection);
                });
            }
        }
    }

    document.querySelectorAll('.summary-header').forEach(header => {
        header.addEventListener('click', () => {
            const section = header.closest('.summary-section');
            toggleSection(section);
        });
        const btn = header.querySelector('.expand-btn');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const section = header.closest('.summary-section');
                toggleSection(section);
            });
        }
    });

    // Study Tips button
    const studyTipBtn = document.getElementById('study-tip-btn');
    if (studyTipBtn) {
        studyTipBtn.addEventListener('click', () => {
            const modal = document.getElementById('study-tips-modal');
            if (modal) {
                const isVisible = modal.style.display !== 'none';
                modal.style.display = isVisible ? 'none' : 'block';
                if (!isVisible) {
                    setTimeout(() => {
                        modal.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            }
        });
    }
});
