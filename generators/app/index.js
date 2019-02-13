'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`Satu dua tiga... Welcome to ${chalk.red('generator-tuwaga')}!`));

    const prompts = [
      {
        type: 'input',
        name: 'serviceApiName',
        message: "What's the service api name?",
        default: 'Satu Dua Tiga...'
      },
      {
        type: 'input',
        name: 'serviceApiPackageName',
        message: "How do we define this service api's package name?",
        default: 'satu-dua-tiga'
      },
      {
        type: 'input',
        name: 'serviceApiRoot',
        message: "What's the service api's root?",
        default: ''
      },
      {
        type: 'input',
        name: 'swaggerUser',
        message: 'Set swagger docs user',
        default: 'developer'
      },
      {
        type: 'input',
        name: 'swaggerPassword',
        message: 'Set swagger docs password',
        default: 'supersecretpassword'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    var props = this.props;
    var copy = this.fs.copy.bind(this.fs);
    var copyTpl = this.fs.copyTpl.bind(this.fs);
    var tPath = this.templatePath.bind(this);
    var dPath = this.destinationPath.bind(this);

    copy(tPath('editorconfig'), dPath('.editorconfig'));
    copy(tPath('eslintrc.json'), dPath('.eslintrc.json'));
    copyTpl(tPath('gitignore'), dPath('.gitignore'));
    copyTpl(tPath('LICENSE'), dPath('LICENSE'));
    copyTpl(tPath('_package.json'), dPath('package.json'), props);
    copyTpl(tPath('config.js'), dPath('config.js'));
    copyTpl(tPath('config.json'), dPath('config.json'), props);
    copyTpl(tPath('app.js'), dPath('app.js'), props);
    copyTpl(tPath('README.md'), dPath('README.md'), props);
    copyTpl(tPath('views/index.ejs'), dPath('views/index.ejs'), props);
    copyTpl(tPath('tests/controllers.js'), dPath('tests/controllers.js'), props);
    copyTpl(tPath('controllers/index.js'), dPath('controllers/index.js'), props);
    copyTpl(tPath('controllers/docs.js'), dPath('controllers/docs.js'), props);
    copyTpl(tPath('controllers/ping.js'), dPath('controllers/ping.js'), props);

    // This.fs.copy(
    //   this.templatePath('controllers'),
    //   this.destinationPath('controllers')
    // );
  }
};
