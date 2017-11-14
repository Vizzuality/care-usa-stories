
export function getPictures(pictures, stories = {}) {
  if (!pictures) return;
  return pictures.map(picture => {
    const pictureEntity = stories.picture || {};
    const fileEntity = stories.file || {};
    const file = pictureEntity[picture] && pictureEntity[picture].file;
    return fileEntity[file] && fileEntity[file].file;
  }).filter(p => !!p);
}

export function getAuthors(authors, stories = {}) {
  if (!authors) return;
  return authors.map(id => {
    const authorEntity = stories.author || {};
    const author = authorEntity[id];
    if (author) {
      const photoEntity = stories.photo || {};
      const photo = photoEntity[author.photo];
      return { ...author, photo };
    }
    return author;
  }).filter(a => !!a);
}

export function getCountries(countries, stories = {}) {
  if (!countries) return;
  return countries.map(id => {
    const countryEntity = stories.country || {};
    return countryEntity[id];
  }).filter(a => !!a);
}