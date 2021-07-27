function deepCopy(entry) {
  const entryType = entry.constructor;
  let theCopy = (entryType === Object) ? {} : [];

  for (let key in entry) {
    const itemType = entry[key].constructor;

    if (entryType === Object) { 
      if (itemType === Array) {
        theCopy = {...theCopy, [key]: deepCopy([...entry[key]])};

      } else if (itemType === Object) {
        theCopy = {...theCopy, [key]: deepCopy({...entry[key]})};

      } else {
        theCopy = {...theCopy, [key]: entry[key]};

      }
    } else {
      if (itemType === Array) {
        theCopy = [...theCopy, deepCopy([...entry[key]])];

      } else if (itemType === Object) {
        theCopy = [...theCopy, deepCopy({...entry[key]})];

      } else {
        theCopy = [...theCopy, entry[key]];
      }
    }
  }
  return theCopy;
}
module.exports = { deepCopy };
// const obj = {
//   age: 24,
//   name: 'Caio',
//   games: ['Warzone 2100, Clash Royale',
//   {MMO: 'lineage 2'}],
//   board: {a:1, b: 2, c: 3, d: 4, subBoard: {e: 5, f: 6, g: 7, h: 8} },
//   student: true,
//   heigth: 1.96,
//   smoker: false,
// }

// const objCopy = deepCopy(obj);

// console.log(obj);
// console.log(objCopy);
// console.log(objCopy.games === obj.games);
// console.log(objCopy.board === obj.board);
// console.log(objCopy.board.subBoard === obj.board.subBoard);