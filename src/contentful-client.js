import * as contentful from 'contentful';

const client = contentful.createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  space: process.env.REACT_APP_SPACE_ID
});

// Get countries
// client.getEntries({content_type: 'country', order: 'fields.name'});

// Get Latest Stories
// client.getEntries({
//     content_type: 'story',
//     order: 'fields.story_date',
//     'limit': 3
//   });


export default client;