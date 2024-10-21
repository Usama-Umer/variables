// 1. JavaScript Variables

// Variables in JavaScript are used to store data values. You can define variables using three keywords: var, let, and const. Each has different behaviors in terms of scope and mutability.
// Variable Declarations

//     var:
//         Used in older versions of JavaScript.
//         Function-scoped or globally-scoped (depending on where it's declared).
//         Can be redeclared and updated.
//         Example:

//         javascript

//     var name = "John";
//     name = "Doe"; // Allowed
//     var name = "Smith"; // Allowed

// let:

//     Introduced in ES6 (2015).
//     Block-scoped (limited to the block, statement, or expression where it's used).
//     Can be updated but cannot be redeclared in the same scope.
//     Example:

//     javascript

//     let age = 25;
//     age = 26; // Allowed
//     let age = 30; // Error: Identifier 'age' has already been declared

// const:

//     Introduced in ES6 (2015).
//     Block-scoped.
//     Cannot be updated or redeclared.
//     Must be initialized at the time of declaration.
//     Example:

//     javascript

// const pi = 3.1415;
// pi = 3.14; // Error: Assignment to constant variable