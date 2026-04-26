const APP_CONFIG = {
  appName: "Torque Onshape Coach",
  mentorName: "Torque",
  accessCodes: [
    {
      code: "TORQUE-101",
      label: "Intro track"
    },
    {
      code: "GEAR-202",
      label: "Builder track"
    }
  ],
  youtube: {
    sketch: "https://www.youtube.com/embed/e6Mrdu8kCxQ?start=125&end=155&rel=0",
    extrude: "https://www.youtube.com/embed/e6Mrdu8kCxQ?start=425&end=455&rel=0",
    fillet: "https://www.youtube.com/embed/e6Mrdu8kCxQ?start=500&end=530&rel=0",
    export: "https://www.youtube.com/embed/e6Mrdu8kCxQ?start=760&end=790&rel=0"
  },
  lessons: [
    {
      id: "sketch",
      title: "Create the Sketch",
      eyebrow: "Step 1",
      videoLabel: "Watch the 30-second sketch setup",
      copy:
        "Start a new Onshape part studio, choose a plane, and sketch the practice profile. Match the holes, slot, and outer profile as closely as you can.",
      targetImage: "/assets/sketch-target.svg",
      uploadLabel: "Upload your sketch screenshot",
      accept: "image/*",
      uploadKind: "image",
      completeText: "Sketch proof saved locally."
    },
    {
      id: "extrude",
      title: "Extrude the Part",
      eyebrow: "Step 2",
      videoLabel: "Watch the 30-second extrude move",
      copy:
        "Use Extrude to turn your sketch into a 0.50 inch part. Then upload a short screen recording showing you doing the same move.",
      targetImage: "/assets/extrude-target.svg",
      uploadLabel: "Upload your extrusion video",
      accept: "video/*",
      uploadKind: "video",
      completeText: "Extrude proof saved locally."
    },
    {
      id: "fillet",
      title: "Round the Edges",
      eyebrow: "Step 3",
      videoLabel: "Watch the 30-second finishing pass",
      copy:
        "Add fillets to the outside edges so the model looks finished and less sharp. Upload a screenshot of the updated model.",
      targetImage: "/assets/fillet-target.svg",
      uploadLabel: "Upload your fillet screenshot",
      accept: "image/*",
      uploadKind: "image",
      completeText: "Fillet proof saved locally."
    },
    {
      id: "export",
      title: "Export or Share",
      eyebrow: "Step 4",
      videoLabel: "Watch the 30-second export check",
      copy:
        "Export an STL, screenshot your model, or save a share link document. Upload any proof file to finish the Torque path.",
      targetImage: "/assets/export-target.svg",
      uploadLabel: "Upload your final proof",
      accept: "image/*,video/*,.stl,.step,.pdf",
      uploadKind: "file",
      completeText: "Final proof saved locally."
    }
  ]
};

const STORAGE_KEY = "torque-onshape-state-v1";
const app = document.querySelector("#app");
const uploadUrls = new Map();

let state = loadState();

function defaultState() {
  return {
    accessCode: "",
    learnerName: "",
    currentLesson: 0,
    uploads: {},
    welcomed: false,
    complete: false
  };
}

function loadState() {
  try {
    const saved = { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
    for (const upload of Object.values(saved.uploads || {})) {
      delete upload.url;
    }
    return saved;
  } catch {
    return defaultState();
  }
}

function saveState() {
  const persisted = {
    ...state,
    uploads: Object.fromEntries(
      Object.entries(state.uploads).map(([key, upload]) => {
        const { url, ...rest } = upload;
        return [key, rest];
      })
    )
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
}

function render() {
  if (!state.accessCode) {
    renderCodeScreen();
    return;
  }

  if (!state.learnerName) {
    renderNameScreen();
    return;
  }

  if (state.complete) {
    renderCompleteScreen();
    return;
  }

  renderWorkspace();
}

function renderCodeScreen(error = "") {
  app.innerHTML = `
    <section class="screen login-screen">
      <div class="brand-panel">
        <div class="gear large pop" aria-hidden="true"></div>
        <h1>${APP_CONFIG.appName}</h1>
        <p>Enter one of the class codes to unlock Torque, then move through short Onshape lessons with video, target pictures, and proof uploads.</p>
      </div>
      <form class="code-form" data-code-form>
        <div class="field">
          <label for="access-code">Class code</label>
          <input id="access-code" name="code" type="text" autocomplete="off" placeholder="TORQUE-101" />
        </div>
        <button class="primary-button" type="submit">Unlock Torque</button>
        <div class="error" role="alert">${error}</div>
        <div class="code-list" aria-label="Available demo codes">
          ${APP_CONFIG.accessCodes
            .map((item) => `<code>${item.code}</code> <span>${item.label}</span>`)
            .join("")}
        </div>
      </form>
    </section>
  `;

  app.querySelector("[data-code-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const code = new FormData(event.currentTarget).get("code").trim().toUpperCase();
    const allowed = APP_CONFIG.accessCodes.some((item) => item.code === code);

    if (!allowed) {
      renderCodeScreen("That code is not active yet. Try TORQUE-101 or GEAR-202.");
      return;
    }

    state.accessCode = code;
    saveState();
    render();
  });
}

function renderNameScreen() {
  app.innerHTML = `
    <section class="screen login-screen">
      <div class="brand-panel">
        <div class="gear large pop" aria-hidden="true"></div>
        <h1>Almost ready.</h1>
        <p>Torque needs your name so the coach screen can greet you and track this browser's progress.</p>
      </div>
      <form class="name-form" data-name-form>
        <div class="field">
          <label for="learner-name">Your name</label>
          <input id="learner-name" name="name" type="text" autocomplete="name" placeholder="Ada" />
        </div>
        <button class="primary-button" type="submit">Meet Torque</button>
      </form>
    </section>
  `;

  app.querySelector("[data-name-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = new FormData(event.currentTarget).get("name").trim();
    if (!name) return;
    state.learnerName = name;
    saveState();
    render();
  });
}

