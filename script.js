export async function loadSharedHeader(options = {}) {
  const mount = document.getElementById("shared-header");
  if (!mount) return;

  try {
    const response = await fetch("./header.html", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Failed to load header.html: ${response.status}`);
    }

    const html = await response.text();
    mount.innerHTML = html;

    const {
      activeTool = "",
      title = "",
      lede = ""
    } = options;

    const titleEl = mount.querySelector("#site-title");
    const ledeEl = mount.querySelector("#site-lede");

    if (titleEl && title) {
      titleEl.textContent = title;
    }

    if (ledeEl && lede) {
      ledeEl.textContent = lede;
    }

    if (activeTool) {
      const activeBtn = mount.querySelector(`[data-tool="${activeTool}"]`);
      if (activeBtn && !activeBtn.disabled) {
        activeBtn.classList.add("active");
      }
    }
  } catch (error) {
    console.error("Shared header failed to load:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadSharedHeader({
    activeTool: "home",
    title: "Civil Air Patrol Brand Tools",
    lede: "Access official tools for generating compliant subordinate graphics, email signatures, and emblems."
  });
});
