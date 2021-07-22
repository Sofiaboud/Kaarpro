import SFooter from './style';

export default function Footer() {
  return (
    <SFooter>
      <div className='txt'>
        <div className='first'>
          <div className='adress'>
            <h1> Kaarpro</h1>
            <p>29 rue Colbert</p>
            <p>59510 Hem</p>

            <p>06 68 90 26 00</p>
            <p>06 49 60 51 32</p>
          </div>

          <div className='list'>
            <p> Kaarpro</p>
            <p>Actualités</p>
            <p>Reprogrammation</p>
            <p>Solution FAP/EGR</p>
            <p>Airbag</p>
          </div>

          <div className='contact'>
            <p>Diagnostic</p>
            <p>Contact</p>
            <p>Devis</p>
            <p>Mentions légales</p>
            <p>Plan du site</p>
          </div>

          <div className='horaire'>
            <h1>Horaires d'ouverture</h1>
            <p>Kaarpro est ouvert du Lundi au Samedi de 10h à 19h</p>
          </div>
        </div>
        <br />

        <div className='second'>
          <p>
            Kaarpro : Le spécialiste de la reprogrammation moteur à Lille et
            dans le Nord Pas-de-Calais
          </p>
          <p>
            Situé à Hem près de Lille dans le Nord Pas-de-Calais, Kaarpro est un
            garage automobile spécialisé dans la reprogrammation de moteurs pour
            voitures et poids lourds, reconfiguration d'airbag, la suppression
            de FAP/EGR et le diagnostic électronique de votre automobile
          </p>

          <p>Copyright Kaarpro 2015 © - Tous droits réservés / Crédits</p>
        </div>
      </div>
    </SFooter>
  );
}
