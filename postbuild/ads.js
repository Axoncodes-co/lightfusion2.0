const fs = require('fs')
let xmlContent = 'google.com, pub-5146054383186265, DIRECT, f08c47fec0942fa0'
fs.writeFileSync('./public/ads.txt', xmlContent)