import SMain from './style';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <SMain>
      <div className='hello'>
        <div className='txt'>
          <h1>Réparations éléctroniques</h1>
          <h1>Suppression FAP</h1>
          <h1>Reprogrammation moteur</h1>

          <p>Kaarpro vous propose des solutions adaptées à votre véhicule</p>

          <Link to='/devis'>
            <div className='devis'>FAIRE UN DEVIS</div>
          </Link>
        </div>
      </div>
    </SMain>
  );
}
