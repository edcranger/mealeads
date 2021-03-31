export const initialState = {
  recipe: [],
  isLoading: true,
  isError: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_RECIPE":
      console.log("activated:", action.payload);
      return {
        ...state,
        recipe: action.payload,
        isLoading: false,
      };
    case "Loading":
      return {
        ...state,
        isLoading: true,
      };
    default:
      throw new Error("Cannot find action");
  }
};
