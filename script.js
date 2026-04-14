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

    .header-graphic {
        max-width: 420px;   /* adjust as needed */
        width: 100%;
        height: auto;
    }
    .visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
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


