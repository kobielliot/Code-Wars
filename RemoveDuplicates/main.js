


  //receive an array with peers test scores
//received my test score and i passed, wont be in the array
//return true if score is better than average
//return false if not


function testScore(classAvg,myScore){
    const avg = classAvg.reduce((acc,num) => acc + num)/classAvg.length
    // let sum = 0;
    // for (let i = 0; i < classAvg.length;i++){
    //   sum += classAvg[i]
    // }
    // let average = sum/classAvg.length;
    return myScore > avg ? true : false
  }
  
  //taking in class scores in an array
  //array will  always be provided
  //taking in my test score
  //find the average of the scores in the array
  //compare the average to my test scores
  //if my score is better, return true
  //return false in any other case
  
  //every char will be a number
  //all test scores will be a whole number
  //number will be in value form
  //dont have to round
  // no need to return array
  
  console.log(testScore([30,30,30],80))// => true
  console.log(testScore([90,90,90],60))// => false
  console.log