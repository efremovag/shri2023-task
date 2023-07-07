const esbuild = require('esbuild');
const { compress } = require('esbuild-plugin-compress');

esbuild
  .build({
    entryPoints: ['src/script.jsx', 'src/styles.css', 'src/reset.css'],
    outdir: 'docs/',
    charset: 'utf8',
    assetNames: 'assets/[name]',
    bundle: true,
    minify: true,
    treeShaking: true,
    //loader: { '.js': 'jsx' },
    loader: {
      '.png': 'file',
      '.svg': 'file',
    },
    write: false,
    plugins: [
      compress({
        exclude: ['**/*.map'],
        emitOrigin: false,
        gzip: true,
        brotli: false,
      }),
    ],
  })
  .catch(() => process.exit(1));
