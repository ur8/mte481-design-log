"use strict";

// ============================================================
// EDIT PROJECT AND TEAM INFORMATION HERE
// Keep status, expertise, and the provisional concept current.
// ============================================================
const project = {
  name: "AR Episodic Memory Glasses",
  description: "A proposed wearable system that captures user-enabled first-person video and audio, indexes recent moments, and helps a user retrieve a relevant event and replay its source clip. The current prototype uses an off-head Raspberry Pi for capture and control and a laptop for heavier processing.",
  currentPhase: "Detailed design & component evaluation",
  currentFocus: "Validate the capture and display interfaces, check frame fit, and shortlist components for the prototype.",
  recordNotice: "The September 24 entry starts the team's reported weekly meeting cadence. Later entries are retrospective summaries dated by the start of each week; exact meeting dates, attendance and individual contributions are not recorded. Component selections remain open.",
};

// These describe reported experience, not finalized work assignments.
const teamMembers = [
  { name: "Uday Roy", role: "Autonomy software", initials: "UR", areas: ["Autonomy software", "Some hardware experience"] },
  { name: "Aviral Gupta", role: "Machine learning / data", initials: "AG", areas: ["Machine learning", "Data"] },
  { name: "Benedek Boda", role: "Firmware", initials: "BB", areas: ["Firmware"] },
  { name: "Tom Wang", role: "Software", initials: "TW", areas: ["Full-stack software"] },
  { name: "Yibo Yang", role: "Embedded / hardware", initials: "YY", areas: ["Embedded systems", "Hardware"] },
];

