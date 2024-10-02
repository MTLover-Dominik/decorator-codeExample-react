import { CoffeeDecorator } from "./CoffeeDecorator";

// Sugar Decorator
export class SugarDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.coffee.getCost() + 0.3;
    }

    getDescription(): string {
        return this.coffee.getDescription() + ", mit Zucker";
    }
}