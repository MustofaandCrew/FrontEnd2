import React, { useEffect, useState } from "react";
import "../assets/css/shoppingcart.css";
import LayoutNavbarFooter from "../components/LayoutNavbarFooter";
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

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const products = await axios.get("https://secondhand-backend-mac.herokuapp.com/notifikasiBuyer", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProducts(products.data.data);
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
          <div className="container container-fluid mb-5">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name & Seller</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product, index) => (
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <img src={Shoe} alt="shoes" />
                      </td>
                      <td>
                        <h4>Otto</h4>
                        <p>By Andika Suka</p>
                      </td>
                      <td>
                        <h4>$29,112</h4>
                        <p>USD</p>
                      </td>
                      <td>
                        <h4 className="status">Diproses...</h4>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </LayoutNavbarFooter>
      )}
    </>
  );
}
