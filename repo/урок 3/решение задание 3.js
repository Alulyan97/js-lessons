"use strict";

const libraryData = {
  meta: {
    totalBooks: 31,
    lastUpdated: "2024-03-15T10:30:00Z",
    version: "1.2.0"
  },
  books: [
       {
      id: "1",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      author: {
        name: "J.R.R. Tolkien",
        country: "United Kingdom",
        birthYear: 1892,
        deathYear: 1973
      },
      details: {
        pages: 423,
        genre: ["fantasy", "adventure", "epic"],
        published: "1954-07-29",
        isbn: "978-0-395-08254-1",
        language: "English",
        publisher: "Allen & Unwin"
      },
      readingStats: {
        readingTime: 28,
        rating: 5,
        finishDate: "2024-01-15",
        startDate: "2023-12-18",
        notes: "Amazing world-building! The Shire description: peaceful green hills with round doors. Characters are deeply developed."
      },
      tags: ["classic", "epic", "magic", "middle-earth", "hobbits"],
      available: true
    },
    {
      id: "2",
      title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      author: {
        name: "James Clear",
        country: "United States",
        birthYear: 1986
      },
      details: {
        pages: 320,
        genre: ["self-development", "psychology", "business"],
        published: "2018-10-16",
        isbn: "978-0735211292",
        language: "English",
        publisher: "Avery"
      },
      readingStats: {
        readingTime: 7,
        rating: 4,
        finishDate: "2024-02-02",
        startDate: "2024-01-26",
        notes: "Practical advice. Key insight: focus on systems not goals. Habit stacking technique works! Recommended for everyone."
      },
      tags: ["productivity", "behavior", "practical", "habits"],
      available: true
    },
    {
      id: "3",
      title: "Deep Work: Rules for Focused Success in a Distracted World",
      author: {
        name: "Cal Newport",
        country: "United States",
        birthYear: 1982
      },
      details: {
        pages: 304,
        genre: ["self-development", "productivity", "business"],
        published: "2016-01-05",
        isbn: "978-1455586691",
        language: "English",
        publisher: "Grand Central Publishing"
      },
      readingStats: {
        readingTime: 5,
        rating: 5,
        finishDate: "2024-02-10",
        startDate: "2024-02-05",
        notes: "Changed my work habits completely. Deep work sessions: 90 minutes of focused time. Avoid social media!"
      },
      tags: ["focus", "productivity", "work", "technology"],
      available: true
    },
    {
      id: "4",
      title: "Harry Potter and the Philosopher's Stone",
      author: {
        name: "J.K. Rowling",
        country: "United Kingdom",
        birthYear: 1965
      },
      details: {
        pages: 332,
        genre: ["fantasy", "young-adult", "magic"],
        published: "1997-06-26",
        isbn: "978-0747532699",
        language: "English",
        publisher: "Bloomsbury"
      },
      readingStats: {
        readingTime: 4,
        rating: 4,
        finishDate: "2024-02-15",
        startDate: "2024-02-11",
        notes: "Magical introduction to Hogwarts. Great for all ages. Quidditch matches are exciting!"
      },
      tags: ["magic", "wizards", "hogwarts", "young-adult"],
      available: false
    },
    {
      id: "5",
      title: "The Psychology of Money",
      author: {
        name: "Morgan Housel",
        country: "United States",
        birthYear: 1983
      },
      details: {
        pages: 256,
        genre: ["finance", "psychology", "business"],
        published: "2020-09-08",
        isbn: "978-0857197689",
        language: "English",
        publisher: "Harriman House"
      },
      readingStats: {
        readingTime: 6,
        rating: 5,
        finishDate: "2024-02-22",
        startDate: "2024-02-16",
        notes: "Financial behavior is more important than financial knowledge. Great stories about wealth and risk."
      },
      tags: ["money", "investing", "behavioral", "finance"],
      available: true
    },
    {
      id: "6",
      title: "Dune",
      author: {
        name: "Frank Herbert",
        country: "United States",
        birthYear: 1920,
        deathYear: 1986
      },
      details: {
        pages: 896,
        genre: ["science-fiction", "adventure", "epic"],
        published: "1965-08-01",
        isbn: "978-0441172719",
        language: "English",
        publisher: "Chilton Books"
      },
      readingStats: {
        readingTime: 35,
        rating: 5,
        finishDate: "2024-03-10",
        startDate: "2024-02-04",
        notes: "Epic sci-fi masterpiece. World-building on Arrakis is incredible. The spice must flow!"
      },
      tags: ["sci-fi", "desert", "political", "epic"],
      available: true
    },
    {
      id: "7",
      title: "The Alchemist",
      author: {
        name: "Paulo Coelho",
        country: "Brazil",
        birthYear: 1947
      },
      details: {
        pages: 208,
        genre: ["fiction", "philosophy", "adventure"],
        published: "1988-01-01",
        isbn: "978-0062315007",
        language: "Portuguese",
        publisher: "HarperOne"
      },
      readingStats: {
        readingTime: 3,
        rating: 4,
        finishDate: "2024-01-25",
        startDate: "2024-01-22",
        notes: "Beautiful allegory about following your dreams. Personal legend concept is inspiring."
      },
      tags: ["inspirational", "journey", "dreams", "philosophy"],
      available: false
    },
    {
      id: "8",
      title: "Thinking, Fast and Slow",
      author: {
        name: "Daniel Kahneman",
        country: "Israel",
        birthYear: 1934,
        deathYear: 2024
      },
      details: {
        pages: 499,
        genre: ["psychology", "science", "non-fiction"],
        published: "2011-10-25",
        isbn: "978-0374275631",
        language: "English",
        publisher: "Farrar, Straus and Giroux"
      },
      readingStats: {
        readingTime: 21,
        rating: 5,
        finishDate: "2024-01-10",
        startDate: "2023-12-20",
        notes: "Revolutionary book about decision-making. System 1 and System 2 thinking explained. Nobel prize worth!"
      },
      tags: ["psychology", "decision-making", "behavioral", "science"],
      available: true
    },
    {
      id: "9",
      title: "The 7 Habits of Highly Effective People",
      author: {
        name: "Stephen R. Covey",
        country: "United States",
        birthYear: 1932,
        deathYear: 2012
      },
      details: {
        pages: 381,
        genre: ["self-development", "business", "psychology"],
        published: "1989-08-15",
        isbn: "978-0743269513",
        language: "English",
        publisher: "Free Press"
      },
      readingStats: {
        readingTime: 14,
        rating: 4,
        finishDate: "2024-02-28",
        startDate: "2024-02-14",
        notes: "Timeless principles. Begin with the end in mind. First things first. Synergy is powerful."
      },
      tags: ["leadership", "effectiveness", "principles", "classic"],
      available: true
    },
    {
      id: "10",
      title: "Sapiens: A Brief History of Humankind",
      author: {
        name: "Yuval Noah Harari",
        country: "Israel",
        birthYear: 1976
      },
      details: {
        pages: 443,
        genre: ["history", "science", "anthropology"],
        published: "2014-01-01",
        isbn: "978-0062316097",
        language: "English",
        publisher: "Harper"
      },
      readingStats: {
        readingTime: 18,
        rating: 5,
        finishDate: "2024-03-05",
        startDate: "2024-02-16",
        notes: "Mind-blowing perspective on human history. Cognitive revolution changed everything. Fictional realities concept."
      },
      tags: ["history", "anthropology", "evolution", "big-picture"],
      available: true
    },
    {
      id: "11",
      title: "The Martian",
      author: {
        name: "Andy Weir",
        country: "United States",
        birthYear: 1972
      },
      details: {
        pages: 369,
        genre: ["science-fiction", "adventure", "survival"],
        published: "2014-02-11",
        isbn: "978-0804139021",
        language: "English",
        publisher: "Crown Publishing"
      },
      readingStats: {
        readingTime: 8,
        rating: 5,
        finishDate: "2024-01-20",
        startDate: "2024-01-12",
        notes: "Scientific accuracy meets great storytelling. Mark Watney's humor in dire situations is amazing. I'm gonna science the shit out of this!"
      },
      tags: ["mars", "survival", "science", "humor"],
      available: false
    },
    {
      id: "12",
      title: "The Power of Now: A Guide to Spiritual Enlightenment",
      author: {
        name: "Eckhart Tolle",
        country: "Germany",
        birthYear: 1948
      },
      details: {
        pages: 236,
        genre: ["spirituality", "philosophy", "self-development"],
        published: "1997-01-01",
        isbn: "978-1577314806",
        language: "English",
        publisher: "New World Library"
      },
      readingStats: {
        readingTime: 9,
        rating: 4,
        finishDate: "2024-02-05",
        startDate: "2024-01-27",
        notes: "Life-changing perspective on time and presence. The pain-body concept explained. Live in the now!"
      },
      tags: ["spirituality", "mindfulness", "present", "enlightenment"],
      available: true
    },
    {
      id: "13",
      title: "The Hitchhiker's Guide to the Galaxy",
      author: {
        name: "Douglas Adams",
        country: "United Kingdom",
        birthYear: 1952,
        deathYear: 2001
      },
      details: {
        pages: 193,
        genre: ["science-fiction", "comedy", "adventure"],
        published: "1979-10-12",
        isbn: "978-0345391803",
        language: "English",
        publisher: "Pan Books"
      },
      readingStats: {
        readingTime: 4,
        rating: 5,
        finishDate: "2024-01-08",
        startDate: "2024-01-04",
        notes: "Hilarious and brilliant. Answer to life: 42. Don't panic! Towels are important."
      },
      tags: ["comedy", "sci-fi", "absurd", "classic"],
      available: true
    },
    {
      id: "14",
      title: "Educated",
      author: {
        name: "Tara Westover",
        country: "United States",
        birthYear: 1986
      },
      details: {
        pages: 334,
        genre: ["memoir", "autobiography", "education"],
        published: "2018-02-20",
        isbn: "978-0399590504",
        language: "English",
        publisher: "Random House"
      },
      readingStats: {
        readingTime: 11,
        rating: 5,
        finishDate: "2024-02-18",
        startDate: "2024-02-07",
        notes: "Powerful memoir about education and self-discovery. Family dynamics and personal growth. Inspiring journey."
      },
      tags: ["memoir", "education", "family", "transformation"],
      available: true
    },
    {
      id: "15",
      title: "The Night Circus",
      author: {
        name: "Erin Morgenstern",
        country: "United States",
        birthYear: 1978
      },
      details: {
        pages: 387,
        genre: ["fantasy", "fiction", "romance"],
        published: "2011-09-13",
        isbn: "978-0307744432",
        language: "English",
        publisher: "Doubleday"
      },
      readingStats: {
        readingTime: 12,
        rating: 4,
        finishDate: "2024-03-12",
        startDate: "2024-02-29",
        notes: "Magical and atmospheric. Le Cirque des Rêves is beautifully described. Celia and Marco's competition is intense."
      },
      tags: ["magic", "circus", "romance", "mystery"],
      available: true
    },
    {
      id: "16",
      title: "The Subtle Art of Not Giving a F*ck",
      author: {
        name: "Mark Manson",
        country: "United States",
        birthYear: 1984
      },
      details: {
        pages: 224,
        genre: ["self-development", "philosophy", "psychology"],
        published: "2016-09-13",
        isbn: "978-0062457714",
        language: "English",
        publisher: "HarperOne"
      },
      readingStats: {
        readingTime: 5,
        rating: 4,
        finishDate: "2024-01-30",
        startDate: "2024-01-25",
        notes: "Counterintuitive approach to happiness. Choose what to care about. Values over goals. Funny and direct."
      },
      tags: ["philosophy", "mindset", "values", "humor"],
      available: false
    },
    {
      id: "17",
      title: "Project Hail Mary",
      author: {
        name: "Andy Weir",
        country: "United States",
        birthYear: 1972
      },
      details: {
        pages: 496,
        genre: ["science-fiction", "thriller", "adventure"],
        published: "2021-05-04",
        isbn: "978-0593135204",
        language: "English",
        publisher: "Ballantine Books"
      },
      readingStats: {
        readingTime: 10,
        rating: 5,
        finishDate: "2024-03-18",
        startDate: "2024-03-08",
        notes: "Остроумная научная фантастика. Дуэты с Рокки — лучшая часть. Много науки, но читается легко."
      },
      tags: ["space", "science", "survival", "friendship"],
      available: true
    },
    {
      id: "18",
      title: "Norwegian Wood",
      author: {
        name: "Haruki Murakami",
        country: "Japan",
        birthYear: 1949
      },
      details: {
        pages: 296,
        genre: ["fiction", "romance", "coming-of-age"],
        published: "1987-09-04",
        isbn: "978-0375704025",
        language: "Japanese",
        publisher: "Kodansha"
      },
      readingStats: {
        readingTime: 6,
        rating: 4,
        finishDate: "2024-03-01",
        startDate: "2024-02-25",
        notes: "Тихая, меланхоличная история о любви и потере. Атмосфера Токио 60-х завораживает."
      },
      tags: ["japan", "love", "melancholy", "youth"],
      available: false
    },
    {
      id: "19",
      title: "Crime and Punishment",
      author: {
        name: "Fyodor Dostoevsky",
        country: "Russia",
        birthYear: 1821,
        deathYear: 1881
      },
      details: {
        pages: 671,
        genre: ["classic", "philosophy", "psychology"],
        published: "1866-01-01",
        isbn: "978-0140449136",
        language: "Russian",
        publisher: "The Russian Messenger"
      },
      readingStats: {
        readingTime: 19,
        rating: 5,
        finishDate: "2024-03-20",
        startDate: "2024-03-05",
        notes: "Моральные дилеммы и напряжение на каждой странице. Санкт-Петербург как отдельный персонаж."
      },
      tags: ["classic", "russian-literature", "ethics", "guilt"],
      available: true
    },
    {
      id: "20",
      title: "Clean Code",
      author: {
        name: "Robert C. Martin",
        country: "United States",
        birthYear: 1952
      },
      details: {
        pages: 464,
        genre: ["programming", "software-engineering", "non-fiction"],
        published: "2008-08-01",
        isbn: "978-0132350884",
        language: "English",
        publisher: "Prentice Hall"
      },
      readingStats: {
        readingTime: 9,
        rating: 5,
        finishDate: "2024-02-26",
        startDate: "2024-02-17",
        notes: "Принципы чистого кода пригодились сразу. Особенно про именование и рефакторинг."
      },
      tags: ["code", "best-practices", "refactoring", "design"],
      available: true
    },
    {
      id: "21",
      title: "The Name of the Wind",
      author: {
        name: "Patrick Rothfuss",
        country: "United States",
        birthYear: 1973
      },
      details: {
        pages: 662,
        genre: ["fantasy", "adventure", "epic"],
        published: "2007-03-27",
        isbn: "978-0756404741",
        language: "English",
        publisher: "DAW Books"
      },
      readingStats: {
        readingTime: 16,
        rating: 4,
        finishDate: "2024-03-22",
        startDate: "2024-03-10",
        notes: "Поэтичный стиль и мир Университета. История Квоута затягивает, но хочется больше развязок."
      },
      tags: ["fantasy", "magic", "music", "university"],
      available: true
    },
    {
      id: "22",
      title: "The Little Prince",
      author: {
        name: "Antoine de Saint-Exupéry",
        country: "France",
        birthYear: 1900,
        deathYear: 1944
      },
      details: {
        pages: 96,
        genre: ["children", "philosophy", "classic"],
        published: "1943-04-06",
        isbn: "978-0156012195",
        language: "French",
        publisher: "Reynal & Hitchcock"
      },
      readingStats: {
        readingTime: 2,
        rating: 5,
        finishDate: "2024-01-03",
        startDate: "2024-01-03",
        notes: "Простая форма — глубокий смысл. 'Мы в ответе за тех, кого приручили'."
      },
      tags: ["allegory", "childhood", "friendship", "wisdom"],
      available: true
    },
    {
      id: "23",
      title: "1984",
      author: {
        name: "George Orwell",
        country: "United Kingdom",
        birthYear: 1903,
        deathYear: 1950
      },
      details: {
        pages: 328,
        genre: ["dystopia", "political", "fiction"],
        published: "1949-06-08",
        isbn: "978-0451524935",
        language: "English",
        publisher: "Secker & Warburg"
      },
      readingStats: {
        readingTime: 7,
        rating: 5,
        finishDate: "2024-02-08",
        startDate: "2024-02-02",
        notes: "Тревожно актуально. Новояз и Большой Брат — вечные предупреждения."
      },
      tags: ["totalitarianism", "surveillance", "freedom", "classic"],
      available: false
    },
    {
      id: "24",
      title: "To Kill a Mockingbird",
      author: {
        name: "Harper Lee",
        country: "United States",
        birthYear: 1926,
        deathYear: 2016
      },
      details: {
        pages: 281,
        genre: ["classic", "historical", "fiction"],
        published: "1960-07-11",
        isbn: "978-0061120084",
        language: "English",
        publisher: "J.B. Lippincott & Co."
      },
      readingStats: {
        readingTime: 6,
        rating: 5,
        finishDate: "2024-02-20",
        startDate: "2024-02-14",
        notes: "Этика и сочувствие через взгляд ребёнка. Аттикус — образец честности."
      },
      tags: ["justice", "racism", "morality", "coming-of-age"],
      available: true
    },
    {
      id: "25",
      title: "The Lean Startup",
      author: {
        name: "Eric Ries",
        country: "United States",
        birthYear: 1978
      },
      details: {
        pages: 336,
        genre: ["business", "entrepreneurship", "management"],
        published: "2011-09-13",
        isbn: "978-0307887894",
        language: "English",
        publisher: "Crown Business"
      },
      readingStats: {
        readingTime: 7,
        rating: 4,
        finishDate: "2024-03-03",
        startDate: "2024-02-26",
        notes: "MVP, измерение, обучение — цикл, который стоит применять. Полезно для продуктовых команд."
      },
      tags: ["startup", "lean", "innovation", "product"],
      available: true
    },
    {
      id: "26",
      title: "Meditations",
      author: {
        name: "Marcus Aurelius",
        country: "Roman Empire",
        birthYear: 121,
        deathYear: 180
      },
      details: {
        pages: 304,
        genre: ["philosophy", "stoicism", "classic"],
        published: "0180-01-01",
        isbn: "978-0812968255",
        language: "Greek",
        publisher: "Ancient Manuscripts"
      },
      readingStats: {
        readingTime: 5,
        rating: 5,
        finishDate: "2024-01-18",
        startDate: "2024-01-14",
        notes: "Стойкое спокойствие и практичные мысли. Хорошо читать небольшими порциями."
      },
      tags: ["stoicism", "virtue", "wisdom", "ancient"],
      available: true
    },
    {
      id: "27",
      title: "A Game of Thrones",
      author: {
        name: "George R. R. Martin",
        country: "United States",
        birthYear: 1948
      },
      details: {
        pages: 694,
        genre: ["fantasy", "epic", "political"],
        published: "1996-08-06",
        isbn: "978-0553103540",
        language: "English",
        publisher: "Bantam"
      },
      readingStats: {
        readingTime: 20,
        rating: 5,
        finishDate: "2024-03-25",
        startDate: "2024-03-10",
        notes: "Сложная интрига и множество персонажей. Политические игры держат в напряжении."
      },
      tags: ["fantasy", "houses", "dragons", "intrigue"],
      available: true
    },
    {
      id: "28",
      title: "The Pragmatic Programmer",
      author: {
        name: "Andrew Hunt & David Thomas",
        country: "United States",
        birthYear: 1964
      },
      details: {
        pages: 352,
        genre: ["programming", "software-engineering", "non-fiction"],
        published: "1999-10-30",
        isbn: "978-0201616224",
        language: "English",
        publisher: "Addison-Wesley"
      },
      readingStats: {
        readingTime: 8,
        rating: 5,
        finishDate: "2024-03-18",
        startDate: "2024-03-12",
        notes: "Советы, которые не устаревают: автоматизация, обратная связь, маленькие шаги."
      },
      tags: ["craftsmanship", "best-practices", "development"],
      available: true
    },
    {
      id: "29",
      title: "Brave New World",
      author: {
        name: "Aldous Huxley",
        country: "United Kingdom",
        birthYear: 1894,
        deathYear: 1963
      },
      details: {
        pages: 288,
        genre: ["dystopia", "science-fiction", "classic"],
        published: "1932-01-01",
        isbn: "978-0060850526",
        language: "English",
        publisher: "Chatto & Windus"
      },
      readingStats: {
        readingTime: 6,
        rating: 4,
        finishDate: "2024-03-07",
        startDate: "2024-03-03",
        notes: "Мир потребления и контроля. Контраст с индивидуальностью впечатляет."
      },
      tags: ["dystopia", "society", "freedom", "technology"],
      available: false
    },
    {
      id: "30",
      title: "The Silent Patient",
      author: {
        name: "Alex Michaelides",
        country: "Cyprus",
        birthYear: 1977
      },
      details: {
        pages: 336,
        genre: ["thriller", "mystery", "psychology"],
        published: "2019-02-05",
        isbn: "978-1250301697",
        language: "English",
        publisher: "Celadon Books"
      },
      readingStats: {
        readingTime: 7,
        rating: 4,
        finishDate: "2024-03-21",
        startDate: "2024-03-15",
        notes: "Неожиданный твист ближе к финалу. Динамично и атмосферно."
      },
      tags: ["mystery", "psychology", "twist", "crime"],
      available: true
    },
    {
      id: "31",
      title: "The Art of War",
      author: {
        name: "Sun Tzu",
        country: "China",
        birthYear: -544
      },
      details: {
        pages: 112,
        genre: ["philosophy", "strategy", "classic"],
        published: "0500-01-01",
        isbn: "978-1590302255",
        language: "Chinese",
        publisher: "Ancient Manuscripts"
      },
      readingStats: {
        readingTime: 2,
        rating: 5,
        finishDate: "2024-01-12",
        startDate: "2024-01-12",
        notes: "Кратко и по делу. Принципы применимы в бизнесе и жизни, не только в войне."
      },
      tags: ["strategy", "leadership", "wisdom", "tactics"],
      available: true
    }
  ]
};

