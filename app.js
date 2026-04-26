const VIDEO_URLS = {
  introShooter: "YOUR_CUSTOM_UNLISTED_YOUTUBE_EMBED_URL?start=0&end=45",
  onshapeSetup: "https://www.youtube.com/embed/mm5sHRyXJB8?start=0&end=45",
  sketchBasics: "https://www.youtube.com/embed/2utLjjkXpIg?start=0&end=45",
  dimensionConstraints: "https://www.youtube.com/embed/2utLjjkXpIg?start=45&end=90",
  extrudeBasics: "https://www.youtube.com/embed/Us-zzwf8EmQ?start=0&end=45",
  filletBasics: "https://www.youtube.com/embed/71KW30PDb5o?start=0&end=45",
  sketchOnFaceRemove: "https://www.youtube.com/embed/2utLjjkXpIg?start=90&end=135",
  circularPattern: "https://www.youtube.com/embed/BFURYp4Rgck?start=0&end=45",
  linearPattern: "https://www.youtube.com/embed/uMM5SU9g8Is?start=0&end=45",
  mirrorPart: "https://www.youtube.com/embed/GI3BFimvVV8?start=0&end=45",
  assemblyMates: "https://www.youtube.com/embed/L6HO0DswUkU?start=0&end=45",
  mkcadSetup: "https://www.youtube.com/embed/azJQzVFIwPw?start=0&end=45",
  mkcadApp: "https://www.youtube.com/embed/x75vioN_SNY?start=0&end=45",
  bearingImport: "https://www.youtube.com/embed/LVjyXv30m3g?start=0&end=45",
  replicateAssembly: "https://www.youtube.com/embed/O0WzrxAaPYY?start=0&end=45",
  finalChecklist: "YOUR_CUSTOM_UNLISTED_YOUTUBE_EMBED_URL?start=0&end=45",
  submitProof: "YOUR_CUSTOM_UNLISTED_YOUTUBE_EMBED_URL?start=0&end=45",
  placeholder: "https://www.youtube.com/embed/2utLjjkXpIg?start=0&end=45"
};

const LEVEL_VIDEO_KEYS = {
  0: "introShooter",
  1: "onshapeSetup",
  2: "sketchBasics",
  3: "dimensionConstraints",
  4: "extrudeBasics",
  5: "filletBasics",
  6: "sketchOnFaceRemove",
  7: "circularPattern",
  8: "linearPattern",
  9: "mirrorPart",
  10: "assemblyMates",
  11: "mkcadSetup",
  12: "bearingImport",
  13: "mkcadApp",
  14: "mkcadApp",
  15: "mkcadApp",
  16: "mkcadApp",
  17: "mkcadApp",
  18: "assemblyMates",
  19: "replicateAssembly",
  20: "finalChecklist",
  21: "finalChecklist",
  22: "submitProof"
};

const IMAGE_URLS = {
  fullShooterReference: "/assets/full-shooter-reference.svg",
  documentSetupReference: "/assets/sketch-target.svg",
  sidePlateOutlineReference: "/assets/sketch-target.svg",
  constrainedPlateReference: "/assets/sketch-target.svg",
  extrudedPlateReference: "/assets/extrude-target.svg",
  filletedPlateReference: "/assets/fillet-target.svg",
  bearingHoleReference: "/assets/sketch-target.svg",
  boltPatternReference: "/assets/sketch-target.svg",
  lighteningHoleReference: "/assets/sketch-target.svg",
  mirroredPlateReference: "/assets/shooter-assembly-reference.svg",
  assemblyReference: "/assets/shooter-assembly-reference.svg",
  mkcadReference: "/assets/full-shooter-reference.svg",
  bearingsReference: "/assets/shooter-assembly-reference.svg",
  shaftsReference: "/assets/shooter-assembly-reference.svg",
  greenWheelsReference: "/assets/full-shooter-reference.svg",
  whiteWheelsReference: "/assets/full-shooter-reference.svg",
  spacersReference: "/assets/shooter-assembly-reference.svg",
  motorsReference: "/assets/full-shooter-reference.svg",
  powerTransferReference: "/assets/full-shooter-reference.svg",
  replicateReference: "/assets/shooter-assembly-reference.svg",
  treeReference: "/assets/export-target.svg",
  finalCheckReference: "/assets/full-shooter-reference.svg",
  finalSubmissionReference: "/assets/export-target.svg"
};

