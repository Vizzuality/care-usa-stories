import { schema } from 'normalizr';
import kebabCase from 'lodash/kebabCase';
const contentful2Normalizr = {
  idAttribute: value => value.sys.id,
  processStrategy: value => ({ ...value.fields })
};

const file = new schema.Entity('file', {}, contentful2Normalizr);
const picture = new schema.Entity('picture', { file }, contentful2Normalizr);
const story = new schema.Entity('story', { pictures: [picture] }, {
  ...contentful2Normalizr,
  idAttribute: v => kebabCase(v.fields.title)
});
const category = new schema.Entity('category', {}, contentful2Normalizr);
const country = new schema.Entity('country', {}, contentful2Normalizr);

export const stories = [story];
export const categories = [category];
export const countries = [country];
