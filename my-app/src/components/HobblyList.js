import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

HobblyList.propstypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.number,
    onHobbyClick: PropTypes.func,
    onHobbyClickDelelte: PropTypes.func

};
HobblyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    onHobbyClick: null,
    onHobbyClickDelelte: null

}
export default function HobblyList(props) {
    const { hobbyList, activeId, onHobbyClick, onHobbyClickDelelte } = props;

    const handleClick = (hobby) => {

        if (onHobbyClick) {
            onHobbyClick(hobby);


        }
        if (onHobbyClickDelelte) {
            onHobbyClickDelelte(hobby);
        }
    }
    return (
        <ul className='hoobby'>
            {hobbyList.map(hobby => (
                <li className={hobby.id === activeId ? 'active' : ''} key={hobby.id} onClick={() => handleClick(hobby)}>{hobby.title}</li>

            ))}
        </ul>
    )
}
