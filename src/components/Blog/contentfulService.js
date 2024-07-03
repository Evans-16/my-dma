import { createClient } from 'contentful';

const client = createClient({
  space: "yz7ykimbw7tb", 
  accessToken: "NZFes6tW1EermLU7GmLboKXSyY3Ok34IHjDvDjvIchA"
});

export const fetchBlogPosts = async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'blog', 
      order: '-fields.createDate'
    });
    console.log('Contentful entries:', entries); 
    return entries.items.map(item => ({ id: item.sys.id, ...item.fields }));
  } catch (error) {
    console.error('Error fetching entries from Contentful:', error); 
    throw error;
  }
};