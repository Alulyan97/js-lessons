function searchBooks(data, filters, page, limit) {
      try {

      let errors = [];

      // let error = {
      //   errorCode: 400, 
      //   errorMessage: 'ошибка поля'
      // };
      
      if(filters?.genre) {
        if(!Array.isArray(filters.genre)) {
          errors.push("genre must be array")
        } else {
          let checkTypeOfArrayGenre = filters.genre.every(item => typeof item === 'string');             
          if (!checkTypeOfArrayGenre) {
                errors.push("genre must be array")
          }
        }
      }

      if(filters?.tags) {
        if(!Array.isArray(filters.tags)) {
           errors.push("tags must be array")
        } else {
          let checkTypeOfArrayTags = filters.tags.every(item => typeof item === 'string');             
          if (!checkTypeOfArrayTags) {
                errors.push("tags must be array")
          }
        }
      }

      if(filters?.minPages) {
        if(typeof filters.minPages !== "number") {
           errors.push("minPages must be number")
        }
      }

      if(filters?.maxPages) {
        if(typeof filters.maxPages !== "number") {
           errors.push("maxPages must be number")
        }
      }

      if(filters?.rating) {
        if(typeof filters.rating !== "number") {
           errors.push("rating must be number")
        }
      }

      if(filters?.language) {
        if(typeof filters.language !== "string") {
           errors.push("language must be string")
        }
      }

      if(filters?.yearRange) {
        if(!Array.isArray(filters.yearRange)) {
           errors.push("yearRange must be array")
        } else {
          let checkTypeOfArrayYearRange = filters.yearRange.every(item => typeof item === 'number');             
          if (!checkTypeOfArrayYearRange) {
                errors.push("yearRange must be array")
          }
        }
      }
      
      if(filters?.searchText) {
        if(typeof filters.searchText !== "string") {
           errors.push("searchText must be string")
        }
      }

      if(page) {
          if (typeof page === "string") {
           errors.push("page must be number")
        } else if(typeof page === "number" && page >= 1) {
          console.log("page has number")
        }
      }

      if(limit) {
        if (typeof limit === "string") {
             errors.push("page must be number")
          } else if(typeof limit === "number" && limit >= 1) {
            console.log("limit has number")
          }
        }
    
      if(errors.length > 0) {
        return {
          errorCode: 400, 
          errorMessage: errors.join(', ')
        }
      }

      let results = [];

      for (const book of data.books) {

        if(filters?.tags && !filters.tags.every(tag => book.tags.includes(tag))) {
          continue;
        }

        if(filters?.genre && !filters.genre.every(genre => book.details.genre.includes(genre))) {
          continue;
        }

        if(filters?.minPages && book.details.page < filters.minPages) {
          continue;
        }

        if(filters?.maxPages && book.details.page > filters.maxPages) {
          continue;
        }

        if(filters?.minRating && book.readingStats.rating < filters.minRating) {
          continue;
        }

        if(filters?.language && !filters.language.every(lang => book.details.language.includes(lang))) {
          continue;
        }

        if(filters?.yearRange && !filters.yearRange.every(year => book.details.yearRange.includes(year))) {
          continue;
        }

        if(filters?.searchText && !filters.searchText.every(search => book.details.searchText.includes(search))) {
          continue;
        }

      }
      return 

    } catch (error) {
          console.log("Возникла ошибка!");
          return [];
        }
  }



// searchBooks(libraryData, {genre: [], tags: [], 
//   minPages: , maxPages: , minRating: , language: , 
//   yearRange: [], searchText: })