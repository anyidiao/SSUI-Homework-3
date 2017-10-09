function add_item() {
  var count = document.getElementById("cart_items");
  var prev_count = count.innerHTML;
  var cur_count = parseInt(prev_count) + 1;
  count.innerHTML = cur_count.toString();
}

function remove_entry(button) {
  var entry = button.parentNode.parentNode;
  entry.parentNode.removeChild(entry);
}
