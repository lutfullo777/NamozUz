import React from "react";
import image1 from "../../../images/namoz1.PNG";
import image2 from "../../../images/namoz2.PNG";
import image3 from "../../../images/namoz3.PNG";
import image4 from "../../../images/namoz4.PNG";
import image5 from "../../../images/namoz5.jpg";
import image6 from "../../../images/namoz6.jpg";
import image7 from "../../../images/namoz7.jpg";
import image7_1 from "../../../images/namoz7_1.jpg";
import image8 from "../../../images/namoz8.jpg";
import image9 from "../../../images/namoz9.jpg";
import image11 from "../../../images/namoz11.jpg";
import image12 from "../../../images/namoz12.jpg";
import image13 from "../../../images/namoz13.jpg";
import image14 from "../../../images/namoz14.jpg";
import image15 from "../../../images/namoz15.jpg";
import image16 from "../../../images/namoz16.jpg";
import image17 from "../../../images/namoz17.jpg";
import background from "../../../images/bomdod.jpg";
import "./bomdod.css";
import AfterNamaz from "../afterNamaz";

const Bomdod = () => {
  return (
    <div
      className="namoz-container"
      style={{
        background: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100%",
      }}
    >
      <div>
        <center>
          <h1>Bomdod namozini o'qish tartibi</h1>
        </center>
        <p>
          <b style={{ fontSize: "20px" }}>
            {" "}
            Bomdod namozi ikki rakat sunnat, ikki rakat farz – jami to'rt
            rakatdan iborat. <br /> <br /> Bomdod namozining ikki rakat sunnati
            quyidagicha o'qiladi:
          </b>
          <br />
          <br />
          1.
          <b>
            «Alloh rizoligi uchun qibla tomonga yuzlanib, bugungi bomdod
            namozining ikki rakat sunnatini o'qishni niyat qildim»
          </b>
          , deb ko'ngildan o'tkaziladi.
          <br />
          <br />
          <img src={image1} alt="1-holat" />
          <br />
          <br />
          2. <b>«Allohu akbar»</b>, deb iftitoh takbiri aytiladi. Bu takbirda
          erkaklar qo'llar kaftini qiblaga qaratib, bosh barmoqlarining uchini
          quloqlarining yumshoq joyiga tekkizishadi. Ayollar qo'llarini yelka
          barobarida ko'taradilar.(Ayollar qo'llarini yelka barobarida ko'tarib
          kaftlarini qiblaga qaratadilar. )
          <br />
          <br />
          <img src={image2} alt="2-holat" />
          <br />
          <br />
          3. Qo'llar bog'lanadi. Erkaklar o'ng qo'l kaftini chap qo'l ustiga
          qo'yishadi. O'ng qo'lning bosh va kichik barmoqlari bilan chap qo'l
          bilagini ushlashadi (Ayollar o'ng qo'lni chap qo'l ustida tutib,
          qo'llarini ko'krakka qo'yadilar). Bu hol «qiyom» deyiladi. Qiyomda
          (tik turgan holda) sajda qilinadigan joyga qarab, navbati bilan,
          quyidagilar o'qiladi.
          <br />
          <br />
          <img src={image3} alt="3-holat" />
          <br />
          <br />
          <b style={{ fontSize: "25px" }}>SANO DUOSI</b> <br />
          Subhanakallouhumma va bihamdika va tabarokasmuka va taa’la jadduka va
          la ilaha g‘oyruk.
          <br />
          <br />
          <b style={{ fontSize: "22px" }}>
            سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى
            جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ.
          </b>
          <br />
          <br />
          Ma'nosi: <br /> «Allohim! Sening noming muborakdir. Shon-sharafing
          ulug'dir. Sendan o'zga iloh yo'qdir». <br />
          <br />
          <b style={{ fontSize: "25px" }}>FOTIHA SURASI</b>
          <br />
          A’uzu billahi minash shaytonir rojiym. Bismillahir rohmanir rohiym. Al
          hamdulillahi robbil ‘alamiyn. Ar-rohmanir rohiym. Maliki yavmiddiyn.
          Iyyaka na’budu va iyyaka nasta’iyn. Ihdinas sirotol mustaqiym.
          Sirotollaziyna an’amta ‘alayhim g‘oyril mag‘zubi ‘alayhim
          valazzolliyn.
          <br />
          <br />
          <b style={{ fontSize: "22px" }}>
            أَعُوذُ بالله مِنَ الشَّيْطَانِ الرَّجِيمِ, بِسْمِ اللَّهِ
            الرَّحْمَٰنِ الرَّحِيمِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
            الرَّحْمَٰنِ الرَّحِيمِ مَالِكِ يَوْمِ الدِّينِ إِيَّاكَ نَعْبُدُ
            وَإِيَّاكَ نَسْتَعِينُ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ
            الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا
            الضَّالِّينَ
          </b>
          <br />
          <br />
          Ma'nosi: <br /> Allohning dargohidan quvilgan shayton yomonligidan
          Allohning panohiga qochaman. Mehribon va rahmli Alloh nomi bilan
          (boshlayman). Hamd olamlar rabbi Allohgakim, (U) mehribon, rahmli va
          hisob-kitob kuni (Qiyomat)ning egasidir. Sengagina ibodat qilamiz va
          Sendangina yordam so'raymiz! Bizni shunday to'g'ri yo'lga boshlaginki,
          (U) Sen in'om (hidoyat) etganlarning (payg'ambarlar, siddiq va
          shahidlarning) yo'lidir, g'azabga uchragan (Muso qavmidan
          itoatsizlarining) va adashgan (Iso qavmining «Allohning farzandi bor»
          deydigan)larning emas!
          <br />
          <br />
          Fotiha surasidan keyin bitta zam(qo'shimcha) sura o'qiladi.
          <br />
          <br />
          Quyidagi suralardan birini o'qishingiz mumkin: <br />
          <br />
          <b style={{ fontSize: "25px" }}>IXLOS SURASI</b> <br />
          <br /> Qul huvallohu ahad. Allohus-somad. Lam yalid valam yuulad.
          Valam yakullahuu kufuvan ahad.
          <br />
          <br />
          <b style={{ fontSize: "22px" }}>
            قُلْ هُوَ ٱللَّهُ أَحَدٌ. ٱللَّهُ ٱلصَّمَدُ. لَمْ يَلِدْ وَلَمْ
            يُولَدْ. وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.
          </b>
          <br />
          <br />
          Ma'nosi: <br />
          (Ey Muhammad,) ayting: «U — Alloh yagonadir. Alloh behojat, (lekin)
          hojatbarordir. U tug'magan va tug'ilmagan ham. Shuningdek, Unga teng
          biror zot yo'qdir». <br /> <br />
          <b style={{ fontSize: "25px" }}>KAVSAR SURASI</b> <br />
          <br />
          Inna a’toynakal-kavsar. Fa solli lirobbika vanhar. Inna shaniaka huval
          abtar. <br />
          <br />
          <b style={{ fontSize: "22px" }}>
            نَّا أَعْطَيْنَاكَ الْكَوْثَرَ فَصَلِّ لِرَبِّكَ وَانْحَرْ إِنَّ
            شَانِئَكَ هُوَ الْأَبْتَرُ{" "}
          </b>
          <br />
          <br />
          Ma'nosi: <br />
          «(Ey Muhammad,) darhaqiqat, Biz Sizga Kavsarni* berdik. Bas, Rabbingiz
          uchun namoz o'qing va (tuya) so'yib qurbonlik qiling! Albatta,
          g'animingizning o'zi (barcha yaxshiliklardan) mahrumdir». (Kavsar —
          jannatdagi bir ajib daryo yoki hovuzning nomi. Uning suvi asaldan
          totli, qor va suvdan oq. Undan ichgan kishi abadiy chanqoqlik
          ko'rmaydi.) <br />
          <br />
          <b style={{ fontSize: "25px" }}>FALAQ SURASI</b> <br />
          <br />
          Qul a’uzu birobbil falaq. Min sharri ma xolaq. Va min sharri g‘osiqin
          iza vaqob. Va min sharrin-naffasati fil ‘uqod. Va min sharri hasidin
          iza hasad. <br />
          <br />
          <b style={{ fontSize: "22px" }}>
            قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ وَمِنْ شَرِّ
            غَاسِقٍ إِذَا وَقَبَ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
            وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ{" "}
          </b>{" "}
          <br />
          <br />
          Ma'nosi: <br /> «(Ey Muhammad,) ayting: "Panoh tilab iltijo qilurman
          tong Parvardigoriga yaratgan narsasi yovuzligidan, tugunchaga dam
          uruvchi ayollar yovuzligidan hamda hasadchining hasadi yovuzligidan"».{" "}
          <br />
          <br />
          <b style={{ fontSize: "25px" }}>AN-NOS SURASI</b> <br />
          <br />
          Qul a’uzu birrobin-nasi malikin-nasi ilahin-nasi min sharril vasvasil
          xonnas. Allaziy yuvasvisu fiy sudurin-nasi minal jinnati van-nas.{" "}
          <br />
          <br />
          <b style={{ fontSize: "22px" }}>
            قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَٰهِ النَّاسِ مِنْ
            شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ
            النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ{" "}
          </b>
          <br />
          <br />
          Ma'nosi: <br />
          <br /> «(Ey Muhammad,) ayting: "Panoh tilab iltijo qilurman odamlar
          Parvardigoriga, odamlar Podshohiga, odamlar Ilohiga yashirin
          vasvasachi (shayton) yovuzligidanki, (u) odamlarning dillariga vasvasa
          solur. (O'zi) jinlar va odamlardandir"». <br />
          <br />
          4. Zam sura tugagach,<b> «Allohu akbar»</b>, deb ruku qilinadi.
          Erkaklar tirsaklari va tizzalarini bukmasdan, barmoqlarini ochgan
          holda, tizzalarini mahkam changallab egiladilar(Ayollar erkaklarga
          nisbatan ozroq egiladilar. Tizzalarini bir oz bukadilar. Barmoqlarini
          jamlab tizzalarini tutadilar).Rukuda uch marta{" "}
          <b>«Subhana robbiyal aziym» </b>(Ey buyuk Robbim, Sen barcha
          nuqsonlardan poksan), deyiladi.
          <br />
          <br />
          <img src={image4} alt="4-holat" />
          <br />
          <br />
          5. Rukudan <b>«Sami'allohu liman hamidah»</b> (Alloh Uni hamd
          etganlarni eshitguvchidir), deb qad ko'tariladi, bu holat «qavma»
          deyiladi. Qavma holida: <b>«Robbana lakal hamd»</b> (Ey Robbimiz, har
          turli hamd-sanolar yolg'iz Sengadir), deyiladi.
          <br />
          <br />
          <img src={image5} alt="5-holat" />
          <br />
          <br />
          6. <b>«Allohu akbar»</b> deb avvalo tizzalar, keyin qo'llar, so'ng
          peshona va burun yerga tekkizilib, sajda qilinadi. Sajda
          qilinayotganda oyoq panjalari qiblaga qaratiladi, erkaklarning
          tirsaklari yerga tegmaydi(Ayollar tirsaklarini yerga qo'yadilar).
          Sajdada uch marta:<b> «Subhana robbiyal a'la»</b> (Ey ulug' Robbim,
          Sen butun nuqsonlardan poksan), deyiladi
          <br />
          <br />
          <img src={image6} alt="6-holat" />
          <br />
          <br />
          7.<b> «Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan
          holda bir oz o'tiriladi, bu holat «jalsa» deyiladi. Jalsada qo'llar,
          barmoqlar o'z holicha tutilib, songa qo'yiladi. Barmoq uchlari tizza
          bilan teng bo'lishi lozim.
          <br />
          <br />
          <img src={image7} alt="7-holat" />
          <br />
          <br />
          Erkaklar chap oyoqlari ustiga o'tiradilar. O'ng oyoq panjalari qiblaga
          qaratiladi (Ayollar oyoqlarini o'ng tarafdan chiqarib o'tiradilar).
          <br />
          <br />
          <img src={image7_1} alt="7_1-holat" />
          <br />
          <br />
          8. <b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada
          uch marta:<b> «Subhana robbiyal a'la»</b>, deyiladi. Shu bilan
          birinchi rakat tugaydi.
          <br />
          <br />
          <img src={image8} alt="8-holat" />
          <br />
          <br />
          9.<b> «Allohu akbar»</b>, deb qiyomga (tikka) turiladi.
          <br />
          <br />
          <img src={image9} alt="9-holat" />
          <br />
          <br />
          10. Qiyomda <b>«Bismillahir rohmanir rohiym»</b>dan boshlab, Fotiha
          surasi, orqasidan bir zam sura o'qiladi. <br />
          <br />
          <b style={{ fontSize: "25px" }}>FOTIHA SURASI</b>
          <br />
          Bismillahir rohmanir rohiym. Al hamdulillahi robbil ‘alamiyn.
          Ar-rohmanir rohiym. Maliki yavmiddiyn. Iyyaka na’budu va iyyaka
          nasta’iyn. Ihdinas sirotol mustaqiym. Sirotollaziyna an’amta ‘alayhim
          g‘oyril mag‘zubi ‘alayhim valazzolliyn.
          <br />
          <br />
          <b style={{ fontSize: "22px" }}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ الْحَمْدُ لِلَّهِ رَبِّ
            الْعَالَمِينَ الرَّحْمَٰنِ الرَّحِيمِ مَالِكِ يَوْمِ الدِّينِ
            إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ اهْدِنَا الصِّرَاطَ
            الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ
            الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
          </b>
          <br />
          <br />
          Zam sura: <br /> <b style={{ fontSize: "25px" }}>FALAQ SURASI</b>
          <br />
          Qul a’uzu birobbil falaq. Min sharri ma xolaq. Va min sharri g‘osiqin
          iza vaqob. Va min sharrin-naffasati fil ‘uqod. Va min sharri hasidin
          iza hasad.
          <br />
          <br />
          <b style={{ fontSize: "22px" }}>
            قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ وَمِنْ شَرِّ
            غَاسِقٍ إِذَا وَقَبَ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
            وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ
          </b>
          <br />
          <br />
          11.<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta{" "}
          <b>«Subhana robbiyal aziym»</b>, deyiladi.
          <br />
          <br />
          <img src={image11} alt="11-holat" />
          <br />
          <br />
          12. <b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan
          <b> «Robbana lakal hamd»</b>, deyiladi.
          <br />
          <br />
          <img src={image12} alt="12-holat" />
          <br />
          <br />
          13. <b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta{" "}
          <b>«Subhana robbiyal a'la»</b>, deyiladi.
          <br />
          <br />
          <img src={image13} alt="13-holat" />
          <br />
          <br />
          14.<b> «Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz
          o'tiriladi.
          <br />
          <br />
          <img src={image14} alt="14-holat" />
          <br />
          <img src={image7_1} alt="14_1-holat" />
          <br />
          <br />
          15. <b>«Allohu akbar»</b>, deb ikkinchi bor sajda qilinadi. Sajdada
          uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi.
          <br />
          <br />
          <img src={image15} alt="15-holat" />
          <br />
          <br />
          16. <b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada
          o'tiriladi va quyidagilar o'qiladi:
          <br />
          <br />
          <img src={image16} alt="16-holat" />
          <img src={image7_1} alt="16_1-holat" />
          <br />
          <br />
          <b style={{ fontSize: "25px" }}>ATTAHIYYAT DUOSI</b>
          <br />
          Attahiyyatu lillahi vas-solavatu vattoyyibat. Assalamu ‘alayka
          ayyuhan-nabiyyu va rohmatullohi va barokatuh. Assalamu ‘alayna va ‘ala
          ibadillahis-solihiyn. Ashhadu alla ilaha illallohu va ashhadu anna
          Muhammadan ‘abduhu va rosuluh.
          <br />
          <br />
          <b style={{ fontSize: "22px" }}>
            التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ
            عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ،
            السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ، أَشْهَدُ
            أَنْ لَا إِلَهَ إِلَّا اللهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ
            وَرَسُولُهُ.
          </b>
          <br /> <br />
          Mazmuni: Mol, badan, til bilan ado etiladigan butun ibodatlar Alloh
          uchundir. Ey Nabiy! Allohning rahmati va barakoti Sizga bo'lsin. Sizga
          va solih qullarga Allohning salomi bo'lsin. Iqrormanki, Allohdan o'zga
          iloh yo'q. Va yana iqrormanki, Muhammad, alayhissalom, Allohning quli
          va elchisidirlar.
          <br />
          <br />
          <b style={{ fontSize: "25px" }}>SALOVOT</b>
          <br />
          Allohumma solli ‘ala Muhammadiv-va ‘ala ali Muhammad. Kama sollayta
          ‘ala Ibrohima va ‘ala ali Ibrohim. Innaka hamidum-majid. Allohumma
          barik ‘ala Muhammadiv-va ‘ala ali Muhammad. Kama barokta ‘ala Ibrohima
          va ‘ala ali Ibrohim. Innaka hamidum-majid.
          <br />
          <br />
          <b style={{ fontSize: "22px" }}>
            اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا
            صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ
            حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلى مُحَمَّدٍ وَعَلَى آلِ
            مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ
            إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.
          </b>{" "}
          <br />
          <br />
          Mazmuni: Allohim, Ibrohim va uning oilasiga rahmat etganing kabi,
          Muhammad va ul zotning oilasiga rahmat ayla, Sen hamdu maqtovga loyiq
          va buyuk Zotsan. Allohim, Ibrohim va uning oilasiga barakotingni ehson
          etganing kabi Muhammad va ul zotning oilasi ustiga ham barakotingni
          ehson ayla. Sen hamdu maqtovga loyiq va buyuk Zotsan.
          <br />
          <br />
          <b style={{ fontSize: "25px" }}>DUO</b> <br />
          Robbana atina fid-dunya hasanatav-va fil axiroti hasanatav-va qina
          azaban-nar.
          <br />
          <br />
          <b style={{ fontSize: "22px" }}>
            رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً، وَفِي الْآخِرَةِ حَسَنَةً،
            وَقِنَا عَذَابَ النَّارِ.
          </b>{" "}
          <br />
          <br />
          Mazmuni: «Ey Robbimiz, bizga bu dunyoda ham, oxiratda ham yaxshilikni
          bergin va bizni do'zax olovi azobidan saqlagin».
          <br />
          <br />
          17. Avval o'ng, keyin chap yelkaga qarab:
          <b> «Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan
          chiqiladi.
          <br />
          <br />
          <img src={image17} alt="17-holat" />
          <br />
          <br />
          Shu bilan bomdod namozining ikki rakat sunnati tugaydi. <br /> <br />
          <b style={{ fontSize: "20px" }}>
            {" "}
            Bomdod namozining ikki rakat farzi ham xuddi shu tartibda o'qiladi.
            Farqi — avvalo, erkaklar niyatdan oldin (boshqa farz namozlari
            oldidan ham) quyidagi iqomat takbirini aytishadi:{" "}
          </b>
          <br />
          <br />
          Allohu akbar, Allohu akbar, Allohu akbar, Allohu akbar. <br /> Ashhadu
          alla ilaha illalloh, Ashhadu alla ilaha illalloh. <br /> Ashhadu anna
          Muhammadar rosululloh, Ashhadu anna Muhammadar rosululloh. <br />
          Hayya 'alas-solah, hayya'alas-solah, <br /> Hayya 'alal-falah,
          hayya'alal-falah.
          <br /> Qod qomatis-solah, qod qomatis-solah. <br /> Allohu akbar,
          Allohu akbar, La ilaha illalloh. <br />
          <br />
          <b style={{ fontSize: "22px" }}>
            اَللهُ أَكْبَر اَللهُ أَكْبَر اَللهُ أَكْبَر اَللهُ أَكْبَر أَشْهَدُ
            أَلاَّ إِلَهَ إِلاَّ الله أَشْهَدُ أَلاَّ إِلَهَ إِلاَّ الله
            أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ الله أَشْهَدُ أَنَّ مُحَمَّدًا
            رَسُولُ الله حَيَّ عَلَى الصَّلاَة حَيَّ عَلَى الصَّلاَة حَيَّ عَلَى
            الْفَلاَح حَيَّ عَلَى الْفَلاَح اَللهُ أَكْبَر اَللهُ أَكْبَر لاَ
            إِلَهَ إِلاَّ الله
          </b>
          <br />
          <br />
          Iqomat takbirining lafzlari azonnikiga o'xshaydi, farqi — bunisi tez
          aytiladi. <br />
          <br />
          Bomdod namozining farziga quyidagicha niyat qilinadi:
          <b>
            «Alloh rizoligi uchun bomdod namozining ikki rakat farzini o'z
            vaqtida o'qishni niyat qildim»
          </b>
          . Qolgan qismi sunnat bilan bir xil davom etaveradi.
        </p>
        <AfterNamaz />
      </div>
    </div>
  );
};

export default Bomdod;
