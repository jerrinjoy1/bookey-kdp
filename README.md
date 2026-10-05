# Bookey

A nonfiction book concept workspace: research an existing topic, review one evidence-backed position, approve a title, then generate one original cover.

## Flow

1. Retrieve up to ten Amazon book results and descriptions using Rainforest.
2. Map positioning themes and comparable Books rank signals. Retrieve cited public reader questions using OpenAI web search and recommend one position.
3. After approval, generate a title/subtitle using observed naming patterns and cover conventions.
4. After title approval, generate one image. Edit cover text without more AI calls, then save/export a 1024 × 1536 PNG front-cover concept.

Convex handles private projects, anonymous or password sign-in, background workflows, rate limits, artwork storage and static hosting. Public source research is stored in Convex, not this repository.

Ranks are snapshots, not measured sales correlations. Reader findings are not keyword-volume measurements. Suggestions do not guarantee demand, rankings or sales. A PNG concept is not a print-ready wrap. Guest projects remain accessible in the same browser session; clearing browser data or signing out loses access.

## Local development

Install dependencies with `npm install`. Connect the project to Convex with `npx convex dev`. Configure `OPENAI_API_KEY`, `RAINFOREST_API_KEY`, `JWT_PRIVATE_KEY`, `JWKS` and `SITE_URL` in Convex environment variables. Never place secrets in browser variables or committed files. `MONTHLY_AI_BUDGET_CENTS` defaults to 2500. The backend reserves a conservative cost per call; this is not actual provider billing reconciliation.

Run `npm run dev` for the interface and `npx convex dev` for backend development. `npm run build` checks types and builds the interface.

## Hosting

`npm run deploy` publishes the backend and static app to the production Convex deployment. Configure production keys separately before publishing. A Git push does not deploy the app. To publish the interface to the configured development deployment, run `npx @convex-dev/static-hosting upload --build`.
