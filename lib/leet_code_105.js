// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if(!preorder.length && !inorder.length){
        return null;
    }
    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);

    let mid = inorder.indexOf(rootVal);
    let leftOrder = inorder.slice(0,mid);
    let rightOrder =inorder.slice(mid+1)

    let leftPre = preorder.filter(val => leftOrder.includes(val))
    let rightPre =preorder.filter(val => rightOrder.includes(val))

    let leftTree = buildTree(leftPre,leftOrder);
    let rightTree = buildTree(rightPre,rightOrder);

    root.left = leftTree;
    root.right = rightTree;
    return root;
}
