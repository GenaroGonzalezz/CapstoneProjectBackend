// 3rd Create services
const Movie = require("../models/movie");

const getMovies = async () => {
    try{
        const movies = await Movie.find().lean().exec(); //Execute search
        return movies;
    }
    catch(error){
        console.log(error);
    }
};

const saveMovie = async (movie) => {
  const savedMovie = new Movie(movie);

  await savedMovie.save();
  return savedMovie;
};

const updateMovie = async (id, newMovieInfo) => {
  const updatedMovie = await Movie.findByIdAndUpdate(id, newMovieInfo, {
    returnDocument: "after",
  })
    .lean()
    .exec();

  return updatedMovie;
};

const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id).exec();
};

const getMovieById = async (id) => {
  const movie = Movie.findById(id).lean().exec();

  return movie;
};

module.exports = {
  getMovies,
  saveMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
};
