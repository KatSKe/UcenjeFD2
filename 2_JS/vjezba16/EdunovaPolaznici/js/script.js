document.addEventListener('DOMContentLoaded', () => {
    // Podaci o polaznicima - korisnik ih je već ispravio
    const polaznici = [
        { ime: 'Blanka', prezime: 'Despotović', slika: 'img/blanka.png', github: 'https://github.com/blankadespotovic' },
        { ime: 'Borna', prezime: 'Novak', slika: 'img/borna.png', github: 'https://github.com/BornaaRNR' },
        { ime: 'Juraj', prezime: 'Kardoš', slika: 'img/juraj.png', github: 'https://github.com/jkardos10' },
        { ime: 'Katarina', prezime: 'Skenderović', slika: 'img/katarina.png', github: 'https://github.com/KatSKe' },
        { ime: 'Marija', prezime: 'Dergez', slika: 'img/marija.png', github: 'https://github.com/marijadergez' },
        { ime: 'Tomislav', prezime: 'Jakopec', slika: 'img/tomislav.png', github: 'https://github.com/tjakopec/EdunovaFD1' },
        { ime: 'Vladimir', prezime: 'Geić', slika: 'img/vladimir.png', github: 'https://github.com/vladogeic' },
        { ime: 'Željka', prezime: 'Haramina', slika: 'img/zeljka.png', github: 'https://github.com/ZeljkaH55' }
    ];


    const karticeKontejner = document.getElementById('kartice-kontejner');

    // Modal elementi
    const modalOverlay = document.getElementById('modal-overlay');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeModalBtn = document.querySelector('.modal-close');
    const prevButton = document.querySelector('.modal-prev');
    const nextButton = document.querySelector('.modal-next');

    let currentIndex = 0;

    // Funkcija za renderiranje kartica
    function renderCards() {
        if (!karticeKontejner) return;

        polaznici.forEach((polaznik, index) => {
            const kartica = document.createElement('div');
            kartica.classList.add('polaznik-kartica');
            kartica.innerHTML = `
                <img src="${polaznik.slika}" alt="Slika polaznika ${polaznik.ime} ${polaznik.prezime}" data-index="${index}">
                <p><a title="Klik za otvaranje github profila ${polaznik.ime} ${polaznik.prezime} u novoj kartici" href="${polaznik.github}" target="_blank">${polaznik.ime} ${polaznik.prezime}</a></p>
            `;
            karticeKontejner.appendChild(kartica);
        });
    }

    // Funkcija za otvaranje modala
    function openModal(index) {
        currentIndex = parseInt(index);
        updateModalContent();
        modalOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden'; // Spriječava skrolanje pozadine
    }

    // Funkcija za zatvaranje modala
    function closeModalFunction() {
        modalOverlay.classList.remove('visible');
        document.body.style.overflow = ''; // Omogućava skrolanje pozadine
    }

    // Funkcija za ažuriranje sadržaja modala
    function updateModalContent() {
        const polaznik = polaznici[currentIndex];
        modalImage.src = polaznik.slika;
        modalImage.alt = `Slika polaznika ${polaznik.ime} ${polaznik.prezime}`;
        modalCaption.innerHTML = `<a title="Klik za otvaranje github profila ${polaznik.ime} ${polaznik.prezime} u novoj kartici" href="${polaznik.github}" target="_blank">${polaznik.ime} ${polaznik.prezime}</a>`;
    }

    // Funkcije za navigaciju
    function showNext() {
        currentIndex = (currentIndex + 1) % polaznici.length;
        updateModalContent();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + polaznici.length) % polaznici.length;
        updateModalContent();
    }

    // --- Event Listeners ---

    // Otvaranje modala klikom na sliku u kartici
    karticeKontejner.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            openModal(e.target.dataset.index);
        }
    });

    // Zatvaranje modala
    closeModalBtn.addEventListener('click', closeModalFunction);
    modalOverlay.addEventListener('click', (e) => {
        // Zatvori samo ako se klikne na pozadinu, ne na sadržaj
        if (e.target === modalOverlay) {
            closeModalFunction();
        }
    });

    // Navigacija
    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

    // Navigacija tipkovnicom
    document.addEventListener('keydown', (e) => {
        if (!modalOverlay.classList.contains('visible')) return; // radi samo ako je modal otvoren

        if (e.key === 'ArrowRight') {
            showNext();
        } else if (e.key === 'ArrowLeft') {
            showPrev();
        } else if (e.key === 'Escape') {
            closeModalFunction();
        }
    });

    // Inicijalno renderiranje kartica
    renderCards();
});
