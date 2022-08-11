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

// const str = "abandon\t-2\nabandoned\t-2\nabandons\t-2\nabducted\t-2\nabduction\t-2\nabductions\t-2\nabhor\t-3\nabhorred\t-3\nabhorrent\t-3";
// const strConverted = str.split('\n').map((file) => file.split(/\s+/));

// const afinnObj = {};

// for(let each of strConverted) {
//   const [key, value] = each;
//   afinnObj[key] = value;
// };

// console.log(afinnObj);

