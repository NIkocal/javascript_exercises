function capsLong(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

console.log(capsLong("Sue Smith"));     // 'Sue Smith'
console.log(capsLong("Sue Robertson")); // 'SUE ROBERTSON'
console.log(capsLong("Joe Thomas"));    // 'Joe Thomas'
console.log(capsLong("Joe Stevens"))