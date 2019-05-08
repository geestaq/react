//klasa Counter
var Counter = React.createClass({
	propTypes: {
		start: React.PropTypes.number.isRequired,
		id: React.PropTypes.number.isRequired,
	},

	getInitialState: function(){
		console.log('getInitialState');
		return { counter: this.props.start };
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function() {
		console.log('render');
		return (
			React.createElement('div', {className: 'counter'},
				React.createElement('span', {}, 'Licznik ' + this.props.id +': ' + this.state.counter),
				React.createElement('button', {onClick: this.increment}, '+'),
				React.createElement('button', {onClick: this.decrement}, '-'),
			)
		);
	},

	//metody lifecycle
	getDefaultProps: function() {
		console.log('getDefaultProps');
	},
	componentWillMount: function() {
		console.log('componentWillMount');
		console.log('-->Wczytywanie danych z serwera');
	},
	componentDidMount: function() {
		console.log('componentDidMount');
	},
	componentWillReceiveProps: function(nextProps) {
		console.log('componentWillReceiveProps');
		console.log(nextProps);
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		console.log('shouldComponentUpdate');
		console.log(nextProps);
		console.log(nextState);
		return true;
	},
	componentWillUpdate: function(nextProps, nextState) {
		console.log('componentWillUpdate');
		console.log(nextProps);
		console.log(nextState);
	},
	componentDidUpdate: function(prevProps, prevState) {
		console.log('componentDidUpdate');
		console.log(prevProps);
		console.log(prevState);
	},
	componentWillUnmount: function() {
		console.log('componentWillUnmount');
	},
});

//klasa CounterList
var CounterList = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},

	render: function() {
		var elements = this.props.items.map(function(item){
			return React.createElement(Counter, {key: item.id, id: item.id, start: item.start});
		});

		return (
			React.createElement('div', {}, elements)
		);
	},
});

var counters = [
	{
		id: 1,
		start: 0
	},
	{
		id: 2,
		start: 5
	},
	{
		id: 3,
		start: -8
	},
];
var element = React.createElement(CounterList, {items: counters});
ReactDOM.render(element, document.getElementById('app'));
