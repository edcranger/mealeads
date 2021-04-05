export const initialState = {
  recipe: [],
  isLoading: true,
  isError: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_RECIPE":
      return {
        ...state,
        recipe: action.payload,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      throw new Error("Cannot find action");
  }
};
