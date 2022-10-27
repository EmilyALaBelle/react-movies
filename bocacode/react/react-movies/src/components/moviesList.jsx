import movies from '../movies'

function moviesList() {
    return (
        <section id="movie-list-container">
            <div className='movie-card'>
                <img className='movie-poster'
                    src={movies[0].posterURL}
                    alt={movies[0].title} />
                <h3 className='movie-title'>
                    {movies[0].title}
                </h3>
            </div>
        </section>
    )
}

export default moviesList;