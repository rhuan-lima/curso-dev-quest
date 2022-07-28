/*

    == ---- igual ---- A == B ---- verdadeiro se A for igual a B
    === ---- identico ---- A === B ----- verdadeiro se A for identico a B
    !== ----- não idêntico ---- A !== B ---- verdadeiro se o A não for idêntico a B
    != ------- diferente -------- A != B ----- verdadeiro se A for diferente de B
    < ---------- menor que ------- A < B ------- verdadeiro se A for menor que B
    <= ---------- menor igual que ------- A <= B ------- verdadeiro se A for menor ou igual a B
    > ---------- maior que ------- A < B ------- verdadeiro se A for maior que B
    >= ---------- maior igual que ------- A <= B ------- verdadeiro se A for maior ou igual a B

*/

const a = 3
const b = 3

// ----------- AND (&) -----------


console.log(a === b && a <= b)
// V e V = V

console.log(a === b && a < b)
// V e F = F

console.log(a > b && a === b)
// F e V = F

console.log(a > b && a < b)
// F e F = F



// ----------- OR (||) -----------


console.log(a === b || a <= b)
// V ou V = V

console.log(a === b || a < b)
// V ou F = V

console.log(a > b || a === b)
// F ou V = V

console.log(a > b || a < b)
// F ou F = F



// ----------- NOT (!) -----------


console.log(!(a === b)) // False

console.log(!(a < b)) // True
