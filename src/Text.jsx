import React from 'react';
import Number from './Number'
import PropTypes from 'prop-types'
const Text = ({ text }) => (
    <div>
        <Number num={1000}/>
        <p>Some { text}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quo quibusdam quos corrupti mollitia commodi voluptatibus beatae at placeat quam atque nam delectus dignissimos, excepturi odio, necessitatibus, et debitis consequuntur.
        </p>
    </div>
);

Text.propTypes = {
    text: PropTypes.string.isRequired,
}
export default Text;