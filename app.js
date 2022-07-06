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

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 3.7);
new Store('Lima', 2, 16, 4.6);


function displayHours(cookiesPerHour) {
  let resultsTable = document.getElementById('results');
  let tableElement = document.createElement('td');
  resultsTable.appendChild(tableElement);

  for (let i = 0; i < cookiesPerHour.length; i++) {
    let listItemElement = document.createElement('li');
    listItemElement.textContent = hours[i] + ': ' + cookiesPerHour[i] + ' cookies';
    tableElement.appendChild(listItemElement);
  }

  let totalElement = document.createElement('li');
  totalElement.textContent = 'Total: ' + seattle.totalSales + ' cookies';
  tableElement.appendChild(totalElement);
}

displayHours(allStores.cookiesPerHour);

