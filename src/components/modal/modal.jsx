import React from 'react';
import './modal.css'; // Arquivo CSS para estilização do modal

function Modal({handleCloseModal, selectedCharacter}) {
  // Lógica para renderizar as informações do personagem no modal


  return (
    <div className='modal'>
      <div>MODAL TEST</div>
      <h1>{selectedCharacter.name}</h1>
      <h1>{selectedCharacter.id}</h1>
      <h1>{selectedCharacter.location_name}</h1>
      <h1>oioi</h1>
      <button onClick={handleCloseModal}>Fechar</button>
  </div>
  );
}

export default Modal;
