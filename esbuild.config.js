const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/script.jsx', 'src/styles.css'],
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
  })
  .catch(() => process.exit(1));
