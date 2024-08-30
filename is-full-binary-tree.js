function Node(item) {
    this.left = null;
    this.right = null;

    this.item = item;
}

const root1 = new Node(0);
root1.left = new Node(1);
root1.right = new Node(2);
root1.left.left = new Node(3);
root1.left.right = new Node(4);
root1.right.left = new Node(5);
root1.right.right = new Node(6);

const root2 = new Node(0);
root2.left = new Node(1);
root2.right = new Node(2);
root2.left.left = new Node(3);
root2.left.right = new Node(4);
root2.right.left = new Node(5);
root2.right.right = new Node(6);
root2.right.right.left = new Node(7);
root2.right.right.right = new Node(8);

const root3 = new Node(0);
root3.left = new Node(1);
root3.right = new Node(2);
root3.left.left = new Node(3);
root3.left.right = new Node(4);
root3.right.left = new Node(5);
root3.right.right = new Node(6);
root3.right.right.left = new Node(7);
root3.right.right.right = new Node(8);
root3.left.left.right = new Node(9);

const root4 = new Node(0);

const root5 = null; // this is wrong test case because tree can never be null

function isFullBinaryTree(root) {
    if (!root) {
        return true;
    }
    if ((root.left && !root.right) || (!root.left && root.right)) {
        return false;
    }
    if (!isFullBinaryTree(root.left)) {
        return false;
    }
    if (!isFullBinaryTree(root.right)) {
        return false;
    }
    return true;
}

console.log(isFullBinaryTree(root1));
console.log(isFullBinaryTree(root2));
console.log(isFullBinaryTree(root3));
console.log(isFullBinaryTree(root4));
console.log(isFullBinaryTree(root5));
