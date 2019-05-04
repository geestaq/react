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

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
	  React.createElement('img', {src: movie.img}),
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
