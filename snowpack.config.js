// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-dotenv',
  ],
  devOptions: {
    port: 3001,
    open: 'none',
  },
  packageOptions: {
    knownEntrypoints: ['react-is'],
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  buildOptions: {
    out: 'build',
    clean: true,
  },
}
