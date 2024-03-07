import React, { useState, useEffect } from 'react';
import './style.css';
import MainContainer from './components/MainContainer/maincontainer.js';
import Loading from './components/loading/loading.js';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // Alterado para falso inicialmente
  const [removeLoading, setRemoveLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true); // Definindo o estado de carregamento para verdadeiro ao iniciar a pesquisa
    fetch(`http://127.0.0.1:5000/character?name=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setCharacters(data.data);
          setTotalPages(data.total_pages);
          setErrorMessage('');
        } else {
          setCharacters([]);
          setErrorMessage(data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setCharacters([]);
        setErrorMessage('Error while searching for characters. Please, try again later!.');
      })
      .finally(() => {
        setLoading(false); // Definindo o estado de carregamento para falso após a conclusão da pesquisa
      });
  };

  const handlePageChange = (page) => {
    setLoading(true); // Definindo o estado de carregamento para verdadeiro ao iniciar a mudança de página
    setCurrentPage(page);
    fetch(`http://127.0.0.1:5000/character?name=${searchTerm}&page=${page}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setCharacters(data.data);
          setCurrentPage(page);
        } else {
          setCharacters([]);
          setErrorMessage(data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setCharacters([]);
        setErrorMessage('Error while searching for characters. Please, try again later!.');
      })
      .finally(() => {
        setLoading(false); // Definindo o estado de carregamento para falso após a conclusão da mudança de página
      });
  };

  // Função para ir para a página anterior
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  // Função para ir para a próxima página
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div>
      {loading && <Loading setLoading={setLoading} />} {/* Passando setLoading como prop para o componente Loading */}
      <MainContainer
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        errorMessage={errorMessage}
        characters={characters}
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
      />
    </div>
  );
}

export default App;
