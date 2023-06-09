import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer.js";
import FirstPage from "./components/FirstPage"
import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";
import LogOutPage from "./components/LogOutPage";

import "./styles/index.css";
import "./styles/layout/header.css";
import "./styles/layout/footer.css";
import "./styles/pages/FirstPage.css";
import "./styles/pages/LoginPage.css"
import "./styles/pages/Profile/Profile.css"
import "./styles/pages/Profile/ProfileEditor.css"
import "./styles/pages/LogOutPage.css"
import { BrowserRouter as Router } from "react-router-dom";

import styles from './styles/HomeModule.css';

function App() {

  return (
      <Router>
          <div className={styles.container}>

              <main className={styles.main}>
                  <Header/>
                  {/*<FirstPage/>*/}
                  {/*<LoginPage/>*/}
                  {/*<Profile/>*/}
                  <LogOutPage/>
                  <Footer/>
              </main>

          </div>
      </Router>

  );
}

export default App;
