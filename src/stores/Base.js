class Base {
  constructor(initState = {}) {
    for (const k in initState) {
      if (initState.hasOwnProperty(k)) {
        this[k] = initState[k];
      }
    }
  }
}
export default Base;
