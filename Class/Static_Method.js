// This means that static methods can be called without creating an object of the class.

class Car{
    static display(){
        console.log('Hello! Iam static method statement');
    }
}
Car.display();