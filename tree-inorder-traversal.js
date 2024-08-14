function Node(item) {
    this.item = item;
    this.left = null;
    this.right = null;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

function inorderTraversal(node) {
    if (!node) return;
    inorderTraversal(node.left);
    console.log(node.item);
    inorderTraversal(node.right);
}

inorderTraversal(root);
