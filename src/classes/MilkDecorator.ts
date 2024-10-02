import { CoffeeDecorator } from "./CoffeeDecorator";

// Milk Decorator
export class MilkDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.coffee.getCost() + 0.7;
    }

    getDescription(): string {
        return this.coffee.getDescription() + ", mit Milch";
    }
}