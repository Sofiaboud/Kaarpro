import SSavoirFaire from './style';

export default function SavoirFaire() {
  return (
    <SSavoirFaire>
      <div className='txt'>
        <div className='savoirfaire'>
          <div className='img'>
            <img src='image/mercedes-noir-accueil.png' alt='mercedes noir' />
          </div>
          <div className='text'>
            <h1>Le savoir faire Kaarpro</h1>
            <h4>Un savoir diversifié</h4>
            <p>
              Grâce à notre expertise en électronique et en mécanique, nous
              intervenons sur des véhicules auto ou sur des poids lourds, toutes
              marques.
            </p>
            <p>
              Nouveautés produits, prestations, activité du garage… Restez
              connecté à la page Actualités et bénéficiez de conseils et
              avantages dans le cadre de nos services.
            </p>
            <button>Demander un diagnostique</button>
          </div>
        </div>
      </div>
    </SSavoirFaire>
  );
}
