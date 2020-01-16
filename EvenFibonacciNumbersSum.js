function fiboEvenSum(n) {
  let a = 0,b = 1,result = b, sum=0;
  for(let i=0; i< n; i++){
    result = a + b 
    a=b;
    b=result;
    if(result % 2 === 0){
      sum +=result
    }
  }
  
  
  return sum;
}

fiboEvenSum(10);
