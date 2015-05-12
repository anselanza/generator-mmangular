'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    console.log('init...');
    this.sourceRoot(path.join(__dirname, '../../templates/tasks'));

    this.argument('name', {type: String, required: true});
    this.filename = this.name.toLowerCase();

    this.viewsDir = this.config.get('viewsDir') || this.options.viewsDir;
    console.log('config', this.config);
  },
  writing: {
    file: function() {
      this.template('app/_view.html', this.viewsDir + this.filename + '.html');
      console.log('config viewsDir', this.viewsDir);
    }
  }
});
