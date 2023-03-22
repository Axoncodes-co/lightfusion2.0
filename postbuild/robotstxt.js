const fs = require('fs');
const path = require('path');

const robotsContent = process.env.PRODUCTION == "true"
  ? fs.readFileSync(path.join(__dirname, '../robots/production-robots.txt'))
  : fs.readFileSync(path.join(__dirname, '../robots/staging-robots.txt'))

fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsContent)