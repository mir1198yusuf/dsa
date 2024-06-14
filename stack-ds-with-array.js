function StackDsWithArray(stackMaxLength) {
    this.stack = [];

    // js does not have array length decided so enforcing ourselves for demo
    this.stackMaxLength = stackMaxLength;
    this.stackCurrentLength = 0;
}

StackDsWithArray.prototype.isStackEmpty = function () {
    if (this.stackCurrentLength === 0) {
        return true;
    } else {
        return false;
    }
};

StackDsWithArray.prototype.isStackOverflow = function () {
    if (this.stackCurrentLength === this.stackMaxLength) {
        return true;
    } else {
        return false;
    }
};

StackDsWithArray.prototype.push = function (item) {
    if (!this.isStackOverflow()) {
        this.stack[this.stackCurrentLength] = item;
        this.stackCurrentLength++;
        return item;
    } else {
        console.log('Stack overflow');
    }
};

StackDsWithArray.prototype.pop = function () {
    if (!this.isStackEmpty()) {
        const item = this.stack[this.stackCurrentLength - 1];
        this.stack[this.stackCurrentLength - 1] = undefined;
        this.stackCurrentLength--;
        return item;
    } else {
        console.log('Stack is empty');
    }
};

StackDsWithArray.prototype.peek = function () {
    if (!this.isStackEmpty()) {
        const item = this.stack[this.stackCurrentLength - 1];
        return item;
    } else {
        console.log('Stack is empty');
    }
};

StackDsWithArray.prototype.printAllItems = function () {
    console.log(`stack length : ${this.stackCurrentLength}`);
    let allItemsString = `stack items : `;
    for (let i = this.stackCurrentLength - 1; i >= 0; i--) {
        allItemsString += `${this.stack[i]} `;
    }
    console.log(allItemsString);
};

const stack = new StackDsWithArray(3);

stack.printAllItems();
console.log(stack.isStackEmpty());
console.log(stack.isStackOverflow());
console.log(stack.peek());

console.log(stack.push(1));
stack.printAllItems();
console.log(stack.isStackEmpty());
console.log(stack.isStackOverflow());
console.log(stack.peek());

console.log(stack.push(2));
stack.printAllItems();
console.log(stack.isStackEmpty());
console.log(stack.isStackOverflow());
console.log(stack.peek());

console.log(stack.push(3));
stack.printAllItems();
console.log(stack.isStackEmpty());
console.log(stack.isStackOverflow());
console.log(stack.peek());

console.log(stack.push(4));
stack.printAllItems();
console.log(stack.isStackEmpty());
console.log(stack.isStackOverflow());
console.log(stack.peek());

console.log(stack.pop());
stack.printAllItems();
console.log(stack.isStackEmpty());
console.log(stack.isStackOverflow());
console.log(stack.peek());

console.log(stack.push(3));
stack.printAllItems();
console.log(stack.isStackEmpty());
console.log(stack.isStackOverflow());
console.log(stack.peek());

console.log(stack.pop());
stack.printAllItems();
console.log(stack.isStackEmpty());
console.log(stack.isStackOverflow());
console.log(stack.peek());

console.log(stack.pop());
stack.printAllItems();
console.log(stack.isStackEmpty());
console.log(stack.isStackOverflow());
console.log(stack.peek());

console.log(stack.pop());
stack.printAllItems();
console.log(stack.isStackEmpty());
console.log(stack.isStackOverflow());
console.log(stack.peek());

console.log(stack.pop());
stack.printAllItems();
console.log(stack.isStackEmpty());
console.log(stack.isStackOverflow());
console.log(stack.peek());
