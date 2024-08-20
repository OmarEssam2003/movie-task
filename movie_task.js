
let most_popular_movies = [
    {Image: "movie2.png" },
    {Image: "movie5.png" },
    {Image: "movie2.png" },
    {Image: "movie2.png" },
    {Image: "movie7.png" },
    {Image: "movie8.png" },
];


let coming_soon_movies = [
    {
        image: 'got.png',
    },
    {
        image: 'AOT.png',
    },
    {
        image: 'bless.png',
    },
    {
        image: 'after the rain.png',
    },
    {
        image: 'castle.png',
    },
    {
        image: 'News.png',
    },
    {
        image: 'oglan.png',
    },
    {
        image: 'slavery.png',
    },
    {
        image: 'walking dead.png',
    },
    {
        image: 'tom&gery.png',
    },
    {
        image: 'got.png',
    },
];


    let most_popular_moviesHTML= ``;
    most_popular_movies.forEach(movie => {
        most_popular_moviesHTML +=`
            <div class="col-6 col-sm-4 col-md-2">
              <img src="${movie.Image}" alt="Movie Poster" class="img-fluid movie-poster">
            </div>`
    });
    let most_popular_1 = document.getElementById('most-popular-1');
    let most_popular_2 = document.getElementById('most-popular-2');
    console.log(most_popular_1);
    console.log(most_popular_2);
    console.log(most_popular_moviesHTML);
    most_popular_1.innerHTML = most_popular_moviesHTML;
    most_popular_2.innerHTML = most_popular_moviesHTML;
    let coming_soon_moviesHTML= ``;
    let coming_soon_list = document.getElementById('coming_soon_movies');
    coming_soon_movies.forEach(movie => {
        coming_soon_moviesHTML += `
      <div class="col-6 col-sm-6 col-md-3">
        <div class="card bg-dark text-white">
        <img src="${movie.image}" class="card-img" alt="Game of Thrones">
        </div>
      </div>`
    });

    coming_soon_list.innerHTML = coming_soon_moviesHTML;




