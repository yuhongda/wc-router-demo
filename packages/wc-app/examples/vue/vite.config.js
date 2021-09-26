/**
 * @type { import('vite').UserConfig }
 */
const config = {
  vueCompilerOptions: {
    isCustomElement: tag => tag.startsWith('scf-')
  },
  optimizeDeps: {
    exclude: ['@scf/vite-react-webcomponents']
  }
};

module.exports = config;
