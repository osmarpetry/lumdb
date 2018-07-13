const initialState = {
  messageVisibility: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MESSAGE':
      return { ...state, messageVisibility: !state.messageVisibility };
    default:
      return state;
  }
};
