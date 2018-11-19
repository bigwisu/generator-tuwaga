'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-tuwaga:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
    assert.file(['.editorconfig']);
    assert.file(['.eslintrc.json']);
    assert.file(['.gitignore']);
    assert.file(['LICENSE']);
    assert.file(['package.json']);
    assert.file(['config.js']);
    assert.file(['config.json']);
    assert.file(['app.js']);
    assert.file(['README.md']);
    assert.file(['views/index.ejs']);
    assert.file(['tests/controllers.js']);
  });
});
