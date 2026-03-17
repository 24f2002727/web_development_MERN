// "Check the criteria for good string "
// Good string if string starts with a and has len>3
let str1="Ram"
let str2="Anand"

function goodstr(x)
{
    if(x[0]=='a' || x[0]=='A' && x.length>3)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

console.log(goodstr(str1));
console.log(goodstr(str2));

