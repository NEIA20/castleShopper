import axios from 'axios'

const ASCENDING = 'ASCENDING'
const DESCENDING = 'DESCENDING'

export const ascendingReducer = (state={}, action) => {
  switch(action.type) {
  case ASCENDING:
    return action.priceAscending
  }
  return state
}

export const descendingReducer = (state={}, action) => {
  switch(action.type) {
  case DESCENDING:
    return action.priceDescending
  }
  return state
}

export const fetchAscending = priceAscending => {
  return ({
type: ASCENDING, priceAscending
  })}
  
export const fetchDescending = priceDescending => {
  return ({
type: DESCENDING, priceDescending
  })}

export const ascending = () => 
  dispatch =>
    axios.get('/api/category/ascending')
    .then(response => {
      dispatch(fetchAscending(response))
    })

export const descending = () => {
  dispatch => 
    axios.get('/api/category/descending')
    .then(response => {
      dispatch(fetchDescending(response))
    })
}


