(function () {

  var fs = new FlixService()


  new Vue({
    el: '#vue-flix',
    data: function () {
      return {
        category: 'actor',
        query: '',
        movies: [],
        details: {},
        favorites: []
      }
    },
    methods: {
      search: function () {
        // if (this.category == 'title') {
        //   fs.getFlix(this.category, this.query, (error, data) => {
        //     if (error) {
        //       // do something with the error
        //       console.log(error);
        //     }
        //     else {
        //       this.setDetails(data);
        //     }
        //   })
        // }
        // else {
        //   fs.getFlix(this.category, this.query, (error, data) => {
        //     this.setMovies(data);
        //   });
        // }
        if (this.category == 'title') {
          fs.getFlix(this.category, this.query)
            .then(this.setDetails)
            .catch(error => {
              console.log(error);
            });
          return
        }
        fs.getFlix(this.category, this.query)
          .then(this.setMovies)
          .catch(error => {
            console.log(error);
          });
      },
      setMovies: function (movies) {
        this.movies = movies
      },
      reset: function () {
        this.query = ''
        this.category = '',
          this.movies = []
      },
      setDetails: function (movie) {
        this.details = movie
      },
      clearDetails: function () {
        this.details = {}
      },
      addFavorite: function (movie) {
        this.favorites.push(movie)
      },
      remove: function (movie) {
        var i = this.favorites.indexOf(movie)
        this.favorites.splice(i, 1)
      }
    }
  })

} ())