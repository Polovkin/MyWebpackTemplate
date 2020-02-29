const sortCSSmq = require('sort-css-media-queries');
// const colors = require('colors');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker')({
      sort: sortCSSmq,
    }),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
    require('colorguard'),
  ],
};


// require('doiuse')({
//   ignore: ['rem'],
//   ignoreFiles: ['**/normalize.css'],
//   //onFeatureUsage: function(usageInfo) { }
//   onFeatureUsage(info) {
//     const selector = info.usage.parent.selector;
//     const property = `${info.usage.prop}: ${info.usage.value}`;
//
//     let status = info.featureData.caniuseData.status.toUpperCase();
//
//     if (info.featureData.missing) {
//       status = 'NOT SUPPORTED'.red;
//     } else if (info.featureData.partial) {
//       status = 'PARTIAL SUPPORT'.yellow;
//     }
//
//     console.log(`\n${status}:\n\n    ${selector} {\n        ${property};\n    }\n`);
//   }
// }),
