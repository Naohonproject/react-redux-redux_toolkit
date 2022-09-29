import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, actions) => {
      state.status = actions.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
