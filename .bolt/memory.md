# Project memory

## Product intent & audience

- Personal portfolio website built with Next.js.
- Showcases projects (carousel) and professional experience (timeline/bulleted list).
- Audience: recruiters, hiring managers, potential clients.

## Brand personality & voice

- Professional, technical, achievement-oriented.
- Emphasizes engineering leadership alongside hands-on implementation.
- Bullet style: action verb → technology/workflow → measurable outcome or scope.

## Visual design & UX direction

- **Projects carousel**: numbered cards (01, 02, …) with image, title, description, tech stack, and link buttons (website, GitHub).
- Project cards conditionally render link buttons — omit GitHub button when no public repo exists; omit website button when no URL exists.
- Projects with multiple images show a screenshot gallery with tabbed navigation; visitors can flip through labeled screenshots.
- **CareDevi card**: six labeled tabs — Dashboard, Challenges, Leaderboard, Community, Booking, Profile.
- **Experience section**: structured entries with company, role, date range, location, and detailed bullet list.
- Tech stacks listed inline within project/experience descriptions.

## Decisions, constraints & rationale

- CareDevi is the featured first project (01) in the projects carousel.
  - Links to https://www.joincaredevi.com/; no GitHub repo → GitHub button hidden.
- CareDevi experience entry expanded with full bullet list covering: booking workflow leadership, EMR/patient portal backend, GraphQL/REST APIs, Customer.io integration, JWT/Firebase/OAuth auth, Datadog observability, Prisma query optimization, background jobs/workers, and mentoring/code-review leadership.
- Tech stack referenced: React Native, Node.js, Express.js, Apollo Server, GraphQL, REST, PostgreSQL, Prisma ORM, Medplum, FastAPI (CareDevi Connect), Firebase Admin SDK, OAuth, Customer.io, Datadog.
- Six CareDevi screenshots wired with predictable filenames; user will upload the actual PNGs:
  - `caredevi-dashboard.png`
  - `caredevi-challenges.png`
  - `caredevi-leaderboard.png`
  - `caredevi-community.png`
  - `caredevi-booking.png`
  - `caredevi-profile.png`
- Build verified passing after gallery changes.

## Open questions & assumptions

- Remaining project ordering in the carousel may need user adjustment.
- CareDevi project blurb wording may need refinement per user preference.
- Other project/experience entries may benefit from similar detail expansion — not yet requested.
- Assumed Next.js framework version and project structure remain stable.
- User may want to rename PNG files or relabel tabs after upload.