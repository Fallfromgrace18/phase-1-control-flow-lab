function scuberGreetingForFeet(num){
if (num<=399){
   return ("This one is on me!")
}
else if (num>=400&&num<2000) {
  return ("That will be twenty bucks.")
}
else if (num>=2000&&num<2500){
  return ("I will gladly take your thirty bucks.")
}
else if (num>=2500) {
  return ("No can do.")
}
}
function ternaryCheckCity(isCityNyc){
 return isCityNyc==="NYC"?'Ok, sounds good.': 'No go.'
}


function switchOnCharmFromTip(tip){ 
let response= ""
switch (tip){
  case "generous":
    response="Thank you so much."
  return response
}
switch (tip){
 case "not as generous":
  response = "Thank you."
  return response
  default:
    response = "Bye.";
    return response
}
}
 

