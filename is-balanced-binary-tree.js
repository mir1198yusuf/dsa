function Node(value) {
    this.left = null;
    this.right = null;
    this.value = value;
}

function isBalancedBinaryTree(node, level) {
    level++;

    // leaf node
    if (!node.left && !node.right) {
        return { height: level, isBalancedTree: true };
    }

    let leftSubtreeHeight,
        rightSubtreeHeight,
        isLeftBalancedTree,
        isRightBalancedTree;
    if (node.left) {
        const t = isBalancedBinaryTree(node.left, -1);
        leftSubtreeHeight = t.height;
        isLeftBalancedTree = t.isBalancedTree;
    } else {
        leftSubtreeHeight = 0;
        isLeftBalancedTree = true;
    }

    if (node.right) {
        const t = isBalancedBinaryTree(node.right, -1);
        rightSubtreeHeight = t.height;
        isRightBalancedTree = t.isBalancedTree;
    } else {
        rightSubtreeHeight = 0;
        isRightBalancedTree = true;
    }

    level =
        level +
        1 + // 1 because if subtree's height will not count itself (edge from parent to subtree root), level + 0  will get no increase in parent node's height but we have to count that node also
        (leftSubtreeHeight >= rightSubtreeHeight
            ? leftSubtreeHeight
            : rightSubtreeHeight);

    const isBalanced =
        (isLeftBalancedTree, isRightBalancedTree) && // this because if any subtree not balanced, parent node tree is by default not balanced
        (leftSubtreeHeight - rightSubtreeHeight === 0 ||
            leftSubtreeHeight - rightSubtreeHeight === 1 ||
            leftSubtreeHeight - rightSubtreeHeight === -1);
    return { height: level, isBalancedTree: isBalanced };
}

const root1 = new Node(0);

const root2 = new Node(0);
root2.left = new Node(1);

const root3 = new Node(0);
root3.left = new Node(1);
root3.right = new Node(2);

const root4 = new Node(0);
root4.left = new Node(1);
root4.right = new Node(2);
root4.left.left = new Node(3);

const root5 = new Node(0);
root5.left = new Node(1);
root5.right = new Node(2);
root5.left.left = new Node(3);
root5.left.right = new Node(4);
root5.right.left = new Node(5);
root5.right.right = new Node(6);

const root6 = new Node(0);
root6.left = new Node(1);
root6.left.left = new Node(2);
root6.left.left.left = new Node(3);

const root7 = new Node(0);
root7.left = new Node(1);
root7.right = new Node(2);
root7.left.left = new Node(3);
root7.left.left.left = new Node(4);

const root8 = new Node(0);
root8.left = new Node(1);
root8.right = new Node(2);
root8.right.right = new Node(3);

const root9 = new Node(0);
root9.right = new Node(1);
root9.right.right = new Node(2);
root9.right.right.right = new Node(3);

const root10 = new Node(0);
root10.left = new Node(1);
root10.left.left = new Node(2);
root10.left.right = new Node(3);

console.log(isBalancedBinaryTree(root1, -1));
console.log(isBalancedBinaryTree(root2, -1));
console.log(isBalancedBinaryTree(root3, -1));
console.log(isBalancedBinaryTree(root4, -1));
console.log(isBalancedBinaryTree(root5, -1));
console.log(isBalancedBinaryTree(root6, -1));
console.log(isBalancedBinaryTree(root7, -1));
console.log(isBalancedBinaryTree(root8, -1));
console.log(isBalancedBinaryTree(root9, -1));
console.log(isBalancedBinaryTree(root10, -1));
