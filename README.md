# Cartoon Beats Reality – Gatsby website

A sandbox Gatsby project for an electronic music label website.

## Check it out and listen to the music
- Go here: https://cartoonbeats.com
- Click the listen icon for your favourite streaming / music service

## How to 

#### Development

- `npm run develop` to start Gatsby [hot-reload](https://www.gatsbyjs.com/docs/reference/local-development/fast-refresh/) [dev server](https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/)
  - view site on http://localhost:8000
  - view [interactive GraphQL data explorer](https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/) on http://localhost:8000/___graphql
  - this server will generate pages on demand
- OR
- `npm run build` to build static site (to test production version/render)

#### Deployment

- [A workflow](https://github.com/haszari/cartoonbeats-website-gatsby/actions/workflows/depoy-to-pages.yml) deploys automatically on every push to `main` branch (e.g. push or PR merge).

There is also a legacy `npm run manual-deploy-deprecated` script to build and [deploy manually using `gh-pages`](https://www.npmjs.com/package/gh-pages) (likely no longer required).