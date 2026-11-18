/* To find max number among 3 numbers */

let a = 2002;
let b = 2001;
let c = 2000;

const result = (a >= b && a > c) ? "a is greatest"
                : (b >= c) ? "b is greatest"
                : "c is greatest";

    //console.log(result);


/* Check when all variable are equal */

const equalResult = (a===b && a===c) ? "All Variables are equal"
                   : (a===b && a>c && b>c) ? "a and b are equal"
                   : (a===c && a>b && c>b) ? "a and c are equal"
                   : (b===c) ? "b and c are equal"
                   : (a>=b && a>=c) ? `Max is a = ${a}`
                   : (b>=c) ? `max is b = ${b}`
                   : `max is c = ${c}`;

// console.log(equalResult);


/*
a===b && b===c  => all variables are equal
a===b and c is large among them = > "c is largest"
a===c and b is large among them => "b is largest"
b===c and a is large aming them => "a is largest"
*/

const res = (a===b && b===c) ? "All the Variables are same"
            : (a===b || (c>a && c>b)) ? "c is largest"
            : (a===c || (b>a && b>c)) ? "b is largest"
            : (b===c || (a>b && a>c)) ? "a is largest"
            : "All are different"

            console.log(res)

/*  Check username and password correct for login */
