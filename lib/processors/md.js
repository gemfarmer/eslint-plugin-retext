'use strict'

var unified = require('unified');
var parse = require('remark-parse');
var lint = require('remark-lint');
var remark2retext = require('remark-retext');
var english = require('retext-english');
var equality = require('retext-equality');
var stringify = require('remark-stringify');
var simplify = require('retext-simplify');
// var report = require('vfile-reporter');
var fs = require('fs');

module.exports = {
    // takes text of the file and filename
    preprocess: function(text, filename) {
        // here, you can strip out any non-JS content
        // and split into multiple strings to lint
        // console.log(text, filename)
        return [text];  // return an array of strings to lint
    },

    // takes a Message[][] and filename
    postprocess: function(messages, filename) {
        // `messages` argument contains two-dimensional array of Message objects
        // where each top-level array item contains array of lint messages related
        // to the text that was returned in array from preprocess() method

        // you need to return a one-dimensional array of the messages you want to keep

        var errors;
        var contents = fs.readFileSync(filename, 'utf8');

        unified()
            .use(parse)
            .use(lint)
            .use(remark2retext, unified().use(english).use(equality).use(simplify))
            .use(stringify)
            .process(contents, function (err, file) {
                errors = file.messages
            });

        if (errors.length > 0) {
          errors = errors.map(function (error) {
              return {
                ruleId: error.source,
                severity: error.fatal ? 2 : 1,
                message: error.message,
                source: error.file,
                line: error.line,
                column: error.column
              }
          })
        }

        return errors;
    }
}
