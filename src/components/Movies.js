import Movie from "./Movie";
import NotFound from "../components/notFound";


export default function Movies(props,non) {
    const {movies = []} = props;
    const notfound = non;
    
     
    return(
        <div className = "movies">
            {movies.length ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie}/>
            )): <NotFound key={notfound.NotFound}/>}
        </div>
    )

}  