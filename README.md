# moustaqbili | مستقبلي

A bilingual (English / Arabic) guide for Kuwaiti students: approved foreign scholarship programs, monthly allowances, Kuwait University aptitude tests (Qudrat), local universities, and Ministry of Higher Education contacts.

It is an independent student guide, not an official Ministry site. Students should confirm final decisions with the Ministry of Higher Education (mohe.edu.kw).

## Run locally

It is a static site. Open `index.html` in a browser, or serve the folder with any static server (for example the VS Code Live Server extension). Hosting needs no build: upload the folder as it is.

## Styling (Tailwind CSS)

Pages are styled with Tailwind classes plus `assets/css/styles.css` (site colours and special styles). Tailwind is built ahead of time into `assets/css/tailwind.css`, which every page loads after `styles.css`.

| File | What it is |
| :--- | :--- |
| `tailwind.config.js` | Tailwind settings: which files to scan for classes, and the `olive` colour set |
| `assets/css/tailwind-input.css` | Starting point Tailwind builds from. Pages do not load it |
| `assets/css/tailwind.css` | The built file. Do not edit it by hand; rebuild it. Commit it with your changes |

**After adding or changing Tailwind classes** in any page or in `assets/js/`, rebuild `tailwind.css`, or the new classes will have no style.

1. Get Tailwind v3.4.17 once: download `tailwindcss-windows-x64.exe` from [the v3.4.17 release](https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.4.17), rename it `tailwindcss.exe` and put it in this folder (Git ignores it). On Mac, download the `macos` file for your Mac instead.
2. From this folder, rebuild once:

   ```
   ./tailwindcss.exe -i assets/css/tailwind-input.css -o assets/css/tailwind.css --minify
   ```

   Or keep it running while you work, so it rebuilds every time you save:

   ```
   ./tailwindcss.exe -i assets/css/tailwind-input.css -o assets/css/tailwind.css --minify --watch
   ```

With Node.js on a network that allows npm, `npx tailwindcss@3.4.17` with the same options works too.

Tailwind only sees whole class names written out in a file. Write `"bg-olive-800"`, not `"bg-olive-" + shade`.

## Pages

| Page | What it shows |
| :--- | :--- |
| `index.html` | Search (country, grade bracket, any of the 90 majors in the 2026/2027 plan, merit), GPA-to-percentage converter, current Qudrat cycle |
| `results.html` | Step by step (default): 1 major, 2 country, 3 requirements, 4 money & universities. "All programs" switches to the program cards: minimum grade and monthly allowance in KWD. Each card opens **Requirements** (grades, exams, deadlines, visa) or **Allowance & calculator** (allowance table and a currency calculator for that major). Below the cards: every plan major that matches, grouped by field, with the minimum % per country |
| `qudrat.html` | Current Qudrat cycle: "Before you register" (who can sit the tests, what to have ready), a tickable "How to register" checklist grouped by when you do each step, registration phases, test dates and deadlines, subjects, fees, rules, and the equivalent-score calculator with each KU college's 2026/2027 weights |
| `local-universities.html` | Kuwait University Fall 2026/27 cutoffs, AASU, PUC internal scholarships |
| `more-info.html` | Key words explained, the scholarship year step by step, 2026/2027 rules, money by country (live KWD), merit programme, English tests, entry routes, visas, certificates, rules after acceptance, official links. (`guidelines.html` redirects here.) |
| `clarifications.html` | Common misconceptions with short answers and sources, filter by topic, search |
| `ask.html` | Form for students' own questions (see "Ask us email" below) |
| `contact.html` | Ministry e-service emails, appointments, related bodies, cultural offices abroad |
| `suggestions.html` | Application platforms and Kuwaiti e-services |
| `navigate.html` | How the site works: what results mean, why a major may be missing, where the data comes from, degree names, contact emails (opened by the potato button) |

## Data files (`assets/js/`)

| File | Contents | Update when |
| :--- | :--- | :--- |
| `data.js` | Programs, allowance amounts, filters, currencies, offline exchange rates, plan rules, local universities | A new scholarship plan or allowance table is published |
| `data-ar.js` | Arabic text for each program (keyed by program id) | Program text changes |
| `qudrat-data.js` | Current Qudrat cycle, subjects, college weights, sources | KU announces a new cycle (the Second Opportunity is usually announced in January) |
| `contact-data.js` | Ministry and cultural-office contacts | Contacts change |
| `more-info-data.js` | More Info page sections (plain language, English and Arabic) | Rules or allowances change |
| `clarifications-data.js` | Questions page items with sources | New common questions come up |
| `i18n.js` | Interface text in English and Arabic | Any label changes |
| `layout.js` | Shared header, navigation, footer and `SITE_CONFIG` | Adding a page, or setting the Ask Us email |
| `plan-majors-data.js` | All 90 majors in the 2026/2027 plan, by field, with the minimum % per country | A new plan is published |
| `navigate-data.js` | Navigate page sections and contact emails | Pages or contacts change |
| `apply-steps-data.js` | Scholarship checklist on the How to apply page | The application steps change |

Each data file records when it was last checked and where the facts came from.

## Data-status labels

- **Not confirmed**: no official source confirms the value (for example the Australia merit allowance, or whether sponsored students sit the Casper test for RCSI Dublin).
- **Not checked yet**: carried over from the previous edition and not yet checked against 2026/2027 sources. In the Requirements window, each program lists its checked details in `verifiedFields` (data.js); every other detail gets this label.
- Inside any data text, `{{unconfirmed}}` or `{{unverified}}` is turned into the matching label.

## Ask us email

`askEmail` in `SITE_CONFIG` (top of `assets/js/layout.js`) is set to meshoabul@gmail.com. If it is ever emptied, the Ask Us page shows a "coming soon" note and its button copies the student's question instead of opening an email.

## Writing style

Short sentences and everyday words. Explain an official term the first time it appears (see the "Words you will see" section of More Info). Keep English and Arabic in step: every visible string lives in `i18n.js` or in a bilingual data file.

## Exchange rates

Currency figures use live rates from open.er-api.com (cached for 12 hours in the browser). If the site is offline, they fall back to the Central Bank of Kuwait rates stored in `data.js`.
