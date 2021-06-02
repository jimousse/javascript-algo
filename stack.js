class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;
    const temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

let stack = new Stack();
stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');
stack.pop();
stack.pop();
stack.pop();
stack.pop();

