function searchBooks(data, filters, page, limit) {

    let errors = [];

    let results = [];

    if (filters?.genre) {
        if (!Array.isArray(filters.genre)) {
            errors.push("genre must be array")
        } else {
            let checkTypeOfArrayGenre = filters.genre.every(item => typeof item === 'string');
            
            if (!checkTypeOfArrayGenre) {
                errors.push("genre must be array of strings")
            } else {
               results = data.books.filter(book => 
                    filters.genre.some(genre => 
                        book.details.genre.includes(genre)))
            }
        }
    }

    if (filters?.tags) {
        if (!Array.isArray(filters.tags)) {
            errors.push("tags must be array");
        } else {
            let checkTypeOfArrayTags = filters.tags.every(item => typeof item === 'string');
            
            if (!checkTypeOfArrayTags) {
                errors.push("tags must be array of strings");
            } else {
                if(results.length > 0) {
                results = results.filter(book => 
                    filters.tags.some(tag => 
                        book.tags.includes(tag))) 
                } else { 
                    results = data.books.filter(book => 
                    filters.tags.some(tag => 
                        book.tags.includes(tag))) 
                }
            }
        }
    }

    if (filters?.minPages) {
        if (typeof filters.minPages !== "number") {
            errors.push("minPages must be number");
        } else { 
            if(results.lenght > 0) {
            results = results.filter(book => 
                book.details.pages >= filters.minPages)
            } else { 
                results = data.books.filter(book => 
                book.details.pages >= filters.minPages)
            }
        }
    }

    if (filters?.maxPages) {
        if (typeof filters.maxPages !== "number") {
            errors.push("maxPages must be number");
        } else { 
            if(results.lenght > 0) {
            results = results.filter(book => 
                book.details.pages <= filters.maxPages)
            } else { 
                results = data.books.filter(book => 
                book.details.pages <= filters.maxPages)
            }
        }
    }

    if (filters?.minRating) {
        if (typeof filters.minRating !== "number") {
            errors.push("minRating must be number");
        } else {
            if(results.lenght > 0) {
            results = results.filter(book => 
                book.readingStats.rating >= filters.minRating)
            } else {
                results = data.books.filter(book => 
                book.readingStats.rating >= filters.minRating)
            }
        } 
    }

      if(filters?.language) {
        if(typeof filters.language !== "string") {
           errors.push("language must be string")
        } else {
            if(results.length > 0) {
            results = results.filter(book => 
                book.details.language === filters.language)
            } else {
                results = data.books.filter(book => 
                book.details.language === filters.language)
            }
        }
    }

    if (filters?.yearRange) {
    if (!Array.isArray(filters.yearRange)) {
        errors.push("yearRange must be array")
    } else {
        let checkTypeOfArrayYearRange = filters.yearRange.every(item => typeof item === 'number');
            
        if (!checkTypeOfArrayYearRange) {
            errors.push("yearRange must be array of numbers")
        } else {
            if(results.length > 0) {
                results = results.filter(book => {
                    const year = new Date(book.details.published).getFullYear();
                    return year >= filters.yearRange[0] && year <= filters.yearRange[1];
                })
            } else {
                results = data.books.filter(book => {
                    const year = new Date(book.details.published).getFullYear();
                    return year >= filters.yearRange[0] && year <= filters.yearRange[1];
                })
            }
        }
    }
}
      
    if(filters?.searchText) {
    if(typeof filters.searchText !== "string") {
        errors.push("searchText must be string")
    } else {
        const searchTerm = filters.searchText.toLowerCase();
        
        if(results.length > 0) {
            results = results.filter(book => 
                book.readingStats.notes.toLowerCase().includes(searchTerm)
            )
        } else {
            results = data.books.filter(book => 
                book.readingStats.notes.toLowerCase().includes(searchTerm)
            )
        }
    }
}

       return results
  
      }
  



// searchBooks(libraryData, {genre: [], tags: [], 
//   minPages: , maxPages: , minRating: , language: , 
//   yearRange: [], searchText: })