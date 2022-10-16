let lodash1=require('lodash')
let month=["January","February","March","April","May","June","july","August","September","October","November","December"];



let result=lodash1.chunk(month,4)
console.log(result)
module.exports.chunk=result


const oddNum=[1,3,5,7,9,11,13,15,17,19];
console.log(lodash1.tail(oddNum,9)); 
module.exports.odd=oddNum

const a=[3,6,4,8,2,3]
const b=[4,8,0,5,1,6]
const c=[8,5,7,3,12,8]
const d=[5,6,9,2,3,7]
const e=[4,7,9,1,2,4,12]
console.log(lodash1.union(a,b,c,d,e));
module.exports.union=(a,b,c,d,e)

const keyValue=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
const pqr =lodash1.fromPairs(keyValue)
console.log(pqr);
module.exports.keys= pqr
    