function toggleAbout() {
  const extra = document.querySelector('.extra-content');
  const btn = document.querySelector('.read-more-btn');
  if (extra.style.display === "block") {
    extra.style.display = "none";
    btn.textContent = "Read More";
  } else {
    extra.style.display = "block";
    btn.textContent = "Read Less";
  }
}
