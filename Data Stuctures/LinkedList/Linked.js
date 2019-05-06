class LinkedList {
  constructor() {
    this.length = 0;//标识链表的长度
    this.head = null;//标识头结点
    this.node = function (element) {
      this.element = element;
      this.next = null;
    }
  }
  //向链表中添加元素
  append(element) {
    let node =new this.node(element);
    let current;//一个用于遍历的中间变量
    if (this.length == 0) {
      this.head = node;//如果链表为空，则将添加的node设置为头结点
    }
    else {
      current = this.head;
      while (current.next) {//找到最后的子节点
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  };
  //向列表中插入元素
  insert(position,element) {
    if (position >= 0 && position < this.length) {
      let node = new this.node(element);
      let index = 1;
      let current;
      //添加到首部
      if (position == 0) {
        node.next = this.head;
        this.head = node;
      }
      else {
        current = this.head;
        while (index++ < position) {
          current = current.next;
        }
        node.next = current.next;
        current.next = node;
      }
      this.length++;
    }
    else {
      return false;
    }
  }
  //从列表中移除元素,移除对应element出现第一次的node,后面的重复不管，若要移除全部，可配合indexof方法进行删除
  remove(element) {
    let current = this.head;
    let exit = false;//判断该element是否存在
    while (current.next) {
      if (current.next.element == element) {
        exit = true;
        break;
      }
      current = current.next;
    }
    if (exit == true) {
      if (current.next.next == null) {//为null说明被删除元素是最后一个
        current.next = null;
      }
      else {
        current.next = current.next.next;
      }
    }
    else {
      return false;
    }
    this.length--;
  }
  //返回元素的索引,若不存在则返回-1,索引从0开始
  indexof(element) {
    let current = this.head;
    let index = 0;
    while (current.next) {//这种判断方法忽略了最后一个node
      if (current.element == element) {
        return index;
      }
      index++;
      current = current.next;
    }
    //判断最后一个node
    if (current.element == element) {
      return this.length - 1;
    }
    else {//若最后一个元素都不满足条件，则可判断不存在这个元素
      return -1;
    }
  }
  //判断该链表是否为空,直接判断head是否为空
  isEmpty() {
    if (this.head) {
      return true;
    }
    else {
      return false;
    }
  }
  //返回链表长度
  size() {
    return this.length;
  }
  //重新继承链中的toString,时其与print()方法类似
  toString() {
    this.print();
  }
  //打印所有成员
  print() {
    if (this.length == 0) {
      console.log("链表长度为0")
    }
    else {
      let current = this.head
      while (current.next) {
        console.log(current.element);
        current = current.next;
      }
      console.log(current.element);
    }
  }
}
//export default { LinkedList };
module.exports = LinkedList;
