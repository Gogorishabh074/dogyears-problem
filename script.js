let myageYear = document.getElementById('hyears');
for(i=1; i<101; i++){
    let option = document.createElement('option');
    option.textContent= i;
    myageYear.appendChild(option);
}
let myagemonth = document.getElementById('hmonths');
for(i=0; i<12; i++){
    let option = document.createElement('option');
    option.textContent= i;
    myagemonth.appendChild(option);
}
let totalmonth;
function dogYears(){
    let myageY = document.getElementById('hyears').value;
    let myageM = document.getElementById('hmonths').value;
    var temp = 0;
    var dogYear, dogmonth;
    /*
if(myageY <= 2){
    temp = temp + 10.5 * myageY;
    dogYear = Math.floor(temp);
    dogmonth = (myageM * 10.5) + (temp - dogYear) * 12;
    if(dogmonth>=12) {
        dogYear = dogYear + Math.floor(dogmonth / 12);
        dogmonth = dogmonth - ((Math.floor(dogmonth / 12) )* dogYear);
    }
}
*/
if(myageY <= 2 & dogmonth >0 ){
dogmonth = myageM * 10.5;
dogYear = myageY * 10.5 * 12;
totalmonth = dogmonth + dogYear ;
dogYear = Math.floor(totalmonth / 12);
dogmonth = (totalmonth / 12 -  Math.floor(totalmonth / 12))*12;
}
else{
    temp = 21;
    dogmonth = myageM * 4;
    dogYear = (myageY-2) * 4 * 12;
    totalmonth = dogmonth + dogYear;
    dogYear = temp + Math.floor(totalmonth / 12);
    dogmonth = (totalmonth / 12 -  Math.floor(totalmonth / 12))*12;
}/*
else{
    temp = 21;
    temp = (temp + (myageY-2)*4);
    dogYear = Math.floor(temp);
    dogmonth = (myageM * 0.33) + (temp - dogYear) * 12;
}
*/
document.getElementById('dogage').innerHTML = dogYear + ' Dog Years! ' +
+ dogmonth + 'Months';
}
/*
function dogYears(){
let myage = document.getElementById('humanage').value;
var temp = 0;
var dogYear, dogmonth;
if(myage <= 2){
    temp = temp + 10.5 * myage;
    dogYear = Math.floor(temp);
    dogmonth = (temp - dogYear)*12;
}
else{
    temp = 21;
    temp = (temp + (myage-2)*4);
    dogYear = Math.floor(temp);
    dogmonth = (temp - dogYear)*12;
    //dogmonth = math.round(dogmonth);

}document.getElementById('dogage').innerHTML = dogYear + ' Dog Years! ' +
 + dogmonth + 'Months';
}
*/
