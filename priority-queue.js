class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class MinPriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    // where newly inserted item is
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      // element at the right place
      // parent > elment -> max heap
      // parent < element -> min heap
      if (parent.priority <= element.priority) break;
      // swap
      this.values[parentIndex] = element;
      this.values[index] = parent;
      // update index
      index = parentIndex;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let index = 0; // start at the beginning
    const element = this.values[0];
    const length = this.values.length;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swap = null;
      let leftChild;
      let rightChild;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        // leftElement < element < rightElement
        // OR element < leftElement < rightElement
        if ((!swap && rightChild.priority < element.priority) ||
          (swap && rightChild.priority < leftChild.priority)) {
          swap = rightChildIndex;
        }
      }
      if (!swap) break;
      // actually swap
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

const priorityQueue = new MinPriorityQueue();
priorityQueue.enqueue('common cold', 5);
priorityQueue.enqueue('gunshot wound', 1);
priorityQueue.enqueue('broken arm', 2);
priorityQueue.enqueue('high fever', 4);
priorityQueue.enqueue('glass in foot', 3);
priorityQueue.enqueue('broken arm 2', 2);
priorityQueue.enqueue('high fever 2', 4);
console.log(priorityQueue);
console.log('dequeue', priorityQueue.dequeue());
console.log('dequeue', priorityQueue.dequeue());
console.log('dequeue', priorityQueue.dequeue());
console.log('dequeue', priorityQueue.dequeue());
console.log('dequeue', priorityQueue.dequeue());
console.log('dequeue', priorityQueue.dequeue());
console.log('dequeue', priorityQueue.dequeue());
