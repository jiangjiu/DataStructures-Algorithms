//  二叉搜索树
function BinarySearchTree() {
  var Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }

  var root = null

  this.insert = function (key) {
    var newNode = new Node(key)

    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {

      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {

      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback)
  }

  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback)
  }

  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback)
  }

  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
}