// ============================================================
// ADD NEW DESIGN LOGS HERE
// The September records below use only reported group activity and
// the supplied concept documents. Replace broad participation notes
// with each person's confirmed, specific work when known.
// ============================================================
const designLogs = [
  {
    id: 1,
    date: "2026-09-18",
    title: "Initial capstone idea generation",
    type: "Team Concept Discussion",
    tags: ["Meeting", "Research"],
    membersPresent: ["Uday Roy", "Aviral Gupta", "Benedek Boda", "Tom Wang", "Yibo Yang"],
    objective: "Generate possible MTE 481 capstone directions and compare them with the team's interests and skills.",
    workCompleted: "The group began building a broad idea list that included inspection devices, a smoke-response robot, an offline hand-cranked assistant, smart appliances, wearable glasses, a driver HUD, and a referee band. For each proposal discussed, the team considered its potential value, technical difficulty, and whether the work would suit the combined software, ML, firmware, embedded, and hardware experience in the group.",
    contributions: {
      "Uday Roy": ["Participated in the group idea discussion and considered how autonomy software experience in Python and C++ could fit the concepts."],
      "Aviral Gupta": ["Participated in the group idea discussion and considered where ML and data work could contribute."],
      "Benedek Boda": ["Participated in the group idea discussion and considered how firmware work could fit the concepts."],
      "Tom Wang": ["Participated in the group idea discussion and considered the software development needs of the concepts."],
      "Yibo Yang": ["Participated in the group idea discussion and considered embedded and hardware needs."],
    },
    decisions: [],
    challenges: "The list was exploratory; feasibility, scope, and access to realistic test settings had not yet been established.",
    outcome: "The team had a shared starting list for a more focused comparison the following day.",
    nextSteps: [{ task: "Continue generating ideas and discuss each concept's strengths, risks, and fit with the team.", owner: "" }],
    resources: [{ title: "Initial project ideas", href: "assets/mte481-project-ideas.pdf" }],
    evidence: [],
  },
  {
    id: 2,
    date: "2026-09-19",
    title: "Concept pros, cons, and team fit",
    type: "Team Concept Discussion",
    tags: ["Meeting", "Research"],
    membersPresent: ["Uday Roy", "Aviral Gupta", "Benedek Boda", "Tom Wang", "Yibo Yang"],
    objective: "Continue idea generation and test whether the candidate projects fit the team's interests and experience.",
    workCompleted: "The group continued discussing the ideas gathered across September 18 and 19. Conversation covered the benefits and drawbacks of each direction, the likely software and hardware effort, and how the members' backgrounds could support the work. The discussion kept several options open rather than treating the first attractive idea as a final project choice.",
    contributions: {
      "Uday Roy": ["Joined the pros-and-cons discussion, including the fit of autonomy software and limited hardware experience."],
      "Aviral Gupta": ["Joined the pros-and-cons discussion, including the fit of ML and data experience."],
      "Benedek Boda": ["Joined the pros-and-cons discussion, including the fit of firmware experience."],
      "Tom Wang": ["Joined the pros-and-cons discussion, including the fit of full-stack software experience."],
      "Yibo Yang": ["Joined the pros-and-cons discussion, including the fit of embedded and hardware experience."],
    },
    decisions: [],
    challenges: "The group still needed to narrow the broad list to a small set of concepts that could be explained and reviewed with the professor.",
    outcome: "A clearer comparison of team fit and project risks prepared the group to select three concepts for faculty feedback.",
    nextSteps: [{ task: "Meet to choose three ideas for the professor discussion.", owner: "" }],
    resources: [{ title: "Initial project ideas", href: "assets/mte481-project-ideas.pdf" }],
    evidence: [],
  },
  {
    id: 3,
    date: "2026-09-20",
    title: "Three concepts selected for faculty discussion",
    type: "Team Selection Meeting",
    tags: ["Meeting", "Design Decision"],
    membersPresent: ["Uday Roy", "Aviral Gupta", "Benedek Boda", "Tom Wang", "Yibo Yang"],
    objective: "Choose three concepts from the initial idea list to present for professor feedback.",
    workCompleted: "The team reviewed the broader idea list and selected AR Episodic Memory Glasses, SmokeScout Drone, and DriveSight Portable Lane-Aware HUD for the concept discussion. The presentation brief framed each idea around the need, proposed system, intended scope, major constraints, and questions for the professor. This was a shortlist for feedback, not a final capstone selection.",
    contributions: {
      "Uday Roy": ["Participated in the group shortlist discussion and reviewed the concepts against autonomy-software interests."],
      "Aviral Gupta": ["Participated in the group shortlist discussion and reviewed the concepts against ML and data interests."],
      "Benedek Boda": ["Participated in the group shortlist discussion and reviewed the concepts against firmware interests."],
      "Tom Wang": ["Participated in the group shortlist discussion and reviewed the concepts against software interests."],
      "Yibo Yang": ["Participated in the group shortlist discussion and reviewed the concepts against embedded and hardware interests."],
    },
    decisions: [{
      decision: "Present three concepts for faculty feedback: AR Episodic Memory Glasses, SmokeScout Drone, and DriveSight Portable Lane-Aware HUD.",
      alternatives: ["Other concepts in the initial project-ideas list", "Present only one concept", "Present the three selected concepts"],
      rationale: "The group wanted professor feedback on multiple directions before committing to a project.",
      tradeoffs: "Preparing three options reduced the depth available for any single concept at this stage.",
      outcome: "The three-concept brief became the basis for the September 21 meeting.",
    }],
    challenges: "Each concept had unresolved scope and validation questions that required faculty input.",
    outcome: "Three candidate projects were ready for comparison with the professor.",
    nextSteps: [{ task: "Present the three-concept brief and record the professor's feedback on each idea.", owner: "" }],
    resources: [{ title: "Concept discussion brief", href: "assets/mte481-concept-discussion-brief.pdf" }, { title: "Initial project ideas", href: "assets/mte481-project-ideas.pdf" }],
    evidence: [],
  },
  {
    id: 4,
    date: "2026-09-21",
    title: "Professor feedback on three capstone concepts",
    type: "Faculty Concept Meeting",
    tags: ["Meeting", "Research"],
    membersPresent: ["Uday Roy", "Aviral Gupta", "Benedek Boda", "Tom Wang", "Yibo Yang"],
    objective: "Present the three proposed capstone ideas and learn where their scope or validation plans needed adjustment.",
    workCompleted: "The team presented the concept brief covering AR Episodic Memory Glasses, SmokeScout Drone, and DriveSight Portable Lane-Aware HUD. The professor indicated that the AR-glasses concept was within scope and advised the group to examine existing vision-based systems online. SmokeScout was also within scope; the team was encouraged to work with local clubs or design teams that can support controlled fire-related testing, while falling-debris avoidance might be too ambitious. The driver HUD was within scope, with a warning to plan vehicle testing carefully and explore access to the University of Waterloo race track.",
    contributions: {
      "Uday Roy": ["Participated in the team presentation and faculty discussion of the three concepts."],
      "Aviral Gupta": ["Participated in the team presentation and faculty discussion of the three concepts."],
      "Benedek Boda": ["Participated in the team presentation and faculty discussion of the three concepts."],
      "Tom Wang": ["Participated in the team presentation and faculty discussion of the three concepts."],
      "Yibo Yang": ["Participated in the team presentation and faculty discussion of the three concepts."],
    },
    decisions: [],
    challenges: "The feedback left concept-specific feasibility questions open, especially prior art for AR glasses and safe access to realistic test environments for the drone and HUD.",
    outcome: "All three options remained viable in principle, with concrete research and validation concerns to inform the final team discussion.",
    nextSteps: [{ task: "Compare the professor's feedback across the three concepts before choosing a direction.", owner: "" }, { task: "Look for existing vision-based systems relevant to the AR-glasses concept.", owner: "" }],
    resources: [{ title: "Concept discussion brief", href: "assets/mte481-concept-discussion-brief.pdf" }],
    evidence: [],
  },
  {
    id: 5,
    date: "2026-09-24",
    title: "Provisional selection of AR glasses",
    type: "Team Decision Meeting",
    tags: ["Meeting", "Design Decision", "Research"],
    membersPresent: ["Uday Roy", "Aviral Gupta", "Benedek Boda", "Tom Wang", "Yibo Yang"],
    objective: "Choose a concept to carry into the next professor meeting while keeping its scope open to discussion.",
    workCompleted: "After reviewing the three ideas and the September 21 feedback, the group agreed to move forward with AR Episodic Memory Glasses as its current capstone direction. The concept brief describes user-enabled first-person capture, searchable recent events, grounded answers, and replay of the supporting clip. The team has not yet finalized the minimum viable scope or verified how the idea differs from existing vision-based memory systems; these are priorities for the next faculty conversation.",
    contributions: {
      "Uday Roy": ["Participated in the group decision to pursue AR glasses for the next faculty discussion."],
      "Aviral Gupta": ["Participated in the group decision to pursue AR glasses for the next faculty discussion."],
      "Benedek Boda": ["Participated in the group decision to pursue AR glasses for the next faculty discussion."],
      "Tom Wang": ["Participated in the group decision to pursue AR glasses for the next faculty discussion."],
      "Yibo Yang": ["Participated in the group decision to pursue AR glasses for the next faculty discussion."],
    },
    decisions: [{
      decision: "Carry AR Episodic Memory Glasses forward as the provisional project concept for the next professor meeting.",
      alternatives: ["AR Episodic Memory Glasses", "SmokeScout Drone", "DriveSight Portable Lane-Aware HUD"],
      rationale: "The group selected AR glasses after comparing the three ideas and receiving feedback that the concept was within course scope. The detailed reasons for preferring it over the other two have not yet been recorded.",
      tradeoffs: "Existing-system differentiation, recording privacy, wearable power and thermal limits, and achievable prototype scope still need investigation.",
      outcome: "The overview and next meeting preparation now focus on AR glasses; the choice remains open to professor discussion.",
    }],
    challenges: "The concept is not yet approved as a final scope. The team still needs evidence on prior art and a defensible first prototype boundary.",
    outcome: "AR glasses became the team's working direction, replacing the three-way concept shortlist for next week's presentation.",
    nextSteps: [{ task: "Research existing vision-based and memory-retrieval systems and record how this proposal differs.", owner: "" }, { task: "Refine an achievable AR-glasses MVP and bring it to the next professor meeting.", owner: "" }],
    resources: [
      { title: "AR glasses design problem proposal · September 28", href: "assets/ar-episodic-memory-glasses-proposal-2026-09-28.pdf" },
      { title: "Concept discussion brief", href: "assets/mte481-concept-discussion-brief.pdf" },
    ],
    evidence: [],
  },
  // Dates are week starts for retrospective group summaries.
  {
    "id": 6,
    "date": "2026-09-28",
    "title": "Proposal scope and first prototype",
    "type": "Group Meeting",
    "retrospective": true,
    "tags": [
      "Meeting",
      "Research"
    ],
    "membersPresent": [],
    "contributions": {},
    "objective": "Turn the selected AR glasses concept into a prototype the team can explain and evaluate.",
    "workCompleted": "The September 28 proposal framed the workflow around recording a first-person event, finding it later from a spoken question, and replaying the original evidence. The key scope boundary was that the system can only answer about events it recorded and retained.",
    "outcome": "The proposal gave the group a concrete brief for the next phase of design.",
    "challenges": "The first prototype needed a narrow scope that could be demonstrated with repeatable scenarios.",
    "nextSteps": [
      {
        "task": "Review existing vision and memory retrieval systems.",
        "owner": ""
      },
      {
        "task": "Define what the prototype should do when a relevant event was never recorded.",
        "owner": ""
      }
    ],
    "decisions": [],
    "resources": [
      {
        "title": "September 28 AR glasses proposal",
        "href": "assets/ar-episodic-memory-glasses-proposal-2026-09-28.pdf"
      }
    ],
    "evidence": []
  },
  {
    "id": 7,
    "date": "2026-10-05",
    "title": "Prior art and what to verify",
    "type": "Group Meeting",
    "retrospective": true,
    "tags": [
      "Meeting",
      "Research"
    ],
    "membersPresent": [],
    "contributions": {},
    "objective": "Identify what the project can demonstrate beyond capabilities already shown in prior work.",
    "workCompleted": "The PDP research considered Ego4D and Encode–Store–Retrieve, alongside patents on multimedia memory queries, last-seen item tracking and recording indicators. The design opportunity was to show whether adding visual context helps find evidence for actions and events that a transcript alone may miss.",
    "outcome": "The comparison suggested two baselines: transcript-only retrieval for accuracy and manual clip browsing for time.",
    "challenges": "Prior work supports the retrieval concept but does not establish the power, mass or latency of this wearable.",
    "nextSteps": [
      {
        "task": "Include similar-looking actions and repeated item sightings in the test scenarios.",
        "owner": ""
      },
      {
        "task": "Record the role of source clips in verifying every answer.",
        "owner": ""
      }
    ],
    "decisions": [],
    "resources": [],
    "evidence": []
  },
  {
    "id": 8,
    "date": "2026-10-12",
    "title": "Prototype requirements and test approach",
    "type": "Group Meeting",
    "retrospective": true,
    "tags": [
      "Meeting",
      "Testing"
    ],
    "membersPresent": [],
    "contributions": {},
    "objective": "Turn the concept into measurable design targets and a test plan for the PDP.",
    "workCompleted": "The PDP specified a CAD 1,500 parts limit, a seven-day rolling archive, a 100 g head-worn mass target and at least 60 minutes of runtime. The test plan also proposed 50 questions with recorded evidence and 20 without it, with targets for retrieval, verified recall and response time.",
    "outcome": "The design had proposed criteria for bench and scenario tests, including checking that expired media and indexes are both removed.",
    "challenges": "These figures are targets and planning estimates; performance, runtime and temperature still need measurements.",
    "nextSteps": [
      {
        "task": "Pilot the question set before freezing the test criteria.",
        "owner": ""
      },
      {
        "task": "Measure power, temperature and mass on the assembled prototype.",
        "owner": ""
      }
    ],
    "decisions": [],
    "resources": [],
    "evidence": []
  },
  {
    "id": 9,
    "date": "2026-10-19",
    "title": "PDP assembly and architecture alternatives",
    "type": "Group Meeting",
    "retrospective": true,
    "tags": [
      "Meeting",
      "Software"
    ],
    "membersPresent": [],
    "contributions": {},
    "objective": "Bring the problem statement, requirements, alternatives and validation plan together for the preliminary design presentation.",
    "workCompleted": "The PDP hardware matrix compared a microcontroller, a Linux/Pi system and a combined design. Its software matrix compared local, cloud and hybrid processing. Under the proposed scoring weights, Linux/Pi and local processing led their respective matrices. The deck tied those choices back to capture, retrieval and replay.",
    "outcome": "The PDP documented a starting architecture and the tradeoffs the team would revisit during detailed design.",
    "challenges": "The matrix rankings depended on provisional weights. They did not establish that a Pi could run every model within the latency and power targets.",
    "nextSteps": [
      {
        "task": "Use the PDP matrices as the baseline for detailed design.",
        "owner": ""
      },
      {
        "task": "Benchmark media capture separately from speech, search and visual processing.",
        "owner": ""
      }
    ],
    "decisions": [],
    "resources": [],
    "evidence": []
  },
  {
    "id": 10,
    "date": "2026-10-26",
    "title": "PDP follow-up and hardware/software split",
    "type": "Group Meeting",
    "retrospective": true,
    "tags": [
      "Meeting",
      "Electrical"
    ],
    "membersPresent": [],
    "contributions": {},
    "objective": "Translate the presentation architecture into a concrete prototype plan.",
    "workCompleted": "The follow-up design compared running the full pipeline on the Pi with using an off-head Pi for capture and control and a laptop for heavier work. The laptop path gives the prototype a place to transcribe, index, search and prepare playback while the glasses carry the sensors, controls and near-eye display.",
    "outcome": "The Pi-plus-laptop split became the working prototype architecture. Processing can remain local to the prototype without every workload running on the Pi.",
    "challenges": "The interconnect, power supply and how playback would reach the display had yet to be validated.",
    "nextSteps": [
      {
        "task": "Draw the data and power paths separately.",
        "owner": ""
      },
      {
        "task": "Check end-to-end capture, transfer and playback on the bench.",
        "owner": ""
      }
    ],
    "decisions": [
      {
        "decision": "Use the laptop for heavy processing and keep an off-head Pi in the working prototype architecture.",
        "alternatives": [
          "Pi runs the full pipeline",
          "Pi handles capture and control; laptop handles search and model processing"
        ],
        "rationale": "This keeps the headset light and reduces the initial compute burden on the Pi.",
        "tradeoffs": "The tether and device-to-device handoff add integration work.",
        "outcome": "Use the split to guide interface selection and verify it on the bench."
      }
    ],
    "resources": [],
    "evidence": []
  },
  {
    "id": 11,
    "date": "2026-11-02",
    "title": "Draft parts list and detailed design review",
    "type": "Group Meeting",
    "retrospective": true,
    "tags": [
      "Meeting",
      "Mechanical"
    ],
    "membersPresent": [],
    "contributions": {},
    "objective": "Identify which assemblies and interfaces need sizing before parts can be selected.",
    "workCompleted": "A draft bill of materials supported the detailed-design discussion by covering the display and optics, camera, audio input, controller, power, cabling and frame fabrication. The optical direction under discussion was a small opaque window for one eye, with the surrounding view open. A 1024 × 768 HDMI viewfinder kit was considered for text and clip replay.",
    "outcome": "The review draft clarified the assemblies that need engineering checks. It was set aside after the meeting and does not control component selection.",
    "challenges": "Display resolution alone does not establish legibility. Eye relief, apparent size, fit, cable routing and power must all be checked.",
    "nextSteps": [
      {
        "task": "Mock up the eyepiece position and verify that text is legible without blocking the main line of sight.",
        "owner": ""
      },
      {
        "task": "Check the camera, display and harness clearances before choosing parts.",
        "owner": ""
      }
    ],
    "decisions": [],
    "resources": [],
    "evidence": []
  },
  {
    "id": 12,
    "date": "2026-11-09",
    "title": "Frame microphone and compact camera tradeoffs",
    "type": "Group Meeting",
    "retrospective": true,
    "tags": [
      "Meeting",
      "Electrical"
    ],
    "membersPresent": [],
    "contributions": {},
    "objective": "Find a compact capture arrangement that can be built into the custom frame.",
    "workCompleted": "Component research kept the microphone independent of the camera so the two could be placed for different needs. The audio comparison covered an SPH0645 I²S microphone and dual PDM microphones. Mentra’s published open-source glasses schematics provided a useful example of a small SPH0645 endpiece board and a controller that receives digital audio.",
    "outcome": "An embedded I²S microphone is the first evaluation candidate. A second microphone can be assessed if one cannot capture both the wearer and nearby speakers clearly enough.",
    "challenges": "The frame needs a clear acoustic opening. The digital microphone link to the off-head Pi still needs a realistic cable test.",
    "nextSteps": [
      {
        "task": "Try a microphone near the front of the frame and compare wearer and conversation-partner speech.",
        "owner": ""
      },
      {
        "task": "Verify the tether with the camera and display active; consider a local USB audio bridge if needed.",
        "owner": ""
      }
    ],
    "decisions": [],
    "resources": [
      {
        "title": "Mentra open-source endpiece microphone schematic",
        "href": "https://github.com/Mentra-Community/OpenSourceSmartGlasses/blob/main/electronics_and_firmware/endpiece_mic_board_v0p2/microphone.kicad_sch"
      }
    ],
    "evidence": []
  },
];

