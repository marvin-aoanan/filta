# Test instructions:
* Testing URL: https://filta-tasteology-orchard.vercel.app/

## Getting Started on Local server
* Github Repo: https://github.com/marvin-aoanan/filta.git
* First, clone the project to your local:
```bash
git clone https://github.com/marvin-aoanan/filta.git
cd tasteology-orchard
```

* Then, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
* Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Technologies
* Next.js 15
* React 19
* Typescript 5
* Node.js 20
* Tailwind CSS 4
* Eslint 9

# Reasoning:
* In this frontend test, I demonstrated how parallel and intercepting routes work together in Next.js
* Clicking an image opens a detailed modal overlay without replacing the main content.
* Reloading page ex: `https://filta-tasteology-orchard.vercel.app/cooking` will load the details page. Making the modal link shareable.
* Clicking modals and anchor link will console.log the element.

# Layout
* The layout is tested and work in the latest Chrome/FireFox/Edge versions.
* The layout is responsive and work down to a `320px` mobile device.
* There is appropriate `<meta>` tags.
* There are some anchor links as sample.
* All images will display in a modal on click.

### Thank you very much for this opportunity! ###