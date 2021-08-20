export const arrayElementsToObject = (arr) =>
  arr.reduce((obj, elm) => ((obj[elm.name] = elm.value), obj), {});

export const arrayToKeyValueObject = (arr) =>
  arr.reduce(
    (obj, val, i) =>
      i % 2 === 0 ? [...obj, { [arr[i]]: arr[i + 1] }] : [...obj],
    []
  );

export const objectTOArray = (obj) => {
  const sub = Object.values(obj);
  return sub.reduce(
    (obj, val, i) =>
      i % 2 === 0 ? [...obj, { [sub[i]]: sub[i + 1] }] : [...obj],
    []
  );
};

export async function loadData(url) {
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

export function showAlert(msg, type) {
  let alert = newElm("div", {
    innerHTML: msg,
    className: `alert ${type}`,
  });

  el("body").prepend(alert);
  const dur = type === "warning" ? 3000 : 1000;
  setTimeout(() => alert.remove(), dur);
}

export function el(name) {
  if (typeof name === "string") {
    return document.querySelector(name);
  }
}

export function elms(name) {
  if (typeof name === "string") {
    return document.querySelectorAll(name);
  }
}

export function newElm(
  name,
  options = { innerHTML, className, type, id, name, lang },
  listener = { event, func: "" }
) {
  if (typeof name !== "string") return;

  let elm = document.createElement(name);

  for (let [key, value] of Object.entries(arguments[1])) {
    elm[key] = value;
  }

  listener.func && elm.addEventListener(listener.event, listener.func);

  return elm;
}

export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};
