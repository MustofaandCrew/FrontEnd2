import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutNavbarFooter({ children }) {
  return (
    <div>
      <Navbar />
      <div className="my-2">{children}</div>
      <Footer />
    </div>
  );
}
