//! Scope
let x = 12;

function scope() {
    let x = 33;
    // console.log(x);
};

scope();
// console.log(x);

//-----------------------------------
let y = 22;

function newScope() {
    y = 44;
    // console.log(y);
}

newScope();
// console.log(y);

//? Variable Keywords
/*
    - Const: Cannot be reassigned.
    - Var: Scoped to nearest function block.
    - Let: Scoped to the nearest enclosing block.
*/

//* Var
var z = 10;

function varTest() {
    var z = 20;

    if(true) {
        var z = 45;
        // console.log(`Var - Within If: ${z}`);
    }
    // console.log(`Var - Outside If: ${z}`);
}

varTest();
// console.log(`Var - Outside Function: ${z}`);

//* Let
let a = 12;

function letTest() {
    let a = 33;
    
    if (true) {
        let a = 45;
        
        // console.log(`Let - Within IF: ${a}`);
    }
    
    // console.log(`Let - Outside IF: ${a}`);
}

letTest();
// console.log(`Let - Outside Function: ${a}`);

//* CONST
function constTest() {
    const scope = 1;

    if (true) {
        const scope = 2;
        // console.log(scope);
    }
    // console.log(scope);
}

constTest();

//! Hoisting
/*
    - JS reads from top to bottom in two different passes.
        1st pass: 
            - Made by the compiler. This is where hoisting is initiated. 
            - Compiled for execution.
        2nd pass:
                - Variables are assigned.
                - Executes any hoisted code.
*/
