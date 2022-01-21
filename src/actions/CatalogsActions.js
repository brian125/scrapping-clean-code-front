import actionsTypesCatalog from './actionsTypes/ActionsTypeCatalog'

export const CatalogsLoading = () => {
  return {
    type: actionsTypesCatalog.LOADING_SUCCESS_CATALOGS
  }
}

export const CatalogsLoadSucces = (catalogs) => {
  return {
    type: actionsTypesCatalog.LOAD_SUCCESS_CATALOGS,
    payload: catalogs
  }
}

export const CatalogsLoadError = (error) => {
  return {
    type: actionsTypesCatalog.LOAD_FAILURE_CATALOGS,
    payload: error
  }
}
