
// HW - reverse a number using loop.
//let input = 15246;

function Reverse(ip){
    //ip2 = ip.toString();  // used toString method to convert a number into a string.
    //let output = [];      // declared a output array which will hold the reversed number.
    // for(let i=(ip2.length)-1;i>=0;i--){
    //     output.push(ip2[i]);
    // }
    let isNegative = false;
    
    // Check if the input is negative.
    if (ip < 0) {
        isNegative = true;
        // Make the input positive for reversal.
        ip = Math.abs(ip);// used to return the positive value.
    }
    let reverse = 0;
    let remainder = 0;
    while( ip!=0){
        remainder = ip%10;
        reverse = reverse*10 + remainder;
        ip= Math.floor(ip/10);
    }
    if(isNegative)
    {
        reverse = -reverse;
    }
    
   

    // console.log(output.join(""));// using join to print only number and not an array.function add(){
    //let reversed = output.join("");
    var listItem= document.createElement('li');
    listItem.textContent = reverse;
    document.getElementById('list').appendChild(listItem);
    
}

function palindrome (ip){
    let reversed = "";
for(let i = ip.length-1; i>=0; i--){
    reversed = reversed + ip[i];

}
if(ip === reversed){
    return document.getElementById('para').innerHTML = "YES";
}else{
    return document.getElementById('para').innerHTML = "NO";
}

}



