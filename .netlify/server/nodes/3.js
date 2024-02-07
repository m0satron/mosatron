

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.3Js2-gRr.js","_app/immutable/chunks/scheduler.9kRM9qci.js","_app/immutable/chunks/index.SNhkTtVk.js"];
export const stylesheets = [];
export const fonts = [];
