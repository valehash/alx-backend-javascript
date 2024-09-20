function calculator(a, b, Type) {
 if (Type === 'SUM') {
   res = Math.round(a) + Math.round(b)
 }
 if (Type === 'SUBTRACT') {
   res = Math.round(b) - Math.round(a)
 }
 if (Type === 'DIVIDE') {
   if (Math.round(b) === 0){
      return "Error"
   }
   res = Math.round(a) / Math.round(b)
 }
  return res
}

module.exports = calculator;
