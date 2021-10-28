import preprocess from 'svelte-preprocess';

export default {
  plugins: [
    svelte({
      preprocess: preprocess()
    })
  ],
}