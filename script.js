"use strict";

// ============================================================
// EDIT PROJECT AND TEAM INFORMATION HERE
// Replace all sample copy with your team's verified information.
// ============================================================
const project = {
  name: "Portable Automotive HUD",
  description: "A dashboard-mounted display concept that places navigation and vehicle information within the driver’s forward field of view. The team is exploring a portable LCD and transparent-combiner architecture, with camera-assisted features as a later design option.",
  currentPhase: "System Architecture",
  currentFocus: "Define the optical, mechanical, and electronics interfaces for a first prototype.",
  sampleMode: true, // Set to false after replacing all illustrative content with verified work.
};

const teamMembers = [
  { name: "Uday Roy", role: "Software / Systems", initials: "UR", areas: ["Computer vision", "Embedded software", "System integration"] },
  { name: "Team Member 2", role: "Optics / Electronics", initials: "02", areas: ["Display selection", "Power budget", "Optical research"] },
  { name: "Team Member 3", role: "Mechanical Design", initials: "03", areas: ["Enclosure CAD", "Combiner mechanism", "Packaging"] },
  { name: "Team Member 4", role: "Validation / UX", initials: "04", areas: ["User needs", "Test planning", "Driver interaction"] },
];

// ============================================================
// ADD NEW DESIGN LOGS HERE
// Duplicate one complete object, assign a unique id and ISO date,
// then replace every field with verified work. Newest-first display
// order is automatic. Every member present needs a contribution.
// ============================================================
const designLogs = [
  {
    id: 1,
    date: "2026-09-08",
    title: "Problem definition and user needs",
    type: "Team Design Meeting",
    tags: ["Meeting", "Research"],
    membersPresent: ["Uday Roy", "Team Member 2", "Team Member 3", "Team Member 4"],
    objective: "Define the driver problem the portable HUD should solve and set boundaries for the first prototype.",
    workCompleted: "Drafted a need statement for glanceable navigation and speed information without requiring permanent vehicle modification. Separated core functions (readable speed and turn cues) from possible later functions (camera-assisted hazard awareness). Listed initial constraints around dashboard footprint, visibility, power, and mounting reversibility.",
    contributions: {
      "Uday Roy": ["Mapped likely navigation and vehicle-data software inputs.", "Proposed a modular split between display logic and future camera processing."],
      "Team Member 2": ["Collected initial questions about display brightness and daytime readability."],
      "Team Member 3": ["Outlined dashboard mounting and enclosure size constraints for a portable unit."],
      "Team Member 4": ["Drafted driver-use scenarios and identified distraction as a validation concern."],
    },
    decisions: [],
    challenges: "The team has not yet confirmed which vehicle data interface is practical; prototype speed input may need to be simulated first.",
    outcome: "A first-pass problem statement and a clear boundary between prototype essentials and optional capabilities were established for review.",
    nextSteps: [
      { task: "Review comparable portable HUD products and optical arrangements.", owner: "Team Member 2" },
      { task: "Turn user needs into measurable prototype requirements.", owner: "Team Member 4" },
    ],
    evidence: [],
  },
  {
    id: 2,
    date: "2026-09-11",
    title: "Existing HUD technology review",
    type: "Research Session",
    tags: ["Research", "Electrical"],
    membersPresent: ["Uday Roy", "Team Member 2", "Team Member 4"],
    objective: "Compare common automotive HUD display paths and identify risks for a removable device.",
    workCompleted: "Compared windshield-reflection and separate-combiner approaches at a concept level. Catalogued questions about sunlight washout, ghost reflections, focal distance, display mirroring, and windshield variability. Recorded which questions can be answered with a benchtop mockup before committing to a packaging layout.",
    contributions: {
      "Uday Roy": ["Outlined the rendering pipeline needed to mirror and position navigation cues."],
      "Team Member 2": ["Compared display and combiner optical paths and documented readability risks."],
      "Team Member 4": ["Converted research findings into preliminary evaluation criteria for driver visibility."],
    },
    decisions: [],
    challenges: "Published product specifications are not a substitute for visibility measurements in the team’s own geometry.",
    outcome: "The team identified optical readability as an early prototype risk and scheduled a geometry comparison.",
    nextSteps: [
      { task: "Sketch candidate LCD-to-combiner geometries.", owner: "Team Member 3" },
      { task: "Define an observation checklist for a non-driving bench review.", owner: "Team Member 4" },
    ],
    evidence: [],
  },
  {
    id: 3,
    date: "2026-09-15",
    title: "Concept generation and evaluation criteria",
    type: "Team Design Meeting",
    tags: ["Meeting", "Mechanical", "Research"],
    membersPresent: ["Uday Roy", "Team Member 2", "Team Member 3", "Team Member 4"],
    objective: "Generate feasible form factors and decide how concepts will be compared.",
    workCompleted: "Sketched a fixed-combiner base, a fold-up combiner base, and a windshield-reflection base. Created a qualitative comparison using portability, optical control, packaging, and ease of setup. Identified the hinge and combiner storage envelope as the main mechanical questions for the fold-up concept.",
    contributions: {
      "Uday Roy": ["Checked how each concept would affect screen orientation and UI mirroring."],
      "Team Member 2": ["Compared expected optical adjustment needs across the three concepts."],
      "Team Member 3": ["Created form-factor sketches and identified hinge clearance as a packaging constraint."],
      "Team Member 4": ["Defined repeatable criteria for setup effort and driver sightline review."],
    },
    decisions: [],
    challenges: "The current comparison is qualitative; the concepts still need a physical mockup and measured packaging dimensions.",
    outcome: "Three concepts and a common evaluation framework were ready for the architecture review.",
    nextSteps: [
      { task: "Draw a dimensioned optical-path concept for each combiner option.", owner: "Team Member 3" },
      { task: "Identify candidate transparent materials for a mockup.", owner: "Team Member 2" },
    ],
    evidence: [{ type: "image", src: "assets/optical-concepts.svg", alt: "Illustrative line diagram comparing windshield reflection, fixed combiner, and fold-up combiner paths", caption: "Figure 1 · Conceptual optical-path comparison (illustrative; not measured data)." }],
  },
  {
    id: 4,
    date: "2026-09-18",
    title: "Combiner versus windshield projection",
    type: "Architecture Review",
    tags: ["Mechanical", "Research", "Design Decision"],
    membersPresent: ["Uday Roy", "Team Member 2", "Team Member 3"],
    objective: "Choose an optical architecture to carry into the first portable prototype layout.",
    workCompleted: "Compared how each architecture constrains display placement, mounting position, and repeatable viewing geometry. The windshield path depends on vehicle glass angle and location, while a separate combiner gives the team control over the reflecting surface. The team selected a fold-up combiner as the provisional baseline for CAD and mockup work.",
    contributions: {
      "Uday Roy": ["Assessed how display orientation and image mirroring would change with each path."],
      "Team Member 2": ["Documented optical risks associated with variable windshield geometry."],
      "Team Member 3": ["Compared storage and mounting implications for fixed and fold-up combiner layouts."],
    },
    decisions: [{
      decision: "Use a fold-up transparent combiner as the provisional prototype baseline.",
      alternatives: ["Windshield reflection", "Fixed combiner", "Fold-up combiner"],
      rationale: "A device-controlled reflecting surface offers more repeatable geometry across vehicles while the fold-up form supports portability.",
      tradeoffs: "Adds a hinge, another mechanical failure point, and a need to control deployed angle.",
      outcome: "Carry the fold-up layout into the first CAD envelope; revisit after a physical visibility check.",
    }],
    challenges: "No optical performance has been measured yet; the selection is a concept-level decision that must be validated.",
    outcome: "The provisional architecture changed from an open comparison to a fold-up-combiner CAD baseline.",
    nextSteps: [
      { task: "Model the combiner angle adjustment and folded storage envelope.", owner: "Team Member 3" },
      { task: "Plan a simple readability mockup for the chosen geometry.", owner: "Team Member 2" },
    ],
    evidence: [{ type: "image", src: "assets/optical-concepts.svg", alt: "Illustrative optical-path comparison with fold-up combiner marked as the provisional baseline", caption: "Figure 1 · Architecture options used for the provisional selection (illustrative)." }],
  },
  {
    id: 5,
    date: "2026-09-22",
    title: "Camera placement and future vision capability",
    type: "Subsystem Discussion",
    tags: ["Software", "Mechanical", "Research"],
    membersPresent: ["Uday Roy", "Team Member 3", "Team Member 4"],
    objective: "Keep a credible camera path open without letting optional computer vision block the core HUD prototype.",
    workCompleted: "Compared a camera mounted in the HUD base with a separate centrally mounted camera. Mapped field-of-view, vibration, cable routing, windshield occlusion, and calibration questions for each location. Proposed a modular camera interface so the first display prototype can run with simulated navigation cues while camera placement is evaluated independently.",
    contributions: {
      "Uday Roy": ["Outlined a software interface that can accept either recorded frames or a future live camera feed.", "Separated camera processing from essential speed and navigation rendering."],
      "Team Member 3": ["Compared packaging, wiring, and vibration concerns for integrated versus separate mounting."],
      "Team Member 4": ["Identified sightline and distraction questions to include in later user observation."],
    },
    decisions: [{
      decision: "Keep camera input modular and outside the first display prototype’s critical path.",
      alternatives: ["Camera built into the HUD base", "Separate centrally mounted camera", "No camera provision"],
      rationale: "A modular interface lets the team validate core information display before selecting a camera location or computer vision workload.",
      tradeoffs: "Defers the final cable routing and calibration design.",
      outcome: "The system architecture will reserve an interface for camera data without depending on it for basic HUD operation.",
    }],
    challenges: "Camera field of view and calibration cannot be resolved from sketches alone.",
    outcome: "The prototype scope was revised so vision features are an extension rather than a prerequisite for the first display demo.",
    nextSteps: [
      { task: "Define the proposed camera data interface and placeholder input.", owner: "Uday Roy" },
      { task: "Mock up both mounting positions for a visibility review.", owner: "Team Member 3" },
    ],
    evidence: [],
  },
  {
    id: 6,
    date: "2026-09-24",
    title: "Preliminary system architecture",
    type: "Team Design Meeting",
    tags: ["Meeting", "Electrical", "Software", "Integration", "Design Decision"],
    membersPresent: ["Uday Roy", "Team Member 2", "Team Member 3", "Team Member 4"],
    objective: "Define subsystem boundaries and the information flow for the first integrated prototype.",
    workCompleted: "Created a preliminary block diagram from navigation and speed inputs through a compute module to the LCD, combiner, and driver. Marked separate work packages for enclosure geometry, display and power selection, rendering software, and usability checks. Identified interface questions that must be resolved before parts are committed, including display connection, available power, and whether vehicle speed will be simulated or sourced from the vehicle.",
    contributions: {
      "Uday Roy": ["Drafted data flow and software modules for navigation, speed, and optional camera input.", "Listed integration interfaces that need early confirmation."],
      "Team Member 2": ["Mapped display, compute, and power-selection questions onto the block diagram."],
      "Team Member 3": ["Defined enclosure space claims for the LCD, folding combiner, and mounting base."],
      "Team Member 4": ["Added readability and setup checks to the architecture review criteria."],
    },
    decisions: [{
      decision: "Separate core HUD display functions from optional camera processing in the first system architecture.",
      alternatives: ["Single combined processing pipeline", "Modular core display and camera path"],
      rationale: "The modular boundary allows navigation and speed presentation to be prototyped and evaluated while camera capability remains under investigation.",
      tradeoffs: "Requires a defined interface and an additional integration step if vision features are added later.",
      outcome: "Use the modular block diagram as the next CAD, electronics, and software planning reference.",
    }],
    challenges: "Component choices and interface specifications remain open; the diagram is an architecture hypothesis, not a validated build.",
    outcome: "The team moved from separate concept discussions to one shared preliminary architecture and a list of interface decisions.",
    nextSteps: [
      { task: "Confirm display connection and provisional power budget.", owner: "Team Member 2" },
      { task: "Turn the optical package into a first CAD envelope.", owner: "Team Member 3" },
      { task: "Build a basic rendering proof of concept with simulated inputs.", owner: "Uday Roy" },
      { task: "Draft a bench review protocol for legibility and setup.", owner: "Team Member 4" },
    ],
    evidence: [{ type: "image", src: "assets/system-architecture.svg", alt: "Illustrative system block diagram connecting inputs, compute module, LCD, combiner, and optional camera", caption: "Figure 2 · Preliminary system block diagram (illustrative architecture)." }],
  },
];

