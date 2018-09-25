import * as actionTypes from '../actions'

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.ADD_PERSON:
          return {
              ...state,
              persons: state.persons.concat({
                  id: Math.random(),
                  name: 'Max',
                  age: Math.floor( Math.random() * 40 )
              })
          };
      case actionTypes.DELETE_PERSON:
          return {
              ...state,
              persons: state.persons.filter(person =>
                person.id !== action.personId)
          };
      default:
          return state;
  }
};

export default reducer;