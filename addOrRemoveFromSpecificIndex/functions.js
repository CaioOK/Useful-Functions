/* A primeira função adiciona um valor (value) em um índex (index) específico de um array,
sem alterar o original;

  Já a segunda faz o oposto, remove o valor que houver em um índice específico (index)
*/

const addValueInAEspecificIndex = (array, index, value) => (
  [...array.slice(0, index), value, ...array.slice(-(array.length - index))]
);

export const removeSpecificIndex = (array, index) => (
  [...array.slice(0, index), ...array.slice(index + 1)]
);

export default addValueInAEspecificIndex;
