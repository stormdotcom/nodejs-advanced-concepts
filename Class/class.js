const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
    constructor() {
        this.name = "Example";
    }
}