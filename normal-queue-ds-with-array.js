function NormalQueueDsWithArray(queueMaxLength) {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
    this.queueMaxLength = queueMaxLength;
}

NormalQueueDsWithArray.prototype.enqueue = function (item) {
    if (!this.isQueueFull()) {
        if (this.front < 0) {
            this.front = 0;
        }
        this.rear++;
        this.queue[this.rear] = item;
        return item;
    } else {
        console.log('Queue is full');
    }
};

NormalQueueDsWithArray.prototype.dequeue = function () {
    if (!this.isQueueEmpty()) {
        const item = this.queue[this.front];
        this.queue[this.front] = undefined;
        this.front++;
        if (this.front > this.rear) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    } else {
        console.log('Queue is empty');
    }
};

NormalQueueDsWithArray.prototype.peek = function () {
    if (!this.isQueueEmpty()) {
        return this.queue[this.front];
    } else {
        console.log('Queue empty');
    }
};

NormalQueueDsWithArray.prototype.isQueueEmpty = function () {
    if (this.front === -1 && this.rear === -1) {
        return true;
    } else {
        return false;
    }
};

NormalQueueDsWithArray.prototype.isQueueFull = function () {
    if (this.rear === this.queueMaxLength - 1) {
        return true;
    } else {
        return false;
    }
};

NormalQueueDsWithArray.prototype.printAllItems = function () {
    if (!queue.isQueueEmpty()) {
        let allItemsString = 'queue items : ';
        for (let i = this.front; i <= this.rear; i++) {
            allItemsString += `${this.queue[i]} `;
        }
        console.log(allItemsString);
    } else {
        console.log('Queue empty');
    }
};

const queue = new NormalQueueDsWithArray(3);

queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());

console.log(queue.enqueue(1));
queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());

console.log(queue.dequeue());
queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());

console.log(queue.enqueue(1));
queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());

console.log(queue.enqueue(2));
queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());

console.log(queue.enqueue(3));
queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());

console.log(queue.enqueue(1));
queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());

console.log(queue.dequeue());
queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());

console.log(queue.enqueue(3));
queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());

console.log(queue.dequeue());
queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());

console.log(queue.dequeue());
queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());

console.log(queue.dequeue());
queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());

console.log(queue.dequeue());
queue.printAllItems();
console.log(queue.isQueueEmpty());
console.log(queue.isQueueFull());
console.log(queue.peek());
