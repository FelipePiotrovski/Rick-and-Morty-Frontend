import React, { useState } from 'react';
import logo from '../../img/image-1.png';
import '../../style.css';
import'./maincontainer.css';
import CharactersCard from '../Card/characterscard.js';
import Modal from '../modal/modal.jsx';
import Loading from '../loading/loading.js';


function MainContainer({ searchTerm, setSearchTerm, handleSearch, errorMessage, characters, totalPages, currentPage, handlePageChange, goToPreviousPage, goToNextPage, removeLoading, setRemoveLoading }) {

  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (id) => {
    fetch(`http://127.0.0.1:5000/character/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setSelectedCharacter(data.data);
          setShowModal(true);
        } else {
          setSelectedCharacter(null);
          setShowModal(true);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setSelectedCharacter(null);
        setShowModal(true);
      })
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
    setShowModal(false);
  };

  const renderPaginationButtons = () => {
    const pages = [];
    const totalPagesToShow = 5; // Número total de páginas para mostrar
    const startPage = Math.max(1, currentPage - 2); // Início da faixa de páginas a serem exibidas
    const endPage = Math.min(totalPages, startPage + totalPagesToShow - 1); // Fim da faixa de páginas a serem exibidas

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? 'active' : ''}>
          {i}
        </button>
      );
    }

    return pages;
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="input">
        <input
          className="search-input"
          type="search"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}

      <CharactersCard characters={characters} handleCharacterClick={handleCharacterClick} />

      {/* Renderizando o modal se showModal for verdadeiro */}
      {showModal && (
        <Modal handleCloseModal={handleCloseModal} selectedCharacter={selectedCharacter} />
      )}


      {/* Renderização dos botões de paginação */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={goToPreviousPage} disabled={currentPage === totalPages}>
            <svg className={currentPage === 1 ? 'disabled' : ''} width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={currentPage === 1 ? 'disabled' : ''} d="M0.999999 20L10 10.5L1 0.999998" stroke={currentPage === 1 ? '#828282ac' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel" />
            </svg>
          </button>

          {renderPaginationButtons()}
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            <svg className={currentPage === totalPages ? 'disabled' : ''} width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={currentPage === totalPages ? 'disabled' : ''} d="M0.999999 20L10 10.5L1 0.999998" stroke={currentPage === totalPages ? '#828282ac' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default MainContainer;