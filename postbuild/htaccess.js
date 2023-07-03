const fs = require('fs');
require('dotenv').config();

let xmlContent = ''

// Add url ending slash and path redirect config
xmlContent += "RewriteEngine On"

xmlContent += `# Remove /client/ from the path\n`
xmlContent += `RewriteCond %{REQUEST_FILENAME} !-f\n`
xmlContent += `RewriteRule ^client/(.*)/?$ ${process.env.DOMAIN}/$1/ [R=301,L]\n`

xmlContent += `# Add trailing slash if not present\n`
xmlContent += `RewriteCond %{REQUEST_FILENAME} !-f\n`
xmlContent += `RewriteCond %{REQUEST_URI} !(.*)/$\n`
xmlContent += `RewriteRule ^(.*[^/])$ ${process.env.DOMAIN}/$1/ [R=301,L]\n`


JSON.parse(process.env.REDIRECTS).forEach(item => {
  xmlContent += `RedirectMatch ${item.statusCode} ${item.source} ${item.destination}\n`
})

fs.writeFileSync('./public/.htaccess', xmlContent)