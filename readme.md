```
mkdir webpack-babel-example
cd webpack-babel-example
git init
yarn init
yarn add webpack babel-loader babel-core babel-preset-env
echo '{ "presets": [ "env" ] }' > .babelrc
mkdir src dist
touch src/app.js
touch src/entry.js
echo '<script src="app.js"></script>' > dist/index.html
./node_modules/.bin/webpack
open dist/index.html
```
