## This is a simple starter for vue using Snowpack instead of webpack.  

### after cloning repo:
```
`npm init --yes`
```

### install dependencies:  

```
npm i vue http-vue-loader
```

<code>http-vue-loader</code> converts .vue files into normal js components without a bundler, this does it over http request, can use .vue without a bundle step! 🎉

### dev depencies: 

use es-dev-server or servor, I prefer live server vs code extension  

### prepare package.json: 

For this, its easiest to use snowpacks auto install method. We can also use the --clean flag to make sure we don't include any unwanted dependencies. There are more options on the website.  

```
"scripts": {
    "prepare": "npx snowpack --clean --include 'src/**/*.js'"
  },
  ``` 

After placing import statements in src/main.js, run `npm run prepare` and snowpack will look for every statement with \web_modeule\ in the path and will auto install dependencies. This is a best practice! 😿  

