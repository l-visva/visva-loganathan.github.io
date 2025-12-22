(function () {
  const root = document.documentElement;

  function setTheme(theme){
    root.setAttribute("data-theme", theme);

    // Falls der Button auf einer Seite nicht existiert: nichts kaputt machen
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
  }

  // 1) Start: gespeichertes Theme oder System-Theme
  const saved = localStorage.getItem("theme");
  const systemPrefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initial = saved ? saved : (systemPrefersDark ? "dark" : "light");
  setTheme(initial);

  // 2) Toggle (nur wenn Button vorhanden)
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      setTheme(next);
      localStorage.setItem("theme", next);
    });
  }
})();

