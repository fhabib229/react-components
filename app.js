class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }
  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );

  }

}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem key={item} item={item} />
    )}
  </ul>
);
ReactDOM.render(<GroceryList items = {['Chicken','Spinach']} />, document.getElementById('app'));