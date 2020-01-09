function multiplesOf3and5(number) {

let numsum = [];
for(let i=0; i < number; i++){
  if(i%3==0 || i%5==0){
    numsum.push(i)
  }
}
  
  return numsum.reduce((a,b) => a + b,0);
}

multiplesOf3and5(49);
