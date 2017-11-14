
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
    const photoEntity = stories.photo || {};
    const photo = photoEntity[author.photo];
    return { ...author, photo };
  }).filter(a => !!a);
}