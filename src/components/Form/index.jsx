import SForm from './style';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../HomePage/Footer';
import Marques from '../HomePage/Marques';
import axios from 'axios';

export default function Form() {
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );

  const [mail, setMail] = useState('');
  const [mailErr, setMailErr] = useState(false);
  const [user, setUser] = useState('');
  const [userlastname, setUserlastname] = useState('');
  const [object, setObject] = useState('');
  const [inputContent, setContent] = useState('');
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    if (!validEmail.test(mail)) {
      setMailErr(true);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post(`http://localhost:5050/messages`, {
      firstname: user,
      lastname: userlastname,
      email: mail,
      object: object,
      content: inputContent,
    });
    setIsSent(true);
  };

  return (
    <>
      <SForm>
        <div className='containe'>
          <div className='column'>
            <h3>
              <Link to='/'>Acceuil</Link>/Contact
            </h3>

            <div className='title'>
              <h1>Contact</h1>
              <h3>Formulaire de contact Kaarpro</h3>
            </div>
            {!isSent ? (
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor='name'>
                    Votre nom (obligatoire)
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
                    Votre prénom (obligatoire)
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
                    Votre email (obligatoire)
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
                    Votre numero de telephone:
                    <br />
                    <input
                      id='telNo'
                      name='telNo'
                      type='tel'
                      size='20'
                      minlength='10'
                      maxlength='10'
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor='objet'>
                    Sujet:
                    <br />
                    <input
                      type='text'
                      value={object}
                      onChange={(e) => {
                        setObject(e.target.value);
                      }}
                    />
                  </label>
                </div>

                <div>
                  <label for='msg'>
                    Message :
                    <br />
                    <textarea
                      required
                      id='msg'
                      name='user_message'
                      value={inputContent}
                      placeholder='Ecrire ici '
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                    ></textarea>
                  </label>
                </div>

                <div class='button'>
                  <button type='submit' onClick={validate}>
                    Envoyer
                  </button>
                </div>
                {mailErr && <p className='invalid'>Your email is invalid</p>}
              </form>
            ) : (
              <div className='sent'>
                Merci ! <br />
                votre message a bien ete envoyé. <br />
                Nous vous repondrons dans les plus brefs délais
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
      </SForm>

      <Marques />
      <Footer />
    </>
  );
}
