/** Node: node for a singly linked list. */

class Node {
  val: any;
  next: Node | null;

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val): void {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val): void {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop(): any {
    const node = this.tail;
    let prev = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      prev = prev.next;
    }
    this.tail = prev;
    prev.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return node.val;
  }

  /** shift(): return & remove first item. */

  shift(): any {
    const node = this.head;
    this.head = node.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return node.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx: number): any {
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      node = node.next;
    }
    return node.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

export default LinkedList;
