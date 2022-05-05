import { Controller } from '@hotwired/stimulus'

export default class extends Controller {

  connect() {
    this.fetchOMDbAPI("back to the future");
  }

  displayMovie(movies) {
    const list = document.querySelector("#results");
    list.innerHTML = "";
    movies.forEach((movie) => {
      list.insertAdjacentHTML(
        "beforeend", 
        `<li class='list-inline-item'>
          <img width=120 src="${movie.Poster}" alt="" />
        </li>`);
    });
  }
  
  fetchOMDbAPI(keyword) {
    const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
    fetch(url)
      .then( response => response.json())
      .then( (data) => {
        const movies = data.Search;
        this.displayMovie(movies);
      })
  }
  
  searchMovie(event) {
    const input = document.querySelector("#keyword");
    event.preventDefault();
    const keyword = input.value;
    this.fetchOMDbAPI(keyword);
  }
}