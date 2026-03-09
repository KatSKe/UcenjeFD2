// Niz polaznika - ovdje možeš ručno promijeniti imena i prezimena
const polaznici = [
    {
        id: 1,
        ime: "Blanka",
        prezime: "Horvat",
        slika: "img/blanka.png"
    },
    {
        id: 2,
        ime: "Borna",
        prezime: "Kovačević",
        slika: "img/borna.png"
    },
    {
        id: 3,
        ime: "Juraj",
        prezime: "Novak",
        slika: "img/juraj.png"
    },
    {
        id: 4,
        ime: "Katarina",
        prezime: "Marić",
        slika: "img/katarina.png"
    },
    {
        id: 5,
        ime: "Marija",
        prezime: "Babić",
        slika: "img/marija.png"
    },
    {
        id: 6,
        ime: "Tomislav",
        prezime: "Jurić",
        slika: "img/tomislav.png"
    },
    {
        id: 7,
        ime: "Vladimir",
        prezime: "Knežević",
        slika: "img/Vladimir.png"
    },
    {
        id: 8,
        ime: "Željka",
        prezime: "Pavlović",
        slika: "img/zeljka.png"
    }
];

// Dohvati kontejnere i elemente
const cardsGrid = document.getElementById('cards-grid');
const galleryModal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const closeModal = document.querySelector('.close-modal');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Funkcija za renderiranje kartica
function renderCards() {
    cardsGrid.innerHTML = '';
    
    polaznici.forEach((polaznik, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-index', index);
        
        card.innerHTML = `
            <img src="${polaznik.slika}" alt="${polaznik.ime} ${polaznik.prezime}" class="card-image">
            <div class="card-info">
                <h3 class="card-name">${polaznik.ime} ${polaznik.prezime}</h3>
                <p class="card-role">Frontend Developer</p>
            </div>
        `;
        
        // Dodaj event listener za otvaranje galerije
        card.addEventListener('click', () => {
            openGallery(index);
        });
        
        cardsGrid.appendChild(card);
    });
}

// Funkcija za otvaranje galerije
function openGallery(index) {
    currentIndex = index;
    updateGalleryContent();
    galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Spriječi scrollanje pozadine
}

// Funkcija za zatvaranje galerije
function closeGallery() {
    galleryModal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Vrati scrollanje
}

// Funkcija za ažuriranje sadržaja galerije
function updateGalleryContent() {
    const polaznik = polaznici[currentIndex];
    modalImage.src = polaznik.slika;
    modalImage.alt = `${polaznik.ime} ${polaznik.prezime}`;
    modalName.textContent = `${polaznik.ime} ${polaznik.prezime}`;
}

// Funkcija za navigaciju na prethodni polaznik
function showPrevious() {
    currentIndex = (currentIndex - 1 + polaznici.length) % polaznici.length;
    updateGalleryContent();
}

// Funkcija za navigaciju na sljedeći polaznik
function showNext() {
    currentIndex = (currentIndex + 1) % polaznici.length;
    updateGalleryContent();
}

// Event listeneri
closeModal.addEventListener('click', closeGallery);

prevBtn.addEventListener('click', showPrevious);

nextBtn.addEventListener('click', showNext);

// Zatvori modal klikom izvan slike
galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        closeGallery();
    }
});

// Keyboard navigacija
document.addEventListener('keydown', (e) => {
    if (!galleryModal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeGallery();
    } else if (e.key === 'ArrowLeft') {
        showPrevious();
    } else if (e.key === 'ArrowRight') {
        showNext();
    }
});

// Inicijaliziraj prikaz pri učitavanju stranice
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
});
