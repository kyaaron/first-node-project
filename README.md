# First Node Project (DnD Search App #2)
First standalone node project for 100devs. This project is a bare-bones NodeJS app that manually serves pages without any framework.

Link to a Github-hosted version: https://kyaaron.github.io/first-node-project/

## How it's made
The home page, monsters, and spells pages are all separate HTML pages. The `scripts.js` file has an async function that pulls data from the DnD5e Web API that I've used for past projects. 

The `server.js` uses three built-in Node modules (http, fs, url). I wrote `writeInformation()` to handle repeated code for each regular route. It first strips the '/' from the pathname and creates the filePathURL that will be used as a parameter for `fs.readFile().` Below it checks to see what the filepath is in the URL and runs the `writeInformation()` to serve up the right page.

I use the DnD5e API for the information served on each page.

To run this locally, you can do the following steps:
1. Download the repository code via `git clone`
2. In your terminal, navigate to the project directory
3. Run `node server.js`
4. Go to http://localhost:8000/ in your browser

## Optmizations
- Eventually I'll redo this project, or something similar, with ExpressJS.

## Lessons learned
When using vanilla Node.js, I need to check for every single source mentioned on my HTML page. The browser checks for these, and if I don't include one, it will cause an infinite loading error. I ran into this initially with favicon.ico, styles.css, and scripts.js.

This is the first major project I've used asynchronous Javascript functions. In `scripts.js`, the `makeRequest()` function fetches the API information using async/await keywords.

Also, I had to write different href requests in my `index.html` page, because I'm serving up these pages via HTTP and my server instead of the filesystem. So I wrote `href='/spells'` for example, which will tell the browser to make a request to my server for that page. This was new to me.

I also learned various HTML codes. I knew about 200 and 404, but I added a new one to this project (204) which means there is no content. This is for the favicon.ico check, which returns no content because I did not add favicons to this project (at this time).