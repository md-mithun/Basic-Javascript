//Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode) or declare in function ,it has local scope

// Using a variable, without declaring it, is not allowed
"use strict";
x = 3.14;                // This will cause an error

"use strict";
x = { p1: 10, p2: 20 };      // This will cause an error





// Duplicating a parameter name is not allowed:
"use strict";
function x(p1, p1) { };   // This will cause an error