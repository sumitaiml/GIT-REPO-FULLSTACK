let number=153;
let originalNumber=number;
let sum=0;
let digits=String(number).length;
while(number > 0){
    let digit=number%10;
    sum+=digit**digits;
    number=Math.floor(number/10);
}

if(sum==originalNumber){
    console.log("Yes");
}
else{
    console.log("No");
}
