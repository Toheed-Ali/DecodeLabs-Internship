(function () {
  "use strict";

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileDrawer = document.querySelector("[data-mobile-drawer]");
  const currentPage = document.body.dataset.page;

  function closeDrawer() {
    if (!menuToggle || !mobileDrawer) return;
    menuToggle.setAttribute("aria-expanded", "false");
    mobileDrawer.classList.remove("is-open");
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!open));
      mobileDrawer.classList.toggle("is-open", !open);
    });

    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeDrawer();
    });
  }

  if (currentPage) {
    document.querySelectorAll(`[data-nav="${currentPage}"]`).forEach((el) => {
      el.classList.add("is-active");
    });
  }

  document.querySelectorAll("[data-start-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "guidelines.html";
    });
  });

  document.querySelectorAll("[data-setup-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "architecture.html";
    });
  });

  document.querySelectorAll("[data-execute-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.textContent = "Building...";
      setTimeout(() => {
        btn.innerHTML = 'Execute Plan <span class="material-symbols-outlined">check</span>';
      }, 800);
    });
  });
})();