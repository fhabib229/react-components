const GroceryListItem = (props) => (
  <ul>
    <li>{props.item[0]}</li>
    <li>{props.item[1]}</li>
  </ul>
);

const GroceryList = () => (
  <div>
    <h1>My Grocery List</h1>
    <GroceryListItem item={['Chicken', 'Spinach']}/>
  </div>
);
ReactDOM.render(<GroceryList/>, document.getElementById('app')
);