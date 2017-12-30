import Place from "./place.js";

export default class Item extends Place {
    constructor(place, name, weight, price) {
        super(place);
        this.name = name;
        this.weight = weight;
        this.price = price;
    }

    getSum(count) {
        return `${this.price * this.weight} in ${this.place}` ;
    }
}