function toggleSection(section) {
    if (!section) return;
    section.classList.toggle('expanded');
    if (section.classList.contains('expanded') && window.innerWidth <= 768) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
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
                const section = target.closest('.summary-section') || target;
                if (section) {
                    section.classList.add('expanded');
                    setTimeout(() => {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            }
        });
    });

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
});
