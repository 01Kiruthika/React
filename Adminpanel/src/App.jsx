import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Aside from "./components/Aside.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./Pages/Login";
import { createContext } from "react";

export const UserName = createContext();

function App() {
  const [name, setName] = useState("");
  const [LoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="Container">



      {LoggedIn ? (
        <>
          <UserName.Provider value={{ name, setName }}>
            <Header />
          </UserName.Provider>
          <Main />
          <Aside />
          <Footer />
        </>
      ) : (
        <Login setName={setName} setIsLoggedIn={setLoggedIn} />
      )}

    </div>

  );
}

export default App;