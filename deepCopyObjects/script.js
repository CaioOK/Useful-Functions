/* Cria uma cópia completa (sem passar algum dado por referência) de array que contenha arrays e/ou
objetos, e também de objeto que contenha arrays e/ou objetos não importando o quão profundo esteja
no parâmetro entry, pois emprega a técnica de recursão.
*/

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