// ============================================================
// EDIT MILESTONES AND DOCUMENT LINKS HERE
// Use a real URL/path only after the resource exists.
// status: "complete", "current", or "upcoming".
// ============================================================
const milestones = [
  { title: "Problem definition", status: "complete", target: "Sep 2026", logId: 1 },
  { title: "Concept generation", status: "complete", target: "Sep 2026", logId: 3 },
  { title: "System architecture", status: "current", target: "Sep 2026", logId: 6 },
  { title: "Prototype design", status: "upcoming", target: "Oct 2026" },
  { title: "Prototype fabrication", status: "upcoming", target: "Nov 2026" },
  { title: "Integration", status: "upcoming", target: "Winter 2027" },
  { title: "Testing and validation", status: "upcoming", target: "Winter 2027" },
  { title: "Final demonstration", status: "upcoming", target: "Spring 2027" },
];

const documents = [
  { title: "Optical concept diagram", type: "Diagram", note: "Illustrative architecture comparison", href: "assets/optical-concepts.svg" },
  { title: "System block diagram", type: "Diagram", note: "Preliminary subsystem map", href: "assets/system-architecture.svg" },
  { title: "Requirements register", type: "Requirements", note: "Add a reviewed document link", href: "" },
  { title: "Enclosure CAD", type: "CAD", note: "Add after first model review", href: "" },
  { title: "Electronics schematic", type: "Schematic", note: "Add after circuit definition", href: "" },
  { title: "Test plan and results", type: "Validation", note: "Add before prototype testing", href: "" },
];

