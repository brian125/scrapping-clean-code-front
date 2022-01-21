import actionsTypesCatalog from '../actions/actionsTypes/ActionsTypeCatalog'

const initialState = {
  isLoading: false,
  catalogs: null,
  error: null
}

const CatalogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesCatalog.LOADING_SUCCESS_CATALOGS:
      return {
        ...state,
        isLoading: true
      }
    case actionsTypesCatalog.LOAD_SUCCESS_CATALOGS:
      return {
        ...state,
        isLoading: false,
        catalogs: payload
      }
    case actionsTypesCatalog.LOAD_FAILURE_CATALOGS:
      return {
        ...state,
        isLoading: false,
        error: payload
      }

    default: return state
  }
}

export default CatalogReducer
