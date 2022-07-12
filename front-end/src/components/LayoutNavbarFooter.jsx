import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import PropagateLoader from "react-spinners/PropagateLoader";
import axios from "axios";

const override = {
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
};

export default function LayoutNavbarFooter({ children }) {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") ? true : false);
  const [nama, setNama] = useState("");
  const [image, setImage] = useState("");
  const [notif, setNotif] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const user = await axios.get(`https://secondhand-backend-mac.herokuapp.com/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const notifikasi = await axios.get("https://secondhand-backend-mac.herokuapp.com/notifikasiBuyer", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const categories = await axios.get("https://secondhand-backend-mac.herokuapp.com/categories");
      setNama(user.data.data.nama);
      setImage(user.data.data.image);
      setNotif(notifikasi.data);
      setCategories(categories.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  const handlelogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      {loading ? (
        <PropagateLoader cssOverride={override} size={50} color={"#FF7158"} loading={loading} />
      ) : (
        <div className="content">
          <Navbar nama={nama} image={image} categories={categories} notif={notif} isLoggedIn={isLoggedIn} onLogout={handlelogout} />
          <div className="my-2">{children}</div>
          <Footer />
        </div>
      )}
    </>
  );
}
