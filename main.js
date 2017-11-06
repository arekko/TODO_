

var handler = false;

document.getElementById("input-btn").addEventListener("click", () => {
  let value = document.getElementById('inputval').value;
  if (value) {
    addItemTodo(value);
    document.getElementById("inputval").value = "";
    console.log(this);

  }
});


//create a new item
function addItemTodo(text) {
  var list = document.getElementById("ul-list");

  var item = document.createElement("li");
  item.className = 'item';
  item.innerText = text;

  var del_button = document.createElement("button");
  del_button.innerText = "Delete note";
  del_button.className = 'del-btn';

  var done_button = document.createElement("button");
  done_button.innerText = "Complete";
  done_button.className = 'com_btn';

  del_button.addEventListener('click', removeItem);
  done_button.addEventListener('click', completeTask);

  item.appendChild(del_button);
  item.appendChild(done_button);

  // ul.appendChild(item);
  list.insertBefore(item, list.childNodes[0]); //added item in begin
};

//del item
function removeItem() {
  this.parentNode.parentNode.removeChild(this.parentNode);
  console.log(this);
  func();
};

func = () => {
  console.log(this);
};

function completeTask() {
  var item = this.parentNode.className += ' complete';
}
