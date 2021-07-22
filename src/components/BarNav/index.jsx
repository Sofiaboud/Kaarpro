import SBarNav from './style';
import { Link } from 'react-router-dom';

export default function BarNav() {
  return (
    <SBarNav className='BarNav'>
      <div className='title'>
        <Link to='/'>KAARPRO</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Acceuil</Link>
          </li>
          <li>Actualités</li>
          <li>Nos solutions</li>
          <li>
            <Link to='/devis'>Devis</Link>
          </li>
          <Link to='/contact-us'>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </SBarNav>
  );
}
