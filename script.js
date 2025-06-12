 const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

  
    const animatedElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    animatedElements.forEach(el => observer.observe(el));

   
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      }
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    const materiData = {
      1: {
        title: "pendahuluan",
        image: "pendahuluan.jpg",
        alt: "pendahuluan",
        content: "Indonesia adalah bangsa yang kaya akan keragaman tradisi dan budaya dari berbagai suku, agama, dan daerah."
      },
      2: {
        title: "Makna dan Manfaat Kekayaan Tradisi",
        image: "gambar 2.jpg",
        alt: "gambar ke 2",
        content: " Kekayaan tradisi memberikan kebanggaan nasional karena menunjukkan bahwa Indonesia adalah bangsa yang kaya budaya."
      },
      3: {
        title: "Nilai-Nilai Pancasila yang Terkandung dalam Kekayaan Tradisi",
        image: "wayang kulit.jpg",
        alt: "gambar ke 3",
        content: " Dalam kekayaan tradisi terkandung nilai-nilai Pancasila seperti Ketuhanan Yang Maha Esa yang tercermin dalam penghormatan terhadap tradisi keagamaan yang berbeda-beda."
      },
      4: {
        title: "Cara Belajar dari Kekayaan Tradisi",
        image: "tradisi.jpg",
        alt: "gambar ke 4",
        content: " Belajar dari kekayaan tradisi dapat dilakukan dengan mempelajari cerita rakyat dan sejarah tradisi untuk mengenal nilai-nilai luhur yang diwariskan secara turun-temurun."
      },
      5: {
        title: "Tantangan dan Upaya Pelestarian",
        image: "gambar 5.jpg",
        alt: "gambar ke 5",
        content: " Tradisi harus terus dihidupkan dan direvitalisasi agar nilainya tetap relevan di tengah perubahan sosial, ekonomi, dan budaya."
      },
      6: {
        title: "Kesimpulan",
        image: "gambar 6.jpg",
        alt: "gambar ke 6",
        content: "Belajar dari kekayaan tradisi bukan hanya memahami sejarah, tetapi juga menghayati nilai-nilai luhur yang terkandung di dalamnya untuk memperkuat persatuan, toleransi, dan keadilan sosial sesuai nilai-nilai Pancasila."
      },
    };

  
    const modal = document.getElementById('detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.getElementById('modal-close');

   
    function openModal(id) {
      const data = materiData[id];
      if (!data) return;
      modalTitle.textContent = data.title;
      modalImage.src = data.image;
      modalImage.alt = data.alt;
      modalContent.textContent = data.content;
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.setAttribute('aria-hidden', 'false');
      modalCloseBtn.focus();
    }

   
    function closeModal() {
      modal.classList.add('opacity-0', 'pointer-events-none');
      modal.setAttribute('aria-hidden', 'true');
    }


    document.querySelectorAll('.card-materi').forEach(card => {
      card.addEventListener('click', () => {
        openModal(card.dataset.id);
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card.dataset.id);
        }
      });
    });

  
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
        closeModal();
      }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

 
      ['name', 'email', 'message'].forEach(id => {
        document.getElementById(`error-${id}`).classList.add('hidden');
      });

      let valid = true;
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name) {
        document.getElementById('error-name').classList.remove('hidden');
        valid = false;
      }
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('error-email').classList.remove('hidden');
        valid = false;
      }
      if (!message) {
        document.getElementById('error-message').classList.remove('hidden');
        valid = false;
      }

      if (!valid) return;

  
      alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.');
      contactForm.reset();
    }); 