var publicAssets = './public/assets';
var sourceFiles = './gulp/assets';

module.exports = {
  publicAssets: publicAssets,
  browserSync: {
    proxy: 'localhost:3000',
    files: ['./app/views/**']
  },
  sass: {
    src: sourceFiles + '/stylesheets/**/*.{sass,scss}',
    dest: publicAssets + '/stylesheets',
    settings: {
      indentedSyntax: true,
      imagePath: '/assets/images'
    }
  },
  images: {
    src: sourceFiles + '/images/**',
    dest: publicAssets + '/images'
  },
  browserify: {
    bundleConfigs: [{
      entries: sourceFiles + '/javascripts/global.coffee',
      dest: publicAssets + '/javascripts',
      outputName: 'global.js',
      extensions: ['.js', '.coffee']
    }]
  }
};
