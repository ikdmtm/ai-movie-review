import "src/styles/globals.css";
import { useHandleMenu } from "../hooks/useHandleMenu";

const App = ({ Component, pageProps }) => {
  const handleOpen = useHandleMenu();
  return <Component {...pageProps} {...handleOpen} />;
};

export default App;
