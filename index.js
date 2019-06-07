// @flow
"use strict";
const yaml = require("js-yaml");
const { flatten } = require("flat");

module.exports = function(source /* : string */) {
  // eslint-disable-next-line no-unused-expressions
  this && this.cacheable && this.cacheable();
  const result = yaml.safeLoad(source, { json: true });
  return JSON.stringify(flatten(result), null, "\t");
};
