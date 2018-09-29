function GroceryList() {
  return (
    <ul>
    <GroceryItem name="Chicken" />
    <GroceryItem name="Spinach" />
    </ul>
  );
}
function GroceryItem(props) {
  return <li>{props.name}</li>;
}
// function Chicken() {
//   return <li>Chicken</li>;
// }
// function Spinach() {
//   return <li>Spinach</li>;
// }
ReactDOM.render(<GroceryList/>, document.getElementById('app')
);