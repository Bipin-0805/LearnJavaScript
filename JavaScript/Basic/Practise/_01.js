/*=====================================Task 1================================================================*/
/* print " Order : [Order_item] for [customer_Name] "; */

function logOrder(customer, item) {

    console.log("Order : " + item.trim() + " for " + customer.trim())
}

logOrder("Bipin", "Masala Chai");


/*======================================Task 2================================================================*/

/* Task 2 - warnLowStock : warn when an item runs low */

function warnLowStock(item, left) {

    if (left < 10) {
       console.warn("Low Stock : " , item , " (" + left , "left)");
       return true;
    } 
    return false;   
}

warnLowStock("ginger", 1);

/*========================================Task 3==============================================================*/

/* Show Menu, simple 2 column , Write showmenu(menu) */

function showMenu(menu){

    menu = [{item: "Masala Chai", price : 10 , stock : 120},{item : "Ginger" , price : 5 , stock : 100}];

    console.table(menu,['item','price']);
    return;
}

showMenu();

/*=========================================Task 4=============================================================*/

/* order ringBell : count every ring of the bell */

function ringBell(){
    console.count('order bell');
    return;
}

ringBell();
ringBell();
ringBell();

/*============================================Task 5===========================================================*/

/* timerush */

function timeRush(){

    console.time("rush hour");
    console.log("Time Rush");
    console.timeEnd("rush hour");
    
}

timeRush(); 
