import SDevis from './style';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../HomePage/Footer';
import Marques from '../HomePage/Marques';
import axios from 'axios';

export default function Devis() {
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );

  const [mail, setMail] = useState('');
  const [mailErr, setMailErr] = useState(false);
  const [user, setUser] = useState('');
  const [userlastname, setUserlastname] = useState('');
  const [inputContent, setContent] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [phone, setPhone] = useState('');
  const [reprog, setReprog] = useState('');
  const [fap, setFap] = useState('');
  const [years, setYears] = useState('');
  const [model, setModel] = useState('');
  const [carburant, setCarburant] = useState('');
  const [marque, setMarque] = useState('');

  const validate = () => {
    if (!validEmail.test(mail)) {
      setMailErr(true);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post(`http://localhost:5050/devis`, {
      firstname: user,
      lastname: userlastname,
      email: mail,
      content: inputContent,
      phone: phone,
      reprog: reprog,
      fap: fap,
      année: years,
      modèle: model,
      carburant: carburant,
      marques: marque,
    });
    setIsSent(true);
  };
  return (
    <>
      <SDevis>
        <div className='containe'>
          <div className='column'>
            <h3>
              <Link to='/'>Acceuil</Link>/Devis
            </h3>

            <div className='title'>
              <h1>Devis</h1>
              <h3>Demandez un devis en ligne</h3>

              <h3>
                Remplissez le formulaire ci-dessous et recevez votre devis
                rapidement
              </h3>
            </div>
            {!isSent ? (
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor='name'>
                    Nom
                    <br />
                    <input
                      required
                      type='text'
                      value={userlastname}
                      onChange={(e) => {
                        setUserlastname(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor='name'>
                    Prénom
                    <br />
                    <input
                      required
                      type='text'
                      value={user}
                      onChange={(e) => {
                        setUser(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor='mail'>
                    Email
                    <br />
                    <input
                      required
                      type='email'
                      id='email'
                      size='30'
                      value={mail}
                      onChange={(e) => {
                        setMail(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor='number'>
                    telephone:
                    <br />
                    <input
                      value={phone}
                      id='telNo'
                      name='telNo'
                      type='tel'
                      size='20'
                      minlength='10'
                      maxlength='10'
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <label htmlFor='text'>
                  Vous souhaitez :
                  <br />
                </label>
                <br />

                <div classname='mar'>
                  Reprogrammation
                  <br />
                  <input
                    className='checkbox'
                    type='checkbox'
                    value={reprog}
                    onChange={(e) => {
                      setReprog(e.target.value);
                    }}
                  />
                </div>

                <br />
                <div>
                  Suppression FAP
                  <br />
                  <input
                    className='checkbox'
                    type='checkbox'
                    value={fap}
                    onChange={(e) => {
                      setFap(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <label htmlFor='name'>
                    Année
                    <br />
                    <input
                      required
                      type='date'
                      value={years}
                      onChange={(e) => {
                        setYears(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor='name'>
                    Marques
                    <br />
                    <input
                      required
                      type='text'
                      placeholder='Clio'
                      value={marque}
                      onChange={(e) => {
                        setMarque(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor='name'>
                    Modèle
                    <br />
                    <input
                      required
                      type='text'
                      placeholder='IV (2) 0.9 TCE 75 GENERATION'
                      value={model}
                      onChange={(e) => {
                        setModel(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor='name'>
                    Carburant
                    <br />
                    <input
                      required
                      type='text'
                      placeholder='Essence'
                      value={carburant}
                      onChange={(e) => {
                        setCarburant(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <div>
                  <label for='msg'>Message</label>
                  <br />
                  <textarea
                    placeholder='Eventuelles précisions sur votre vehicule'
                    id='msg'
                    name='user_message'
                    value={inputContent}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div class='button'>
                  <button type='submit' onClick={validate}>
                    Devis
                  </button>
                </div>
                {mailErr && <p className='invalid'>Your email is invalid</p>}
              </form>
            ) : (
              <div className='sent'>
                Merci ! <br />
                Votre devis a été pris en compte et va vous être envoyé par
                email <br />
              </div>
            )}
          </div>

          <div className='infos'>
            <iframe
              title='map'
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10116.046370622445!2d3.1802087!3d50.6640453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f972f35e13af871!2skaarpro!5e0!3m2!1sfr!2sfr!4v1626867442216!5m2!1sfr!2sfr'
              width='400'
              height='300'
              allowfullscreen=''
              loading='lazy'
            ></iframe>
            <h1>Kaarpro</h1>
            <h3>
              29 rue Colbert <br /> 59510 Hem
            </h3>
            <h3>
              06 68 90 26 00 <br />
              06 49 60 51 32
            </h3>
            <h3>contact@kaarpro.fr</h3>

            <h3>Kaarpro vous accueille du Lundi au Samedi de 10h à 19h</h3>
          </div>
        </div>
      </SDevis>

      <Marques />
      <Footer />
    </>
  );
}
