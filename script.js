//import { createContext } from 'vm';

/** Add any JavaScript you need to this file. */
openSlideMenu();
function openSlideMenu() {
  // var x = document.getElementById('menu');
  var y = document.querySelector('.nav');
  y.style.width = '200px';
  // x.style.width = '200px';
}
closeSlideMenu();
function closeSlideMenu() {
  document.getElementById('menu').style.width = '0';
}

filterSelection('all');
function filterSelection(category) {
  var x;
  var i;
  x = document.getElementsByClassName('filterDiv');
  // console.log(document.getElementsByClassName('filterDiv'));
  if (category === 'all') {
    category = '';
  }

  for (i = 0; i < document.getElementsByClassName('filterDiv').length; i++) {
    console.log(x[i]);

    removeClass(document.getElementsByClassName('filterDiv')[i], 'show');
    console.log('work');
    if (x[i].className.indexOf(category) > 0) addClass(x[i], 'show');
  }
}
//console.log(x[i].className.indexOf(category) > -1);

function addClass(element, name) {
  let i;
  console.log('work');
  let arr1, arr2;
  console.log(element);
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i;
  var arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  console.log('work');
  console.log(element);
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join('');
}
addTextarea();
//for dynamically adding input (not a textarea anymore)
function addTextarea() {
  var thhis = document.getElementById('dynamic');
  if (!thhis.hasChildNodes()) {
    var div = document.getElementById('dynamic');
    var addTA = document.createElement('input');
    addTA.placeholder = 'Order Number';
    div.appendChild(addTA);
  }
}
getMymonth();
function getMymonth() {
  var date = new Date();
  var mon = date.getMonth();
  var word;
  if (mon === 0) {
    word = 'January';
  }
  if (mon === 1) {
    word = 'February';
  }
  if (mon === 2) {
    word = 'March';
  }
  if (mon === 3) {
    word = 'April';
  }
  if (mon === 4) {
    word = 'May';
  }
  if (mon === 5) {
    word = 'June';
  }
  if (mon === 6) {
    word = 'July';
  }
  if (mon === 7) {
    word = 'August';
  }
  if (mon === 8) {
    word = 'September';
  }
  if (mon === 9) {
    word = 'October';
  }
  if (mon === 10) {
    word = 'November';
  }
  if (mon === 11) {
    word = 'December';
  }

  var elem = document.getElementById('date');
  var actualDate = document.createTextNode('Our ' + word + ' Catalog:');
  elem.appendChild(actualDate);
}
