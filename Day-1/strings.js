alert('hello!'); 
typeof 2
typeof 'hello!'
'hello' + 3
"hello!" + "kavitha"
'$'+ (20.95+7.99) // results in wierd float value
'$'+ (2095+799)/100 // ='$28.94'
'Items('+(1+1)+'): $' + (2095+799) / 100 //concatination
alert('Items('+(1+1)+'): $' + (2095+799) / 100);
alert('Hello!\nKavitha');
`hello!` //'...' = template strings
/*interpolation -${}  - lets us insert value or the expression directly into the string 
{} - caluclates the quantity*/
`Items(${1+1}): $${(2095+799)/100}`
`Hello!
kavitha` //multiline strings declaration
//3 ways to create a string - '' , "" ,``