const categoryOptions = ["All", "Meetings", "Research", "Mechanical", "Electrical", "Software", "Testing", "Design Decisions"];
const state = { category: "All", member: "", search: "", recent: false };
const sortedLogs = [...designLogs].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")) || (b.id || 0) - (a.id || 0));

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function parseDate(isoDate) { return new Date(`${isoDate}T12:00:00`); }
function isValidDate(isoDate) { return /^\d{4}-\d{2}-\d{2}$/.test(isoDate || "") && !Number.isNaN(parseDate(isoDate).getTime()) && localIso(parseDate(isoDate)) === isoDate; }
function formatDate(isoDate, options = { year: "numeric", month: "long", day: "numeric" }) { return isValidDate(isoDate) ? new Intl.DateTimeFormat("en-CA", options).format(parseDate(isoDate)) : "Date missing"; }
function mondayOf(isoDate) { if (!isValidDate(isoDate)) return null; const date = parseDate(isoDate); date.setDate(date.getDate() - ((date.getDay() + 6) % 7)); return date; }
function localIso(date) { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`; }
function weekKey(log) { const monday = mondayOf(log.date); return monday ? localIso(monday) : "undated"; }
function weekNumber(key) { return key === "undated" ? null : Math.round((mondayOf(key) - firstWeek) / 604800000) + 1; }
function weekRange(key) { if (key === "undated") return "Date required"; const end = parseDate(key); end.setDate(end.getDate() + 6); return `${formatDate(key, { month: "short", day: "numeric" })}–${formatDate(localIso(end), { month: "short", day: "numeric" })}`; }
const firstDatedLog = [...sortedLogs].reverse().find(log => isValidDate(log.date));
const firstWeek = firstDatedLog ? mondayOf(firstDatedLog.date) : new Date();

function validateLogs(logs) {
  const seenIds = new Set();
  const knownMembers = new Set(teamMembers.map(member => member.name));
  for (const log of logs) {
    const label = `Log #${log.id ?? "?"}`;
    const warn = message => console.warn(`WARNING — ${label} ${message}`);
    if (!Number.isInteger(log.id) || seenIds.has(log.id)) warn("needs a unique numeric id.");
    seenIds.add(log.id);
    if (!isValidDate(log.date)) warn("needs a valid YYYY-MM-DD date.");
    if (!log.title?.trim()) warn("has no title.");
    if (!log.objective?.trim()) warn("has no objective.");
    if (!log.workCompleted?.trim()) warn("has no work completed.");
    else if (log.workCompleted.trim().split(/\s+/).length < 25) warn("has a very brief work-completed summary; add specific engineering progress.");
    if (!Array.isArray(log.membersPresent) || !log.membersPresent.length) warn("has no members present.");
    if (!log.contributions || !Object.keys(log.contributions).length) warn("has no individual contributions listed.");
    for (const member of log.membersPresent || []) {
      if (!knownMembers.has(member)) warn(`lists ${member} but that person is missing from teamMembers.`);
      if (!Array.isArray(log.contributions?.[member]) || !log.contributions[member].some(item => item?.trim())) warn(`has no individual contribution for ${member}.`);
    }
    for (const member of Object.keys(log.contributions || {})) if (!log.membersPresent?.includes(member)) warn(`lists a contribution for ${member}, but that person is not listed as present.`);
    if (!log.outcome?.trim()) warn("has no outcome.");
    if (!Array.isArray(log.nextSteps) || !log.nextSteps.some(step => typeof step === "string" ? step.trim() : step.task?.trim())) warn("has no next steps.");
    for (const decision of log.decisions || []) if (!decision.decision || !decision.alternatives?.length || !decision.rationale || !decision.tradeoffs || !decision.outcome) warn("has an incomplete engineering decision.");
  }
}

