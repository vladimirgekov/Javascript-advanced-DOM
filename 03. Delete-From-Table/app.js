function deleteByEmail() {
  let output = document.getElementById("result");
  let needle = document.getElementsByName("email")[0].value.trim();
  let haystack = [
    ...document.querySelectorAll("table tr td:nth-child(2)"),
  ].filter((e) => e.textContent == needle);
  if (haystack.length > 0) {
    haystack[0].parentNode.parentNode.removeChild(haystack[0].parentNode);
    output.textContent = "Deleted.";
  } else {
    output.textContent = "Not found.";
  }
}
