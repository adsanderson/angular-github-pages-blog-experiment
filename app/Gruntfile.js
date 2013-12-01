// Generated on 2013-11-13 using generator-angular 0.6.0-rc.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    markdown: {
      all: {
        files: [
          {
            expand: true,
            src: 'posts/*.md',
            dest: 'app/data/',
            ext: '.html'
          }
        ],
        options: {
          template: 'app/markdown-template/template.html',
          // preCompile: function(src, context) {},
          // postCompile: function(src, context) {},
          // templateContext: {},
          markdownOptions: {
            gfm: true,
            // highlight: manual,
            // codeLines: {
            //   before: '<span>',
            //   after: '</span>'
            // }
          }
        }
      }
    }
  });

  // custom task
  grunt.registerTask('gitFiles', 'Generate a list of authors in order of first contribution', function(dir) {
    var done = this.async();
    var async = require('async');
    var path = require('path');

    dir = dir || '.';

    grunt.util.spawn({
      cmd: 'git',
      // args: [ "log", "--pretty=%aN <%aE>", dir ]
      args: ['ls-files', 'posts']
    }, function(err, result) {
      if (err) {
        grunt.log.error(err);
        return done(false);
      }

      var files = result.stdout.split('\n');
      var fileMetaData = [];

      function processFile(item, callback) {
        grunt.log.writeln('building meta data for: ' + item);
        grunt.util.spawn({
            cmd: 'git',
            args: ['log', '--format=%aD|%an', item]
          },
          function(err, result) {
            if (err) {
              grunt.log.error(err);
              return done(false);
            }
            var historyArray = result.stdout.split('\n');
            var creationDataString = historyArray.pop();
            var creationDataObj = {
              file: item,
              title: path.basename(item, '.md').replace(/[_-]/g, ' '),
              compiledPost: path.basename(item, '.md'),
              author: creationDataString.split('|')[1],
              creationDate: Date.parse(creationDataString.split('|')[0])
            };
            fileMetaData.push(creationDataObj);
            grunt.log.writeln('meta data for: ' + item + ' created');
            callback();
          });
      }

      async.eachSeries(files, processFile, function() {
        grunt.file.write('app/data/metadata.json', JSON.stringify(fileMetaData));
        grunt.log.writeln('metadata.json created');
        done();
      });
    });
  });

  grunt.registerTask('default', [
    'gitFiles',
    'markdown'
  ]);  
};