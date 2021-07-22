import Devis from '../Devis';
import SDevisMain from './style';

export default function DevisMain() {
  return (
    <SDevisMain>
      <div className='contacte'>
        <h1>Devis</h1>
        <p>Votre devis sur mesure</p>
      </div>
      <br />
      <Devis />
    </SDevisMain>
  );
}
