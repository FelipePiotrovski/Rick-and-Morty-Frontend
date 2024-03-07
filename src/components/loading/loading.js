import React, { useEffect, useState } from 'react';
import styles from './loading.module.css'; // Importando o arquivo CSS do módulo
import loadingImage from './loading.jpeg'; // Importando a imagem de carregamento

function Loading() {

  return (
    <div className={styles.loader_container}>
      <img src={loadingImage} alt="Loading" /> {/* Usando a variável loadingImage como src */}
      <h2>Loading</h2>
    </div>
  );
}

export default Loading;
