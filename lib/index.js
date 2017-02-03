/**
 * @fileoverview lint content using eslint
 * @author Brian
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------



var retext = require('retext');
var simplify = require('retext-simplify');
var report = require('vfile-reporter');
var espree = require("espree");
var visit = require('unist-util-visit');
var fs = require('fs');


var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

// import processors
module.exports.processors = {
  // ".md": require('./processors/md'),
  // ".txt": require('./processors/txt')
  // add your processors here
};

