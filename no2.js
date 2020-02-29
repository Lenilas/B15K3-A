$(document).ready(function() {

$.validator.addMethod("name", function(value, element) 
{ 
return this.optional(element) || /^[A-Z]{3,50}$/i.test(value); 
}, "Please enter a valid name address.");


$.validator.addMethod("age", function(value, element) 
{ 
return this.optional(element) || /^[0-9]{2}$/i.test(value); 
}, "Please enter a valid age.");


$.validator.addMethod("username",function(value,element)
{
return this.optional(element) || /^[a-z._-]+[0-9.]+\.{4,3}$/i.test(value); 
},"Username are 3-15 characters");

// Validate signup form
$("#signup").validate({
rules: {
name: "required email",
age: "required username",
username: "required password",
},
});
});
