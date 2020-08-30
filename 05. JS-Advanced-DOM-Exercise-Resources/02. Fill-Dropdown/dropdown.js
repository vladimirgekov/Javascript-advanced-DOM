function addItem() {
  let strOne = document.getElementById("newItemText");
  let strTwo = document.getElementById("newItemValue");

  let createdOption = document.createElement("option");
  createdOption.text = strOne.value;
  createdOption.value = strTwo.value;

  let select = document.getElementById("menu");
  select.appendChild(createdOption);

  strOne.value = "";
  strTwo.value = "";
}
