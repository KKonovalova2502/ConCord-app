import { SyncLoader } from 'react-spinners';
import style from './Loader.module.css';

const Loader = () => (
  <div className={style.wrapper}>
    <SyncLoader color="#ffeba7" />
  </div>
);

export default Loader;
