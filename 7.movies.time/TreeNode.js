module.exports = class TreeNode {
    constructor(value, nodes) {
        this.value = value;
        /**
         * Array of TreeNode
         */
        this.nodes = nodes;
    }
}