import { c as create_ssr_component, e as escape, d as add_attribute, f as createEventDispatcher, v as validate_component, h as compute_slots, i as each } from "../../../chunks/ssr.js";
import { i as images } from "../../../chunks/images.js";
const css$3 = {
  code: ".card.svelte-13yy5xf.svelte-13yy5xf{background:rgba(255, 255, 255, 0.75);backdrop-filter:blur(10px);border-radius:0.6rem;display:flex;flex-direction:column;overflow:hidden;transition:transform 0.2s ease-in-out;padding:1rem;border:1px solid rgba(255, 255, 255, 0.18);box-shadow:0 4px 6px rgba(0, 0, 0, 0.1)}.card.svelte-13yy5xf .card-image.svelte-13yy5xf{width:50%}.card.svelte-13yy5xf img.svelte-13yy5xf{border-radius:8px;width:100%;height:auto;object-fit:cover}.card.svelte-13yy5xf .card-content.svelte-13yy5xf{padding:0 1rem;display:flex;flex-direction:column;align-items:center;width:50%}.card.svelte-13yy5xf .card-content .title.svelte-13yy5xf{width:100%;text-align:center;font-weight:bold}@media(min-width: 768px){.card.svelte-13yy5xf.svelte-13yy5xf{flex-direction:row}}.divider.svelte-13yy5xf.svelte-13yy5xf{width:40%;height:1px;background:#3a4f7f;margin:1rem 0}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { content = "" } = $$props;
  let { image = "" } = $$props;
  let { src = image } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css$3);
  return `<div class="${"card " + escape($$props.class, true) + " svelte-13yy5xf"}">${image ? `<div class="card-image svelte-13yy5xf"><img${add_attribute("src", src, 0)} alt="Card" class="svelte-13yy5xf"></div>` : ``} <div class="card-content svelte-13yy5xf"><h2 class="title svelte-13yy5xf">${escape(title)}</h2> <div class="divider svelte-13yy5xf"></div> <p>${escape(content)}</p></div> </div>`;
});
const css$2 = {
  code: ".thumbnail.svelte-183logo{background:white;border-radius:8px;overflow:hidden;transition:transform 0.2s ease-in-out}",
  map: null
};
const ThumbNail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { src = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css$2);
  return `<div><img${add_attribute("src", src, 0)} alt="thumbnail" class="thumbnail svelte-183logo"> </div>`;
});
const css$1 = {
  code: ".dialog-container.svelte-puoll5{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.dialog-backdrop.svelte-puoll5{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.6);backdrop-filter:blur(4px)}.dialog-content.svelte-puoll5{width:fit-content;height:auto;position:relative;background:transparent;z-index:2}",
  map: null
};
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { image = "" } = $$props;
  let { title = "" } = $$props;
  let { content = "" } = $$props;
  let { isOpen = false } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  $$result.css.add(css$1);
  return `${isOpen ? `<div class="dialog-container svelte-puoll5"><div class="dialog-backdrop svelte-puoll5"></div> ${$$slots.default ? `<div class="dialog-content svelte-puoll5">${slots.default ? slots.default({}) : ``}</div>` : `${validate_component(Card, "Card").$$render(
    $$result,
    {
      title,
      content,
      class: "dialog-content",
      image
    },
    {},
    {}
  )}`}</div>` : ``}`;
});
const css = {
  code: ".thumnail-container.svelte-1b1aka2{display:flex;gap:1rem;flex-wrap:wrap}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const cdnUrl = "https://ucarecdn.com/";
  let isDialogOpen = false;
  let selectedImage = {
    id: "",
    title: "",
    content: "",
    image: ""
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="thumnail-container svelte-1b1aka2">${each(images, (img) => {
      return `${validate_component(ThumbNail, "ThumbNail").$$render(
        $$result,
        {
          src: `${cdnUrl}/${img.id}/-/resize/200x/`
        },
        {},
        {}
      )}`;
    })} ${validate_component(Dialog, "Dialog").$$render(
      $$result,
      Object.assign({}, selectedImage, { isOpen: isDialogOpen }),
      {
        isOpen: ($$value) => {
          isDialogOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )} </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
