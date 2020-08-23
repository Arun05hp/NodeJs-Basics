// Simple Promise Example
// const check = true;

// const promise = new Promise((resolve, reject) => {
//   if (!check) {
//     resolve("done");
//   } else {
//     reject("undone");
//   }
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Solving Callback Hell problem using Promise

const users = require("./users.json");
const movies = require("./movies.json");
const reviews = require("./reviews.json");

const getMovie = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find((movie) => movie.id === id);
      if (movie) {
        resolve(movie);
      } else {
        reject("Not Found");
      }
    }, 1000);
  });
};

const getReview = (movieId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const review = reviews.find((review) => review.movie_id === movieId);
      if (review) {
        resolve(review);
      } else {
        reject("No Review");
      }
    }, 1000);
  });
};

const getUser = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.name === name);
      if (user) {
        resolve(user);
      } else {
        reject("User Not Found");
      }
    }, 1000);
  });
};

//Callback hell
// getMovie(3, (movie) => {
//   console.log(movie);
//   getReview(movie.id, (review) => {
//     console.log(review);
//     getUser(review.reviewer, (user) => {
//       console.log(user);
//     });
//   });
// });

getMovie(1)
  .then((movie) => {
    return getReview(movie.id);
  })
  .then((review) => {
    // console.log(review);
    return getUser(review.reviewer);
  })
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });
