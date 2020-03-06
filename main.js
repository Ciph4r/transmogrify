



const biggify = (num) => {
  return  num +9000
  }
  
  
  const nasafy = (nums) => {
  const array = []
  for (let i = nums ; i > 0 ; i--){
      array.push(i)
  }
  array.push('Blast off!')
  return array 
  }
  
  const reversify = (str) => {
  return str
  .split('')
  .reverse()
  .join('')
  }
  
  
  const titleify = (str) => {
const array = []
const upper = str.split(' ')
for (let i = 0 ; i < upper.length ; i++){
      array.push(upper[i][0].toUpperCase()+ upper[i].slice(1,upper[i].length).toLowerCase())
} return array.join(' ')
 }
  
  
  const crazify = (str) => {
    let newStr = ''
    let spaceC = 0
    for (let i = 0 ; str.length > i ; i++){
      if (str[i] === ' '){
        newStr += str[i]
      
      }else {
      spaceC%2 !== 0 ?
      (newStr += str[i].toUpperCase(),spaceC++)
      :
      (newStr += str[i].toLowerCase(),spaceC++)
      }
    }   return newStr
  }




if (typeof biggify === 'undefined') {
  biggify = undefined;
}

if (typeof nasafy === 'undefined') {
  nasafy = undefined;
}

if (typeof reversify === 'undefined') {
  reversify = undefined;
}

if (typeof titleify === 'undefined') {
  titleify = undefined;
}

if (typeof crazify === 'undefined') {
  crazify = undefined;
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}
