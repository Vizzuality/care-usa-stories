import { schema } from 'normalizr';
import kebabCase from 'lodash/kebabCase';
const contentful2Normalizr = {
  idAttribute: value => value.sys.id,
  processStrategy: value => ({ ...value.fields })
};

const fileStrategy = {
  ...contentful2Normalizr,
  processStrategy: value => value.fields && ({ ...value.fields.file })
};

const storyStrategy = {
  ...contentful2Normalizr,
  idAttribute: v => kebabCase(v.fields.title)
};

const spreadFileStrategy = {
  ...contentful2Normalizr,
  processStrategy: ({ fields: { file, ...fields } }) => ({ ...fields, ...file })
};

const file = new schema.Entity('file', {}, fileStrategy);
const picture = new schema.Entity('picture', { file }, contentful2Normalizr);
const category = new schema.Entity('category', {}, contentful2Normalizr);
const country = new schema.Entity('country', {}, contentful2Normalizr);
const photo = new schema.Entity('photo', {}, spreadFileStrategy);
const author = new schema.Entity('author', { photo }, contentful2Normalizr);
const video =  new schema.Entity('video', {}, spreadFileStrategy);
const story = new schema.Entity('story',
  {
    pictures: [picture],
    authors: [author],
    countries: [country],
    videos: [video]
  }, storyStrategy);

export const stories = [story];
export const categories = [category];
export const countries = [country];
