export const getDom = (val, onClickHandler) => {
  //  Format of domObjectTemplate = Parent HTML tag -> id? -> onHandlers? ->  Childrens[] -> Child-1 tag -> id? -> onHandlers? ... -> Child-n tag -> id? -> onHandlers?

  const updatedDom = {
    parentNode: {
      tagWithId: "div#root",
      style: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: ".5rem",
        alignItems: "center",
      },
    },
    childNodes: [
      {
        tagWithId: "h1",
        text: val,
        style: {
          color: "orangered",
        },
      },
      {
        tagWithId: "button",
        text: "Increment",
        onHandler: {
          click: () => onClickHandler("+"),
        },
        style: {
          backgroundColor: "green",
          border: "none",
          cursor: "pointer",
          padding: ".5rem",
          borderRadius: ".5rem",
        },
      },
      {
        tagWithId: "button",
        text: "Decrement",
        onHandler: {
          click: () => onClickHandler("-"),
        },
        style: {
          backgroundColor: "red",
          border: "none",
          cursor: "pointer",
          padding: ".5rem",
          borderRadius: ".5rem",
        },
      },
    ],
  };
  return updatedDom;
};
