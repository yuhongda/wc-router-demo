const config = {
  plugins: [
    require('postcss-custom-properties')({
      preserve: false,
    }),
    require('postcss-import')({}),
    require('precss')({}),
    require('autoprefixer')({
      cascade: false,
    }),
  ],
};

if (process.env.SNOWPACK_PUBLIC_IS_SNOWPACK === 'true') {
  config.plugins.push(
    require('postcss-url')({
      url: 'inline',
      basePath: 'src/assets/images',
    })
  );
}

module.exports = config;
