import SContactUs from './style';
import Form from '../Form';

export default function ContactUs() {
  return (
    <SContactUs>
      <div className='contacte'>
        <h1>Contact</h1>
        <p>Kaarpro répond à vos questions</p>
      </div>
      <br />
      <Form />
    </SContactUs>
  );
}
