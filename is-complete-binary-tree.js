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

const root5 = new Node(0);
root5.left = new Node(1);

const root6 = new Node(0);
root6.left = new Node(1);
root6.right = new Node(2);
root6.left.left = new Node(3);
root6.left.right = new Node(4);
root6.right.left = new Node(5);

const root7 = new Node(0);
root7.left = new Node(1);
root7.right = new Node(2);
root7.left.left = new Node(3);
root7.left.right = new Node(4);
root7.right.right = new Node(6);

function isCompleteBinaryTreeParent(node) {
    let height = undefined;

    function isCompleteBinaryTree(node, level) {
        level++;
        // leaf node
        if (!node.left && !node.right) {
            // 1st lead node
            if (typeof height !== 'number') {
                height = level;
            } else {
                if (level !== height) {
                    return false;
                }
            }
            return true;
        } else {
            if (!node.left && node.right) {
                return false;
            }
            if (!isCompleteBinaryTree(node.left, level)) {
                return false;
            }
            if (node.right && !isCompleteBinaryTree(node.right, level)) {
                return false;
            }
        }
        return true;
    }

    return isCompleteBinaryTree(node, -1);
}

console.log(isCompleteBinaryTreeParent(root1));
console.log(isCompleteBinaryTreeParent(root2));
console.log(isCompleteBinaryTreeParent(root3));
console.log(isCompleteBinaryTreeParent(root4));
console.log(isCompleteBinaryTreeParent(root5));
console.log(isCompleteBinaryTreeParent(root6));
console.log(isCompleteBinaryTreeParent(root7));

// TC & SC same as is perfect binary tree