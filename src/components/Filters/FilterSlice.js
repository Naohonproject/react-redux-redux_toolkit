const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filterReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "filters/searchFilterChange": {
      return {
        ...state,
        search: payload,
      };
    }
    case "filters/statusFilterChange": {
      return {
        ...state,
        status: payload,
      };
    }
    case "filters/prioritiesFilterChange": {
      return {
        ...state,
        priority: payload,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
