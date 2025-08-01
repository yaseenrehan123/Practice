type CharacterClass = 'Swordsman' | 'Archer' | 'Rogue' | 'Mage' |'Cleric';

function returnLastArrElement<T>(arr:T[]){
    return arr[arr.length - 1];
};

const stringArr:string[] = ['A','B','C','D','E'];

const numArr:number[] = [1,2,3,4,5,6]

const characterClassArr:CharacterClass[] = ['Swordsman','Rogue','Cleric'];

console.log(returnLastArrElement(stringArr));

console.log(returnLastArrElement(numArr));

console.log(returnLastArrElement(characterClassArr));