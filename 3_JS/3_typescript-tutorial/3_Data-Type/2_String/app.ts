/** Temple string */
let employeeName: string = "John Smith";
let employeeDept: string = "Finance";

// Pre-ES6
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department.";
// Post-ES6
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`;

console.log(employeeDesc1); //John Smith works in the Finance department.
console.log(employeeDesc2); //John Smith works in the Finance department.

// charAt()
console.log("Sơn Nguyễn".charAt(0)); // S

// concat()
console.log("Sơn".concat(" Nguyễn"));

// indexOf()
console.log("Sơn Nguyễn".indexOf("Ng"));