function searchBooks(data, filters, page, limit) {
      try {

      let error = {
        errorCode: 400, 
        errorMessage: 'ошибка поля'
      };
      
      if(filters?.genre) {
        if(!Array.isArray(filters.genre)) {
          error.errorMessage = `${error.errorMessage} genre not array`
        } else {
          let checkTypeOfArrayGenre = filters.genre.every(item => typeof item === 'string');             
          if (!checkTypeOfArrayGenre) {
               error.errorMessage = `${error.errorMessage} genre has not string in array`
          }
        }
      }

      if(filters?.tags) {
        if(!Array.isArray(filters.tags)) {
          error.errorMessage = `${error.errorMessage} tags not array`
        } else {
          let checkTypeOfArrayTags = filters.tags.every(item => typeof item === 'string');             
          if (!checkTypeOfArrayTags) {
               error.errorMessage = `${error.errorMessage} tags has not string in array`
          }
        }
      }

      if(filters?.pages) {
        if(typeof filters.pages !== "number") {
          error.errorMessage = `${error.errorMessage} pages has not number in object`
        }
      }

      if(filters?.rating) {
        if(typeof filters.rating !== "number") {
          error.errorMessage = `${error.errorMessage} rating has not number in object`
        }
      }

      if(filters?.language) {
        if(typeof filters.language !== "string") {
          error.errorMessage = `${error.errorMessage} language has not string in object`
        }
      }

      if(filters?.yearRange) {
        if(!Array.isArray(filters.yearRange)) {
          error.errorMessage = `${error.errorMessage} yearRange not array`
        } else {
          let checkTypeOfArrayYearRange = filters.yearRange.every(item => typeof item === 'number');             
          if (!checkTypeOfArrayYearRange) {
               error.errorMessage = `${error.errorMessage} yearRange has not number in array`
          }
        }
      }
      
      if(filters?.searchText) {
        if(typeof filters.searchText !== "string") {
          error.errorMessage = `${error.errorMessage} searchText has not string in object`
        }
      }

      if(page) {
          if (typeof page === "string") {
          error.errorMessage = `${error.errorMessage} page has not number`;
        } else if(typeof page === "number" && page >= 1) {
          console.log("page has number")
        }
      }

      if(limit) {
        if (typeof limit === "string") {
            error.errorMessage = `${error.errorMessage} limit has not number`;
          } else if(typeof limit === "number" && limit >= 1) {
            console.log("limit has number")
          }
        }
    
      return error

    } catch (error) {
          console.log("Возникла ошибка!");
          return [];
        }
  }



// searchBooks(libraryData, {genre: [], tags: [], 
//   minPages: , maxPages: , minRating: , language: , 
//   yearRange: [], searchText: })