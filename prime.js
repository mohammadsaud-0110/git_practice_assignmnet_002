let num=6;
for(let i=1;i<=num;i++)
{
	if(i%num==0){
		count++;
	}
}
if(count=2){
	console.log(num,"is a Prime Number");
}
else{
	console.log(num,"is not a Prime Number");
}