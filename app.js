const groceryList = ['Chicken', 'Spinach'];
const listItems = groceryList.map((item) =>
  <li>{item}</li>
);
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('app')
);