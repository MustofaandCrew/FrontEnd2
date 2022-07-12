import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutNavbarFooter({ children }) {
    return (
        <div>
            <Navbar />
            <div className="">
                {children}
            </div>
            <Footer />
        </div>
    )
}
