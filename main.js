


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
  item.innerText = text;

  var button = document.createElement("button");
  button.innerText = "Delete note";
  button.className = 'del-btn';

  button.addEventListener('click', removeItem);

  item.appendChild(button);

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
