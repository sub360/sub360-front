const { build } = require('vite')

  ; (async () => {
    // All options are optional.
    // check out `src/node/build/index.ts` for full options interface.
    const result = await build({
      rollupInputOptions: {
        // https://rollupjs.org/guide/en/#big-list-of-options
      },
      rollupOutputOptions: {
        // https://rollupjs.org/guide/en/#big-list-of-options
      },
      rollupPluginVueOptions: {
        // https://github.com/vuejs/rollup-plugin-vue/tree/next#options
      }
      // ...
    });

    console.log("build index.ts execution.");
  })()