import { ICoffee } from "./ICoffee";

// Concrete Coffee Class
export class SimpleCoffee implements ICoffee {
    getCost(): number {
        return 2.5;
    }

    getDescription(): string {
        return "Einfacher Kaffee";
    }
}