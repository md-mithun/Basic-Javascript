// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.JavaScript will actually create an Error object with two properties: name and message.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.

// ## Example 1
try {
    alertt("Hello there");
} catch (err) {
    console.log(err.name);// ReferenceError
    console.log(err.message);// alertt is not defined
} finally {
    alert("Hello !")
};



// ## Example 2
let birth = 17;
try {
    if (birth < 18) throw "You are not adult";
} catch (error) {
    console.log(error);
}
