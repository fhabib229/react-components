class GroceryListItem extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
  return (
    <li>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);
ReactDOM.render(<GroceryList items = {['Chicken','Spinach']} />, document.getElementById('app'));