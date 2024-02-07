import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: ".navbar.svelte-6zbx0q{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;width:fit-content}.navbar-brand.svelte-6zbx0q{font-size:1.5rem;font-weight:bold;border-bottom:2px solid #14023e;margin-bottom:0.6rem}.navbar-menu.svelte-6zbx0q{list-style:none;display:flex;justify-content:space-between;width:100%;margin:0;padding:0}.navbar-item.svelte-6zbx0q{font-size:1rem;text-decoration:none}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="navbar svelte-6zbx0q" data-svelte-h="svelte-1ea7pzs"><div class="navbar-brand svelte-6zbx0q"><a href="/">MOSA MAZROUI-SEBDANI</a></div> <ul class="navbar-menu svelte-6zbx0q"><li><a href="about" class="navbar-item svelte-6zbx0q">about</a></li> <li><a href="works" class="navbar-item svelte-6zbx0q">works</a></li> <li><a href="contact" class="navbar-item svelte-6zbx0q">contact</a></li></ul> </nav>`;
});
const css = {
  code: ".content.svelte-cel6a9{margin-top:2rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} <div class="content svelte-cel6a9">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
