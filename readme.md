# Notion Blog

![Example Blog Posts Table](./assets/table-view.png)

## Creating Blog Posts

Under CTC Notion > Blog > Projects

1. In Notion click new on the table to add a new row
2. Fill in the Page name, slug, Date, and Authors
3. At the top of the content area add the content you want to show as a preview (keep this under 2 paragraphs)
4. Add a divider block under your preview content (/div or hit '-' until it becomes a div)
5. Add the rest of your content under the divider block

## Running Locally

This is using the unofficial Notion API, but hopefully doesn't break entirely:
`NOTION_TOKEN = 5e755ea78755c533b9294b48b81cbe55f0fafc69dcc2b04ffddcd773cfc7493b850cfacd980b404c193ad916f76849286af8ad4b3ef3b1cde79c74b7acffd7829d956a6760076b269db72ced6749`

`BLOG_INDEX_ID = 5139c44e-2e76-48bc-adbf-61e18e70a6c8`

1. Install dependencies `yarn`
2. Expose `NOTION_TOKEN` and `BLOG_INDEX_ID` in your environment `export NOTION_TOKEN='<your-token>'`and `export BLOG_INDEX_ID='<your-blog-index-id>'` or `set NOTION_TOKEN="<your-token>" && set BLOG_INDEX_ID="<your-blog-index-id>"` for Windows
3. Run next in development mode `yarn dev`
4. Build and run in production mode `yarn build && yarn start`

## Getting Blog Index and Token

IF THE NOTION API BREAKS, THIS IS HOW WE ACCESSED IT FROM BEFORE

To get your blog index value, open Notion and Navigate to the Notion page with the table you created above. While on this page you should be able to get the page id from either:

- the URL, if the URL of your page is https://www.notion.so/Blog-S5qv1QbUzM1wxm3H3SZRQkupi7XjXTul then your `BLOG_INDEX_ID` is `S5qv1QbU-zM1w-xm3H-3SZR-Qkupi7XjXTul`
- the `loadPageChunk` request, if you open your developer console and go to the network tab then reload the page you should see a request for `loadPageChunk` and in the request payload you should see a `pageId` and that is your `BLOG_INDEX_ID`

To get your Notion token, open Notion and look for the `token_v2` cookie.
