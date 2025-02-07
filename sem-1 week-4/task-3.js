// Using var
var x = 10;
console.log("Initial var x:", x);
x = 20; // Reassigning is allowed
console.log("Reassigned var x:", x);

// Using let
let y = 15;
console.log("Initial let y:", y);
y = 25; // Reassigning is allowed
console.log("Reassigned let y:", y);

// Using const
const z = 30;
console.log("Initial const z:", z);
try {
    z = 40; // This will cause an error
} catch (error) {
    console.log("Error when reassigning const z:", error.message);
}