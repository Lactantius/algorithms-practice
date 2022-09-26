/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  val: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(val: number, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  countDepthFirst(f: Function) {
    const countSelf = f(this.val) ? 1 : 0;
    return (
      countSelf +
      (this.left ? this.left.countDepthFirst(f) : 0) +
      (this.right ? this.right.countDepthFirst(f) : 0)
    );
  }

  shortestPath(): number {
    const left = this.left ? this.left.shortestPath() : 0;
    const right = this.right ? this.right.shortestPath() : 0;
    return 1 + (left <= right ? left : right);
  }

  longestPath(): number {
    const left = this.left ? this.left.longestPath() : 0;
    const right = this.right ? this.right.longestPath() : 0;
    return 1 + (left >= right ? left : right);
  }

  // https://sbcommunity-sec.slack.com/archives/CRLSRTLBD/p1621635221036500?thread_ts=1621600294.018700&cid=CRLSRTLBD
  maxPath(): { greaterPath: number; bothPaths: number } {
    const left = this.left ? this.left.maxPath().greaterPath : 0;
    const right = this.right ? this.right.maxPath().greaterPath : 0;
    return {
      greaterPath: Math.max(left + this.val, right + this.val),
      bothPaths: left + right + this.val,
    };
  }

  findSmallest(filter: Function): number {
    const self = filter(this.val) ? this.val : Infinity; // Math.min will coerce other false values to 0
    const left = this.left ? this.left.findSmallest(filter) : Infinity;
    const right = this.right ? this.right.findSmallest(filter) : Infinity;
    return Math.min(self, left, right);
  }
}

class BinaryTree {
  root: BinaryTreeNode;

  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(): number {
    return this.root ? this.root.shortestPath() : 0;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(): number {
    return this.root ? this.root.longestPath() : 0;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(): number {
    return this.root ? this.root.maxPath().bothPaths : 0;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound: number | null) {
    if (this.root) {
      const smallest = this.root.findSmallest((node) => node > lowerBound);
      return isFinite(smallest) ? smallest : null;
    }
    return null;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

export { BinaryTree, BinaryTreeNode };
