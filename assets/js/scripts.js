(() => {
  const onReady = (fn) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
      return;
    }
    fn();
  };

  const initMainIndex = () => {
    if (!document.body.classList.contains("page-mainindex")) {
      return;
    }

    const menu = document.getElementById("menuContainer");
    const header = document.getElementById("mainHeader");
    const footer = document.getElementById("footer");
    const content = document.getElementById("content");
    const pageTitle = document.getElementById("pageTitle");
    const iframe = document.getElementById("iframe");

    if (!menu || !header || !footer || !content || !pageTitle || !iframe) {
      return;
    }

    let timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(goBack, 60000);
    };

    const openPage = (url, title) => {
      menu.style.opacity = "0";
      header.style.opacity = "0";
      footer.style.opacity = "0";

      setTimeout(() => {
        menu.style.display = "none";
        header.style.display = "none";
        footer.style.display = "none";
        content.style.display = "flex";
        pageTitle.textContent = title;
        iframe.src = url;
        requestAnimationFrame(() => content.classList.add("content-active"));
      }, 400);

      resetTimer();
    };

    const goBack = () => {
      content.classList.remove("content-active");
      content.style.opacity = "0";

      setTimeout(() => {
        content.style.display = "none";
        menu.style.display = "flex";
        header.style.display = "block";
        footer.style.display = "block";
        requestAnimationFrame(() => {
          menu.style.opacity = "1";
          header.style.opacity = "1";
          footer.style.opacity = "1";
        });
        iframe.src = "";
      }, 400);

      resetTimer();
    };

    document.querySelectorAll("[data-page-url]").forEach((button) => {
      button.addEventListener("click", () => {
        openPage(button.dataset.pageUrl, button.dataset.pageTitle || "");
      });
    });

    const backButton = document.querySelector("[data-action='go-back']");
    if (backButton) {
      backButton.addEventListener("click", goBack);
    }

    document.addEventListener("pointerdown", resetTimer, { passive: true });
    document.addEventListener("pointermove", resetTimer, { passive: true });

    resetTimer();
  };

  const initCarFullscreen = () => {
    if (!document.body.classList.contains("page-car")) {
      return;
    }

    const container = document.getElementById("container");
    if (!container) {
      return;
    }

    document.addEventListener("click", () => {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
    });
  };

  const initPurpleDrift = () => {
    if (!document.body.classList.contains("page-tatps")) {
      return;
    }

    // ---------- 100 PURPLE PHRASES ----------
    const allPhrases = [
      "The Purple Standard",
      "The Purple Method",
      "The Purple Cycle",
      "The Purple Identity",
      "The Purple Line",
      "The Purple Framework",
      "The Purple Detail",
      "The Purple Motion",
      "The Purple Process",
      "The Purple Structure",
      "The Purple Insight",
      "The Purple Logic",
      "The Purple System",
      "The Purple Precision",
      "The Purple Data",
      "The Purple Flow",
      "The Purple Formula",
      "The Purple Geometry",
      "The Purple Discipline",
      "The Purple Thinking",
      "The Purple Revision",
      "The Purple Sequence",
      "The Purple Approach",
      "The Purple Metric",
      "The Purple Path",
      "The Purple Foundation",
      "The Purple Perspective",
      "The Purple Practice",
      "The Purple Cadence",
      "The Purple Decision",
      "The Purple Principle",
      "The Purple Pattern",
      "The Purple Methodology",
      "The Purple Horizon",
      "The Purple Concept",
      "The Purple Architecture",
      "The Purple Baseline",
      "The Purple Protocol",
      "The Purple Profile",
      "The Purple Vector",
      "The Purple Boundary",
      "The Purple Interface",
      "The Purple Surface",
      "The Purple Continuum",
      "The Purple Gradient",
      "The Purple Field",
      "The Purple Atlas",
      "The Purple Map",
      "The Purple Trace",
      "The Purple Archive",
      "The Purple Record",
      "The Purple Signature",
      "The Purple Echo",
      "The Purple Signal",
      "The Purple Channel",
      "The Purple Thread",
      "The Purple Loop",
      "The Purple Kernel",
      "The Purple Core",
      "The Purple Model",
      "The Purple Template",
      "The Purple Layer",
      "The Purple Grid",
      "The Purple Network",
      "The Purple Circuit",
      "The Purple Pipeline",
      "The Purple Stack",
      "The Purple Scaffold",
      "The Purple Matrix",
      "The Purple Lattice",
      "The Purple Frame",
      "The Purple Compass",
      "The Purple Beacon",
      "The Purple Axis",
      "The Purple Span",
      "The Purple Range",
      "The Purple Domain",
      "The Purple Phase",
      "The Purple Pulse",
      "The Purple Rhythm",
      "The Purple Tempo",
      "The Purple Scope",
      "The Purple Focus",
      "The Purple Lens",
      "The Purple Nexus",
      "The Purple Bridge",
      "The Purple Gateway",
      "The Purple Anchor",
      "The Purple Node",
      "The Purple Orbit",
      "The Purple Horizonline",
      "The Purple Crossroad",
      "The Purple Spark",
      "The Purple Origin",
      "The Purple Summit",
      "The Purple Spine",
      "The Purple Rail",
      "The Purple Track",
      "The Purple Timeline",
      "The Purple Chronicle"
    ];

    // ---------- 24 SPOTLIGHTABLE PHRASES WITH DESCRIPTIONS ----------
    const spotlightList = [
      { text: "The Purple Standard", desc: "Our core mindset of precision, discipline, and intent." },
      { text: "The Purple Method", desc: "A structured way of iterating with clarity and purpose." },
      { text: "The Purple Cycle", desc: "Design → Test → Learn → Refine." },
      { text: "The Purple Identity", desc: "The way Arion presents and recognises itself." },
      { text: "The Purple Line", desc: "Alignment, flow, and disciplined structure in our work." },
      { text: "The Purple Framework", desc: "The systems that support how we build and decide." },
      { text: "The Purple Detail", desc: "Small choices that create meaningful performance gains." },
      { text: "The Purple Motion", desc: "Progress built from controlled, thoughtful change." },
      { text: "The Purple Process", desc: "The workflow connecting design, simulation, and production." },
      { text: "The Purple Structure", desc: "The foundations that keep our ideas organised." },
      { text: "The Purple Insight", desc: "Understanding gained from looking deeper into our results." },
      { text: "The Purple Logic", desc: "Reasoning that keeps our decisions consistent." },
      { text: "The Purple System", desc: "How our tools, people, and processes connect." },
      { text: "The Purple Precision", desc: "Our focus on accuracy in both thinking and execution." },
      { text: "The Purple Data", desc: "Evidence that backs our engineering trade-offs." },
      { text: "The Purple Flow", desc: "Work moving cleanly from concept to final car." },
      { text: "The Purple Geometry", desc: "The shapes and forms that control airflow and stability." },
      { text: "The Purple Discipline", desc: "Doing the right things even when they take longer." },
      { text: "The Purple Thinking", desc: "How we break problems down and rebuild better answers." },
      { text: "The Purple Revision", desc: "The willingness to rework something until it feels right." },
      { text: "The Purple Sequence", desc: "The order of steps that keeps the project on track." },
      { text: "The Purple Foundation", desc: "The principles that all our decisions stand on." },
      { text: "The Purple Perspective", desc: "The ability to zoom out and see the whole season." },
      { text: "The Purple Practice", desc: "The habits and repetitions that make us more capable." }
    ];

    // Map spotlight text → desc for quick lookup
    const spotlightMap = {};
    spotlightList.forEach((p) => {
      spotlightMap[p.text] = p.desc;
    });

    const NUM_WORDS = 16;
    const words = [];
    const W = window.innerWidth;
    const H = window.innerHeight;
    const SAFE_LEFT = W * 0.18;
    const SAFE_RIGHT = W * 0.82;

    const lanesY = [];
    for (let i = 0; i < NUM_WORDS; i += 1) {
      const y = 80 + ((H - 160) * (i + 0.5)) / NUM_WORDS;
      lanesY.push(y);
    }

    for (let i = 0; i < NUM_WORDS; i += 1) {
      const text = allPhrases[Math.floor(Math.random() * allPhrases.length)];
      const descText = spotlightMap[text] || null;
      const spotlightable = Boolean(descText);

      const el = document.createElement("div");
      el.className = "word";
      el.textContent = text;
      document.body.appendChild(el);

      let descEl = null;
      if (spotlightable) {
        descEl = document.createElement("div");
        descEl.className = "description";
        descEl.textContent = descText;
        document.body.appendChild(descEl);
      }

      const x = Math.random() * W;
      const y = lanesY[i];

      const speed = 0.18 + Math.random() * 0.22;
      const dir = Math.random() < 0.5 ? -1 : 1;
      const vx = speed * dir;

      el.style.top = `${y}px`;
      el.style.transform = `translate(${x}px, 0)`;

      words.push({
        el,
        descEl,
        x,
        y,
        vx,
        frozen: false,
        spotlightable
      });
    }

    const animate = () => {
      for (let i = 0; i < words.length; i += 1) {
        const w = words[i];
        if (w.frozen) {
          continue;
        }

        w.x += w.vx;
        const width = w.el.offsetWidth || 200;

        if (w.x < -width - 80) {
          w.x = W + 80;
        }
        if (w.x > W + 80) {
          w.x = -width - 80;
        }

        w.el.style.transform = `translate(${w.x}px, 0)`;
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    const positionDescription = (wordObj) => {
      if (!wordObj.descEl) {
        return;
      }

      const rect = wordObj.el.getBoundingClientRect();
      const desc = wordObj.descEl;
      const maxWidth = 420;
      const padding = 8;

      desc.style.maxWidth = `${maxWidth}px`;

      const descHeight = desc.offsetHeight || 60;

      let left = rect.left + rect.width / 2 - maxWidth / 2;
      left = Math.max(20, Math.min(left, window.innerWidth - maxWidth - 20));
      desc.style.left = `${left}px`;

      let top = rect.bottom + padding;

      if (top + descHeight > window.innerHeight - 20) {
        top = rect.top - descHeight - padding;
      }

      if (top < 20) {
        top = (window.innerHeight - descHeight) / 2;
      }

      desc.style.top = `${top}px`;
    };

    let spotlightActive = false;

    const triggerSpotlight = () => {
      if (spotlightActive) {
        return;
      }

      const candidates = words.filter((w) => w.spotlightable);
      if (candidates.length === 0) {
        return;
      }

      let chosen = null;

      for (let tries = 0; tries < 30; tries += 1) {
        const cand = candidates[Math.floor(Math.random() * candidates.length)];
        const rect = cand.el.getBoundingClientRect();
        if (rect.left > SAFE_LEFT && rect.right < SAFE_RIGHT) {
          chosen = cand;
          break;
        }
      }

      if (!chosen) {
        return;
      }

      spotlightActive = true;
      chosen.frozen = true;
      chosen.el.classList.add("spotlight");

      positionDescription(chosen);
      if (chosen.descEl) {
        chosen.descEl.classList.add("visible");
      }

      for (let i = 0; i < words.length; i += 1) {
        const w = words[i];
        if (w !== chosen) {
          w.el.style.opacity = "0.14";
        }
      }

      setTimeout(() => {
        chosen.el.classList.remove("spotlight");
        chosen.frozen = false;
        if (chosen.descEl) {
          chosen.descEl.classList.remove("visible");
        }

        for (let i = 0; i < words.length; i += 1) {
          words[i].el.style.opacity = "0.65";
        }

        spotlightActive = false;
      }, 2600);
    };

    const scheduleSpotlight = () => {
      triggerSpotlight();
      const delay = 4200 + Math.random() * 4200;
      setTimeout(scheduleSpotlight, delay);
    };

    setTimeout(scheduleSpotlight, 3200);
  };

  onReady(() => {
    initMainIndex();
    initCarFullscreen();
    initPurpleDrift();
  });
})();