const LESSONS = [
  {
    id: 0,
    level: 0,
    title: "Welcome to the Shooter",
    goal: "Show the final target and explain what they are building.",
    videoKey: "introShooter",
    imageKey: "fullShooterReference",
    torqueText:
      "Hi, I'm Torque. This course teaches you how to CAD a simplified FRC shooter. The main skill is making clean side plates. After that, you will learn how to import real FRC parts from the Onshape library and assemble them like a real robot mechanism.",
    steps: [
      "Look at the full shooter reference.",
      "Identify the two side plates.",
      "Identify the shafts going through the side plates.",
      "Identify the green wheels, white wheels, bearings, spacers, and motors.",
      "Write or upload a quick plan of what they think the shooter is made of."
    ],
    uploadRequirement: "Upload a screenshot or type a quick plan.",
    acceptedTypes: ["image/*", "application/pdf"],
    buttonText: "I understand the shooter",
    textProof: true,
    responsePrompt: "Write the quick plan here, or upload a screenshot/PDF."
  },
  {
    id: 1,
    level: 1,
    title: "Set Up the Onshape Document",
    goal: "Teach basic organization before CAD starts.",
    videoKey: "onshapeSetup",
    imageKey: "documentSetupReference",
    torqueText:
      "Real robot CAD gets messy fast. Before you model anything, name your document, tabs, and parts clearly. If your CAD is organized, other people on the team can actually understand it.",
    steps: [
      "Create a new Onshape document.",
      "Name it Shooter Training - Your Name.",
      "Create one Part Studio named Side Plates.",
      "Create one Assembly named Shooter Assembly.",
      "Make sure the document has clean names, not random Part Studio 1 everywhere."
    ],
    uploadRequirement: "Upload a screenshot of the Onshape tabs.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 2"
  },
  {
    id: 2,
    level: 2,
    title: "Sketch the Side Plate Outline",
    goal: "Create the basic 2D profile of one shooter side panel.",
    videoKey: "sketchBasics",
    imageKey: "sidePlateOutlineReference",
    torqueText:
      "Start with only the outside shape. Do not add every hole at once. Good CAD is built in layers: outline first, important holes second, small holes last.",
    steps: [
      "Open the Side Plates Part Studio.",
      "Start a sketch on the Front plane.",
      "Draw a long shooter side plate outline.",
      "Include a rounded top/back area.",
      "Include a front cutout or notch.",
      "Keep the sketch closed.",
      "Do not add holes yet."
    ],
    uploadRequirement: "Upload a screenshot of the sketch outline.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 3"
  },
  {
    id: 3,
    level: 3,
    title: "Dimension and Constrain the Side Plate",
    goal: "Teach that sketches need control, not just lines.",
    videoKey: "dimensionConstraints",
    imageKey: "constrainedPlateReference",
    torqueText:
      "A sketch that is not constrained can randomly move later. In FRC, that means holes stop lining up, shafts no longer fit, and the assembly becomes painful to fix.",
    steps: [
      "Add main length and height dimensions.",
      "Add dimensions for the notch.",
      "Add dimensions for rounded corners.",
      "Add horizontal and vertical constraints.",
      "Add tangent constraints where arcs meet lines.",
      "Make the sketch mostly or fully constrained.",
      "Avoid random blue under-defined geometry where possible."
    ],
    uploadRequirement: "Upload a screenshot showing dimensions and constraints.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 4"
  },
  {
    id: 4,
    level: 4,
    title: "Extrude the Side Plate",
    goal: "Turn the 2D sketch into a 3D part.",
    videoKey: "extrudeBasics",
    imageKey: "extrudedPlateReference",
    torqueText:
      "Extrude gives the plate thickness. For this training model, exact material does not matter as much as learning the workflow.",
    steps: [
      "Finish the side plate sketch.",
      "Use Extrude.",
      "Extrude the plate to 0.25 in or another chosen training thickness.",
      "Rename the part Left Shooter Side Plate.",
      "Change the appearance to dark gray or transparent gray."
    ],
    uploadRequirement: "Upload a screenshot of the extruded side plate.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 5"
  },
  {
    id: 5,
    level: 5,
    title: "Add Fillets to the Plate",
    goal: "Clean the outside shape and make it look like a real robot plate.",
    videoKey: "filletBasics",
    imageKey: "filletedPlateReference",
    torqueText:
      "Real robot plates usually have rounded edges. Fillets make the CAD cleaner and help remove sharp stress points.",
    steps: [
      "Use the Fillet tool.",
      "Round the outside corners.",
      "Round the notch or cutout corners.",
      "Keep the fillets consistent.",
      "Do not over-fillet the part until it breaks."
    ],
    uploadRequirement: "Upload a screenshot of the filleted side plate.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 6"
  },
  {
    id: 6,
    level: 6,
    title: "Add Main Bearing Holes",
    goal: "Place the shaft locations.",
    videoKey: "sketchOnFaceRemove",
    imageKey: "bearingHoleReference",
    torqueText:
      "The bearing holes are the most important part of this plate. They control the shaft positions, wheel spacing, and compression path of the shooter.",
    steps: [
      "Start a new sketch on the side plate face.",
      "Add circles for the main shooter shaft bearing holes.",
      "Place at least 3 major shaft holes across the plate.",
      "Dimension the center points from the plate edges.",
      "Use equal constraints if multiple holes are the same size.",
      "Use Extrude Remove through all.",
      "These holes should represent where the shooter shafts will pass through."
    ],
    uploadRequirement: "Upload a screenshot of the plate with main bearing holes.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 7"
  },
  {
    id: 7,
    level: 7,
    title: "Add Bolt Holes Around the Bearings",
    goal: "Teach bolt circle / mounting hole patterns.",
    videoKey: "circularPattern",
    imageKey: "boltPatternReference",
    torqueText:
      "Bearings and gussets do not magically attach. Small bolt holes are what let the plate connect to real hardware.",
    steps: [
      "Add small mounting holes around at least two bearing holes.",
      "Use a circular pattern if possible.",
      "Keep the hole spacing consistent.",
      "Use Extrude Remove through all.",
      "Make the holes smaller than the bearing holes.",
      "Add at least one repeated hole pattern."
    ],
    uploadRequirement: "Upload a screenshot showing bearing holes and small bolt patterns.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 8"
  },
  {
    id: 8,
    level: 8,
    title: "Add Mounting Holes and Lightening Holes",
    goal: "Make the plate look closer to real FRC sheet metal/polycarb.",
    videoKey: "linearPattern",
    imageKey: "lighteningHoleReference",
    torqueText:
      "Patterns save time. In FRC CAD, repeated holes are everywhere, so learning patterns makes you much faster.",
    steps: [
      "Add rows of small holes near the lower part of the plate.",
      "Add mounting holes for tubes or rails.",
      "Use a linear pattern for repeated holes.",
      "Add only enough holes to show the idea. Do not waste time copying every hole from the reference.",
      "Keep holes away from the outer edge."
    ],
    uploadRequirement: "Upload a screenshot of the mostly complete side plate.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 9"
  },
  {
    id: 9,
    level: 9,
    title: "Mirror or Create the Second Side Plate",
    goal: "Make the opposite side plate.",
    videoKey: "mirrorPart",
    imageKey: "mirroredPlateReference",
    torqueText:
      "A shooter needs two side plates. The shafts pass between them, so both sides need matching hole locations.",
    steps: [
      "Create the opposite side plate.",
      "Either mirror the part or copy/derive it.",
      "Rename it Right Shooter Side Plate.",
      "Make sure the two plates are parallel in the later assembly.",
      "The two plates should match."
    ],
    uploadRequirement: "Upload a screenshot showing both side plates or the second plate part.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 10"
  },
  {
    id: 10,
    level: 10,
    title: "Create the Shooter Assembly",
    goal: "Move from Part Studio to Assembly.",
    videoKey: "assemblyMates",
    imageKey: "assemblyReference",
    torqueText:
      "Now you are moving from making parts to assembling a mechanism. Assemblies are where the robot starts feeling real.",
    steps: [
      "Open Shooter Assembly.",
      "Insert the left side plate.",
      "Insert the right side plate.",
      "Fasten one plate to the origin.",
      "Offset the second plate to create shooter width.",
      "Make sure the plates face each other."
    ],
    uploadRequirement: "Upload a screenshot of both plates in the assembly.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 11"
  },
  {
    id: 11,
    level: 11,
    title: "Add the FRC Onshape Library / MKCad",
    goal: "Teach students where FRC parts come from.",
    videoKey: "mkcadSetup",
    imageKey: "mkcadReference",
    torqueText:
      "FRC CAD is not about modeling every screw and wheel from scratch. Good designers use COTS libraries so the CAD matches real parts the team can actually buy.",
    steps: [
      "Open the assembly.",
      "Click Insert.",
      "Go to Other Documents / Public documents or the library workflow your team uses.",
      "Search for MKCad or FRC library parts.",
      "Find bearings, shafts, wheels, spacers, motors, and pulleys.",
      "Do not manually model these parts.",
      "Insert at least one library part into the assembly."
    ],
    uploadRequirement: "Upload a screenshot showing the library/search/import workflow.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 12"
  },
  {
    id: 12,
    level: 12,
    title: "Import Bearings into the Side Plates",
    goal: "Put bearings where the shafts will go.",
    videoKey: "bearingImport",
    imageKey: "bearingsReference",
    torqueText:
      "Bearings support the shafts. In the CAD, every shaft location should have bearings in the side plates.",
    steps: [
      "Import the correct bearing type or a placeholder bearing.",
      "Place one bearing in a main side plate hole.",
      "Use a Fastened mate or appropriate mate to locate it.",
      "Repeat for the matching hole on the other side plate.",
      "Add bearings to at least 3 shaft locations."
    ],
    uploadRequirement: "Upload a screenshot of bearings in the side plates.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 13"
  },
  {
    id: 13,
    level: 13,
    title: "Import Shafts",
    goal: "Add the shooter shafts across the plates.",
    videoKey: "mkcadApp",
    imageKey: "shaftsReference",
    torqueText:
      "The shafts are the skeleton of the shooter. Wheels, pulleys, spacers, and gears all build off the shaft positions.",
    steps: [
      "Import a shaft or create a simple cylinder shaft if needed.",
      "Place the shaft through a pair of bearings.",
      "Use a revolute or fastened mate depending on the simplified workflow.",
      "Make the shaft span from one side plate to the other.",
      "Add at least 3 shafts."
    ],
    uploadRequirement: "Upload a screenshot of shafts through the plates.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 14"
  },
  {
    id: 14,
    level: 14,
    title: "Add Shooter Wheels",
    goal: "Add the main green compression wheels.",
    videoKey: "mkcadApp",
    imageKey: "greenWheelsReference",
    torqueText:
      "These wheels are what actually launch the game piece. Their position and spacing matter more than making them look perfect.",
    steps: [
      "Import green compliant wheels or use placeholder wheels.",
      "Place wheels on the top/main shooter shafts.",
      "Add multiple wheels across the width.",
      "Space them evenly.",
      "Use mate connectors to align them to the shaft.",
      "Make sure the wheels are not floating away from the shaft."
    ],
    uploadRequirement: "Upload a screenshot of main shooter wheels installed.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 15"
  },
  {
    id: 15,
    level: 15,
    title: "Add White Contact Wheels or Note Wheels",
    goal: "Add the lower/secondary wheels.",
    videoKey: "mkcadApp",
    imageKey: "whiteWheelsReference",
    torqueText:
      "The second wheel path helps control the game piece. In a real shooter, wheel spacing and compression are major design choices.",
    steps: [
      "Import or create placeholder white wheels.",
      "Place them on the lower shafts.",
      "Align them with the green wheels.",
      "Add spacers between wheels if needed.",
      "Keep the shooter path visually clear."
    ],
    uploadRequirement: "Upload a screenshot of lower/contact wheels added.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 16"
  },
  {
    id: 16,
    level: 16,
    title: "Add Spacers and Shaft Collars",
    goal: "Teach how parts stay positioned on a shaft.",
    videoKey: "mkcadApp",
    imageKey: "spacersReference",
    torqueText:
      "A shaft is not just wheels. Real mechanisms need spacers and collars so parts stay where they belong.",
    steps: [
      "Import spacers or shaft collars.",
      "Place them between wheels and bearings.",
      "Add collars near the outside of the shaft.",
      "Make the shaft stack look intentional.",
      "Do not leave wheels floating with no spacing plan."
    ],
    uploadRequirement: "Upload a screenshot of shaft stack with spacers/collars.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 17"
  },
  {
    id: 17,
    level: 17,
    title: "Add Motors or Gearboxes",
    goal: "Add the powered parts to the outside.",
    videoKey: "mkcadApp",
    imageKey: "motorsReference",
    torqueText:
      "A shooter needs power. Motors usually mount outside the plates and transfer power through gears, belts, or direct drive.",
    steps: [
      "Import a motor or gearbox from the FRC library.",
      "Place it on the outside of one side plate.",
      "Align it with one powered shaft.",
      "Add a simple mount location.",
      "It does not need to be perfect, but it should look mechanically connected."
    ],
    uploadRequirement: "Upload a screenshot showing motor/gearbox placement.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 18"
  },
  {
    id: 18,
    level: 18,
    title: "Add Belts, Pulleys, or Gears",
    goal: "Show how the shooter shafts are connected.",
    videoKey: "assemblyMates",
    imageKey: "powerTransferReference",
    torqueText:
      "Power has to get from the motor to the shooter wheels. In real FRC, that usually means belts, gears, chains, or direct drive.",
    steps: [
      "Import pulleys or gears, or use simplified cylinders.",
      "Put a pulley/gear on the motor shaft.",
      "Put matching pulleys/gears on shooter shafts.",
      "Add a simple belt representation if possible.",
      "The goal is visual and conceptual, not exact belt math."
    ],
    uploadRequirement: "Upload a screenshot of power transfer parts.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 19"
  },
  {
    id: 19,
    level: 19,
    title: "Use Replicate or Patterns in the Assembly",
    goal: "Teach assembly efficiency.",
    videoKey: "replicateAssembly",
    imageKey: "replicateReference",
    torqueText:
      "If you manually mate every single repeated part, you will waste hours. Pattern and replicate tools make robot CAD much faster.",
    steps: [
      "Pick a repeated part, like bearings, wheels, spacers, or bolts.",
      "Use Replicate, Linear Pattern, or copy/mate workflow.",
      "Make at least one repeated row or repeated shaft group.",
      "Keep the instance list organized."
    ],
    uploadRequirement: "Upload a screenshot showing repeated components or the instance list.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 20"
  },
  {
    id: 20,
    level: 20,
    title: "Organize the Assembly Tree",
    goal: "Teach cleanup and readable CAD.",
    videoKey: "finalChecklist",
    imageKey: "treeReference",
    torqueText:
      "Your CAD is not done if only you can understand it. FRC is a team sport. Clean naming helps the next student fix, inspect, or manufacture your design.",
    steps: [
      "Rename major parts.",
      "Group related parts mentally or with folders if available.",
      "Suppress or remove random unused imports.",
      "Make sure the assembly tree is not complete chaos.",
      "Check that nothing is obviously floating."
    ],
    uploadRequirement: "Upload a screenshot of the instance tree and assembly.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Level 21"
  },
  {
    id: 21,
    level: 21,
    title: "Final Shooter Check",
    goal: "Make students inspect their own work.",
    videoKey: "finalChecklist",
    imageKey: "finalCheckReference",
    torqueText:
      "Before you submit, inspect it like a design lead. Does it look buildable? Are the shafts supported? Are the wheels placed with a purpose? Can someone else understand what you made?",
    steps: [
      "Confirm there are two side plates.",
      "Confirm there are at least 3 shaft locations.",
      "Confirm bearings are in the plates.",
      "Confirm wheels are on the shafts.",
      "Confirm there is at least one motor or gearbox.",
      "Confirm there is some power transfer representation.",
      "Confirm the assembly looks like a shooter, not random parts.",
      "Take final screenshots from at least two angles."
    ],
    uploadRequirement: "Upload two final screenshots.",
    acceptedTypes: ["image/*"],
    buttonText: "Unlock Final Submission",
    allowMultiple: true,
    minFiles: 2
  },
  {
    id: 22,
    level: 22,
    title: "Final Submission",
    goal: "Turn in final proof.",
    videoKey: "submitProof",
    imageKey: "finalSubmissionReference",
    torqueText:
      "You finished the shooter training path. You now know the core workflow: sketch custom plates, extrude and cut holes, import FRC parts, mate them into an assembly, and organize the final CAD.",
    steps: [
      "Upload final screenshots.",
      "Upload a short screen recording orbiting the assembly.",
      "Paste the Onshape document link.",
      "Write one sentence explaining what was hardest.",
      "Write one sentence explaining what you would improve."
    ],
    uploadRequirement: "Upload images/video, paste the Onshape link, and answer the reflection prompts.",
    acceptedTypes: ["image/*", "video/*"],
    buttonText: "Finish Shooter Training",
    allowMultiple: true,
    minFiles: 1,
    textProof: true,
    proofMode: "file-and-text",
    responsePrompt:
      "Paste your Onshape link, then write what was hardest and what you would improve."
  }
];

