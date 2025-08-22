const lists = document.querySelector('.lists');
const toggleButton = document.querySelector('.menu-toggle');
const toggleIcon = toggleButton.querySelector('i');

function toggleMenu() {
  lists.classList.toggle("show");
  const expanded = lists.classList.contains("show");
  toggleIcon.classList.toggle("fa-times", expanded);
  toggleIcon.classList.toggle("fa-bars", !expanded);
    toggleIcon.className = expanded ? "fas fa-times" : "fas fa-bars";
}
const fadeIns = document.querySelectorAll('.fade-in');

function checkFadeIns() {
  fadeIns.forEach((fadein, index) => {
    const rect = fadein.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      fadein.style.transitionDelay = `${index * 0.2}s`;
      fadein.classList.add('visible');
    } else {
      fadein.classList.remove('visible');
      fadein.style.transitionDelay = '';
    }
  });
}

window.addEventListener('scroll', checkFadeIns);
checkFadeIns();