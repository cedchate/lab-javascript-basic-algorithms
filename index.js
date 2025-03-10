// Iteration 1: Names and Input
let hacker1="Cedric";
let hacker2="Kilian";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters. `);

else if (hacker1.length < hacker2.length)
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters. `);

else
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
// Iteration 3: Loops

let driverCapital = "";

for(let i = 0 ; i < hacker1.length; i++){
	
	driverCapital += hacker1[i].toUpperCase();
	
	if(i != hacker1.length-1) { 
		driverCapital += " ";
	}
	
}

let navigatorReverse= "" ;

for (let i = hacker2.length-1; i >= 0; i--){
	navigatorReverse += hacker2[i];
}

console.log(driverCapital);
console.log(navigatorReverse);

if (hacker1 < hacker2){
	console.log("The driver's name goes first.");
	
}else if (hacker1 < hacker2){
	console.log("Yo, the navigator goes first definitely.");
	
}else 
	console.log("What?! You both have the same name?");


// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ultrices felis. Proin ullamcorper odio dolor, ut elementum magna eleifend suscipit. Maecenas molestie elit sed placerat feugiat. Nulla ipsum felis, tristique ut venenatis non, aliquam at eros. Praesent consectetur orci nulla, eu scelerisque erat ullamcorper vitae. Phasellus luctus diam vitae risus aliquam, fringilla pharetra neque lobortis. Sed vitae pretium risus. Ut elementum tristique leo in tincidunt. Sed nec aliquet orci. In lorem nisl, porttitor a lectus ut, faucibus laoreet mauris. Aliquam pharetra, nulla non tincidunt pellentesque, nunc nulla feugiat leo, non gravida libero erat id tortor. Pellentesque placerat, nulla at fermentum mattis, leo lacus interdum est, id lacinia ipsum purus sed tellus. Donec at dapibus risus. Ut gravida risus lacus, et varius est vehicula quis. Aliquam pretium leo dui, sed vehicula lectus faucibus vitae. Integer in magna ut arcu tincidunt blandit eu placerat ex. Ut tincidunt orci eu est pretium suscipit. Phasellus sapien tellus, aliquam nec sodales maximus, malesuada quis magna. Duis blandit ipsum sem, ac vulputate purus blandit ac. Nullam tempor sed magna scelerisque dignissim. Pellentesque metus lectus, porttitor vitae velit pellentesque, malesuada sodales purus. Fusce pharetra, nisi a rutrum laoreet, nulla arcu tincidunt justo, sed congue mi ex ut risus. Curabitur et eget consequat odio. Maecenas pharetra lectus velit. Aliquam luctus ut sem nec commodo et. Mauris at rutrum risus.";
let count = 1;
let lastSpace=0;
let newSpace=0;
let etCount=0;

for (let i = 0; i < longText.length; i++) {
	if (longText[i] === " "){
		count++;
		newSpace= i;
		let lastWorld = longText.slice(lastSpace, newSpace);
		if ( lastWorld.length-1<=3  && lastWorld.includes("et")){
			etCount++;
		}
		lastSpace= newSpace;
	}
}
console.log(etCount);

i = 0;

/*while (longText.indexOf(" et ") != -1) {
 	i++; 
 	longText = longText.slice(longText.indexOf(" et ") + 1, longText.length);
}
console.log(i);*/
console.log(count);



// Bonus 2

function join(strToCheck) {
	let joinedStr = "";

	for (let i = 0; i < strToCheck.length; i++) {
		if (strToCheck.charCodeAt(i) >= 65 && strToCheck.charCodeAt(i) <= 90 
			|| strToCheck.charCodeAt(i) >= 97 && strToCheck.charCodeAt(i) <= 122) {
				joinedStr += strToCheck[i];
		}
	}
	return joinedStr;
}

function reverse(str) {
	let reversedStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversedStr += str[i];
	}
	return reversedStr;
}

function upperCaseAndCheck(str1, str2) {
	if (str1.toUpperCase() === str2.toUpperCase()) {
		console.log("The phrase to check is a Palindrome.");
   } else {
		console.log("The phrase to check is not a Palindrome.");
   }
}

let phraseToCheck = "A man, a plan, a canal, Panama!";
let str1 = "";
let str2 = "";

str1 = join(phraseToCheck);
str2 = reverse(str1);
upperCaseAndCheck(str1, str2);
