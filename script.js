window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

document.getElementById('back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});
document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  // Перевірка, чи необхідно показувати кнопку при прокрутці
  window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = 'block';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  });

  // Плавний скролл вгору при натисканні кнопки
  scrollToTopBtn.addEventListener('click', function () {
      document.body.scrollTop = 0; // Для Safari
      document.documentElement.scrollTop = 0; // Для інших браузерів
  });
});



/*Тема*/
document.addEventListener('DOMContentLoaded', function () {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const body = document.body;

  // Перевірка, чи є збережена тема в локальному сховищі
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      body.classList.add(savedTheme);
  }

  themeToggleBtn.addEventListener('click', function () {
      // Змінити тему та зберегти її в локальному сховищі
      if (body.classList.contains('light-theme')) {
          body.classList.remove('light-theme');
          body.classList.add('dark-theme');
          localStorage.setItem('theme', 'dark-theme');
      } else {
          body.classList.remove('dark-theme');
          body.classList.add('light-theme');
          localStorage.setItem('theme', 'light-theme');
      }
  });
});

