import Vue from "vue";

Vue.filter("toFixed", function(price, limit) {
  return price.toFixed(limit);
});
Vue.filter("toDoller", function(price) {
  console.log(price);
  if (isNaN(price)) {
    return "-";
  }
  return "$" + price;
});
