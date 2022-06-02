import LayoutPage from "../components/layout/Index";
import "../styles/globals.css";
import Theme from "../Theme";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <Theme>
        <LayoutPage>
          <Component {...pageProps} />
        </LayoutPage>
    </Theme>
  );
}

export default MyApp;
