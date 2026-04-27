
const Rosa = 8;
const Tulipan = 2;
const Lirio = 10;

let numLirios = 30;
let numRosas = 20;
let numTulipanes = 120;

let valueLirios = numLirios * Lirio;
let ValueRosas = numRosas * Rosa;
let ValueTulip = numTulipanes * Tulipan;

let total = valueLirios + ValueRosas + ValueTulip

console.log("Rose - Unit price: ", Rosa, ", quantity: ", numRosas, ", value: ", ValueRosas);
console.log("Lily - Unit price: ", Lirio, ", quantity: ", numLirios, ", value: ", valueLirios);
console.log("Tulip - Unit price: ", Tulipan, ", quantity: ", numTulipanes, ", value: ", ValueTulip);
console.log("Total: ", total)
