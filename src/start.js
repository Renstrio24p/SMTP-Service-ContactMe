import styles from './sass/modules/app.module.scss';
import Render from "./security/Render";
import SMTP_Function from './js/authentication.smtp';

export default function Start(DOM) {
  DOM.innerHTML = (
    `
    <div id='container' class='${styles.container}'>
      <form id="myForm">
        <h3>Get in touch</h3>
        <input type='text' id='name' placeholder='Your name' required />
        <input type='email' id='email' placeholder='Email address' required />
        <input type='tel' id='phone' placeholder='tel number: ' required />
        <textarea id='message' rows='6' placeholder='How can I help you?.'> </textarea>
        <button type='submit'> Submit </button>
      </form>
    </div>
    `
  )

  SMTP_Function();

  Render(); // Renders all the Element ID's
}
