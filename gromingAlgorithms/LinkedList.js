class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    append(newNode) {
        let node = this.head

        if (node == null){
            return this.head = newNode
        }

        while(node.next){
            node = node.next
        }

        node.next = newNode
    }

    getSize() {
        let count = 0;
        let node = this.head

        while(node){
            count++
            node = node.next
        }

        return count
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let node = this.head

        while(node.next){
            node = node.next
        }

        return node
    }

    clear(){
        return this.head = null
    }
}

class NodeList {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

let list = new LinkedList()

list.getSize() //0

list.append(new NodeList("apple"))
list.append(new NodeList("orange"))
list.append(new NodeList("cheese"))

console.log(list.getSize()) //3

console.log(list.getFirst()) // apple
console.log(list.getLast()) // cheese

list.clear()

console.log(list.getSize()) // 0