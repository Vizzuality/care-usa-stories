import * as contentful from 'contentful';

const client = contentful.createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  space: process.env.REACT_APP_SPACE_ID
});

// Get countries
client.getEntries({content_type: 'country', order: 'fields.name'})
  .then((entries) => {
    console.log("fetching countries");
    console.log(entries.items)
  });

// Get Sectors
client.getEntries({content_type: 'sectors', order: 'fields.name'})
  .then((entries) => {
    console.log("Fetching sectors aka Categories");
    console.log(entries.items)
  });

// Get Latest Stories
client.getEntries({
    content_type: 'story',
    order: 'fields.story_date',
    'limit': 3
  })
  .then((entries) => {
    console.log("Fetching latest stories");
    console.log(entries.items)
  });


export default client;