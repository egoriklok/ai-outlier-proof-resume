    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {threshold: .08});
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const progress = document.getElementById('progress');
    function updateProgress() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    }
    window.addEventListener('scroll', updateProgress, {passive:true});
    updateProgress();

    document.querySelectorAll('.print-button').forEach(button => {
      button.addEventListener('click', () => window.print());
    });