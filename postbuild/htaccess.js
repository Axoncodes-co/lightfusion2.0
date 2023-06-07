const fs = require('fs');

let xmlContent = ''
JSON.parse(process.env.REDIRECTS).forEach(item => {
  xmlContent += `RedirectMatch ${item.statusCode} ${item.source} ${item.destination}`
})

fs.writeFileSync('./public/.htaccess', xmlContent)