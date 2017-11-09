import { schema } from 'normalizr';

const contentful2Normalizr = {
  idAttribute: value => console.log(value) || value.sys.id,
  processStrategy: value => ({ ...value.fields })
};

const file = new schema.Entity('file', {}, contentful2Normalizr);
const picture = new schema.Entity('picture', { file }, contentful2Normalizr);
const story = new schema.Entity('story', { pictures: [picture] }, contentful2Normalizr);

export const storiesSchema = [story];