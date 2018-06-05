const createEvent = (state = {
  isFetching: {
    all: false,
    events: false
  },
  form: {
    image: null,
    startTime: null,
    endTime: null,
    address: '',
    user: null
  }
}, action) => {
  switch (action.type) {
    case "IS_FETCHING_ALL_EVENTS":
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          all: true
        }
      };
    case "DONE_FETCHING_ALL_EVENTS":
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          all: false
        }
      };
    case "CHANGE_ADDRESS_ON_FORM":
      return {
        ...state,
        form: {
          ...state.form,
          address: action.payload
        }
      };
    case "CREATE_EVENT":
      return {
        ...state,
        form: {
          ...state.form,
          user: action.payload
        }
      };
    case "SET_EVENT_IMAGE":
      return {
        ...state,
        form: {
          ...state.form,
          image: action.payload
        }
      };
    case "SET_START_TIME":
      return {
        ...state,
        form: {
          ...state.form,
          startTime: action.payload
        }
      };
    case "SET_END_TIME":
      return {
        ...state,
        form: {
          ...state.form,
          endTime: action.payload
        }
      };
    default:
      state = state;
      break;
  }
  return state;
};

export default createEvent;
