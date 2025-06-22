import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>
        Welcome to <span className={css.brand}>ConCord</span>!
      </PageTitle>
      <p className={css.tagline}>
        <strong>Connect. Remember. Stay Close.</strong>
      </p>

      <p>
        <em>ConCord</em> is more than just a contact book. It’s a space where
        every connection matters.
      </p>

      <p>
        The name "ConCord" comes from <strong>“Contacts”</strong> and{' '}
        <strong>“Cord”</strong> — a symbolic wire that connects us. Because
        relationships are delicate yet powerful threads that hold us together.
      </p>

      <p>
        With this app, you can:
        <ul>
          <li>📇 Save important contacts</li>
          <li>🔍 Search, edit, and delete entries</li>
          <li>🔒 Secure your data with registration and login</li>
        </ul>
      </p>

      <p>
        This project was created as a final React project — built with care for
        both people and technology.
      </p>

      <p>
        Want to try it now? <br />
        <strong>
          <Link to="/login">Log in</Link> or use the guest account:
        </strong>
        <br />
        <code>guest123@mail.com</code> / <code>guest123</code>
      </p>

      <footer>
        <p>
          👩‍💻 Developer: Kseniia Konovalova |{' '}
          <a
            href="https://www.linkedin.com/in/kseniia-konovalova/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>Thanks for visiting ConCord! ✨</p>
      </footer>
    </div>
  );
}
