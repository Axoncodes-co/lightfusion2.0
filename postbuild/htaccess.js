const fs = require('fs');
require('dotenv').config();

let xmlContent = ''
JSON.parse(process.env.REDIRECTS).forEach(item => {
  xmlContent += `RedirectMatch ${item.statusCode} ${item.source} ${item.destination}\n`
})

fs.writeFileSync('./public/.htaccess', xmlContent)