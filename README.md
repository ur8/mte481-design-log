# MTE 481 Design Log

A static, single-page engineering record for the University of Waterloo MTE 481 capstone. It uses plain HTML, CSS, and JavaScript. There is no build step, database, account, or server-side code.

**Live site:** https://ur8.github.io/mte481-design-log/  
**GitHub repository:** https://github.com/ur8/mte481-design-log

This Desktop folder is connected to the repository. After editing, review the site locally, then commit and push your changes from VS Code's Source Control panel. GitHub Pages republishes the `main` branch automatically.

**Current record:** the September 18–24 entries reflect the team's reported concept discussions, faculty feedback, and provisional AR-glasses selection. The per-person notes record group participation and reported technical experience; replace them with more specific, confirmed preparation or follow-up work as it becomes available. The AR-glasses scope still needs professor review.

## Files

```text
index.html                 Page structure and navigation
style.css                  Layout, typography, responsive styles
script.js                  Project/team data, logs, milestones, documents, rendering
assets/favicon.svg         Site icon
assets/mte481-concept-discussion-brief.pdf   September 21 presentation brief
assets/mte481-project-ideas.pdf              Initial idea list
README.md                  This guide
```

## Run locally

Open `index.html` in a browser. Site code and linked local documents use relative paths, so the site works from a local file and from a static host. Internet access is not needed for the core site.

If a browser's local-file settings block a feature, serve this folder locally with Python:

