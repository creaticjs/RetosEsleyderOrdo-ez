var imageMovieArray = []

imageMovieArray[0] = "https://i.ytimg.com/vi/cjHdRr0KHzE/maxresdefault.jpg"

imageMovieArray[1] = "http://stc.obolog.net/photos/5671/5671f822088ffs170155_p.jpg"

imageMovieArray[2] = "http://cinemarmota.com/wp/wp-content/uploads/2017/12/Star-Wars-1-poster-1024x490.jpg"

imageMovieArray[3] = "https://i.ytimg.com/vi/K2ScVx4mRDE/maxresdefault.jpg"

imageMovieArray[4] = "https://cdn.shopify.com/s/files/1/0267/4223/products/445578_753193404_product_800x.jpg?v=1510176870"

imageMovieArray[5] = "https://images.wolfgangsvault.com/star-wars-the-empire-strikes-back/laserdisc/memorabilia/ZZZ034578-LD.jpg"

imageMovieArray[6] = "https://i.blogs.es/bf4195/star/450_1000.jpg"



function loadStarWarsMovies() {
    $('.sticky').sticky()
    var req = new XMLHttpRequest()


    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            jsonMovies = JSON.parse(this.responseText)
            const slidermovie = $('#slidermovie')
            jsonMovies.results.forEach(function (movie, index) {

                let titleUppercase = movie.title.toUpperCase();

                let card_movie = `
                <div class="containerItemsMovie">
                <div class="itemMovie">
                    <div class="imageMovie">
                        <img src="${imageMovieArray[index]}"/>
                    </div>
                    <div class="containerDescription">
                        <div class="containerTitle">
                            <a href="https://es.wikipedia.org/wiki/${movie.title}" target="_blank"><h1>${titleUppercase}</h1></a>
                        </div>
                        <div class="containerSinopsis">
                            <p>${movie.opening_crawl}</p>
                        </div>
                        <div class="episodeContainer">
                            <div class="numberEpisode">
                                <p>EPISODE: ${romanize(movie.episode_id)}</p>
                            </dvi>
                        </div>
                        </div>
                    </div>
                </div>`;
                console.log(jsonMovies.results)
                console.log(index)
                document.getElementById('containerMovieResponse').insertAdjacentHTML('beforeend', card_movie);
                document.getElementById('preloaderStarWars').classList.remove("active");

            });


        }
    }

    req.open('GET', "https://swapi.co/api/films/", true);
    req.send();
}
