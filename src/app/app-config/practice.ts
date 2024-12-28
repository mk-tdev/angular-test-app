class Animal {
  protected name: string;
  age: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age || 0;
  }

  protected makeSound(): void {
    console.log('Generic animal sound');
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} says: Woof!`); // Accessing protected property
  }

  override makeSound(): void {
    // Overriding protected method
    console.log(`${this.name} says: Woof!`);
  }
}

class Cat extends Animal {
  meow(): void {
    console.log(`${this.name} says: Meow!`); // Accessing protected property
  }

  override makeSound(): void {
    // Overriding protected method
    console.log(`${this.name} says: Meow!`);
  }
}

// Usage
const dog = new Dog('Buddy');
dog.bark(); // Output: Buddy says: Woof!
dog.makeSound(); // Output: Buddy says: Woof!

const cat = new Cat('Mittens');
cat.meow(); // Output: Mittens says: Meow!
cat.makeSound(); // Output: Mittens says: Meow!

// Trying to access protected members directly will result in an error
const animal = new Animal('Generic');
animal.age = 30;
// animal.name; // Error: Property 'name' is protected and only accessible within class 'Animal' and its subclasses
// animal.makeSound(); // Error: Property 'makeSound' is protected and only accessible within class 'Animal' and its subclasses
