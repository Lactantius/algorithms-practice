/** Node: node for a stack. */

class Node {
  val: any;
  next: Node | null;

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  first: Node | null;
  last: Node | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val: any): void {
    const node = new Node(val);
    node.next = this.first;
    this.first = node;
    if (this.size === 0) this.last = node;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop(): any {
    const node = this.first;
    this.first = node.next;
    this.size--;
    return node.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek(): any {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty(): boolean {
    return this.first ? false : true;
  }
}

export default Stack;
