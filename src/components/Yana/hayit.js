import React from "react";
import picture from "../../images/hayit.jpg";

const Hayit = () => {
  return (
    <div className="namoz-container">
      <div>
        <center>
          <h1>HAYIT NAMOZI</h1>
        </center>
        <img src={picture} alt="hayit" style={{ width: "100%" }} />
        <p>
          1.{" "}
          <b>
            «Alloh rizoligi uchun Ramazon (yoki Qurbon) hayiti namozini o'qishni
            niyat qildim. Yuzimni qibla tarafga qaratdim. Ushbu imomga iqtido
            qildim»
          </b>
          , deb niyat qilinadi. <br />
          <br /> 2. Imom <b>«Allohu akbar»</b>, deya takbir aytgach jamoat ham
          qo'llarini ko'tarib, ichida iftitoh takbirini aytadi. <br />
          <br /> 3. Har kim ichida Sano duosini o'qiydi. So'ngra imom ketma-ket
          qo'llarini quloqlariga ko'tarib, uch marta takbir aytadi. Jamoat ham
          unga ergashadi. Birinchi va ikkinchi takbirda qo'llar yon tomonga
          tushiriladi. Uchinchi takbirdan so'ng qo'llar bog'lanib, qiyom holida
          turiladi. <br />
          <br /> 4. Shundan keyin imom ichida <b>«A'uzu»</b> ni va{" "}
          <b>«Bismillah»</b> ni aytib, ovoz chiqarib Fotiha surasini va zam
          surani o'qiydi. <br />
          <br /> 5. Ruku va sajdadan so'ng ikkinchi rakatga turiladi. Imom
          Fotiha surasi bilan bir kichik sura o'qigach, rukuga bormay turib,
          xuddi birinchi rakatdagi kabi uch marta takbir aytadi. To'rtinchi
          takbirdan keyin qo'llar bog'lanmasdan rukuga ketiladi va sajdalar ado
          etiladi. Sajdadan so'ngra <b>«Attahiyyat»</b> va <b>«Salovot»</b>{" "}
          o'qib, salom berilib, namoz tugatiladi.
        </p>
      </div>
    </div>
  );
};
export default Hayit;