function renderOverview() {
  document.querySelector(".sample-notice").hidden = !project.sampleMode;
  document.getElementById("header-project-name").textContent = project.name;
  document.getElementById("project-description").textContent = project.description;
  document.getElementById("overview-team").textContent = teamMembers.map(member => member.name).join(" · ");
  document.getElementById("current-phase").textContent = project.currentPhase;
  document.getElementById("current-focus").textContent = project.currentFocus;
  document.getElementById("last-updated").textContent = sortedLogs.length ? formatDate(sortedLogs[0].date) : "No entries yet";
  const next = milestones.find(item => item.status === "upcoming");
  document.getElementById("next-milestone").textContent = next ? `${next.title} · ${next.target}` : "To be scheduled";
  document.getElementById("entry-count").textContent = String(sortedLogs.length).padStart(2, "0");
  document.getElementById("log-total").textContent = String(sortedLogs.length).padStart(2, "0");
  document.getElementById("week-total").textContent = String(new Set(sortedLogs.map(weekKey)).size);
  const recent = document.getElementById("recent-entry");
  if (sortedLogs.length) { recent.textContent = `#${String(sortedLogs[0].id).padStart(2, "0")} · ${sortedLogs[0].title}`; recent.href = `#log-${sortedLogs[0].id}`; recent.dataset.logLink = sortedLogs[0].id; }
  const latestWithDecision = sortedLogs.find(log => log.decisions?.length);
  const latest = document.getElementById("latest-decision");
  if (latestWithDecision) { latest.textContent = latestWithDecision.decisions[0].decision; latest.href = `#log-${latestWithDecision.id}`; latest.dataset.logLink = latestWithDecision.id; }
}

