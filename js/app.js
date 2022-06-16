'use strict';

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm', '4pm', '5pm', '6pm', '7pm']

function generateNumberBetween(min, max){
    return Math.round(Math.random() + (max-min)) + min;
}
function genCustPerHour(){
    for (let i = 0; i < hours.length; i++){
        console.log(generateNumberBetween(this.minCust, this.maxCust));
        return[genCustPerHour];
    }
}

const Seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookiesPerCust: 6.3,
    cookiesSalesAtEachHour: this.genCustPerHour(),

}

seattle.genCustPerHour();

const Tokyo = {
    minCust: 3,
    maxCust: 24,
    avgCookiesPerCust: 1.2,
    genCustPerHour: function( ){
        
    }
}
const Dubai = {
    minCust: 11,
    maxCust: 38,
    avgCookiesPerCust: 3.7,
    genCustPerHour: function( ){
        
    }
}
const Paris = {
    minCust: 20,
    maxCust: 38,
    avgCookiesPerCust: 2.3,
    genCustPerHour: function( ){
        
    }
}
const Lima = {
    minCust: 2,
    maxCust: 16,
    avgCookiesPerCust: 4.6,
    genCustPerHour: function( ){
        
    }
}