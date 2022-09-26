/** TreeNode: node for a general tree. */

class TreeNode {
  val: number;
  children: TreeNode[];

  constructor(val: number, children = new Array<TreeNode>()) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  root: TreeNode | null;

  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(): number {
    const sumNodes: (arg0: TreeNode) => number = (node: TreeNode) =>
      node
        ? node.val +
          node.children.reduce((acc, child) => acc + sumNodes(child), 0)
        : 0;
    return sumNodes(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {}

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound: number) {}
}

export { Tree, TreeNode };