function renderControls() {
  document.getElementById("member-filter").insertAdjacentHTML("beforeend", teamMembers.map(member => `<option value="${escapeHtml(member.name)}">${escapeHtml(member.name)}</option>`).join(""));
  document.getElementById("category-filters").innerHTML = categoryOptions.map(category => `<button type="button" class="filter-chip${state.category === category ? " active" : ""}" data-category="${escapeHtml(category)}" aria-pressed="${state.category === category}">${escapeHtml(category)}</button>`).join("");
}

function matchesCategory(log) {
  if (state.category === "All") return true;
  if (state.category === "Meetings") return log.tags.includes("Meeting") || /meeting/i.test(log.type);
  if (state.category === "Design Decisions") return log.decisions?.length > 0;
  return log.tags.includes(state.category);
}

function filteredLogs() {
  const mostRecent = sortedLogs[0] && parseDate(sortedLogs[0].date);
  return sortedLogs.filter(log => {
    if (!matchesCategory(log)) return false;
    if (state.member && !log.contributions?.[state.member]?.length) return false;
    if (state.search && !JSON.stringify(log).toLowerCase().includes(state.search)) return false;
    if (state.recent && mostRecent && (mostRecent - parseDate(log.date)) / 86400000 > 13) return false;
    return true;
  });
}

