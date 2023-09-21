import React from "react";

// import "./c_card.css";

// Define your movie list as an array of objects

// Define your functional component
function MovieCard({ title, info, description }) {
  return (
    <div className="movie-card" data-movie={title}>
      <div className="movie-card__overlay"></div>
      <div className="movie-card__share">
        <button className="movie-card__icon">
          <i className="material-icons">
            <b>3</b> Days Left
          </i>
        </button>
        <button className="movie-card__icon">
          <i className="material-icons">
            Participants:<b>342</b>
          </i>
        </button>
        <button className="movie-card__icon">
          <i className="material-icons">
            completed:<b>123</b>
          </i>
        </button>
      </div>
      <div className="movie-card__content">
        <div className="movie-card__header">
          <h1 className="movie-card__title">{title}</h1>
          <h4 className="movie-card__info">{info}</h4>
        </div>
        <p className="movie-card__desc">{description}</p>
        <button className="btn btn-outline movie-card__button" type="button">
          Accept challenge
        </button>
      </div>
    </div>
  );
}

// Create a parent component to render the list of MovieCards

export default MovieCard;
