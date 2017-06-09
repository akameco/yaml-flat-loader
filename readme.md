# yaml-flat-loader [![Build Status](https://travis-ci.org/akameco/yaml-flat-loader.svg?branch=master)](https://travis-ci.org/akameco/yaml-flat-loader)

> YAML Loader (flat!) for webpack

Converts YAML to valid flat JSON.
If you want to JS Object, chain it with json-loader.

## Install

```
$ npm install yaml-flat-loader
```


## Usage

hello.yml

```yaml
hello:
  world:
    webpack
```

webpack.config.js

```json
module: {
  rules: [
    {
      test: /\.yml$/,
      use: [{ loader: 'json-loader' }, { loader: 'yaml-flat-loader' }]
    }
  ]
}
```

and then.

```js
import hello from './hello.yml'

console.log(hello)
//  { 'hello.world': 'webpack' }
```


## License

MIT © [akameco](http://akameco.github.io)
