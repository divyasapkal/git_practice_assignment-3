function PrimeNumber(Number){
    let Factor=0;
    for(i=1;i<=Number;i++){
        if(Number%i==0){
            Factor++;
        }
    }
    if(Factor==2){
        return false;
    }else{
        return true;
    }
}
let userInput=3274
let answer=PrimeNumber(userInput);
if(answer==false){
    console.log("Prime number");
}else{
    console.log("Not a prime number");
}