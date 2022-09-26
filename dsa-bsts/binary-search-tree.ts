class Node {
  val: number;
  left: Node | null;
  right: Node | null;

  constructor(val: number, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  insert(val: number): void {
    const newNode = new Node(val);
    let node: Node = this;
    while (node) {
      if (node.val > val) {
        if (!node.left) {
          node.left = newNode;
          return;
        } else {
          node = node.left;
        }
      }
      if (node.val < val) {
        if (!node.right) {
          node.right = newNode;
          return;
        } else {
          node = node.right;
        }
      }
    }
  }

  insertRecursively(val: number): void {
    if (this.val > val) {
      if (!this.left) {
        this.left = new Node(val);
      } else {
        this.left.insertRecursively(val)
      }
    } else if (this.val < val) {
      if (!this.right) {
        this.right = new Node(val);
      } else {
        this.right.insertRecursively(val)
      }
    }
  }

  find(val: number): Node | void {
    let node: Node = this;
    while (node) {
      if (node.val === val) return node;
      if (node.val > val) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
  }

  findRecursively(val: number): Node | void {
    if (this.val === val) return this;
    if (this.val > val && this.left) return this.left.findRecursively(val);
    if (this.val < val && this.right) return this.right.findRecursively(val);
  }

  traversePreOrder(): number[] {
    const left = this.left ? this.left.traversePreOrder() : [];
    const right = this.right ? this.right.traversePreOrder() : [];
    return [this.val, ...left, ...right];
  }

  traverseInOrder(): number[] {
    const left = this.left ? this.left.traverseInOrder() : [];
    const right = this.right ? this.right.traverseInOrder() : [];
    return [...left, this.val, ...right];
  }

  traversePostOrder(): number[] {
    const left = this.left ? this.left.traversePostOrder() : [];
    const right = this.right ? this.right.traversePostOrder() : [];
    return [...left, ...right, this.val];
  }

  traverseBreadthFirst(result = new Array<number>(), queue = new Array<Node>()): number[] {
    // This is probably unbelievably ineffecient.
    result.push(this.val);
    if (this.left) queue.push(this.left);
    if (this.right) queue.push(this.right);
    if (queue.length > 0) queue.shift().traverseBreadthFirst(result, queue);
    return result;
  }

}

class BinarySearchTree {
  root: Node | null;

  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val: number): BinarySearchTree {
    this.root ? this.root.insert(val) : this.root = new Node(val);
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val: number): BinarySearchTree {
    this.root ? this.root.insertRecursively(val) : this.root = new Node(val);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val: number): Node | void {
    return this.root.find(val);
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val: number): Node | void {
    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(): number[] {
    return this.root.traversePreOrder();
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(): number[] {
    return this.root.traverseInOrder();
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(): number[] {
    return this.root.traversePostOrder();
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(): number[] {
    return this.root.traverseBreadthFirst();
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}


export { BinarySearchTree, Node };
