export const add = (item) => ({
  type: "add",
  item,
});

export const remove = (index) => ({
  type: "remove",
  index: index,
});
