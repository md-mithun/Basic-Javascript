// ## JavaScript Getter (The get Keyword)
const person = {
    fname: 'Muhammad',
    lname: 'Mithun',
    get fullName() {
        return this.fname + ' ' + this.lname;
    }
}
console.log(person.fullName);



// ## JavaScript Setter (The set Keyword)
const person1 = {
    fname: 'Muhammad',
    lname: 'Mithun',
    language: "",
    set lang(lang) {
        this.language = lang;
    }
}
// Set an object property using a setter:
person1.lang = "Bangla";
console.log(person1.language); //Bangla