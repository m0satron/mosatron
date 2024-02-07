

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.E4FrMDum.js","_app/immutable/chunks/scheduler.9kRM9qci.js","_app/immutable/chunks/index.SNhkTtVk.js","_app/immutable/chunks/entry.WuoifBit.js"];
export const stylesheets = [];
export const fonts = [];
