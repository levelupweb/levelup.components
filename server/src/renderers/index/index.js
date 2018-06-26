const scripts = require("./scripts");
const renderScripts = require("../../utils/renderScripts");

module.exports = (html) => `
  <!DOCTYPE>
  <html>
    <head>
      <title>Levelup Components - Index Page</title>
    </head>
    <body>
      <div id="root">${html}</div>
      ${renderScripts(scripts)}
    </body>
  </html>
`;