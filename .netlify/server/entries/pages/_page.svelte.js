import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { i as images } from "../../chunks/images.js";
const css$1 = {
  code: '.button.svelte-hs2juu{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:8px 16px;border-radius:8px;background-color:rgba(255, 255, 255, 0.2);backdrop-filter:blur(5px);border:1px solid rgba(255, 255, 255, 0.3);color:white;font-size:16px;cursor:pointer;transition:background-color 0.3s ease}.button.svelte-hs2juu:hover{background-color:rgba(255, 255, 255, 0.3)}.button-icon.svelte-hs2juu{width:24px;height:24px;font-family:"Material Icons";display:inline-flex;align-items:center;justify-content:center}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = null } = $$props;
  let { label = "" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$1);
  return `<button class="button svelte-hs2juu">${icon ? `<span class="button-icon svelte-hs2juu">${escape(icon)}</span>` : ``} ${escape(label)} </button>`;
});
const css = {
  code: ".parallax-container.svelte-1dpkl4s{position:relative;overflow:hidden;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;height:var(--height);border-radius:8px}.text-content.svelte-1dpkl4s{position:absolute;right:2%;width:fit-content;height:60%;margin-top:7vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:rgba(255, 255, 255, 0.2);backdrop-filter:blur(10px);border-radius:8px;padding:24px;border:1px solid rgba(255, 255, 255, 0.3);box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);will-change:transform;transform:translate3d(0, calc(var(--yPos) * 1px), 0)}",
  map: null
};
const Parallax = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { speed = 0.5 } = $$props;
  let { imageURL = "" } = $$props;
  let { height = "50vh" } = $$props;
  let yPos = 0;
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.imageURL === void 0 && $$bindings.imageURL && imageURL !== void 0)
    $$bindings.imageURL(imageURL);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css);
  return `<div class="parallax-container svelte-1dpkl4s" style="${"background-image: url('" + escape(imageURL, true) + "'); --height: " + escape(height, true) + ";"}"><div class="text-content svelte-1dpkl4s" style="${"--yPos: " + escape(yPos, true)}">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = "" } = $$props;
  let { title = "" } = $$props;
  let { content = "" } = $$props;
  const index = Math.floor(Math.random() * images.length);
  const currentImage = images[index];
  const imageURL = `${"https://ucarecdn.com/"}/${currentImage.id}/-/quality/smart_retina/-/format/auto/`;
  const text = currentImage.title;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `${validate_component(Parallax, "Parallax").$$render($$result, { speed: 0.3, imageURL }, {}, {
    default: () => {
      return `<div><h1>${escape(text)}</h1> <a href="/works">${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "See all works",
          icon: "arrow_forward"
        },
        {},
        {}
      )}</a></div>`;
    }
  })}`;
});
export {
  Page as default
};
