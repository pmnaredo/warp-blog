import '../styles/globals.css';
import Link from 'next/link';

function App({ Component, pageProps }) {
  return (
    <div>
      <nav style={navStyle}>
        <Link href="/" style={linkStyle}>
          Home
        </Link>
        <Link href="/create-post" style={linkStyle}>
          Create a post
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

const navStyle = {
  padding: '30px 100px',
};
const linkStyle = {
  marginRight: '30px',
};

export default App;
