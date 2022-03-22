class Node {
  constructor(value) {
    this.node = value;
    this.next = null;
  }
}

class Stack {
  constructor(numOfElements = 2) {
    this.head = null;
    this.length = 0;
    this.numOfElements = numOfElements;
    this.checking();
  }

  checking() {
    const isValidNumber = (typeof this.numOfElements === 'number' || isFinite(this.numOfElements));

    if (!isValidNumber) {
      throw new Error('Невалидное число');
    }
  }

  push(elem) {
    if (this.length === this.numOfElements) {
      throw new Error('Стек переполнен');
    }

    let node = new Node(elem);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Стек пуст');
    }

    let current = this.head.node;
    this.head = this.head.next;
    this.length--;

    return current;
  }

  peek() {
    if (this.length === 0) {
      return null;
    }

    let current = this.head.node;

    return current;
  }

  isEmpty() {
    return !this.length;
  }

  toArray() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current);
      current = current.next;
    }

    return arr;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Не итерируемая сущность');
    }

    let newStack = new Stack(iterable.length);
    let item;

    for (item of iterable) {
      newStack.push(item);
    }

    return newStack;
  }
}

module.exports = { Stack };