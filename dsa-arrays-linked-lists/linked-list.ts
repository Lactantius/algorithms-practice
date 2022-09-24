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

  setAt(idx: number, val: any): void {
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      node = node.next;
    }
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx: number, val: any): void {
    if (this.length === 0 || this.length === idx) {
      this.push(val);
      return;
    }
    const node = new Node(val);
    let prev = this.head;
    for (let i = 0; i < idx - 1; i++) {
      prev = prev.next;
    }
    console.log(prev);
    node.next = prev.next;
    prev.next = node;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx: number): any {
    if (this.length === 1 || this.length === idx) {
      this.pop();
      return;
    }
    let prev = this.head;
    for (let i = 0; i < idx - 1; i++) {
      prev = prev.next;
    }
    const node = prev.next;
    prev.next = prev.next.next;
    this.length--;
    return node.val;
  }
  /** average(): return an average of all values in the list */

  average(): number {
    if (this.length === 0) return 0;
    const vals: number[] = [];
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      if (typeof node.val === "number") {
        vals.push(node.val)
      }
      node = node.next;
    }
    return vals.reduce((acc, n) => acc + n, 0) / this.length;
  }

}




export default LinkedList;
