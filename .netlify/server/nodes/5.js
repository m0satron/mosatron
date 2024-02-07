

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/works/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.AnG_1UxQ.js","_app/immutable/chunks/scheduler.9kRM9qci.js","_app/immutable/chunks/index.SNhkTtVk.js","_app/immutable/chunks/images.1wk1JpVB.js"];
export const stylesheets = ["_app/immutable/assets/5.uZyjQvYj.css","_app/immutable/assets/images.nTJFKApq.css"];
export const fonts = [];
