const filter = (state = "ALL", action) => {
  switch (action.type) {
    case 'FILTER_TODOS':
      return action.currentFilter;
    default:
      return state;
  }
}

export default filter