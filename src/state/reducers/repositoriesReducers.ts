import { Action } from "../actions";
import { ActionTypes } from "../types";


interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// interface Action{
//     type: string,
//     payload: any;
// }

const initialState: RepositoryState = {
    loading: false,
    error: null,
    data: [],
}

const reducer = (
  state: RepositoryState = initialState,
  action: Action

): RepositoryState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };

    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
