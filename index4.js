let n1=153;
let n2=n1;
let sum=0;
let d1=String(n1).length;
while(n1>0){
    sum+=(n1%10)**d1;
    n1=Math.floor(n1/10);
}
if(sum==n2){
    console.log("Yes");
}
else{
    console.log("No");
}