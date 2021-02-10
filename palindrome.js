function palindrome(str)
{

    var reversed = str.split("").reverse().join("");

    
    if(reversed===str)
        return true;
    return false;

}
console.log(palindrome("mom"));