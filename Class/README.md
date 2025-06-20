# Understanding Classes in Node.js

## What is a Class?

Imagine you're playing a video game where you can create your own characters. Each character has a name, health, and power. Instead of writing the same code again and again for each character, you can create a **blueprint**. This blueprint is called a **class**.

A class is like a recipe or a mold. It tells the computer how to make something with specific properties and actions.

## Why Use Classes?

- To organize your code better.
- To reuse the same structure for multiple objects.
- To make your code easier to understand and manage.

## Example

```js
class Character {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }

  attack() {
    console.log(`${this.name} attacks with power ${this.power}`);
  }
}

const hero = new Character("Superman", 100);
hero.attack(); // Superman attacks with power 100
```

## Breaking It Down

- `class Character` — This creates a new class called Character.
- `constructor(name, power)` — This is a special function that runs when you create a new character.
- `this.name` and `this.power` — These are the character's properties.
- `attack()` — This is a method (an action the character can do).

## Summary

Classes help you create objects (like game characters, cars, or users) in a clean and reusable way. Think of them as blueprints for making things in your code.
