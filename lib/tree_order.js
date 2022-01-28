function inOrderArray(root) {
    debugger
    let arr = [];
    if(root === null){
        return arr;
    }
    let left = inOrderArray(root.left);
    arr.push(...root.val);
    let right = inOrderArray(root.right);
    return left.concat(root.val, right)
}

function postOrderArray(root) {
    let arr = [];
    if(root === null){
        return arr;
    }
    let left = postOrderArray(root.left);
    let right = postOrderArray(root.right);
    arr.push(...root.val);
    return left.concat(right,root.val)
}
module.exports = {
    inOrderArray,
    postOrderArray
};
