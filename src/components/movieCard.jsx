export const Card = ({ img, title, releaseDate }) => {
  const date = new Date(releaseDate)
  return (
    <div data-testid='movie-card'>
      <img src={img} className="card-poster" data-testid="movie-poster" />
      <p data-testid="movie-title">{title}</p>
      <p data-testid="movie-release-date">{releaseDate}</p>
    </div>
  )
}