function renderContribution(member, items) {
  return `<div class="contribution-card${state.member === member ? " selected-member" : ""}"><strong>${escapeHtml(member)}</strong><ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`;
}

function renderDecision(decision) {
  return `<div class="decision-detail"><div><span class="field-label">DECISION</span><p>${escapeHtml(decision.decision)}</p></div><div><span class="field-label">ALTERNATIVES CONSIDERED</span><p>${escapeHtml(decision.alternatives.join(" · "))}</p></div><div><span class="field-label">REASONING</span><p>${escapeHtml(decision.rationale)}</p></div><div><span class="field-label">TRADE-OFFS</span><p>${escapeHtml(decision.tradeoffs)}</p></div><div><span class="field-label">DECISION OUTCOME</span><p>${escapeHtml(decision.outcome)}</p></div></div>`;
}

function renderEvidence(evidence) {
  if (!evidence?.length) return `<p class="no-evidence">No artifact attached to this sample entry.</p>`;
  return `<div class="evidence-grid">${evidence.map(item => `<figure><button type="button" class="evidence-image" data-image-src="${escapeHtml(item.src)}" data-image-alt="${escapeHtml(item.alt)}" data-image-caption="${escapeHtml(item.caption)}" aria-label="Enlarge ${escapeHtml(item.caption)}"><img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy"><span aria-hidden="true">↗</span></button><figcaption>${escapeHtml(item.caption)}</figcaption></figure>`).join("")}</div>`;
}

function renderLog(log) {
  const contributors = Object.entries(log.contributions || {}).filter(([, items]) => items?.length).map(([member, items]) => renderContribution(member, items)).join("");
  const nextSteps = (log.nextSteps || []).map(step => typeof step === "string" ? { task: step, owner: "" } : step);
  return `<article class="log-card" id="log-${log.id}" aria-labelledby="log-title-${log.id}">
    <div class="log-card-top"><span class="log-number">LOG #${String(log.id).padStart(2, "0")}</span><time datetime="${escapeHtml(log.date)}">${escapeHtml(formatDate(log.date))}</time></div>
    <h3 id="log-title-${log.id}">${escapeHtml(log.title)}</h3>
    <div class="tag-row">${(log.tags || []).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    <div class="log-context"><span>${escapeHtml(log.type)}</span><span aria-hidden="true">·</span><span>${log.membersPresent.length} members present</span></div>
    <div class="log-body-grid"><div><h4>Objective</h4><p>${escapeHtml(log.objective)}</p></div><div><h4>Work completed</h4><p>${escapeHtml(log.workCompleted)}</p></div></div>
    <div class="contribution-section"><div class="subsection-heading"><h4>Individual contributions</h4><span>${Object.keys(log.contributions || {}).length} contributors</span></div><div class="contribution-grid">${contributors}</div></div>
    ${log.decisions?.length ? `<div class="decision-summary"><span class="decision-symbol" aria-hidden="true">◆</span><div><span class="field-label">ENGINEERING DECISION</span><p>${escapeHtml(log.decisions[0].decision)}</p></div></div>` : ""}
    <div class="result-grid"><div class="outcome-block"><h4>What changed</h4><p>${escapeHtml(log.outcome)}</p></div><div class="next-block"><h4>Next steps</h4><ul>${nextSteps.map(step => `<li><span class="step-arrow" aria-hidden="true">→</span><span>${escapeHtml(step.task)}${step.owner ? `<small>Owner: ${escapeHtml(step.owner)}</small>` : ""}</span></li>`).join("")}</ul></div></div>
    <details class="record-details"><summary>Full session record <span aria-hidden="true">+</span></summary><div class="detail-content"><div class="session-detail"><div><span class="field-label">SESSION TYPE</span><p>${escapeHtml(log.type)}</p></div><div><span class="field-label">MEMBERS PRESENT</span><p>${escapeHtml(log.membersPresent.join(", "))}</p></div></div>${log.decisions?.length ? `<section><h4>Decision reasoning</h4>${log.decisions.map(renderDecision).join("")}</section>` : ""}<section><h4>Challenges encountered</h4><p>${escapeHtml(log.challenges || "No challenges recorded.")}</p></section><section><h4>Evidence & artifacts</h4>${renderEvidence(log.evidence)}</section></div></details>
  </article>`;
}

