window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');

  // ننتظر 3 ثواني عشان نضمن ظهور اللودر حتى لو الصفحة سريعة التحميل
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';

      // تشغيل تأثير fade-in للعناصر
      document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('show');
      });

    }, 500);
  }, 3000); // 3 ثواني تحميل ثابتة
});

// تأخير الانتقال عند الضغط على روابط اللغات مع ظهور اللودر
document.querySelectorAll('.lang-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href');
    const loader = document.getElementById('loading-screen');

    loader.style.display = 'flex';
    loader.style.opacity = '1';

    // تأخير 3 ثواني قبل الانتقال
    setTimeout(() => {
      window.location.href = href;
    }, 3000);
  });
});
