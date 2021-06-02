class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return this;
    }
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (this.length === 0) {
      return null;
    }
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.next = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }
    // closer to the end
    if (index > (this.length - 1) / 2) {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    } else {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    }
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const previousNode = this.get(index - 1);
    const nextNode = previousNode.next;
    const newNode = new Node(val);
    previousNode.next = newNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    newNode.prev = previousNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const node2Remove = this.get(index);
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const beforeNode = node2Remove.prev;
      const afterNode = node2Remove.next;
      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
      node2Remove.prev = null;
      node2Remove.next = null;
    }
    this.length--;
    return node2Remove;
  }
}

var list = new DoublyLinkedList();
list.push(99);
list.push(1090);
list.push('last item');
console.log(list);