```bash
cd path/to/this/folder
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Stop the server with `Ctrl+C`.

## Update project status and team

At the top of `script.js`, edit `project` for the title, description, current phase, current focus, and provisional-status `recordNotice`. Edit `teamMembers` for each person's name, reported experience, initials, and technical areas. The overview team list and Team cards update automatically. The number of entries per person is calculated from `contributions` in the logs.

When renaming a team member, update that exact name in every log's `membersPresent`, `contributions`, and any `nextSteps.owner`. A name mismatch triggers a console warning for `membersPresent` and contribution records.

## Add a weekly design-log entry

### Guided entry editor (recommended)

1. Open the [live site](https://ur8.github.io/mte481-design-log/) and go to **Design log → Write a log entry**.
2. Fill in the date, title, session type, participating members, objective, specific work, each person's individual contributions, outcome, and next actions. Add a decision or image evidence when relevant. Use one line per contribution and per decision alternative.
3. The form saves a draft automatically in **this browser only**. **Save browser draft** also saves on demand. A draft is private to this browser and is not visible to instructors or teammates; browser data can be cleared, so do not treat it as the team's permanent record.
4. Select **Review & generate entry**. Fix any missing-field messages, inspect the preview, and select **Copy entry**. The generated entry is valid JavaScript object syntax, with the next available numeric log ID.
5. Select **Open script.js on GitHub**. Sign in with a GitHub account that can edit the repository. Paste the copied entry immediately below `const designLogs = [` near the top of the file, then select **Commit changes**. If GitHub proposes a fork instead of a direct commit, ask the repository owner to grant write access or create a pull request for review.
6. Reload the public site after GitHub Pages publishes. Confirm the new log appears in its week and that the overview, filters, contributor counts, and decision table are correct. If another teammate published while you were drafting, adjust the ID to avoid a duplicate.

GitHub Pages is static hosting, so the form cannot publish directly or share drafts across devices. The GitHub commit is the publishing step. Visitors and instructors still need no login. Use **Clear form** after confirming the entry is live.

### Editing the data file directly

1. Open `script.js` and find `ADD NEW DESIGN LOGS HERE`.
2. Duplicate a complete object inside `designLogs`. Keep the commas between objects.
3. Give it a **unique numeric `id`**, an ISO `date` (`YYYY-MM-DD`), a specific `title`, session `type`, and relevant `tags`.
4. Replace the `objective` and `workCompleted` text with the actual session purpose and concrete engineering work. Record comparisons, methods, constraints, revisions, and findings. Do not claim measurements that were not taken.
5. Put every participant's exact name in `membersPresent`. Under `contributions`, add a separate list for **each** participant describing that person's specific work.
6. Fill in `challenges`, `outcome` (what changed), and actionable `nextSteps`. Use `{ task: "...", owner: "Name" }` for named owners.
7. If an engineering choice was made, add a `decisions` object with `decision`, `alternatives` (an array), `rationale`, `tradeoffs`, and `outcome`. Otherwise use `decisions: []`.
8. Add relevant `evidence` items or use `evidence: []`.
9. Reload `index.html`. Confirm the new entry appears in its week, the dashboard updates, and filters work. Open the browser developer console and fix any `WARNING — Log #...` messages before publishing.

Minimal shape (replace every example value):

```js
{
  id: 6,
  date: "2026-10-01",
  title: "AR-glasses feasibility review",
  type: "Research Session",
  tags: ["Research", "Software"],
  membersPresent: ["Uday Roy", "Aviral Gupta"],
  objective: "State the question this session answered.",
  workCompleted: "Describe the actual setup, comparison, observation, and engineering progress in enough detail for a reviewer to understand what was done.",
  contributions: {
    "Uday Roy": ["Describe Uday's specific work."],
    "Aviral Gupta": ["Describe this member's specific work."]
  },
  decisions: [],
  challenges: "Describe the limitation, failure, or unresolved issue.",
  outcome: "Describe what changed because of the work.",
  nextSteps: [
    { task: "State a concrete next action.", owner: "Uday Roy" }
  ],
  evidence: []
},
```

Logs are sorted newest first automatically. Week groups, entry count, most recent entry, latest decision, team contribution counts, and the “latest 2 weeks” filter update from the data. “Latest 2 weeks” is relative to the newest logged date, so archived terms remain useful.

### Categories and decisions

The filter buttons are in `categoryOptions`. `Meetings` matches the `Meeting` tag or a session type containing “meeting”; `Design Decisions` matches entries with at least one decision. Other category buttons match `tags` exactly. Add new tags freely; add a new filter button to `categoryOptions` if the team needs it.

The Decisions table is created automatically from log entries with `decisions`. Do not edit the table HTML. Its links return to the detailed log and clear active filters so the entry is visible.

## Add images and other evidence

1. Put a file in `assets/`, for example `assets/prototype-angle.jpg`.
2. Add an evidence object to the relevant log:

```js
evidence: [{
  type: "image",
  src: "assets/prototype-angle.jpg",
  alt: "Side view of the prototype combiner mounted above the LCD enclosure",
  caption: "Figure 3 · Combiner angle mockup after hinge revision."
}]
```

Use descriptive `alt` text and a caption that explains why the image matters. Clicking an image opens a larger view; the log's text remains readable if an image fails. Keep image files reasonably compressed. For a PDF or CAD file, add it to `documents` and link to the local path instead of placing it in `evidence`.

## Add project documents

Find `EDIT MILESTONES AND DOCUMENT LINKS HERE` in `script.js`. Add or edit an item in `documents`:

```js
{ title: "Test plan", type: "Validation", note: "Revision 2, reviewed October 8", href: "assets/test-plan.pdf" }
```

`href` may be a local file path or a complete `https://` URL to a resource instructors can open without requesting access. Leave `href: ""` until a file exists; the site will show **Link pending** instead of a broken link. Check Google Drive sharing permissions from a signed-out browser window before publishing a Drive link. Existing entries can also use `resources: [{ title: "Concept brief", href: "assets/mte481-concept-discussion-brief.pdf" }]` to show a source-document link in the full session record.

Update `milestones` in the same section. Set each `status` to `complete`, `current`, or `upcoming`; optionally add `logId` to link the milestone to a design-log entry. Keep milestone targets aligned with your actual project plan.

## Publish with GitHub Pages

These steps publish the contents of this folder at one public URL. GitHub's current [Pages branch publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) describes the same settings.

1. Create or sign in to a GitHub account. Create a **public** repository, for example `mte481-design-log`. A public repository is required for GitHub Pages on GitHub Free.
2. Upload **the contents of this folder** to the repository root: `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder. `index.html` must be at the root, not inside an uploaded `outputs` folder. You can use GitHub's **Add file → Upload files** or push the files with Git.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select the `main` branch and `/(root)` folder, then click **Save**.
6. Wait for publication; GitHub says changes can take up to about 10 minutes. Return to **Settings → Pages** and click **Visit site**. The typical address is `https://YOUR-USERNAME.github.io/mte481-design-log/`.
7. Open the site in a private/incognito browser window. Check that no sign-in is required, all sections work, and any linked external documents are accessible.
8. Give that permanent URL to your instructor. Each later commit to `main` republishes the updated site automatically.

GitHub Pages publishes site content publicly. Remove private notes, personal data, and material your team does not want public before upload. See GitHub's [Creating a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) for current plan and publication details.

## Before every weekly update goes live

- Add at least one dated entry whenever substantive work occurs; do not wait until the end of the term.
- Check participant names against the Team section and give every participant specific contribution bullets.
- State the objective, concrete work, challenges, outcome, and owned next steps.
- Record alternatives and trade-offs for important design choices.
- Add evidence when it helps explain a result; never present an illustrative diagram as a test result.
- Reload the site, review the newest entry, and fix console warnings.
- Open the published link signed out to confirm instructor access.

The site validates required fields in the browser console. It warns about missing dates, titles, objectives, work summaries, member names, individual contributions, outcomes, next steps, duplicate IDs, and incomplete decisions. The interface also makes dates, individual contributions, chronological weeks, decision summaries, and next steps prominent during instructor review.
