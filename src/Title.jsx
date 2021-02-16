import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.module.css'
// import './Title.css'
console.log(s);
const Title = (props) => (
    <>
     <h1 className={s.Title + ' ' + s.ColorRed}  >Hello {props.title}!</h1> 
    <h2 className={`${s.Title} ${s.ColorRed}`}  >Bay {props.title}!</h2> 
     {/* <h2 className={`Title Color-Red`}  >DDDD {props.title}!</h2> */}
    </>
)

Title.defaultProps = {
    title: "REACT",
}

Title.propTypes = {
    title: PropTypes.string,
};
export default Title;