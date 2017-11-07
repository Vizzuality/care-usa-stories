// import everything from contentful
import * as contentful from 'contentful'

const accessToken = '358d3ee32ab5d07cbb9e4f045f035151360e814023cad7e584ca84e02f695bd2';
const spaceId = 'z7w9csq529dx';
var client = contentful.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: accessToken,
  space: spaceId
});

// Get countries
client.getEntries({'content_type': 'country', 'order': 'fields.name'})
.then((entries) => {
  console.log("fetching countries");
  console.log(entries.items)
});

// Get Sectors
client.getEntries({'content_type': 'sectors', 'order': 'fields.name'})
.then((entries) => {
  console.log("Fetching sectors aka Categories");
  console.log(entries.items)
});

// Get Latest Stories
client.getEntries({
  'content_type': 'story',
  'order': 'fields.story_date',
  'limit': 3
})
.then((entries) => {
  console.log("Fetching latest stories");
  console.log(entries.items)
});


// Get Stories
client.getEntries({'content_type': 'story', 'order': 'fields.title'})
.then((entries) => {
  console.log("Fetching stories");
  console.log(entries.items)
})

