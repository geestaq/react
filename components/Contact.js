//klasa Contact
Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			<div className={'contact-item'}>
				<img className={'contactImage'} src={'http://icons.veryicon.com/png/System/Project%201/Contact%20Card.png'}/>
				<p className={'contact-label'}>
					Imię: {this.props.item.firstName}
				</p>
				<p className={'contact-label'}>
					Imię: {this.props.item.lastName}
				</p>
				<a href={'mailto:' + this.props.item.email}>
					{this.props.item.email}
				</a>
			</div>
		)
	},
});
