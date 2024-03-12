import React from 'react';
import './modal.css';
function Modal({ handleCloseModal, selectedCharacter }) {
  const getGenderPronoun = () => {
    return selectedCharacter.gender === "Female" ? "She" : "He";

  };

  const switchstat = (status, gender) => {
    switch (status) {
      case 'Alive':
        switch (gender) {
          case 'Male':
            return 'He is alive and well'
          case 'Female':
            return 'She is alive and well'
          default:
            return 'He is alive and well'
        }

      case 'Dead':
        switch (gender) {
          case 'Male':
            return 'He is dead'
          case 'Female':
            return 'She is dead'
          default:
            return 'He is dead'
        }

      case 'unknown':
        switch (gender) {
          case 'Male':
            return 'We don\'t know if he is alive or dead'
          case 'Female':
            return 'We don\'t know if she is alive or dead'
          default:
            return 'We don\'t know if its alive or dead'
        }
    }
  }

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
            <h2>
              {selectedCharacter.name} is a {selectedCharacter.gender} {selectedCharacter.species}. {switchstat(selectedCharacter.status, selectedCharacter.gender)}
            </h2>

            <h1 className='modal_title'>ORIGIN</h1>
            <h3>Planet</h3>
            <h2>{selectedCharacter.origin_name}</h2>

            <h1 className='modal_title'>LOCATION</h1>
            <h2>{selectedCharacter.location_name}</h2>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Modal;
