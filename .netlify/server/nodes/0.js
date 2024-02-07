

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.U_vawu_a.js","_app/immutable/chunks/scheduler.9kRM9qci.js","_app/immutable/chunks/index.SNhkTtVk.js"];
export const stylesheets = ["_app/immutable/assets/0.bRc1SKU3.css"];
export const fonts = [];
