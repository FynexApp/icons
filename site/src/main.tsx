import { createRoot, hydrateRoot } from 'react-dom/client'

import { App } from './App'

const root = document.getElementById('root')!

// The build prerenders the page into #root (site/scripts/prerender.ts): React hydrates that HTML.
// The dev server ships an empty #root, so React renders it from scratch.
if (root.firstElementChild) hydrateRoot(root, <App />)
else createRoot(root).render(<App />)
