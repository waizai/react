import { CHILDB_TO_PLUS, CHILDC_TO_MINUS} from '../actions'

const toCalculate = (state = 0, action) => {
  switch(action.type) {
    case CHILDB_TO_PLUS:
      return state + action.params;
    case CHILDC_TO_MINUS:
      return state - action.params;
    default:
      return state
  }
}

export default toCalculate
