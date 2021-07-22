/* import axios from 'axios';
import { useEffect, useState } from 'react';

function MsgList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/messages').then(({ data }) => {
      setMessages(data);
    });
  }, []);

  return (
    <ul>
      {messages.map((msg) => {
        return (
          <>
            <div>
              <br />
              <br />
              <div>{msg.author} a dit : </div>
              <p>{msg.content}</p>
              <br />
              <br />
            </div>
          </>
        );
      })}
    </ul>
  );
}
export default MsgList;
 */
