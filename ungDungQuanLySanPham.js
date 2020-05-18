
let productsName = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4', 'Apple iPhone 6S', 'Xiaomi Mi 5s Plus', 'Apple iPhone 8 Plus', 'Fujitsu F04-E', 'Oppo A71'];
let table = document.getElementById('table');
let input = document.getElementById('nhapSP');
let add;
hienThi();

function hienThi() {
    let show = '';
    let len= productsName.length;
    for (let i = 0; i < len; i++) {

        show += '<tr><td id="name">' + productsName[i] + '</td><td><button id="edit" onclick="editProduct('+i+')">Edit</button></td> <td><button id="delete" onclick="deleteProduct('+i+')">Delete</button></td></tr>'

    }
    table.innerHTML = show;
    document.getElementById('count').innerHTML=len +' products';
}
function addProduct() {
        add = input.value;
       productsName.push(add);
       hienThi();
       alert('Bạn đã thêm thành công!');
}
function editProduct(index) {
    let show = '';
    let insert= '<tr><td><input id="nhapUpdate" type="text" placeholder="Type edit..." value="" /><button id="add" onclick="updateProduct('+index+')">Update</button></td></tr>';
    let len= productsName.length;
    for (let i = 0; i < len; i++) {

        show += '<tr><td id="name">' + productsName[i] + '</td><td><button id="edit" onclick="editProduct('+i+')">Edit</button></td> <td><button id="delete" onclick="deleteProduct('+i+')">Delete</button></td></tr>'
        if(i==index)  show += insert;
    }
    table.innerHTML = show;
    document.getElementById('count').innerHTML=len +' products';
}
function deleteProduct(index) {
      productsName.splice(index,1);
      hienThi();
      alert('Bạn đã xóa thành công!');
}
function updateProduct(index){
     productsName[index]=document.getElementById('nhapUpdate').value;
     hienThi();
     alert('Bạn đã sửa thành công!');
}
