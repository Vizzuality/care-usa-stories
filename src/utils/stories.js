
export function getImage(pictures, stories = {}) {
  if (!pictures) return;
  const [image] = pictures;
  const images = stories.picture || {};
  const files = stories.file || {};
  const file = images[image] && images[image].file;
  return files[file] && files[file].file;
};