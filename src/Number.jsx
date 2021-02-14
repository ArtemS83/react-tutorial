import React from 'react';
import PropTypes from 'prop-types'

const Number = ({ num }) => <p>Number {num}!</p>;

Number.propTypes = {
    num: PropTypes.number.isRequired,
}
   


export default Number;