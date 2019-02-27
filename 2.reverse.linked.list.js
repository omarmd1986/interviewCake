var LinkedListNode = require('./2.linked.list/LinkedListNode');

var LinkedList = require('./2.linked.list/LinkedList');

var c = new LinkedListNode('c');
var b = new LinkedListNode('b');
var a = new LinkedListNode('a');
a.next = b;
b.next = c;

var List = new LinkedList(a);

console.log(List.reverse());
console.log(List.reverse());