function renderLogList() {
  const logs = filteredLogs();
  const groups = new Map();
  logs.forEach(log => { const key = weekKey(log); if (!groups.has(key)) groups.set(key, []); groups.get(key).push(log); });
  document.getElementById("log-list").innerHTML = [...groups].map(([key, weekLogs]) => `<section class="week-group" id="week-${key}" aria-labelledby="week-title-${key}"><div class="week-heading"><div><span class="week-index">${key === "undated" ? "UNDATED ENTRIES" : `WEEK ${String(weekNumber(key)).padStart(2, "0")}`}</span><h3 id="week-title-${key}">${escapeHtml(weekRange(key))}</h3></div><span>${weekLogs.length} ${weekLogs.length === 1 ? "entry" : "entries"}</span></div>${weekLogs.map(renderLog).join("")}</section>`).join("");
  document.getElementById("empty-state").hidden = logs.length > 0;
  document.getElementById("filter-result-count").textContent = `${logs.length} of ${sortedLogs.length} entries`;
  document.getElementById("week-nav").innerHTML = [...groups].map(([key, weekLogs]) => `<a href="#week-${key}"><span>${key === "undated" ? "Undated" : `Week ${String(weekNumber(key)).padStart(2, "0")}`}</span><small>${escapeHtml(weekRange(key))}</small><b>${weekLogs.length}</b></a>`).join("");
  document.querySelectorAll(".filter-chip").forEach(button => { const active = button.dataset.category === state.category; button.classList.toggle("active", active); button.setAttribute("aria-pressed", String(active)); });
  document.getElementById("recent-filter").setAttribute("aria-pressed", String(state.recent));
  document.getElementById("recent-filter").classList.toggle("is-active", state.recent);
}

function renderTeam() {
  document.getElementById("team-grid").innerHTML = teamMembers.map(member => {
    const count = sortedLogs.filter(log => log.contributions?.[member.name]?.length).length;
    return `<article class="team-card"><div class="team-card-top"><span class="avatar" aria-hidden="true">${escapeHtml(member.initials)}</span><span class="team-entry-count">${count} ${count === 1 ? "entry" : "entries"}</span></div><h3>${escapeHtml(member.name)}</h3><p class="team-role">${escapeHtml(member.role)}</p><div class="team-areas"><span class="field-label">TECHNICAL AREAS</span><p>${member.areas.map(escapeHtml).join(" · ")}</p></div><button type="button" class="team-link" data-team-member="${escapeHtml(member.name)}">View contributions <span aria-hidden="true">→</span></button></article>`;
  }).join("");
}

function renderDecisions() {
  const decisions = sortedLogs.flatMap(log => (log.decisions || []).map(decision => ({ log, decision })));
  document.getElementById("decision-rows").innerHTML = decisions.map(({ log, decision }) => `<tr><td><time datetime="${escapeHtml(log.date)}">${escapeHtml(formatDate(log.date, { month: "short", day: "numeric", year: "numeric" }))}</time></td><td><strong>${escapeHtml(decision.decision)}</strong></td><td>${escapeHtml(decision.alternatives.join(" / "))}</td><td>${escapeHtml(decision.rationale)}</td><td><a href="#log-${log.id}" data-log-link="${log.id}">Log #${String(log.id).padStart(2, "0")} ↗</a></td></tr>`).join("") || `<tr><td colspan="5">No decisions recorded yet.</td></tr>`;
}

