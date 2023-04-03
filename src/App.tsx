import { useState } from "react";
import { Helmet } from "react-helmet";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* header component of the site */}
      <Header />

      <p>oneone</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>Lorem ipsum dolor sit amet consecte  tur adipisicing elit. Eligendi recusandae quidem delectus?</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>

        <p>oneone</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
        <p>Lorem ipsum dolor sit amet consecte  tur adipisicing elit. Eligendi recusandae quidem delectus?</p>
        <p>one</p>
        <p>one</p>
        <p>one</p>
    </div>
  );
}

export default App;
