import { schema } from 'normalizr';
import kebabCase from 'lodash/kebabCase';
const contentful2Normalizr = {
  idAttribute: value => value.sys.id,
  processStrategy: value => ({ ...(value.fields || value) })
};

const file = new schema.Entity('file', {}, contentful2Normalizr);
const picture = new schema.Entity('picture', { file }, contentful2Normalizr);
const category = new schema.Entity('category', {}, contentful2Normalizr);
const country = new schema.Entity('country', {}, contentful2Normalizr);
const photo = new schema.Entity('photo', {}, contentful2Normalizr);
const author = new schema.Entity('author', { photo }, contentful2Normalizr);
const story = new schema.Entity('story', { pictures: [picture], authors: [author] }, {
  ...contentful2Normalizr,
  idAttribute: v => kebabCase(v.fields.title)
});

export const stories = [story];
export const categories = [category];
export const countries = [country];
