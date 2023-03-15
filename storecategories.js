
const fs = require('fs')

async function fetchData() {
  const response = await fetch('https://homapilot.com/api');
  const data = await response.json();
  return data;
}

async function writeToFile(data) {
  try {
    await fs.promises.writeFile('./public/categories.json', JSON.stringify(data));
    console.log('Data written to file successfully!');
  } catch (err) {
    console.error('Error writing data to file:', err);
  }
}

(async function() {
  const data = await fetchData();
  await writeToFile(data);
})();