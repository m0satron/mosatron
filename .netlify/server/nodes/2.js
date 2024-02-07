

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.wHOPa5pH.js","_app/immutable/chunks/scheduler.9kRM9qci.js","_app/immutable/chunks/index.SNhkTtVk.js","_app/immutable/chunks/images.1wk1JpVB.js"];
export const stylesheets = ["_app/immutable/assets/2.rUz9LyBM.css","_app/immutable/assets/images.nTJFKApq.css"];
export const fonts = [];
