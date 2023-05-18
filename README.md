# Vite Plugin to show Env Values when Building

This plugin helps us show some important env values before compiling.

## Install

```
npm i -s --dev @asika32764/vite-plugin-show-env

# OR

yarn add @asika32764/vite-plugin-show-env --dev
```

## Show ENV before Building

Add this config to  `vite.config.ts`:

```javascript
// ...
import showEnv from '@asika32764/vite-plugin-show-env';

export default defineConfig(({mode}) => {
  // ...

  return {
    plugins: [/* ... */, showEnv([
      'VITE_API_ENDPOINT',
      'VITE_APP_DEBUG'
    ])],
    // ...
  };
});
```

Then when run `vite` or `vite build`, this env will show up:

```shell

MODE: production
ENVIRONMENT VARIABLES
  VUE_APP_API_ENDPOINT: https://your-site.com/api/v1/
  VUE_APP_DEBUG: 1

vite v4.x.x building for production...
```
