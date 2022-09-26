/** TreeNode: node for a general tree. */

class TreeNode {
  val: number;
  children: TreeNode[];

  constructor(val: number, children = new Array<TreeNode>()) {
    this.val = val;
    this.children = children;
  }

  sumWithChildren(): number {
    return (
      this.val +
      this.children.reduce((sum, child) => sum + child.sumWithChildren(), 0)
    );
  }

  countChildren(filter: Function): number {
    const countSelf = filter(this);
    return (
      countSelf +
      this.children.reduce(
        (count, child) => count + child.countChildren(filter),
        0
      )
    );
  }
}

class Tree {
  root: TreeNode | null;

  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(): number {
    return this.root ? this.root.sumWithChildren() : 0;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(): number {
    return this.root
      ? this.root.countChildren((node) => node.val % 2 === 0)
      : 0;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound: number) {}
}

export { Tree, TreeNode };
