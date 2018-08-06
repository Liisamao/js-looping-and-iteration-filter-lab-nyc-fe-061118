function findMatching (arr,name){
  return arr.filter( n => name.toLowerCase() === n.toLowerCase() );
}

function fuzzyMatch (arr, name){
  return arr.filter( n => name[0] === n[0]);
}


// [,{name: "Sophie"} {name: "Lisa"}]
function matchName (arr, name){
  return arr.filter(person => person.name === name);
}