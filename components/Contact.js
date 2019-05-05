//klasa Contact
var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('div', {className: 'contact-item'},
				React.createElement('img', {
					className: 'contactImage',
					src: 'http://icons.veryicon.com/png/System/Project%201/Contact%20Card.png'
				}),
				React.createElement('p', {className: 'contact-label'}, 'Imię: ' + this.props.item.firstName),
				React.createElement('p', {className: 'contact-label'}, 'Nazwisko: ' + this.props.item.lastName),
				React.createElement('a', {className: 'contact-email', href: 'mailto:' + this.props.item.email}, this.props.item.email)
			)
		)
	},
});
