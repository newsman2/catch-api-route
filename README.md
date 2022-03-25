# NextJS Project & FastAPI Project

## What is this project about?

To showcase the usage of custom hooks `useSubmit` and using NextJS API routes as a proxy to add additional request headers before sending to an API.

## How to run the project?

For frontend repository

1. `npm install`
2. `npm run dev`

For backend repository

1. `python -m venv env`
2. `./env/scripts/activate`
3. `pip install -r requirements`

## File Structure

`pages/api/[...slug].js` - catches all the different API routes that a developer will commonly use, it caters for both `swr` and `axios`

`pages/form.js` - showcase the usage of custom hook with built-in states handling which is similar to swr.

`src/common/helpers/fetch-wrapper.js` - a helper script for wrapping around all `swr` calls to NextJS API routes

`src/common/libs/useSubmit` - custom hook for submission of data with built-in states handler

## Contributer

- Edwin
