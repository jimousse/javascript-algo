// undirected
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex(v) {
    while (this.adjacencyList[v].length > 0) {
      const adjVertex = this.adjacencyList[v].pop();
      this.removeEdge(v, adjVertex);
    }
    delete this.adjacencyList[v];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};

    const traverse = v => {
      if (visited[v]) return;
      visited[v] = true;
      result.push(v);
      this.adjacencyList[v].forEach(neighbor => traverse(neighbor));
    }

    traverse(start);
    return result;
  }

  depthFirstIterative(start) {
    const result = [];
    const stack = [start];
    const visited = {};
    while (stack.length > 0) {
      const current = stack.pop();
      if (!visited[current]) {
        visited[current] = true;
        result.push(current);
        this.adjacencyList[current].forEach(neighbor => {
          stack.push(neighbor);
        });
      }
    }
    return result;
  }

  breadthFirst(start) {
    const result = [];
    const queue = [start];
    const visited = {};
    while (queue.length > 0) {
      const current = queue.shift();
      if (!visited[current]) {
        visited[current] = true;
        result.push(current);
        this.adjacencyList[current].forEach(neighbor => {
          queue.push(neighbor);
        });
      }
    }
    return result;
  }
}

// const g = new Graph();
// g.addVertex('Tokyo');
// g.addVertex('Amsterdam');
// g.addVertex('San Francisco');
// g.addVertex('Paris');
// g.addEdge('San Francisco', 'Tokyo');
// g.addEdge('San Francisco', 'Paris');
// g.addEdge('Amsterdam', 'Tokyo');
// g.addEdge('Amsterdam', 'Paris');
// g.removeEdge('Amsterdam', 'Tokyo');
// g.removeVertex('Amsterdam');

const g2 = new Graph();

g2.addVertex('A');
g2.addVertex('B');
g2.addVertex('C');
g2.addVertex('D');
g2.addVertex('E');
g2.addVertex('F');

g2.addEdge('A', 'B');
g2.addEdge('A', 'C');
g2.addEdge('B', 'D');
g2.addEdge('C', 'E');
g2.addEdge('D', 'E');
g2.addEdge('D', 'F');
g2.addEdge('E', 'F');

console.log(g2);
console.log(g2.depthFirstRecursive('A'));
console.log(g2.depthFirstIterative('A'));
console.log(g2.breadthFirst('A'));