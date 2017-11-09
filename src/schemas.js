import { schema } from 'normalizr';

const contentful2Normalizr = {
  idAttribute: value => value.sys.id,
  processStrategy: value => ({ ...value.fields })
};

const story = schema.Entity({}, contentful2Normalizr);
export const stories = [story];