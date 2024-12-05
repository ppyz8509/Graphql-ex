let movies = [
    {
      id: "1",
      title: "Inception",
      releaseDate: "2010-07-16",
      type: ["Sci-Fi", "Thriller"],
    },
    {
      id: "2",
      title: "The Dark Knight",
      releaseDate: "2008-07-18",
      type: ["Action", "Crime", "Drama"],
    },
    {
      id: "3",
      title: "Interstellar",
      releaseDate: "2014-11-07",
      type: ["Adventure", "Drama", "Sci-Fi"],
    }, 
    {
        id: "4",
        title: "The Matrix",
        releaseDate: "1999-03-31",
        type: ["Sci-Fi", "Action"],
    },
    {
        id: "5",
        title: "The Shawshank Redemption",
        releaseDate: "1994-09-23",
        type: ["Drama"],
    },
];

let authors = [
    {
      id: "1",
      name: "Christopher Nolan",
      verified: true,
    },
    {
      id: "2",
      name: "Quentin Tarantino",
      verified: true,
    },
    {
      id: "3",
      name: "David Fincher",
      verified: false,
    },
];

let reviews = [
    {
        id: "1",
        rating: 5,
        comment: "A mind-bending masterpiece!",
        author_id: "1",
        movie_id: "1",
      },
      {
        id: "2",
        rating: 4,
        comment: "Intense and gripping. A must-watch!",
        author_id: "2",
        movie_id: "2",
      },
      {
        id: "3",
        rating: 5,
        comment: "A visual and emotional epic. Truly amazing.",
        author_id: "1",
        movie_id: "3",
      },
      {
        id: "4",
        rating: 3,
        comment: "Great action sequences, but the story could have been better.",
        author_id: "3",
        movie_id: "4",
      },
      {
        id: "5",
        rating: 4,
        comment: "Thought-provoking and entertaining. Solid performance by the cast.",
        author_id: "2",
        movie_id: "5",
      },
      {
        id: "6",
        rating: 5,
        comment: "A timeless classic that never gets old!",
        author_id: "1",
        movie_id: "5",
      },
      {
        id: "7",
        rating: 2,
        comment: "Not my cup of tea. Found it a bit too slow.",
        author_id: "3",
        movie_id: "4",
      },
    ];

export default { movies, authors, reviews };