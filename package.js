Package.describe({
  name: 'apollinaire:vulcan-crisp',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A package to integrate crisp.chat into Vulcan',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Apollinaire/vulcan-crisp',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use(['ecmascript','vulcan:core@1.9.1']);
  api.mainModule('client/main.js', 'client');
  api.mainModule('server/main.js', 'server');
});
