import "./App.css";
import Home from "./Components/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jaden Ficklin Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Jaden Ficklin Portfolio" />
      </Helmet>
      <Home />
    </>
  );
}

export default App;
