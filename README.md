# Steps to Reproduce

1. Copy `.env.example` to `.env` and fill in the `BETTER_AUTH_SECRET` value.
2. Install dependencies with `pnpm install`.
3. Run the database migrations with `pnpm db:migrate`.
4. Run `dotenv -e .env -- pnpm build` to build the project.
5. Start the server with `dotenv -e .env -- node build`.
   - Notice the `Better Auth was already imported. This breaks async local storage instance and will lead to issues!` message in the console.
6. Open your browser and navigate to `http://localhost:3000` to see the application running.
7. Click on "Sign Up" to create a new account.
8. You will see the error message:
   - Error: No request state found. Please make sure you are calling this function within a `runWithRequestState` callback.

# Things I Tried

- Running `pnpm dedupe`
- Running `pnpm why @better-auth/core`:
  ```
  devDependencies:
  @better-auth/oauth-provider 1.4.11
  ├── @better-auth/core 1.4.11 peer
  └─┬ better-auth 1.4.11 peer
    ├── @better-auth/core 1.4.11
    └─┬ @better-auth/telemetry 1.4.11
      └── @better-auth/core 1.4.11 peer
  better-auth 1.4.11
  ├── @better-auth/core 1.4.11
  └─┬ @better-auth/telemetry 1.4.11
    └── @better-auth/core 1.4.11 peer
  ```
- Running `pnpm why better-auth`:
  ```
  devDependencies:
  @better-auth/oauth-provider 1.4.11
  └── better-auth 1.4.11 peer
  better-auth 1.4.11
  ```
