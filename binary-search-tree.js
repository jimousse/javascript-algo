class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return this;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  bfs() {
    const data = [];
    const queue = [];
    let node;
    queue.push(this.root);
    while (queue.length > 0) {
      node = queue.shift();
      data.push(node); // visit the node before children
      if (node.left) queue.push(node.left); // then left
      if (node.right) queue.push(node.right); // then right
    }
    return data.map(node => node.value);
  }

  // pre-order
  dfsPreOrder() {
    const data = [];

    function traverse(node) {
      data.push(node); // first visit node
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data.map(node => node.value);
  }

  // post-order
  dfsPostOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }

    traverse(this.root);
    return data.map(node => node.value);
  }

  // in-order
  dfsInOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data.map(node => node.value);
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log('BFS', tree.bfs());
console.log('DFS pre-order', tree.dfsPreOrder());
console.log('DFS post-order', tree.dfsPostOrder());
console.log('DFS in-order', tree.dfsInOrder());