document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Local Time (WIB / UTC+7)
    const clockEl = document.getElementById('live-clock');
    function updateClock() {
        if (!clockEl) return;
        const now = new Date();
        const options = {
            timeZone: 'Asia/Jakarta',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        clockEl.textContent = new Intl.DateTimeFormat('id-ID', options).format(now) + ' WIB';
    }
    updateClock();
    setInterval(updateClock, 1000);

    // 2. Interactive Project Tech Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedTech = btn.getAttribute('data-filter').toLowerCase();

            projectCards.forEach(card => {
                const techs = card.getAttribute('data-tech').toLowerCase();
                if (selectedTech === 'all' || techs.includes(selectedTech)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Project Image Lightbox / Preview Modal
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeModalBtn = document.getElementById('close-modal');

    document.querySelectorAll('.preview-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            if (!modal) return;
            modalImg.src = trigger.getAttribute('data-img');
            modalTitle.textContent = trigger.getAttribute('data-title');
            modalDesc.textContent = trigger.getAttribute('data-desc');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    }

    // 4. Client-Side Live Image Upload Preview (Profil & Proyek Baru tanpa reload)
    const avatarInput = document.getElementById('avatar-upload');
    const avatarPreview = document.getElementById('profile-avatar-img');
    if (avatarInput && avatarPreview) {
        avatarInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    avatarPreview.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // 5. Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));

    // 6. Copy JSON Button on Dashboard
    const copyJsonBtn = document.getElementById('copy-json-btn');
    const rawJsonEl = document.getElementById('raw-json-content');
    if (copyJsonBtn && rawJsonEl) {
        copyJsonBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(rawJsonEl.textContent);
                const originalText = copyJsonBtn.textContent;
                copyJsonBtn.textContent = 'Tersalin!';
                setTimeout(() => copyJsonBtn.textContent = originalText, 2000);
            } catch (err) {
                console.error('Gagal menyalin JSON:', err);
            }
        });
    }
});
