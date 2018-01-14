/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_js__ = __webpack_require__(1);


var itemArray = [];

function itemMaker() {
    var tomato = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("citymarket", "Tomato", 0.5, 30);
    itemArray.push(tomato);
    var potato = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("citymarket", "Potato", 1, 20);
    itemArray.push(potato);
    var cucumber = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("citymarket", "Cucumber", 0.8, 44);
    itemArray.push(cucumber);
    var cabbage = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("citymarket", "Cabbage", 1.3, 15);
    itemArray.push(cabbage);
    var orange = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("citymarket", "Orange", 1.5, 32);
    itemArray.push(orange);
    var meat = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("meat department", "Meat", 2, 32);
    itemArray.push(meat);
    var sausages = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("meat department", "Sausages", 1.3, 32);
    itemArray.push(sausages);
    var smoked_ribs = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("meat department", "Smoked ribs", 0.540, 32);
    itemArray.push(smoked_ribs);
    var fish = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("fish department", "Fish", 0.8, 32);
    itemArray.push(fish);
    var caviar = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("fish department", "Caviar", 0.2, 32);
    itemArray.push(caviar);
    var milk = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("milk department", "Milk", 1, 32);
    itemArray.push(milk);
    var cheese = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("milk department", "Cheese", 0.5, 32);
    itemArray.push(cheese);
    var sour_cream = new __WEBPACK_IMPORTED_MODULE_0__item_js__["a" /* default */]("milk department", "Sour cream", 0.5, 32);
    itemArray.push(sour_cream);
    var select = document.getElementById("myselect");
    var i;
    for(i = 0; i < itemArray.length; i++) { 
        var option = document.createElement("option");
        option.setAttribute("value", itemArray[i].name);
        var node = document.createTextNode(itemArray[i].name);
        option.appendChild(node);
        select.appendChild(option);     
    }
    select.addEventListener("change", gettingPortion);
}
itemMaker();

var selectedItem;
function gettingPortion() {
    var select = document.getElementById("myselect");
    selectedItem = select.selectedIndex;
    var button1 = document.getElementsByClassName("notVisible");
    if (button1.length > 0) {
        button1[0].classList.remove("notVisible");

        var sumButton = document.createElement("button");
        sumButton.setAttribute("type", "button");
        sumButton.setAttribute("data-toggle", "modal");
        sumButton.setAttribute("data-target", "#myBIllModal");
        sumButton.setAttribute("class", "btn btn-outline-success");
        var sumButtonNode = document.createTextNode("calculate the amount");
        sumButton.appendChild(sumButtonNode);
        var myButtonParent = document.getElementById("buttonParent");
        myButtonParent.appendChild(sumButton);
        sumButton.addEventListener("click", gettingSum);
    }
    var portion = document.getElementById("portion");
    portion.addEventListener("change", selectItem);
}

var portionValue;
var sumArray = [];
function selectItem() {
    var portion = document.getElementById("portion");
    portionValue = +(portion.options[portion.selectedIndex].value);
    var ul_parent = document.getElementsByClassName("ul_parent");
    var ul = document.createElement("ul");
    ul.setAttribute("class", "list-group");
    ul_parent[0].appendChild(ul);

    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    if (isNaN(portionValue)) {
        alert("choose how many portion you'd like to buy");
        return;
    } else if (selectedItem == 0) {
        alert("You forget to choose the item");
        return;
    } else {
        var liNode = document.createTextNode(`You're going to buy ${portionValue} portion of ${itemArray[selectedItem - 1].name} 
        in ${itemArray[selectedItem - 1].place} with the price of ${itemArray[selectedItem - 1].price}hrn
        for ${itemArray[selectedItem - 1].weight} kg`);

        var a = {
            name: itemArray[selectedItem - 1].name,
            portion: portionValue,
            price: itemArray[selectedItem - 1].price
        }
        sumArray.push(a);

        li.appendChild(liNode);
        ul.appendChild(li);
    }
}

function gettingSum() {
    document.getElementsByClassName("modal-body")[0].innerHTML = "";
    var sum = 0;
    var parentBill = document.getElementsByClassName("modal-body");
    for (var i = 0; i < sumArray.length; i++) {
        var sumPortion = sumArray[i].portion;
        var sumPrice = sumArray[i].price;
        sum += (sumPortion * sumPrice); 
        var myBill = document.createElement("p");
        var billNode = document.createTextNode(sumArray[i].name + " " + sumArray[i].portion +" * " + sumArray[i].price + " = " + 
        (sumArray[i].portion * sumArray[i].price) + " hrn");
        myBill.appendChild(billNode); 
        parentBill[0].appendChild(myBill);
    }
    var amount = document.createElement("p");
    var amountNode = document.createTextNode("Total cost " + sum + " hrn");
    amount.appendChild(amountNode);
    parentBill[0].appendChild(amount);  
}


var rem = document.getElementById("myRemove");
rem.addEventListener("click", remove);

function remove() {
    var a = document.querySelectorAll("li");
    for(var i = 0; i < a.length; i++) {
        a[i].remove();
    }
    sumArray = [];
}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__place_js__ = __webpack_require__(2);


class Item extends __WEBPACK_IMPORTED_MODULE_0__place_js__["a" /* default */] {
    constructor(place, name, weight, price) {
        super(place);
        this.name = name;
        this.weight = weight;
        this.price = price;
    }

    getSum(count) {
        return `${this.price * this.weight} in ${this.place}` ;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Item;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Place {
    constructor(place) {
        this.place = place;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Place;


/***/ })
/******/ ]);