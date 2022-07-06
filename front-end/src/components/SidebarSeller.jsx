import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import '../assets/css/SidebarSeller.css'

import Logo from '../assets/images/logo.png';

const SidebarSeller = () => {
    return (
        <div
            className='main'
        >
            <CDBSidebar className='sidebar'>
                <CDBSidebarHeader>
                    <a
                        href="/"
                        className="text-decoration-none"
                    >
                        <img src={Logo} alt="logo" />
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/transaksibuyer" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns" className='text'>Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/accountbuyer" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table" className='text'>My Account</CDBSidebarMenuItem>
                        </NavLink>
                        <a exact to="/accountbuyer" activeClassName="activeClicked">
                            <CDBSidebarMenuItem className='mx-5'>qwertyuiopasdfghjklzxcvbnm</CDBSidebarMenuItem>
                        </a>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter className="footer">
                    <div
                        className='footer-text'
                    >
                        Sidebar Footer
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default SidebarSeller;