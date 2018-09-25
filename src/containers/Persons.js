import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionTypes from '../store/actions'


class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.personsArr.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      personsArr: state.persons
  }
};

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: () => dispatch({type: actionTypes.ADD_PERSON}),
        personDeletedHandler: (id) => dispatch({type: actionTypes.DELETE_PERSON, personId: id})
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Persons);