// ============================================================
// EDIT MILESTONES AND DOCUMENT LINKS HERE
// Keep targets aligned with actual plans. Add dates when confirmed.
// ============================================================
const milestones = [
  { title: "Idea generation", status: "complete", target: "Sep 18–19, 2026", logId: 2 },
  { title: "Three-concept shortlist", status: "complete", target: "Sep 20, 2026", logId: 3 },
  { title: "Initial faculty feedback", status: "complete", target: "Sep 21, 2026", logId: 4 },
  { title: "Provisional AR-glasses selection", status: "complete", target: "Sep 24, 2026", logId: 5 },
  { title: "Design problem proposal", status: "complete", target: "Sep 28, 2026", logId: 6 },
  { title: "Preliminary design presentation", status: "complete", target: "October 2026", logId: 9 },
  { title: "Detailed design and component evaluation", status: "current", target: "November 2026", logId: 12 },
  { title: "Bench prototype", status: "upcoming", target: "After component evaluation" },
  { title: "Integrated prototype and validation", status: "upcoming", target: "After bench testing" },
];

const documents = [
  { title: "AR glasses design problem proposal", type: "Proposal", note: "September 28 faculty discussion draft · related to Log #05", href: "assets/ar-episodic-memory-glasses-proposal-2026-09-28.pdf" },
  { title: "Concept discussion brief", type: "Presentation brief", note: "Three concepts presented to the professor on September 21", href: "assets/mte481-concept-discussion-brief.pdf" },
  { title: "Initial project ideas", type: "Idea list", note: "Broad list considered during September 18–20", href: "assets/mte481-project-ideas.pdf" },
  { title: "Existing vision systems review", type: "Research", note: "Add after prior-art investigation", href: "" },
  { title: "AR-glasses requirements", type: "Requirements", note: "Add once the concept scope is reviewed", href: "" },
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
    if (!log.retrospective && (!Array.isArray(log.membersPresent) || !log.membersPresent.length)) warn("has no members present.");
    if (!log.retrospective && (!log.contributions || !Object.keys(log.contributions).length)) warn("has no individual contributions listed.");
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
  document.querySelector(".sample-notice").hidden = !project.recordNotice;
  document.getElementById("record-notice").textContent = project.recordNotice || "";
  document.getElementById("header-project-name").textContent = project.name;
  document.getElementById("project-description").textContent = project.description;
  document.getElementById("overview-team").textContent = teamMembers.map(member => member.name).join(" · ");
  document.getElementById("current-phase").textContent = project.currentPhase;
  document.getElementById("current-focus").textContent = project.currentFocus;
  document.getElementById("last-updated").textContent = sortedLogs.length ? `${sortedLogs[0].retrospective ? "Week of " : ""}${formatDate(sortedLogs[0].date)}` : "No entries yet";
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
  if (!evidence?.length) return `<p class="no-evidence">No image attached to this entry.</p>`;
  return `<div class="evidence-grid">${evidence.map(item => `<figure><button type="button" class="evidence-image" data-image-src="${escapeHtml(item.src)}" data-image-alt="${escapeHtml(item.alt)}" data-image-caption="${escapeHtml(item.caption)}" aria-label="Enlarge ${escapeHtml(item.caption)}"><img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy"><span aria-hidden="true">↗</span></button><figcaption>${escapeHtml(item.caption)}</figcaption></figure>`).join("")}</div>`;
}

