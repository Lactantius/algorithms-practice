class Node {
  value: string;
  adjacent: Set<Node>;

  constructor(value: string, adjacent = new Set<Node>()) {
    this.value = value;
    this.adjacent = adjacent;
  }

  depthFirstSearch(queried = new Set<Node>()): Set<Node> {
    if (!queried.has(this)) {
      queried.add(this);
      this.adjacent.forEach((v) => v.depthFirstSearch(queried));
    }
    return queried;
  }

  breadthFirstSearch(
    queried = new Set<Node>(),
    queue = new Array<Node>()
  ): Set<Node> {
    if (!queried.has(this)) {
      queried.add(this); // Maybe sometime make an actually functional version of this search functions
      queue = queue.concat(Array.from(this.adjacent));
      queue.forEach((v) => v.breadthFirstSearch(queried, queue));
    }
    return queried;
  }
}

class Graph {
  nodes: Set<Node>;

  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex: Node): void {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray: Node[]): void {
    vertexArray.forEach((v) => this.nodes.add(v));
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1: Node, v2: Node): void {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1: Node, v2: Node): void {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property;
  // it also updates any adjacency lists that include that vertex
  removeVertex(vertex: Node): void {
    vertex.adjacent.forEach((v) => v.adjacent.delete(vertex));
    vertex.adjacent.clear();
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start: Node): string[] {
    return Array.from(start.depthFirstSearch()).map((v) => v.value);
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start: Node): string[] {
    return Array.from(start.breadthFirstSearch()).map((v) => v.value);
  }
}

export { Graph, Node };
