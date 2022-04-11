# Should you pick Vue or React?

This repo follows this ~1hr video:

[YouTube Video](https://youtu.be/-n5bNpVykrM)

It is used to show new JavaScript developers what it's like to create an app in React and in Vue.

The is a simple todo app. It uses [Sakura Classless CSS](https://github.com/oxalorg/sakura). You can use it by pasting this CDN link into the `index.html` files.

```html
<!-- index.html -->
<head>
  <!-- ... -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/sakura.css/css/sakura.css"
    type="text/css"
  />
</head>
```

**_This repo has 2 projects_**

|-📁 react
|-📁 vue

### Run the React dev server

```
cd react
npm install
npm run dev
cd vue
```

### Run the Vue dev server

```
cd vue
npm install
npm run dev
```

## Starting from scratch

[Setting up a Vite.js app](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

```bash
# start a new vite project
npm create vite@latest
```

> I'd recommend using starting with Vue if you've never built a Single Page Application with component-based architecture
