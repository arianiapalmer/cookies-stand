'use strict';

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm', '4pm', '5pm', '6pm', '7pm']

function generateNumberBetween(min, max){
    return Math.round(Math.random() + (max-min)) + min;
}
function genCustPerHour(){
    for (let i = 0; i < hours.length; i++){
        console.log(generateNumberBetween(this.minCust, this.maxCust));
    }
}

const seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookiesPerCust: 6.3,
    cookiesSalesAtEachHour: this.genCustPerHour(),

}

seattle.genCustPerHour();

const tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookiesPerCust: 1.2,
    genCustPerHour: function( ){
        
    }
}
const paris = {
    minCust: ,
    maxCust: ,
    avgCookiesPerCust: ,
    genCustPerHour: function( ){
        
    }
}
const  = {
    minCust: ,
    maxCust: ,
    avgCookiesPerCust: ,
    genCustPerHour: function( ){
        
    }
}
const  = {
    minCust: ,
    maxCust: ,
    avgCookiesPerCust: ,
    genCustPerHour: function( ){
        
    }
}