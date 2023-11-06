import { h } from "snabbdom";

export const getTemplate = (dom) => {
  const parentNode = dom.parentNode;
  const childNodes = dom.childNodes;

  const snabbDomFormattedDom = h(
    parentNode?.tagWithId,
    {
      on: parentNode?.onHandler,
      style: parentNode?.style,
      hook: {
        insert: (vnode) => {
          console.log(vnode, "element mounted");
        },
        remove: (vnode) => {
          console.log(vnode, "element unmounted");
        },
        postpatch: (oldVnode, vnode) => {
          console.log(oldVnode, vnode, "element after patch / updating");
        },
      },
    },
    childNodes.map((node) =>
      h(
        node?.tagWithId,
        {
          on: node?.onHandler,
          style: node?.style,
          hook: {
            insert: (vnode) => {
              console.log(vnode, "element mounted");
            },
            remove: (vnode) => {
              console.log(vnode, "element unmounted");
            },
            postpatch: (oldVnode, vnode) => {
              console.log(oldVnode, vnode, "element after patch / updating");
            },
          },
        },
        node?.text,
        node?.onHandler
      )
    )
  );

  return snabbDomFormattedDom;
};
