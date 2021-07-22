import SContainIcon from './style';

export default function ContainIcon() {
  return (
    <SContainIcon>
      <div className='txt'>
        <div className='containicon'>
          <div className='column'>
            <img src='image/icon-reprog.png' alt='' />
            <h2>Reprogrammation moteur</h2>
            <p>Automobiles / poids lourds</p>
          </div>

          <div className='column'>
            <img src='image/icon-fap.png' alt='' />
            <h2>Suppression FAP/EGR</h2>
            <p>
              Suppression des filtres à particules mécaniquement et
              éléctroniquement
            </p>
          </div>

          <div className='column'>
            <img src='image/icon-compteur.png' alt='' />
            <h2>Diagnostic cartes éléctroniques</h2>
            <p>Réparation des cartes de démmarage déféctueuses</p>
          </div>

          <div className='column'>
            <img src='image/icon-airbag.png' alt='' />
            <h2>Reprogrammation Airbag</h2>
            <p>Reprogrammation calculateur Airbags après incidents</p>
          </div>
        </div>
      </div>
    </SContainIcon>
  );
}
