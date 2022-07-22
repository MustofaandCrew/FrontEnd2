import React, { useState, useEffect } from "react";
import LayoutNavbarFooter from "../components/LayoutNavbarFooter";
import "../assets/css/Notification.css";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = {
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
};

export default function Notification() {
  const [notif, setNotif] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const notifikasi = await axios.get("https://secondhand-backend-mac.herokuapp.com/notifikasiBuyer", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setNotif(notifikasi.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <PropagateLoader cssOverride={override} size={50} color={"#FF7158"} loading={loading} />
      ) : (
        <LayoutNavbarFooter>
          <div className="container container-fluid">
            {notif ? (
              notif.map((data) => (
                <a key={data.id} href="/dashboardbuyer">
                  <div className="d-flex product">
                    <div className="product-img">
                      <img src="https://i.ebayimg.com/thumbs/images/g/rn8AAOSwIGBc1UqJ/s-l300.jpg" alt="" />
                    </div>
                    <div className="product-details">
                      <h5>Jam Tangan Casio</h5>
                      <p>Your Offer:</p>
                      <p>Rp. 1.500.000</p>

                      <h5 className="seller-agree">seller agrees to your offer</h5>
                      {/* <h5 className="seller-reject">seller rejects to your offer</h5> */}
                    </div>
                  </div>
                  <hr />
                </a>
              ))
            ) : (
              <h3 className="text-center">Tidak ada notifikasi</h3>
            )}
          </div>
        </LayoutNavbarFooter>
      )}
    </>
  );
}
