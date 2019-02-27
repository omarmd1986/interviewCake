module.exports = class LinkedListNode {
    constructor(head) {
        this.head = head;
    }

    reverse () {
        let index = this.head;
        let prev = null;
        let next = null;
    
        while (null !== index) {
            next = index.next;
            index.next = prev;
            prev = index;
            index = next;
        }
        
        this.head = prev;
        
        return prev;
    };
}