const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/alyssa/Documents/GitHub/seventeensierra-pwa/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/alyssa/Documents/GitHub/seventeensierra-pwa/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/alyssa/Documents/GitHub/seventeensierra-pwa/src/pages/index.js")))
}