function renderMilestones() {
  document.getElementById("milestone-list").innerHTML = milestones.map(item => `<li class="milestone ${escapeHtml(item.status)}"><span class="milestone-dot" aria-hidden="true">${item.status === "complete" ? "✓" : item.status === "current" ? "●" : "○"}</span><div><span class="milestone-status">${escapeHtml(item.status)}</span><strong>${escapeHtml(item.title)}</strong>${item.logId ? `<a href="#log-${item.logId}" data-log-link="${item.logId}">Related log #${String(item.logId).padStart(2, "0")} ↗</a>` : ""}</div><time>${escapeHtml(item.target)}</time></li>`).join("");
}

function renderDocuments() {
  document.getElementById("document-grid").innerHTML = documents.map(item => `<article class="document-card"><div class="document-icon" aria-hidden="true">↗</div><span class="field-label">${escapeHtml(item.type)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.note)}</p>${item.href ? `<a href="${escapeHtml(item.href)}" target="_blank" rel="noopener">Open artifact <span aria-hidden="true">↗</span></a>` : `<span class="document-pending">Link pending</span>`}</article>`).join("");
}

function clearFilters() {
  state.category = "All"; state.member = ""; state.search = ""; state.recent = false;
  document.getElementById("member-filter").value = "";
  document.getElementById("log-search").value = "";
  renderLogList();
}

function wireEvents() {
  document.getElementById("log-search").addEventListener("input", event => { state.search = event.target.value.trim().toLowerCase(); renderLogList(); });
  document.getElementById("member-filter").addEventListener("change", event => { state.member = event.target.value; renderLogList(); });
  document.getElementById("category-filters").addEventListener("click", event => { const button = event.target.closest("[data-category]"); if (!button) return; state.category = button.dataset.category; renderLogList(); });
  document.getElementById("recent-filter").addEventListener("click", () => { state.recent = !state.recent; renderLogList(); });
  document.getElementById("clear-filters").addEventListener("click", clearFilters);
  document.getElementById("empty-reset").addEventListener("click", clearFilters);
  document.addEventListener("click", event => {
    const teamButton = event.target.closest("[data-team-member]");
    if (teamButton) { clearFilters(); state.member = teamButton.dataset.teamMember; document.getElementById("member-filter").value = state.member; renderLogList(); document.getElementById("design-log").scrollIntoView(); return; }
    const logLink = event.target.closest("[data-log-link]");
    if (logLink) { clearFilters(); const target = document.getElementById(`log-${logLink.dataset.logLink}`); if (target) { event.preventDefault(); window.location.hash = `log-${logLink.dataset.logLink}`; target.scrollIntoView(); } return; }
    const imageButton = event.target.closest("[data-image-src]");
    if (imageButton) { const dialog = document.getElementById("image-dialog"); const image = document.getElementById("dialog-image"); image.src = imageButton.dataset.imageSrc; image.alt = imageButton.dataset.imageAlt; document.getElementById("dialog-caption").textContent = imageButton.dataset.imageCaption; dialog.showModal(); }
  });
  document.getElementById("dialog-close").addEventListener("click", () => document.getElementById("image-dialog").close());
  document.getElementById("image-dialog").addEventListener("click", event => { if (event.target.id === "image-dialog") event.target.close(); });
  const toggle = document.getElementById("menu-toggle"); const nav = document.getElementById("primary-navigation");
  toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") === "true"; toggle.setAttribute("aria-expanded", String(!open)); toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation"); nav.classList.toggle("open", !open); });
  nav.addEventListener("click", event => { if (event.target.closest("a")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open navigation"); } });
}

validateLogs(designLogs);
renderOverview();
renderControls();
renderLogList();
renderTeam();
renderDecisions();
renderMilestones();
renderDocuments();
wireEvents();
