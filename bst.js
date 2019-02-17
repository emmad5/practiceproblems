


const isBst = function(root) {
    isBst(root, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
};

const isBstUtil = function(node, min, max) {
    if (node === null){
        return true;
    }
    if (node.value <= min || node.value > max) {
        return false;
    }
    return isBstUtil(node.left, min, node.value) && isBstUtil(node.right, node.value, max);
};