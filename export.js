let test = 'Labas';
let test2 = 'Sveikas';
function func1() {
  console.log('veikia');
}

function func2(word) {
  console.log(word);
}
console.log('veikia');
func2('labas');

export {
  test,
  test2,
  func1,
  func2
}