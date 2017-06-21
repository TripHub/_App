const initialState = {
  loading: false,  // loading list
  errors: {},  // object of errors
  didInvalidate: true, // flags whether to fetch from API
  entities: {},  // object of trips
  fetchStatus: {},  // object matching entities, with item fetch statuses
  activeTripId: ''  // currently selected trip
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
