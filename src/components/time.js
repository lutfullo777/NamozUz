import React, { useState, useEffect } from "react";
import axios from "axios";
import "./time.css";

const Time = () => {
  const [time, setTime] = useState();
  const [hour, setHour] = useState();
  const [city, setCity] = useState("Namangan");

  useEffect(() => {
    const getTime = async () => {
      const { data } = await axios.get(
        `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Uzbekistan&method=3&school=1`
      );
      setTime(data.data);
    };
    getTime();
  }, [city]);

  setInterval(() => setHour(new Date().toLocaleTimeString()), 1000);
  // console.log(new Date().getHours());

  return (
    <>
      {time && (
        <div className="namoz-time-container">
          <h1>
            Namoz vaqtlari {city} uchun (Bugungi sana {time.date.gregorian.date}{" "}
            ){" "}
          </h1>
          <h2>Hozirgi vaqt {hour}</h2>
          <ul className="select-region">
            <li>
              <h3>Viloyatlar bo'yicha vaqt</h3>
            </li>
            <li>
              <select
                name="viloyat"
                id="viloyat"
                defaultValue="Namangan"
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="Toshkent">Toshkent</option>
                <option value="Samarqand">Samarqand</option>
                <option value="Farg'ona">Farg'ona</option>
                <option value="Andijon">Andijon</option>
                <option value="Namangan">Namangan</option>
                <option value="Xorazm">Xorazm</option>
                <option value="Buxoro">Buxoro</option>
                <option value="Navoiy">Navoiy</option>
                <option value="Sirdaryo">Sirdaryo</option>
                <option value="Surxondaryo">Surxondaryo</option>
                <option value="Qashqadaryo">Qashqadaryo</option>
                <option value="Jizzax">Jizzax</option>
                <option value="Nukus">Nukus</option>
              </select>
            </li>
          </ul>
          <ul className="namoz-time">
            <li>
              <h2>Bomdod</h2>
              <h3>{time.timings.Fajr}</h3>
            </li>
            <li>
              <h2>Quyosh</h2>
              <h3>{time.timings.Sunrise}</h3>
            </li>
            <li>
              <h2>Peshin</h2>
              <h3>{time.timings.Dhuhr}</h3>
            </li>
            <li>
              <h2>Asr</h2>
              <h3>{time.timings.Asr}</h3>
            </li>
            <li>
              <h2>Shom</h2>
              <h3>{time.timings.Maghrib}</h3>
            </li>
            <li>
              <h2>Xufton</h2>
              <h3>{time.timings.Isha}</h3>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Time;
