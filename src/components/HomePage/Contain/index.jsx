import SContain from './style';

export default function Contain() {
  return (
    <SContain>
      <div className='txt'>
        <div className='contain'>
          <div className='paragraph'>
            <h1>Reprogrammation moteur</h1>
            <h4>Survitaminez votre moteur en lui donnant plus de puissance</h4>
            <p>
              Grâce à la reprogrammation des moteurs automobiles, vous optimisez
              la puissance de votre moteur et vous augmentez les capacités de
              votre véhicule. Le garage Kaarpro propose la reprogrammation de
              boîtiers électroniques et met à votre disposition son équipe
              experte qui trouvera les solutions face à vos problèmes
              mécaniques.
            </p>
          </div>
          <img src='/image/moteur-amg.png' alt='moteur' />

          <div className='widget'>
            <h3>Dernières actualités</h3>
            <p>Désactivation vanne EGR</p>
            <p>Suppression FAP lille</p>
            <p>Suppression de vanne EGR à Lille</p>
          </div>
        </div>
      </div>
    </SContain>
  );
}
