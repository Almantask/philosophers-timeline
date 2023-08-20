# Philosophers Timeline

Philosophers of the ages. A website to capture my (Almantas) personal knowledge of the greatest philosophers of all time and cultures. It's not supposed to serve as an accurate collection of information, or be a complete list, but rather things I find practical and useful to share.

The page supports quick search by a date (from-to, from, -to) or any phrase.

[![CI](https://github.com/Almantask/philosophers-timeline/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Almantask/philosophers-timeline/actions/workflows/ci.yml)

## Deploy

Once you run `npm run-script build`, you will see a `_site` directory containing static HTML/CSS/JS files with your site content. You can now use any static site hosting to deploy these files!

### GitHub pages

To deploy your static site on GitHub pages (free), create a branch containing the static files in the root directory by running `git subtree push --prefix _site origin gh-pages`. Then you can go to your repository's Settings > Pages options and choose "Deploy from a branch", then select `gh-pages` as the branch.

<img src="docs/gh-pages-config.png" alt="Github Pages config settings. Under 'Build and deployment', Source is set to 'Deploy from a branch', branch is set to 'gh-pages', and the folder is set to '/ (root)'." width="500"/>

## Under the hood

This project uses

- [11ty](https://www.11ty.dev)
- [EJS](https://ejs.co/)
- [moment.js](https://momentjs.com/)
- [FontAwesome](https://fontawesome.com/)
- [normalize.css](https://github.com/necolas/normalize.css)
- [classlist-polyfill](https://github.com/eligrey/classList.js)

This project is baded on https://github.com/molly/static-timeline-generator.