const APP_CONFIG = {
  appName: "Torque Shooter Training",
  mentorName: "Torque",
  accessCodes: [
    {
      code: "TORQUE-101",
      label: "Shooter training"
    },
    {
      code: "ADMIN-101",
      label: "Admin testing"
    }
  ]
};

const STORAGE_KEY = "torque-shooter-state-v2";
const app = document.querySelector("#app");
const uploadUrls = new Map();

let state = loadState();

function defaultState() {
  return {
    accessCode: "",
    learnerName: "",
    currentLesson: 0,
    uploads: {},
    responses: {},
    welcomed: false,
    complete: false
  };
}

function loadState() {
  try {
    const saved = { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
    for (const upload of Object.values(saved.uploads || {})) {
      delete upload.url;
      delete upload.files;
    }
    saved.currentLesson = Math.min(saved.currentLesson || 0, getMaxUnlocked(saved));
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
        const { url, files, ...rest } = upload;
        return [key, rest];
      })
    )
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
}

function render() {
  state.currentLesson = Math.min(state.currentLesson, getMaxUnlocked(state));

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
        <p>Enter a class code to start the level path. Torque unlocks each shooter CAD level after you prove the current one.</p>
      </div>
      <form class="code-form" data-code-form>
        <div class="field">
          <label for="access-code">Class code</label>
          <input id="access-code" name="code" type="text" autocomplete="off" placeholder="TORQUE-101" />
        </div>
        <button class="primary-button" type="submit">Unlock Torque</button>
        <div class="error" role="alert">${error}</div>
      </form>
    </section>
  `;

  app.querySelector("[data-code-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const code = new FormData(event.currentTarget).get("code").trim().toUpperCase();
    const allowed = APP_CONFIG.accessCodes.some((item) => item.code === code);

    if (!allowed) {
      renderCodeScreen("That code is not active yet.");
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
        <h1>Player setup.</h1>
        <p>Torque needs your name for this browser's progress save.</p>
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
  const lesson = LESSONS[state.currentLesson];
  const progress = getProgress();
  const learnerName = escapeHtml(state.learnerName);
  const adminMode = isAdmin(state);
  const proofReady = adminMode || hasProof(lesson, state);
  const maxUnlocked = getMaxUnlocked(state);

  app.innerHTML = `
    <section class="screen workspace">
      <aside class="sidebar">
        <div class="mentor">
          <div class="gear" aria-hidden="true"></div>
          <div>
            <strong>${APP_CONFIG.mentorName}</strong>
            <span>${learnerName}'s shooter quest</span>
          </div>
        </div>
        <h2>Level map</h2>
        <small>${adminMode ? "Admin mode: all levels unlocked" : `${progress.done} of ${progress.total} levels cleared`}</small>
        <nav class="lesson-nav" aria-label="Level navigation">
          ${LESSONS.map((item, index) => lessonTab(item, index, maxUnlocked)).join("")}
        </nav>
      </aside>

      <div class="workspace-main">
        <header class="topbar">
          <div class="workspace-title">
            <span class="pill">Level ${lesson.level} / ${LESSONS.length - 1}</span>
            ${adminMode ? '<span class="pill">Admin testing</span>' : ""}
            <h1>${escapeHtml(lesson.title)}</h1>
            <p class="lesson-copy"><strong>Goal:</strong> ${escapeHtml(lesson.goal)}</p>
          </div>
          <button class="ghost-button" type="button" data-reset>Reset</button>
        </header>

        <section class="torque-panel">
          <div class="gear" aria-hidden="true"></div>
          <p>${escapeHtml(lesson.torqueText)}</p>
        </section>

        <section class="lesson-grid">
          <div class="video-panel">
            <div class="panel-heading">
              <h2>Training video</h2>
              <span class="pill">${escapeHtml(lesson.videoKey)}</span>
            </div>
            ${videoMarkup(lesson)}
          </div>

          <div class="target-panel">
            <div class="panel-heading">
              <h2>Reference image</h2>
              <span class="pill">${escapeHtml(lesson.imageKey)}</span>
            </div>
            <img src="${referenceImage(lesson)}" alt="${escapeHtml(lesson.title)} reference" />
          </div>
        </section>

        <section class="steps-panel">
          <div class="panel-heading">
            <h2>Student steps</h2>
            <span class="pill">${lesson.steps.length} tasks</span>
          </div>
          <ol class="step-list">
            ${lesson.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
          </ol>
        </section>

        <section class="upload-panel">
          <div class="panel-heading">
            <h2>Proof to unlock next level</h2>
            <span class="pill">${adminMode ? "Admin open" : proofReady ? "Ready" : "Locked"}</span>
          </div>
          <p class="upload-requirement">${escapeHtml(lesson.uploadRequirement)}</p>
          ${proofInputMarkup(lesson)}
          <div class="actions">
            <button class="ghost-button" type="button" data-prev ${state.currentLesson === 0 ? "disabled" : ""}>Back</button>
            <button class="primary-button" type="button" data-next ${proofReady ? "" : "disabled"}>
              ${escapeHtml(lesson.buttonText)}
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

function lessonTab(lesson, index, maxUnlocked) {
  const isCurrent = index === state.currentLesson;
  const complete = hasProof(lesson, state);
  const locked = index > maxUnlocked;
  const status = isAdmin(state) ? "Admin open" : locked ? "Locked" : complete ? "Cleared" : isCurrent ? "Current quest" : "Unlocked";

  return `
    <button
      class="lesson-tab ${complete ? "is-complete" : ""} ${locked ? "is-locked" : ""}"
      type="button"
      data-lesson-index="${index}"
      ${isCurrent ? 'aria-current="step"' : ""}
      ${locked ? "disabled" : ""}
    >
      <strong>Level ${lesson.level}: ${escapeHtml(lesson.title)}</strong>
      <span>${status}</span>
    </button>
  `;
}

function videoMarkup(lesson) {
  const src = VIDEO_URLS[lesson.videoKey] || VIDEO_URLS.placeholder;
  if (
    !src ||
    src.includes("YOUR_CUSTOM_VIDEO_EMBED_URL") ||
    src.includes("YOUR_CUSTOM_UNLISTED_YOUTUBE_EMBED_URL")
  ) {
    return `
      <div class="video-placeholder">
        <strong>Custom shooter video slot</strong>
        <span>Replace VIDEO_URLS.${escapeHtml(lesson.videoKey)} with your 30-45 second embed URL.</span>
      </div>
    `;
  }

  return `
    <div class="video-frame">
      <iframe
        title="${escapeHtml(lesson.title)} training video"
        src="${src}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  `;
}

function referenceImage(lesson) {
  return IMAGE_URLS[lesson.imageKey] || IMAGE_URLS.fullShooterReference;
}

function proofInputMarkup(lesson) {
  const upload = state.uploads[lesson.id];
  const response = state.responses[lesson.id] || "";

  return `
    <label class="upload-drop">
      <strong>${upload ? escapeHtml(upload.label) : "Choose proof file"}</strong>
      <span>Accepted: ${escapeHtml(lesson.acceptedTypes.join(", "))}</span>
      <input data-upload type="file" accept="${escapeHtml(lesson.acceptedTypes.join(","))}" ${lesson.allowMultiple ? "multiple" : ""} />
    </label>
    <div class="preview" data-preview>${upload ? previewMarkup(lesson, upload) : ""}</div>
    ${
      lesson.textProof
        ? `<div class="field response-field">
            <label for="response-proof">${escapeHtml(lesson.responsePrompt || "Typed proof")}</label>
            <textarea id="response-proof" data-response rows="5">${escapeHtml(response)}</textarea>
          </div>`
        : ""
    }
  `;
}

function welcomeModal() {
  const learnerName = escapeHtml(state.learnerName);

  return `
    <div class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="torque-title">
      <div class="modal">
        <div class="gear large pop" aria-hidden="true"></div>
        <h2 id="torque-title">Hi, my name is ${APP_CONFIG.mentorName}.</h2>
        <p>Hey ${learnerName}, this is a level-based shooter CAD quest. Prove each level, and I will unlock the next one.</p>
        <button class="secondary-button" type="button" data-close-welcome>Start Level 0</button>
      </div>
    </div>
  `;
}

function bindWorkspaceEvents() {
  app.querySelector("[data-reset]").addEventListener("click", () => {
    for (const urlList of uploadUrls.values()) {
      urlList.forEach((url) => URL.revokeObjectURL(url));
    }
    uploadUrls.clear();
    state = defaultState();
    saveState();
    render();
  });

  app.querySelectorAll("[data-lesson-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const requested = Number(button.dataset.lessonIndex);
      if (requested > getMaxUnlocked(state)) return;
      state.currentLesson = requested;
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

  const uploadInput = app.querySelector("[data-upload]");
  uploadInput.addEventListener("change", (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    const lesson = LESSONS[state.currentLesson];
    const urls = files.map((file) => URL.createObjectURL(file));

    if (uploadUrls.has(lesson.id)) {
      uploadUrls.get(lesson.id).forEach((url) => URL.revokeObjectURL(url));
    }

    uploadUrls.set(lesson.id, urls);
    state.uploads[lesson.id] = {
      label: files.length === 1 ? files[0].name : `${files.length} files selected`,
      count: files.length,
      items: files.map((file) => ({
        name: file.name,
        type: file.type,
        size: file.size
      }))
    };
    saveState();
    render();
  });

  const responseInput = app.querySelector("[data-response]");
  if (responseInput) {
    responseInput.addEventListener("input", (event) => {
      const lesson = LESSONS[state.currentLesson];
      state.responses[lesson.id] = event.target.value;
      saveState();
      renderProofButtonState();
    });
  }

  app.querySelector("[data-prev]").addEventListener("click", () => {
    state.currentLesson = Math.max(0, state.currentLesson - 1);
    saveState();
    render();
  });

  app.querySelector("[data-next]").addEventListener("click", () => {
    const lesson = LESSONS[state.currentLesson];
    if (!isAdmin(state) && !hasProof(lesson, state)) return;

    if (state.currentLesson === LESSONS.length - 1) {
      state.complete = true;
    } else {
      state.currentLesson += 1;
    }
    saveState();
    render();
  });
}

function renderProofButtonState() {
  const lesson = LESSONS[state.currentLesson];
  const next = app.querySelector("[data-next]");
  const status = app.querySelector(".upload-panel .panel-heading .pill");
  const proofReady = isAdmin(state) || hasProof(lesson, state);
  if (next) next.disabled = !proofReady;
  if (status) status.textContent = isAdmin(state) ? "Admin open" : proofReady ? "Ready" : "Locked";
}

function previewMarkup(lesson, upload) {
  const urls = uploadUrls.get(lesson.id) || [];
  const items = upload.items || [];

  if (!urls.length) {
    return `<div class="preview-file">${escapeHtml(upload.label)}</div>`;
  }

  return items
    .map((item, index) => {
      const fileName = escapeHtml(item.name);
      const src = urls[index];
      if (item.type.startsWith("image/")) {
        return `<img src="${src}" alt="Uploaded proof named ${fileName}" />`;
      }
      if (item.type.startsWith("video/")) {
        return `<video src="${src}" controls></video>`;
      }
      return `<div class="preview-file">${fileName}</div>`;
    })
    .join("");
}

function getProgress() {
  const done = LESSONS.filter((lesson) => hasProof(lesson, state)).length;
  const total = LESSONS.length;
  return {
    done,
    total,
    percent: total ? (done / total) * 100 : 0
  };
}

function getMaxUnlocked(targetState) {
  if (isAdmin(targetState)) return LESSONS.length - 1;

  for (let index = 0; index < LESSONS.length; index += 1) {
    if (!hasProof(LESSONS[index], targetState)) return index;
  }
  return LESSONS.length - 1;
}

function isAdmin(targetState = state) {
  return targetState.accessCode === "ADMIN-101";
}

function hasProof(lesson, targetState) {
  const upload = targetState.uploads?.[lesson.id];
  const fileCount = upload?.count || 0;
  const hasEnoughFiles = fileCount >= (lesson.minFiles || 1);
  const hasText = Boolean((targetState.responses?.[lesson.id] || "").trim());

  if (lesson.proofMode === "file-and-text") return hasEnoughFiles && hasText;
  if (lesson.textProof) return hasEnoughFiles || hasText;
  return hasEnoughFiles;
}

function renderCompleteScreen() {
  const progress = getProgress();
  const learnerName = escapeHtml(state.learnerName);

  app.innerHTML = `
    <section class="screen login-screen">
      <div class="brand-panel">
        <div class="gear large pop" aria-hidden="true"></div>
        <h1>Quest complete, ${learnerName}.</h1>
        <p>You cleared ${progress.done} Torque levels and finished the simplified FRC shooter CAD path.</p>
      </div>
      <div class="complete-panel">
        <span class="pill">Shooter path complete</span>
        <h2>Side plates, library parts, assembly, and final proof are done.</h2>
        <p class="intro-copy">This version saves proof locally in the browser. The next production upgrade can send files, links, and reflections to a teacher dashboard.</p>
        <div class="actions">
          <button class="ghost-button" type="button" data-review>Review levels</button>
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
