import React, { useState, useEffect } from "react";
import "../styles/settings.css";
import axios from "axios";

const Settings = ({ token }) => {
  const [Data, getData] = useState();

  async function getAllData() {
    const formData = new FormData();
    formData.append("userid", token);
    const allData = await axios.post('http://localhost/laundashphp/settings.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    const d = await allData.data;
    getData(d);
  };

  useEffect(() => {

    getAllData();
    setTimeout(10000);
  }, [])
  // console.log(Data.block);
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Profile</h2>
        <div className="details__form">

          <p className="profile__desc">
            Your profile Information
          </p>
          <form>
            <div className="form__group">
              <div>
                <label>User ID</label>
                <input type="text" placeholder="20BCB0056" disabled value={token} />
              </div>
            </div>
            <div className="form__group">
              <div>
                <label>Block</label>
                <input type="text" placeholder="B" disabled value={Data?.block} />
              </div>

              <div>
                <label>Room no.</label>
                <input type="text" placeholder="339" disabled value={Data?.room} />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Email</label>
                <input type="email" size={500} placeholder="example@vitstudent.ac.in" disabled value={Data?.email} />
              </div>

              <div>
                <label>Washes Used</label>
                <input type="number" placeholder="45" disabled value={Data?.co} />
              </div>
            </div>

            <div className="form__group">

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
