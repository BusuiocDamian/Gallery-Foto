const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
}

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetPanel = document.getElementById(targetId);

    if (targetPanel) {
      removeActiveClasses();
      targetPanel.classList.add('active');
    }
  });
});

