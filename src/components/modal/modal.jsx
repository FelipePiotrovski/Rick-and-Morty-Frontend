import React from 'react';
import './modal.css';
function Modal({ handleCloseModal, selectedCharacter }) {
  
  const getGenderPronoun = () => {
    return selectedCharacter.gender === "Female" ? "She" : "He";

  };
  const switchstat = (status, gender) => {
    if (status === 'Alive') {
      return selectedCharacter.gender === 'Female' ? 'She is alive and well' : 'He is alive and well';
    } else if (status === 'Dead') {
      return selectedCharacter.gender === 'Female' ? 'She is dead' : 'He is dead';
    } else {
      return "It can't be told if is alive or dead";
    }
  };

  return (
    <div className='modal_background'>

      <div className='modal'>

        <div className='modal_left'>
          <button className='closebutton' onClick={handleCloseModal}>Close</button>
          <img className="modal_charimg_blur" src={selectedCharacter.image} alt={selectedCharacter.name} />

          <div className='modal_charimg_container'>

          </div>



        </div>

        <div >
          <img className="modal_charimg" src={selectedCharacter.image} alt={selectedCharacter.name} />
          <div className="modal_charimg_overlay">
            <h1>{selectedCharacter.name}</h1>
            <h3>{selectedCharacter.species}</h3>
          </div>
        </div>



        <div className='modal_right'>
          <div className='modal_about'>
            <h1 className='modal_title'>ABOUT</h1>
            <h2 className='modal_about'>
              {selectedCharacter.name} is a {selectedCharacter.gender} {selectedCharacter.type} {selectedCharacter.species}. {switchstat(selectedCharacter.status, selectedCharacter.gender)}
            </h2>

            <h1 className='modal_title'>ORIGIN</h1>
            <h3 className='modal_subtitle'>Planet</h3>
            <h2 className='modal_planet'>{selectedCharacter.origin_name}</h2>

            <h1 className='modal_title'>LOCATION</h1>
            <h2 className='modal_location'>{selectedCharacter.location_name}</h2>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Modal;
