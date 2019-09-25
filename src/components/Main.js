import React, {useEffect} from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import {pymSendHeight} from '../utils/handlePym'

const Main = (props) => {

  useEffect(() => {
    pymSendHeight({timeout: 500})
  }, []);

    return (
      <div className="container__outer">
        <div className="container__inner">
          <Header />
          <Body data={props.data}/>
          <Footer />
        </div>
      </div>
    );
  }


export default Main;