function renderAttachments(resources) {
  if (!resources?.length) return "";
  return `<div class="log-attachments"><h4>Attachments</h4><ul>${resources.map(item => `<li><a href="${escapeHtml(item.href)}" target="_blank" rel="noopener">${escapeHtml(item.title)} <span aria-hidden="true">↗</span></a></li>`).join("")}</ul></div>`;
}

function renderLog(log) {
  const contributors = Object.entries(log.contributions || {}).filter(([, items]) => items?.length).map(([member, items]) => renderContribution(member, items)).join("");
  const nextSteps = (log.nextSteps || []).map(step => typeof step === "string" ? { task: step, owner: "" } : step);
  return `<article class="log-card" id="log-${log.id}" aria-labelledby="log-title-${log.id}">
    <div class="log-card-top"><span class="log-number">LOG #${String(log.id).padStart(2, "0")}</span><time datetime="${escapeHtml(log.date)}">${log.retrospective ? "Week of " : ""}${escapeHtml(formatDate(log.date))}</time></div>
    <h3 id="log-title-${log.id}">${escapeHtml(log.title)}</h3>
    <div class="tag-row">${(log.tags || []).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    <div class="log-context"><span>${escapeHtml(log.type)}</span><span aria-hidden="true">·</span><span>${log.retrospective ? "Retrospective summary" : `${log.membersPresent.length} members present`}</span></div>
    <div class="log-body-grid"><div><h4>Objective</h4><p>${escapeHtml(log.objective)}</p></div><div><h4>Work completed</h4><p>${escapeHtml(log.workCompleted)}</p></div></div>
    ${log.retrospective && !contributors ? "" : `<div class="contribution-section"><div class="subsection-heading"><h4>Individual contributions</h4><span>${Object.keys(log.contributions || {}).length} contributors</span></div><div class="contribution-grid">${contributors}</div></div>`}
    ${log.decisions?.length ? `<div class="decision-summary"><span class="decision-symbol" aria-hidden="true">◆</span><div><span class="field-label">ENGINEERING DECISION</span><p>${escapeHtml(log.decisions[0].decision)}</p></div></div>` : ""}
    <div class="result-grid"><div class="outcome-block"><h4>What changed</h4><p>${escapeHtml(log.outcome)}</p></div><div class="next-block"><h4>Next steps</h4><ul>${nextSteps.map(step => `<li><span class="step-arrow" aria-hidden="true">→</span><span>${escapeHtml(step.task)}${step.owner ? `<small>Owner: ${escapeHtml(step.owner)}</small>` : ""}</span></li>`).join("")}</ul></div></div>
    ${renderAttachments(log.resources)}
    <details class="record-details"><summary>Full session record <span aria-hidden="true">+</span></summary><div class="detail-content"><div class="session-detail"><div><span class="field-label">SESSION TYPE</span><p>${escapeHtml(log.type)}</p></div><div><span class="field-label">MEMBERS PRESENT</span><p>${escapeHtml(log.membersPresent.join(", ") || "Not recorded")}</p></div></div>${log.decisions?.length ? `<section><h4>Decision reasoning</h4>${log.decisions.map(renderDecision).join("")}</section>` : ""}<section><h4>Challenges encountered</h4><p>${escapeHtml(log.challenges || "No challenges recorded.")}</p></section><section><h4>Evidence & artifacts</h4>${renderEvidence(log.evidence)}</section></div></details>
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

// The editor prepares a log for this static site. Browser drafts never enter designLogs.
const draftStorageKey = "mte481-design-log-draft-v1";
const editorTags = ["Meeting", "Research", "Mechanical", "Electrical", "Software", "Machine Learning", "Testing", "Integration", "Design Decision", "Prototype"];
const entryForm = document.getElementById("entry-form");
let editorContributionDrafts = {};
const entryField = name => entryForm.elements.namedItem(name);
const lines = value => String(value || "").split(/\r?\n/).map(line => line.trim()).filter(Boolean);
const nextLogId = () => Math.max(0, ...designLogs.map(log => Number(log.id) || 0)) + 1;

function addStepRow(task = "", owner = "") {
  const options = teamMembers.map(member => `<option value="${escapeHtml(member.name)}"${member.name === owner ? " selected" : ""}>${escapeHtml(member.name)}</option>`).join("");
  document.getElementById("editor-next-steps").insertAdjacentHTML("beforeend", `<div class="editor-row step-row"><label>Action <input class="step-task" type="text" value="${escapeHtml(task)}" placeholder="e.g. Compare two candidate displays"></label><label>Owner <select class="step-owner"><option value="">Unassigned</option>${options}</select></label><button class="row-remove" type="button" data-remove-row aria-label="Remove action">×</button></div>`);
}

function addEvidenceRow(item = {}) {
  document.getElementById("editor-evidence").insertAdjacentHTML("beforeend", `<div class="editor-row evidence-row"><label>Image path <input class="evidence-src" type="text" value="${escapeHtml(item.src || "")}" placeholder="assets/prototype.jpg"></label><label>Alt text <input class="evidence-alt" type="text" value="${escapeHtml(item.alt || "")}" placeholder="Describe the image"></label><label>Caption <input class="evidence-caption" type="text" value="${escapeHtml(item.caption || "")}" placeholder="Figure 1 · What this shows"></label><button class="row-remove" type="button" data-remove-row aria-label="Remove image">×</button></div>`);
}

function renderEditorContributions(previous = {}) {
  const container = document.getElementById("editor-contributions");
  container.querySelectorAll("textarea[data-member]").forEach(field => { editorContributionDrafts[field.dataset.member] = field.value; });
  editorContributionDrafts = { ...editorContributionDrafts, ...previous };
  const selected = [...document.querySelectorAll('#editor-member-options input:checked')].map(input => input.value);
  container.innerHTML = selected.length ? selected.map(member => `<label class="contribution-input"><strong>${escapeHtml(member)}</strong><span>Specific work by this member <span class="required">*</span></span><textarea rows="3" data-member="${escapeHtml(member)}" placeholder="One specific contribution per line">${escapeHtml(editorContributionDrafts[member] || "")}</textarea></label>`).join("") : `<p class="editor-hint">Select the members present above to add their individual contributions.</p>`;
}

function editorData() {
  const contributions = {};
  document.querySelectorAll("#editor-contributions textarea[data-member]").forEach(field => { contributions[field.dataset.member] = field.value; });
  return {
    date: entryField("date").value, title: entryField("title").value.trim(), type: entryField("type").value.trim(),
    tags: [...document.querySelectorAll('#editor-tag-options input:checked')].map(input => input.value),
    membersPresent: [...document.querySelectorAll('#editor-member-options input:checked')].map(input => input.value),
    objective: entryField("objective").value.trim(), workCompleted: entryField("workCompleted").value.trim(),
    contributions, challenges: entryField("challenges").value.trim(), outcome: entryField("outcome").value.trim(),
    nextSteps: [...document.querySelectorAll(".step-row")].map(row => ({ task: row.querySelector(".step-task").value.trim(), owner: row.querySelector(".step-owner").value })),
    decision: entryField("decision").value.trim(), alternatives: entryField("alternatives").value,
    rationale: entryField("rationale").value.trim(), tradeoffs: entryField("tradeoffs").value.trim(), decisionOutcome: entryField("decisionOutcome").value.trim(),
    evidence: [...document.querySelectorAll(".evidence-row")].map(row => ({ src: row.querySelector(".evidence-src").value.trim(), alt: row.querySelector(".evidence-alt").value.trim(), caption: row.querySelector(".evidence-caption").value.trim() })),
  };
}

function showEditorMessage(message, isError = false) {
  const target = document.getElementById("editor-messages");
  target.classList.toggle("error", isError);
  target.textContent = message;
}

function validateEditorData(data) {
  const errors = [];
  if (!isValidDate(data.date)) errors.push("Choose a valid date.");
  if (!data.title) errors.push("Add an entry title.");
  if (!data.type) errors.push("Identify the session type.");
  if (!data.objective) errors.push("Describe the objective.");
  if (!data.workCompleted) errors.push("Describe the work completed.");
  else if (data.workCompleted.split(/\s+/).length < 25) errors.push("Add more specific engineering detail to Work completed (at least 25 words).");
  if (!data.membersPresent.length) errors.push("Select at least one member present.");
  data.membersPresent.forEach(member => { if (!lines(data.contributions[member]).length) errors.push(`Describe ${member}'s individual contribution.`); });
  if (!data.outcome) errors.push("State what changed as an outcome.");
  if (!data.nextSteps.some(step => step.task)) errors.push("Add a concrete next action.");
  if (data.nextSteps.some(step => !step.task && step.owner)) errors.push("A next-step owner needs an action.");
  const decisionFields = [data.decision, data.alternatives, data.rationale, data.tradeoffs, data.decisionOutcome];
  if (decisionFields.some(Boolean) && (!data.decision || !lines(data.alternatives).length || !data.rationale || !data.tradeoffs || !data.decisionOutcome)) errors.push("Complete every engineering-decision field, or leave all of them blank.");
  data.evidence.forEach((item, index) => { if (Object.values(item).some(Boolean) && (!item.src || !item.alt || !item.caption || !/^(assets\/[^?#]+|https:\/\/[^\s]+)$/i.test(item.src))) errors.push(`Image ${index + 1} needs an assets/ path or HTTPS URL, alt text, and caption.`); });
  return errors;
}

function publishableEntry(data) {
  return {
    id: nextLogId(), date: data.date, title: data.title, type: data.type, tags: data.tags,
    membersPresent: data.membersPresent, objective: data.objective, workCompleted: data.workCompleted,
    contributions: Object.fromEntries(data.membersPresent.map(member => [member, lines(data.contributions[member])])),
    decisions: data.decision ? [{ decision: data.decision, alternatives: lines(data.alternatives), rationale: data.rationale, tradeoffs: data.tradeoffs, outcome: data.decisionOutcome }] : [],
    challenges: data.challenges, outcome: data.outcome, nextSteps: data.nextSteps.filter(step => step.task),
    evidence: data.evidence.filter(item => item.src).map(item => ({ type: "image", ...item })),
  };
}

function restoreEditorData(data) {
  entryForm.reset();
  editorContributionDrafts = { ...(data.contributions || {}) };
  for (const name of ["date", "title", "type", "objective", "workCompleted", "challenges", "outcome", "decision", "alternatives", "rationale", "tradeoffs", "decisionOutcome"]) entryField(name).value = data[name] || "";
  document.querySelectorAll('#editor-tag-options input').forEach(input => { input.checked = (data.tags || []).includes(input.value); });
  document.querySelectorAll('#editor-member-options input').forEach(input => { input.checked = (data.membersPresent || []).includes(input.value); });
  renderEditorContributions(data.contributions || {});
  document.getElementById("editor-next-steps").innerHTML = "";
  (data.nextSteps?.length ? data.nextSteps : [{ task: "", owner: "" }]).forEach(step => addStepRow(step.task, step.owner));
  document.getElementById("editor-evidence").innerHTML = "";
  (data.evidence || []).forEach(addEvidenceRow);
  document.getElementById("editor-output").hidden = true;
}

function wireEntryEditor() {
  document.getElementById("editor-tag-options").innerHTML = editorTags.map(tag => `<label><input type="checkbox" value="${escapeHtml(tag)}"> ${escapeHtml(tag)}</label>`).join("");
  document.getElementById("editor-member-options").innerHTML = teamMembers.map(member => `<label><input type="checkbox" value="${escapeHtml(member.name)}"> ${escapeHtml(member.name)}</label>`).join("");
  addStepRow();
  try { const saved = localStorage.getItem(draftStorageKey); if (saved) { restoreEditorData(JSON.parse(saved)); showEditorMessage("Saved browser draft restored. It has not been published."); } }
  catch { showEditorMessage("Browser draft storage is unavailable. You can still generate and copy an entry."); }
  const toggle = document.getElementById("editor-toggle");
  toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") === "true"; toggle.setAttribute("aria-expanded", String(!open)); document.getElementById("entry-editor").hidden = open; toggle.textContent = open ? "Write a log entry ↗" : "Close editor"; if (!open) document.getElementById("editor-title").focus(); });
  document.getElementById("editor-member-options").addEventListener("change", () => renderEditorContributions());
  let saveTimer;
  const autoSave = () => { document.getElementById("editor-output").hidden = true; clearTimeout(saveTimer); saveTimer = setTimeout(() => { try { localStorage.setItem(draftStorageKey, JSON.stringify(editorData())); } catch { /* Manual export remains available. */ } }, 400); };
  entryForm.addEventListener("input", autoSave);
  entryForm.addEventListener("change", autoSave);
  document.getElementById("add-next-step").addEventListener("click", () => addStepRow());
  document.getElementById("add-evidence").addEventListener("click", () => addEvidenceRow());
  entryForm.addEventListener("click", event => { if (event.target.matches("[data-remove-row]")) { event.target.closest(".editor-row").remove(); } });
  document.getElementById("save-draft").addEventListener("click", () => { try { localStorage.setItem(draftStorageKey, JSON.stringify(editorData())); showEditorMessage("Draft saved in this browser. It is not on the public website yet."); } catch { showEditorMessage("Could not save in this browser. Copy the generated entry to keep your work.", true); } });
  document.getElementById("clear-draft").addEventListener("click", () => { if (!window.confirm("Clear this form and its saved browser draft?")) return; clearTimeout(saveTimer); try { localStorage.removeItem(draftStorageKey); } catch { /* Storage may be disabled. */ } restoreEditorData({}); showEditorMessage("Form cleared."); });
  entryForm.addEventListener("submit", event => {
    event.preventDefault();
    const data = editorData(); const errors = validateEditorData(data);
    if (errors.length) { showEditorMessage(errors.join(" "), true); document.getElementById("editor-output").hidden = true; return; }
    const entry = publishableEntry(data);
    document.getElementById("generated-entry").value = `${JSON.stringify(entry, null, 2)},`;
    document.getElementById("editor-preview").innerHTML = renderLog(entry).replaceAll(`id="log-${entry.id}"`, `id="draft-log-${entry.id}"`).replaceAll(`id="log-title-${entry.id}"`, `id="draft-title-${entry.id}"`).replaceAll(`aria-labelledby="log-title-${entry.id}"`, `aria-labelledby="draft-title-${entry.id}"`);
    document.getElementById("editor-output").hidden = false;
    showEditorMessage(`Log #${entry.id} is ready to review. Copy and commit it to publish.`);
    document.getElementById("editor-output").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("copy-entry").addEventListener("click", async () => { const value = document.getElementById("generated-entry").value; try { await navigator.clipboard.writeText(value); showEditorMessage("Entry copied. Paste it into designLogs on GitHub and commit."); } catch { document.getElementById("generated-entry").focus(); document.getElementById("generated-entry").select(); showEditorMessage("Copy is unavailable here. The entry is selected; press ⌘C or Ctrl+C."); } });
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
wireEntryEditor();
