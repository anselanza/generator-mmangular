> Yeoman generator for AngularJS with [Gulp](http://gulpjs.com/), [Bootstrap](http://getbootstrap.com) and [Sass](http://sass-lang.com/)
> based on [generator-angular](https://github.com/yeoman/generator-angular) and [generator-yangular](https://github.com/loetjvr/generator-yangular)

## Installation

Install `yo`, `gulp`, `bower`, `generator-mmangular`:
```
npm install -g gulp bower yo generator-mmangular
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd my-new-project
```

Run `yo yangular`, optionally passing an app name:
```
yo mmangular [app-name]
```

## Gulpfile
Serve the project at `http://locahost:9000`
```
gulp serve
```
Add the option `--open` to open and serve the project at `http://locahost:9000`
```
gulp serve --open
```
Generate a `dist` directory ready for production
```
gulp build
```
Run Karma tests
```
gulp test
```
Generate [ngDocs](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation) folder with all the generated documentation in a format that can be hosted
```
gulp docs
```

## Sub-generators

Available generators:
```bash
yo mmangular:view name
```

```bash
yo mmangular:controller name
```

```bash
yo mmangular:route name
```

```bash
yo mmangular:directive name
```

```bash
yo mmangular:filter name
```

```bash
yo mmangular:service name
```

```bash
yo mmangular:factory name
```

```bash
yo mmangular:constant name
```

## Editor Plugins
* [EditorConfig](http://editorconfig.org/#download)
* [JSHint](http://jshint.com/install/)
* [JSSC](http://jscs.info/overview.html)

## License

MIT
