export default class Item {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.amount = 0;
    }

    incrementAmount() {
        this.amount = amount + 1;
    }

    decrementAmount() {
        this.amount = amount - 1;
    }

    clear() {
        this.amount = 0;
    }
}