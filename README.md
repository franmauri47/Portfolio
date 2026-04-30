# FranciscoMauriPortfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

# Francisco Mauri Portfolio

Single-page portfolio with a terminal-inspired UI. It features a header, a typing-style description terminal with internal scroll, social network cards, and a contact form that sends email via Formspree.

## Built With

- Angular 21 (standalone components)
- TypeScript
- Reactive Forms
- Formspree (contact form delivery)
- HTML + CSS (terminal aesthetic)

## Run Locally

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Configure Formspree

1. Create a Formspree form and copy the Form ID.
2. Update `formId` in `src/app/services/formspree.service.ts`.


## Deploy on GitHub Pages

Probably you should have or create an acces token on github

First execute on your console
```bash
ng add angular-cli-ghpages
ng deploy --repo=https://github.com/<your username>/<your repo> --name="<your username>" --base-href=/<your repo>/
```
Then github will ask for your username and password (here is where you use your token).

And that's it! You should check Github Actions on your repo for deployment details and get the URL.

There are many ways to deploy an Angular App on GHpages, so if this doesn't work, don't worry! search another method on internet.
