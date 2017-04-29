# js获得子元素的方法

### 方法一:
 
    MenuNode是父元素 item 是子元素
    let MenuNode = document.getElementsByClassName('menu');
    let itemNode = MenuNode[0].children;

    console.log(MenuNode);
    console.log(itemNode);

> 因为是nodeList所以要获得dom,才能得到其对应的children

### 方法二: 
    let Menu = document.getElementById('test');
    let item = Menu.getElementsByClassName('item');

    console.log(Menu);
    console.log(item);


 >因为id获得到的是一个DOM元素，所以可以直接用在父元素下索引子元素