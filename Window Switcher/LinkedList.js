function Linkedlist(){
    function Node(content){
        this.content=content;
        this.next=null;
    }
    this.head=null;
    this.tail=null;

    this.add = function(content){
        if(!this.head){//if it is empty
            this.head=new Node(content);
            this.tail=this.head;
        }
        else{ //if it is not empty
            this.tail.next= new Node(content);
            this.tail=this.tail.next;
        }
    }
    this.move_to_front= function(node){
        if(node===this.head){//node is already at the front
            return;
        }
        let temp=this.head;
        while(temp.next !== node)
        temp=temp.next;

        temp.next=temp.next.next; // To delete this node
        node.next=this.head;
        this.head=node;
    }
}