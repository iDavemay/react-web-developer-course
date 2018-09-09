const isAdult = ( age ) => age >= 18;
const canDrink = ( age ) => age >= 21;

export { isAdult, canDrink };
console.log( isAdult(22) );
console.log( canDrink(12) );