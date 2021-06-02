class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this
  }

  // removes a node from the beginning of the list
  shift() {
    if (!this.head) return undefined;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return this;
  }

  // add a node from the beginning of the list
  unshift(val) {
    const newHead = new Node(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 ||
      index > this.length - 1 ||
      this.length === 0) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (!foundNode) return null;
    foundNode.val = val;
    return foundNode;
  }

  insert(index, val) {
    if (index < 0 ||
      index > this.length - 1) {
      return null;
    }
    if (index === 0) return this.unshift(val);
    if (index === this.length - 1) return this.push(val);

    const newNode = new Node(val);
    const previousNode = this.get(index - 1);
    const temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;

    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const nextNode = this.get(index + 1);
    previousNode.next = nextNode;
    this.length--;
    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    let node = this.head;
    // swap head and tail
    this.head = this.tail;
    this.tail = node;
    let previous = null;
    let next;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }
}

var list = new SingleLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("Jimmy");
list.push("!");
