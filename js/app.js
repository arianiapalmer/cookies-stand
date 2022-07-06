'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];

function Store(name, minCust, maxCust, avgCookiePerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.cookiesSoldPerHr = [];
  this.totalSales = 0;
  allStores.push(this);
  this.cookiesPerHour();
  this.displaySales();
};

Store.prototype.randomCustomerHR = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

Store.prototype.cookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let custAtEachHour = this.randomCustomerHR();
    let cookiesSold = Math.ceil(custAtEachHour * this.avgCookiePerCust);
    this.cookiesSoldPerHr.push(cookiesSold);
    this.totalSales +=cookiesSold;
  }
};


Store.prototype.displaySales = function () {

  let resultsTable = document.getElementById('results');
  let tableRow = document.createElement('tr');
  resultsTable.appendChild(tableRow);
  let hoursHead = document.createElement('th');
  hoursHead.textContent = "Hours"
  // tableHead.textContent = hours[]; create for loop

  for(let i = 0; i < hours.length; i++){

    let hourData = document.createElement('td');
    hourData.textContent = hours[i];
    hoursHead.appendChild(hourData);
    tableRow.appendChild(hoursHead);
  }
  for (let i = 0; i < allStores.length; i++){
    let storeRow = document.createElement('tr');
    storeRow.textContent = `${allStores[0].name}`
    tableRow.appendChild(storeRow);
  }
  // for (let i = 0; i < hours.length; i++){
   
  //   let storeData = document.createElement('td');
  //   storeData.textContent = ` : ${this.cookiesSoldPerHR}`
  // }

  // let totalRow = document.createElement('tr');
  // totalRow.textContent = `Total: ${this.totalSales} cookies`;
  // tableRow.appendChild(totalRow);
};


new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 3.7);
new Store('Lima', 2, 16, 4.6);

console.log(allStores)


