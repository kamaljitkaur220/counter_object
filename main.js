function countCharacters(string){
    let dcount = 0
    let characterCounts = {}
    for(let i = 0; i <string.length; i += 1){
        let character = string[i]
        characterCounts[character] =1
       
    }
    return characterCounts

}



console.log(countCharacters('doggo'))




const expectedOutput = {
    'd' : 1,
    'o' :2,
    'g' :2,
}

  let actualOutput = countCharacters("doggo");
  if(actualOutput['d'] ===expectedOutput['d']){
console.log("you did it ")
  }
  else {
      console.log("sad times")
  }
  if (actualOutput['0'] === expectedOutput['0']){
      console.log("The os match")
  }else {
      console.log("everything is broken")
  }
  
