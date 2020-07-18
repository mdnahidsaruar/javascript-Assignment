// 1. feetToMile

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

var distanceMile = feetToMile(15840);
console.log(distanceMile);



// 2. woodCalculator


function woodCalculator(chair, table, bad){
    var chair5 = chair * 5;
    var table3 = table * 3;
    var bad5 = bad * 5;
    var totalCubicFoot = chair5 + table3 + bad5;
    return totalCubicFoot;
}
var totalCubicFoot = woodCalculator(1, 3, 5);
console.log(totalCubicFoot);






// 3. brickCalculator















// 4. tinyFriend
 
function tinyFriend(names){
    var smallest = names[0];
for(var i = 0; i < names.length; i++){
    var element = names[i];
    if(element< smallest){
        smallest = element;
        }
    }
    return smallest;
}
    
var smallest = tinyFriend(['monsur mia', 'monir khan', 'sumon', 'rumon', 'rumi', 'sam']);
console.log(smallest);
