# Week 8 — Day 3: Config File Setup

## Topics Covered
- **Environment Variables:** Created a `.env` file to store configuration values such as the server port.
- **dotenv:** Used `dotenv` to load environment variables into Node.js.
- **process.env:** Accessed environment variables using `process.env.PORT`.
- **Config File:** Created `app/config/config.js` to manage and export configuration values.
- **CommonJS Modules:** Used `require()` and `module.exports` to share configuration between files.
- **Git Ignore:** Learned to use `.gitignore` to prevent `node_modules` from being uploaded to GitHub.

## Practice
- Set `PORT=5000` in the `.env` file.
- Loaded the environment variables using `dotenv`.
- Exported the port from `config.js` and imported it into `app.js`.

## Key Learning
Separating configuration into a dedicated file makes a Node.js project easier to manage, while `.gitignore` prevents unnecessary files such as `node_modules` from being tracked by Git.