function renderWorkspace() {
  const lesson = APP_CONFIG.lessons[state.currentLesson];
  const upload = state.uploads[lesson.id];
  const progress = getProgress();
  const learnerName = escapeHtml(state.learnerName);

  app.innerHTML = `
    <section class="screen workspace">
      <aside class="sidebar">
        <div class="mentor">
          <div class="gear" aria-hidden="true"></div>
          <div>
            <strong>${APP_CONFIG.mentorName}</strong>
            <span>${learnerName}'s CAD coach</span>
          </div>
        </div>
        <h2>Lesson path</h2>
        <small>${progress.done} of ${progress.total} proof uploads complete</small>
        <nav class="lesson-nav" aria-label="Lesson navigation">
          ${APP_CONFIG.lessons.map((item, index) => lessonTab(item, index)).join("")}
        </nav>
      </aside>
      <div class="workspace-main">
        <header class="topbar">
          <div class="workspace-title">
            <span class="pill">${lesson.eyebrow}</span>
            <h1>${lesson.title}</h1>
            <p class="lesson-copy">${lesson.copy}</p>
          </div>
          <button class="ghost-button" type="button" data-reset>Reset</button>
        </header>

        <section class="lesson-grid">
          <div class="video-panel">
            <div class="panel-heading">
              <h2>${lesson.videoLabel}</h2>
              <span class="pill">Video</span>
            </div>
            <div class="video-frame">
              <iframe
                title="${lesson.title} tutorial video"
                src="${lessonVideo(lesson)}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div class="target-panel">
            <div class="panel-heading">
              <h2>Build this target</h2>
              <span class="pill">Picture</span>
            </div>
            <img src="${lesson.targetImage}" alt="${lesson.title} target drawing" />
          </div>
        </section>

        <section class="upload-panel">
          <div class="panel-heading">
            <h2>${lesson.uploadLabel}</h2>
            <span class="pill">${upload ? "Uploaded" : "Waiting"}</span>
          </div>
          <label class="upload-drop">
            <strong>${upload ? escapeHtml(upload.name) : "Choose a proof file"}</strong>
            <span>${upload ? lesson.completeText : "Your file stays in this browser for now."}</span>
            <input data-upload type="file" accept="${lesson.accept}" />
          </label>
          <div class="preview" data-preview>${upload ? previewMarkup(lesson, upload) : ""}</div>
          <div class="actions">
            <button class="ghost-button" type="button" data-prev ${state.currentLesson === 0 ? "disabled" : ""}>Back</button>
            <button class="primary-button" type="button" data-next ${upload ? "" : "disabled"}>
              ${state.currentLesson === APP_CONFIG.lessons.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </section>

        <section class="progress-panel" aria-label="Progress">
          <strong>${Math.round(progress.percent)}% complete</strong>
          <div class="meter"><span style="width:${progress.percent}%"></span></div>
        </section>
      </div>
    </section>
    ${state.welcomed ? "" : welcomeModal()}
  `;

  bindWorkspaceEvents();
}

