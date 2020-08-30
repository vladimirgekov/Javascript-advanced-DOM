function addItem() {
  const itemsList = document.getElementById("items");
  const textInput = document.getElementById("newItemText");

  let textInputValue = textInput.value;
  if (!textInputValue) {
    return;
  }
  const li = document.createElement("li");
  li.innerText = textInputValue;
  itemsList.appendChild(li);
  textInput.value = "";
}
