import React from 'react'
import PropTypes from 'prop-types'
const Title = (props) => (
    <h1>Hello {props.title}!</h1>
)
Title.defaultProps = {
    title: "REACT",
}
Title.propTypes = {
    title: PropTypes.string,
};
export default Title;