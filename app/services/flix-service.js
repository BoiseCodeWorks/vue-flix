function FlixService() {

  let base = 'http://netflixroulette.net/api/api.phpx?'
  
  this.$http = null;

  // this.getFlix = function (category, query, cb) {

  //   var url = `${base}${category}=${query}`

  //   $.get(url)
  //     .done(function (response) {
  //        // console.log('Response: ', response);
  //        cb(null, response);
  //     })
  //     .fail(function (error) {
  //       cb(error, null);
  //     });
  // }

  this.getFlix = function (category, query) {

    var url = `${base}${category}=${query}`;
    
    return new Promise(function (resolve, reject) {
      
      let step = 0;
      fetch(url)
        .then(function (res) { return res.json() })
        .then(function (data) { resolve(data) })
        .catch(err => reject(err));
    });    

  }

}