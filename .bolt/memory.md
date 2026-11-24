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
- Project images sourced from real app screenshots or branding assets from each project's own website when no screenshot is provided.
- **Experience section**: structured entries with company, role, date range, location, and detailed bullet list.
- Tech stacks listed inline within project/experience descriptions.

## Decisions, constraints & rationale

- CareDevi added as the featured first project (01) in the projects carousel.
  - Links to https://www.joincaredevi.com/; no GitHub repo → GitHub button hidden.
- CareDevi experience entry expanded with full bullet list covering: booking workflow leadership, EMR/patient portal backend, GraphQL/REST APIs, Customer.io integration, JWT/Firebase/OAuth auth, Datadog observability, Prisma query optimization, background jobs/workers, and mentoring/code-review leadership.
- Tech stack referenced: React Native, Node.js, Express.js, Apollo Server, GraphQL, REST, PostgreSQL, Prisma ORM, Medplum, FastAPI (CareDevi Connect), Firebase Admin SDK, OAuth, Customer.io, Datadog.
- Image proxy note: CareDevi's website serves app screenshots through a fixed-size image proxy — direct URL used to fetch project image.
- Build verified passing after changes.

## Open questions & assumptions

- Remaining project ordering in the carousel may need user adjustment.
- CareDevi project blurb wording may need refinement per user preference.
- Other project/experience entries may benefit from similar detail expansion — not yet requested.
- Assumed next.js framework version and project structure remain stable.