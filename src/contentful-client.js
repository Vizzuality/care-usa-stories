import * as contentful from 'contentful';

export default contentful.createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  space: process.env.REACT_APP_SPACE_ID
});
