export const CHILDB_TO_PLUS = 'CHILDB_TO_PLUS';

export const toAdd = params => {
  return {
    type: CHILDB_TO_PLUS,
    params
  }
}



export const CHILDC_TO_MINUS = 'CHILDC_TO_MINUS';

export const toMinus = params => {
  return {
    type: CHILDC_TO_MINUS,
    params
  }
}
