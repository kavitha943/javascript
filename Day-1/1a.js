alert('My name is:');
alert('Kavitha');
alert('My name is:' + 'Kavitha');
alert('Total cost:$'+(5+3));
`Total cost: $${5+3}` // template string
// Template strings allow for easier string manipulation and multi-line strings
alert(`Total cost: $${5+3}`); // template string with interpolation
alert('Total cost:$'+ (599+295)/100);
`Total cost: $${(599+295)/100}` // template string with calculation
alert(`Total cost : $${(599+295)/100}`); 
alert(`Total cost : $${(599+295)/100}
Thank you, come again!`); // multi-line template string

`Items(${2+2}):$${((2*2095)+(2*799))/100}
Shipping & handling:$${2*499/100}
Total before tax :$${(((2*2095)+(2*799))/100)+(2*499/100)}
Estimates tax(10%):$${Math.round((((2*2095)+(2*799)+(2*499)))*0.1)/100}`

`Items(${1+1}):$${2095+799/100}
Shipping & handling:$${0}
Total before tax :$${(2095+799)/100}
Estimated tax(10%):$${Math.round((2095+799)*0.1)/100}`