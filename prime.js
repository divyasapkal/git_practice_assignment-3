function PrimeNumber(Number){
    let counter=0;
    for(i=1;i<=Number;i++){
        if(Number%i==0){
            counter++;
        }
   }
   if(Factor==2){

        return true;
    }else{
        return false;
    }
}
let userInput=3274
let answer=PrimeNumber(userInput);
if(answer==true){
    console.log("Prime number");
}else{
    console.log("Not a prime number");
}