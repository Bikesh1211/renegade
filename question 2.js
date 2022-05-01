let character = 'Bste!hetsi ogEAxpelrt x'
let document1 = 'AlgoExpert is the Best!'

// let character = 'hsekib'
// let document1 = 'bikesh'

// let char1 = character.split('')
// let str1 = document1.split('')
function GenDoc(){
    let charLen = character.length
    let docLen = document1.length
    
    let result;
    
    if(charLen==docLen){
            //for loop
for(let i = 0; i< character.length; i++){
    let isAt = document1.indexOf(character[i])
    if(isAt < 0){
        result = false
        // return false
    }
    else{
        result = true
        // return true
    }
    

}

//for loop
  console.log(result)
    }
    else{
    console.log('false')
        }

    // console.log(result)

}
GenDoc()







