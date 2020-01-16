function largestPrimeFactor(number) {
 if(number === 2 || number === 3){
   return number;
   }

let i = 4;

while(i * i < number){
  while(number % i === 0){
    number/=i;
  }
  i++
}

return number

}
largestPrimeFactor(13195);
