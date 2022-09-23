let string = "racecar";
let rev = "";
for(let i=string.length-1;i>=0;i--){
	rev=rev+string[i];
}
if(rev == string){
	console.log(string, "is a Palindrome");
}
else{
	console.log(string, "is not a Palindrome");
}