function lessonTab(lesson, index) {
  const isCurrent = index === state.currentLesson;
  const complete = Boolean(state.uploads[lesson.id]);

  return `
    <button
      class="lesson-tab ${complete ? "is-complete" : ""}"
      type="button"
      data-lesson-index="${index}"
      ${isCurrent ? 'aria-current="step"' : ""}
    >
      <strong>${lesson.eyebrow}: ${lesson.title}</strong>
      <span>${complete ? "Proof uploaded" : "Needs proof"}</span>
    </button>
  `;
}

function lessonVideo(lesson) {
  const key = lesson.id in APP_CONFIG.youtube ? lesson.id : "sketch";
  return APP_CONFIG.youtube[key];
}

function welcomeModal() {
  const learnerName = escapeHtml(state.learnerName);

  return `
    <div class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="torque-title">
      <div class="modal">
        <div class="gear large pop" aria-hidden="true"></div>
        <h2 id="torque-title">Hi, my name is ${APP_CONFIG.mentorName}.</h2>
        <p>Hey ${learnerName}, I am going to show you how to create a sketch, turn it into a part, and upload proof after each move.</p>
        <button class="secondary-button" type="button" data-close-welcome>Start lesson</button>
      </div>
    </div>
  `;
}

function bindWorkspaceEvents() {
  app.querySelector("[data-reset]").addEventListener("click", () => {
    for (const url of uploadUrls.values()) URL.revokeObjectURL(url);
    uploadUrls.clear();
    state = defaultState();
    saveState();
    render();
  });

  app.querySelectorAll("[data-lesson-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentLesson = Number(button.dataset.lessonIndex);
      saveState();
      render();
    });
  });

  const welcomeButton = app.querySelector("[data-close-welcome]");
  if (welcomeButton) {
    welcomeButton.addEventListener("click", () => {
      state.welcomed = true;
      saveState();
      render();
    });
  }

  app.querySelector("[data-upload]").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const lesson = APP_CONFIG.lessons[state.currentLesson];
    const url = URL.createObjectURL(file);

    if (uploadUrls.has(lesson.id)) {
      URL.revokeObjectURL(uploadUrls.get(lesson.id));
    }

    uploadUrls.set(lesson.id, url);
    state.uploads[lesson.id] = {
      name: file.name,
      type: file.type,
      size: file.size
    };
    saveState();
    render();
  });

  app.querySelector("[data-prev]").addEventListener("click", () => {
    state.currentLesson = Math.max(0, state.currentLesson - 1);
    saveState();
    render();
  });

  app.querySelector("[data-next]").addEventListener("click", () => {
    if (state.currentLesson === APP_CONFIG.lessons.length - 1) {
      state.complete = true;
    } else {
      state.currentLesson += 1;
    }
    saveState();
    render();
  });
}

function previewMarkup(lesson, upload) {
  const src = uploadUrls.get(lesson.id);
  const fileName = escapeHtml(upload.name);
  if (lesson.uploadKind === "image" && src) {
    return `<img src="${src}" alt="Uploaded proof named ${fileName}" />`;
  }

  if (lesson.uploadKind === "video" && src) {
    return `<video src="${src}" controls></video>`;
  }

  return `<div class="preview-file">${fileName}</div>`;
}

function getProgress() {
  const done = APP_CONFIG.lessons.filter((lesson) => state.uploads[lesson.id]).length;
  const total = APP_CONFIG.lessons.length;
  return {
    done,
    total,
    percent: total ? (done / total) * 100 : 0
  };
}

function renderCompleteScreen() {
  const progress = getProgress();
  const learnerName = escapeHtml(state.learnerName);

  app.innerHTML = `
    <section class="screen login-screen">
      <div class="brand-panel">
        <div class="gear large pop" aria-hidden="true"></div>
        <h1>Nice work, ${learnerName}.</h1>
        <p>You completed ${progress.done} Torque proof uploads. This deployable version keeps the uploads in the browser; a future version can send them to Netlify Forms, Supabase, Airtable, or a teacher dashboard.</p>
      </div>
      <div class="complete-panel">
        <span class="pill">Complete</span>
        <h2>Onshape basics path finished.</h2>
        <p class="intro-copy">Your next build can add real accounts, cloud file storage, grading, and custom lesson packs by editing the variables in <code>APP_CONFIG</code>.</p>
        <div class="actions">
          <button class="ghost-button" type="button" data-review>Review lessons</button>
          <button class="primary-button" type="button" data-reset>Start over</button>
        </div>
      </div>
    </section>
  `;

  app.querySelector("[data-review]").addEventListener("click", () => {
    state.complete = false;
    state.currentLesson = 0;
    saveState();
    render();
  });

  app.querySelector("[data-reset]").addEventListener("click", () => {
    state = defaultState();
    saveState();
    render();
  });
}

render();

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
