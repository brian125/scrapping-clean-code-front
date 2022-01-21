import { combineReducers } from 'redux'
import CatalogReducer from '../reducers/CatalogReducer'

const rootReducer = () => {
  return combineReducers(
    {
      catalogs: CatalogReducer
    }
  )
}

export default rootReducer
