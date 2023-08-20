//String templates (``)Back-Tics

// ## Interpolation
let name = "Anik";
console.log(`My name is ${name}`);

// ## HTML Templates
let array = ["List1", "List2", "List3", "List4", "List5"];
let html = `<ol>`
for (const x of array) {
    html += `<li>${x}</li>`
}
html += `</ol>`;
document.write(html);