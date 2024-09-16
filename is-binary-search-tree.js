function Node(value) {
    this.left = null;
    this.right = null;
    this.value = value;
}

function isBinarySearchTree(node, minAllowedValue, maxAllowedValue) {
    // leaf node
    if (!node.left && !node.right) {
        return true;
    }

    // main conditions of bst
    if (node.left && node.left.value > node.value) {
        return false;
    }
    if (node.right && node.right.value < node.value) {
        return false;
    }

    // imp case to ensure bst at all levels, even grand right child should be less than grandparent if parent is left subtree
    if (
        typeof maxAllowedValue === 'number' &&
        node.right &&
        node.right.value > maxAllowedValue
    ) {
        return false;
    }
    if (
        typeof minAllowedValue === 'number' &&
        node.left &&
        node.left.value < minAllowedValue
    ) {
        return false;
    }

    if (node.left && !isBinarySearchTree(node.left, null, node.value)) {
        return false;
    }

    if (node.right && !isBinarySearchTree(node.right, node.value, null)) {
        return false;
    }
    return true;
}

const root1 = new Node(0);
root1.left = new Node(1);
root1.right = new Node(2);

const root2 = new Node(1);
root2.left = new Node(0);
root2.right = new Node(2);

const root3 = new Node(5);

const root4 = new Node(10);
root4.left = new Node(5);
root4.right = new Node(15);
root4.left.left = new Node(2);
root4.right.right = new Node(20);

const root5 = new Node(10);
root5.left = new Node(5);
root5.right = new Node(15);
root5.left.right = new Node(12);

const root6 = new Node(10);
root6.left = new Node(5);
root6.right = new Node(20);
root6.right.left = new Node(5);

const root7 = new Node(8);
root7.left = new Node(4);
root7.right = new Node(12);
root7.left.left = new Node(2);
root7.left.right = new Node(6);
root7.right.left = new Node(10);
root7.right.right = new Node(14);

const root8 = new Node(10);
root8.left = new Node(15);
root8.right = new Node(20);

const root9 = new Node(30);
root9.left = new Node(20);
root9.right = new Node(40);
root9.left.left = new Node(10);
root9.left.left.right = new Node(35);

const root10 = new Node(25);
root10.left = new Node(20);
root10.right = new Node(30);
root10.left.left = new Node(15);
root10.left.right = new Node(27);

const root11 = new Node(50);
root11.left = new Node(30);
root11.right = new Node(70);
root11.right.left = new Node(60);
root11.right.left.right = new Node(40);

console.log(isBinarySearchTree(root1));
console.log(isBinarySearchTree(root2));
console.log(isBinarySearchTree(root3));
console.log(isBinarySearchTree(root4));
console.log(isBinarySearchTree(root5));
console.log(isBinarySearchTree(root6));
console.log(isBinarySearchTree(root7));
console.log(isBinarySearchTree(root8));
console.log(isBinarySearchTree(root9));
console.log(isBinarySearchTree(root10));
console.log(isBinarySearchTree(root11));
