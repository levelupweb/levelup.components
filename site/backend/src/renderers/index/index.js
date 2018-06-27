const scripts = require("./scripts");
const sheets = require("./sheets");
const renderScripts = require("@root/utils/renderScripts");
const renderStylesSheets = require("@root/utils/renderStylesSheets");

module.exports = (html) => `
  <!DOCTYPE>
  <html>
    <head>
      <title>Levelup Components - Index Page</title>
      ${renderStylesSheets(sheets)}
    </head>
    <body>
      <div id="root">${html}</div>
      ${renderScripts(scripts)}
    </body>
  </html>
`;