var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));

/*
//dane filmow
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
	img: 'https://ssl-gfx.filmweb.pl/po/05/71/30571/7529392.6.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
	img: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.6.jpg'
  },
  {
    id: 3,
    title: 'Breaking Bad',
    desc: 'Gdy nauczyciel chemii dowiaduje się, że ma raka, postanawia rozpocząć produkcję metamfetaminy, by finansowo zabezpieczyć swoją rodzinę.',
	img: 'https://ssl-gfx.filmweb.pl/po/06/68/430668/7730445.6.jpg'
  },
  {
    id: 4,
    title: 'Suits',
    desc: 'Dzięki swojej fotograficznej pamięci i ponadprzeciętnej inteligencji Mike Ross zdobywa pracę u Harveya Spectera. Jednak firma, w której pracuje, zatrudnia jedynie prawników z Uniwersytetu Harvarda.',
	img: 'https://ssl-gfx.filmweb.pl/po/57/26/585726/7383459.6.jpg'
  }
];

//klasa MovieTitle
var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			React.createElement('h2', {}, this.props.title)
		);
	},
});

//klasa MovieDescription
var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		);
	},
});

//klasa Movie
var Movie = React.createClass({
	propTypes: {
		movieData: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {title: this.props.movieData.title}),
				React.createElement(MovieDescription, {desc: this.props.movieData.desc}),
				React.createElement('img', {src: this.props.movieData.img})
			)
		)
	},
});

//klasa MovieList
var MovieList = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},

	render: function() {
		return (
			React.createElement('div', {},
				React.createElement('h1', {}, 'Lista filmów'),
			    React.createElement('ul', {}, this.props.items)
			)
		);
	},
});

var element = React.createElement(
	MovieList,
	{
		items: movies.map(function(movie) {
			return React.createElement(Movie, {key: movie.id, movieData: movie});
		})
	}
);

ReactDOM.render(element, document.getElementById('app'));
*/
