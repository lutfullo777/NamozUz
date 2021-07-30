import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Start from "./components/Onload/start";
import Header from "./components/Header/header";
import Bomdod from "./components/Namoz/Bomdod/bomdod";
import Peshin from "./components/Namoz/Peshin/peshin";
import Asr from "./components/Namoz/Asr/asr";
import Shom from "./components/Namoz/Shom/shom";
import Xufton from "./components/Namoz/Hufton/hufton";
import Juma from "./components/Yana/juma";
import Hayit from "./components/Yana/hayit";
import Janoza from "./components/Yana/janoza";
import Tarobeh from "./components/Yana/tarobeh";
import Nafl from "./components/Yana/nafl";
import Tahorat from "./components/Tahorat/tahorat";
import Gusl from "./components/G'usl/g'usl";
import ScrollButton from "./components/scroll";
import Developer from "./components/developer";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";

function App() {
  window.onload = () => {
    setTimeout(() => {
      document.querySelector(".start").classList.add("start-stop");
    }, 2900);
  };

  return (
    <HashRouter>
      <Start />

      <Header />
      <ScrollButton />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/developer" component={Developer} />
        <Route path="/tahorat" component={Tahorat} />
        <Route path="/gusl" component={Gusl} />
        <Route path="/bomdod" component={Bomdod} />
        <Route path="/peshin" component={Peshin} />
        <Route path="/asr" component={Asr} />
        <Route path="/shom" component={Shom} />
        <Route path="/xufton" component={Xufton} />
        <Route path="/juma" component={Juma} />
        <Route path="/hayit" component={Hayit} />
        <Route path="/janoza" component={Janoza} />
        <Route path="/tarobeh" component={Tarobeh} />
        <Route path="/nafl" component={Nafl} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
