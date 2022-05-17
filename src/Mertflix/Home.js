import React from "react";
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//Components
import HeroImage from "./components/HeroImage";
import Grid from "./components/Grid";
//Hook
import { useHomeFetch } from "./hooks/useHomeFetch";
//Image
import NoImage from "../images/no_image.jpg";
import Thumb from "./components/Thumb";
import Spinner from "./components/Spinner";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";

const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm, 
    setIsLoadingMore 
  } = useHomeFetch();

  // console.log(state);

  if (error) return <div>Something went wrong ...</div>

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? `Results for "${searchTerm}"` : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
      )}
    </>
  );
};

export default Home;
