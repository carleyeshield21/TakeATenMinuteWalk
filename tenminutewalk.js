// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
// After realizing that this algorithm takes only to know that the number north's and south's must be equal and the number of east's and west's must be equal. It becomes easy.

function isValidWalk(walk){
    let n = []
    let s = []
    let e = []
    let w = []

    if(walk.length == 10){
        for(i=0; i<=walk.length-1; i++){
            // console.log(walk[i])
            if(walk[i] == 'n'){
                n.push(walk[i])
            } else if(walk[i] == 's') {
                s.push(walk[i])
            } else if(walk[i] == 'e'){
                e.push(walk[i])
            } else {
                w.push(walk[i])
            }
        }

        if( n.length == s.length && e.length == w.length ){
            console.log(`${true}\nWalk Route: ${walk} is a VALID Route.`)
        } else {
            console.log(`${false}\nWalk Route: ${walk} is an INVALID. Change your route.`)
        }

    } else {
        console.log(`${false}\nWalk Route: ${walk} is NOT equal to 10. Change your route.`)
    }
}
isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
console.log('========')
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])
console.log('========')
isValidWalk(['w'])
console.log('========')
isValidWalk(['n','n','n','s','n','s','n','s','n','s'])
console.log('========')
isValidWalk(['n','e','n','e','e','s','s','w','w','w'])
console.log('========')
isValidWalk(['e','e','n','n','n','w','s','s','w','s'])