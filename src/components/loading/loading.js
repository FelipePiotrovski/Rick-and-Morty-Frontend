import styles from './loading.module.css';
import loadingImage from './loading.jpeg';

function Loading() {

  return (
    <div className={styles.loading_background}>
      <div className={styles.loader_container}>
        <img className={styles.loader_container_img} src={loadingImage} alt="Loading" />
        <h2>Loading</h2>
      </div>
    </div>
  );
}


export default Loading;
