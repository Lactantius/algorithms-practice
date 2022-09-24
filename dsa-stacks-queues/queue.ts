/** Node: node for a queue. */

class Node {
  val: any;
  next: Node | null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first: Node | null;
  last: Node | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val: any) {
    const node = new Node(val);
    if (this.size === 0) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {}

  /** peek(): return the value of the first node in the queue. */

  peek() {}

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {}
}

export default Queue;
