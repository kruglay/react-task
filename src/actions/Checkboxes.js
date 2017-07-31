export function change(index, value) {
  return {
    type: "CHANGE",
    payload: {
      index,
      value: !value
    }
  }
}
