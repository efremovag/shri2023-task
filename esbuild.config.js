const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/script.jsx', 'src/styles.css', 'src/reset.css'],
    outdir: 'docs/',
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
