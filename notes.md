# DocTalk Notes

Chat-with-your-PDFs app. MERN + AI (RAG). Goal: deployed, with citations.

## Status (29 Oct 2026)
- [x] Server setup: Express + MongoDB Atlas, runs with `npm run dev` in /server
- [x] User model (email, passwordHash)
- [x] Register and login routes (bcrypt + JWT)
- [x] Auth middleware (checks token, sets req.userId)
- [ ] Test register, duplicate email (409), login right/wrong password
- [ ] Protected route /api/me works with and without token
- [ ] Push to GitHub, move .gitignore to repo root

## What exists
**Routes**
- POST /api/auth/register  -> creates user, returns token
- POST /api/auth/login     -> checks password, returns token

**Model:** User { email, passwordHash, createdAt, updatedAt }

**Middleware:** auth.js reads "Authorization: Bearer <token>", verifies it, sets req.userId

## How a login request flows
React sends POST -> Express parses JSON -> route finds user by email ->
bcrypt compares password to hash -> server signs a JWT with userId ->
token returned -> client stores it and sends it on later requests ->
auth middleware verifies it before protected routes run.

## Next steps
1. Finish the tests above
2. React login/register page, store token, protected page
3. PDF upload (multer) + text extraction
4. Chunking + embeddings
5. Vector search + chat endpoint with citations
6. Chat UI, tests, deploy (Render + Vercel), README

## Things I want to be able to explain in interviews
- Why bcrypt hash instead of storing passwords
- What jwt.verify checks (signature + expiry)
- What CORS is and why the API needs it
- Why every query will filter by userId

## Notes to self
- Never commit .env