// Added file to practice using callbakc functions

// First example

const supaArr = ["Funky", "Groovy", "Totally", "Righteous"];
function freshyFresh(arr) {
  const freshArr = [];
  for (let i = 0; i < arr.length; i++) {
    freshArr.push(`${arr[i]} Fresh`);
  }
  return freshArr;
}
function combineDatSupaFresh(arr, cb) {
  return cb(arr);
}
console.log(combineDatSupaFresh(supaArr, freshyFresh));

// Another example
const visiblePeople = ["Tall", "Short", "Lazy", "Fast"];
function getNinjas(arr) {
  const hiddenPeople = [];
  for (let i = 0; i < arr.length; i++) {
    hiddenPeople.unshift(`${arr[i]} Ninja`);
  }
  return hiddenPeople;
}
function makeNinjas(arr, cb) {
  return cb(arr);
}
console.log(makeNinjas(visiblePeople, getNinjas));
