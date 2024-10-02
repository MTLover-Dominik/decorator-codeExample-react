import { ICoffee } from "./ICoffee";

// Abstract Decorator Class
export class CoffeeDecorator implements ICoffee {
    protected coffee: ICoffee;

    constructor(coffee: ICoffee) {
        this.coffee = coffee;
    }

    getCost(): number {
        return this.coffee.getCost();
    }

    getDescription(): string {
        return this.coffee.getDescription();
    }
}