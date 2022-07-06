'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];


// function generateNumberBetween(min, max) {
//   return Math.round(Math.random() * (max - min)) + min;
// }

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

// function custAtEachHour () {
//   for (let i = 0; i < hours.length; i++) {
//     let number = generateNumberBetween(this.minCust, this.maxCust);
//     this.hourlyCustomers.push(number);
//     return custAtEachHour;
//   }
// };

Store.prototype.cookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let custAtEachHour = this.randomCustomerHR();
    let cookiesSold = Math.ceil(custAtEachHour * this.avgCookiePerCust);
    this.cookiesSoldPerHr.push(cookiesSold);
    // return cookiesPerHour;
    // this.totalSales +=cookiesSold;
  }
};

new Store('Seattle', 23, 65, 6.3);

console.log(allStores[0].cookiesSoldPerHr)

// new Store('Tokyo', 3, 24, 1.2);
// new Store('Dubai', 11, 38, 3.7);
// new Store('Paris', 20, 38, 3.7);
// new Store('Lima', 2, 16, 4.6);

// console.log(seattle);

// function displayHours(sales) {
//   let resultsTable = document.getElementById('results');
//   let tableElement = document.createElement('td');
//   resultsTable.appendChild(tableElement);

//   for (let i = 0; i < sales.length; i++) {
//     let listItemElement = document.createElement('li');
//     listItemElement.textContent = hours[i] + ': ' + sales[i] + ' cookies';
//     tableElement.appendChild(listItemElement);
//   }

//   let totalElement = document.createElement('li');
//   totalElement.textContent = 'Total: ' + seattle.totalSales + ' cookies';
//   tableElement.appendChild(totalElement);
// }


// console.log(allStores[0].custAtEachHour[0]);