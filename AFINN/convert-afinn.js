const fs = require('fs').promises;

async function readAndWritefinn() {
  const afinnObj = {};
  const afinn = await fs.readFile('./AFINN-111.txt', 'utf8');

  const afinnConverted = afinn.split('\n').map((file) => file.split(/\s+/));

  for(let each of afinnConverted) {
    const [key, value] = each;
    afinnObj[key] = value;
  };
  
  fs.writeFile('./AFINN-111.json', JSON.stringify(afinnObj, null, 2), 'utf8');
};

readAndWritefinn();
