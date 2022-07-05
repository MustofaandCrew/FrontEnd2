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

const SidebarSeller = () => {
    return (
        <div
            className='main'
        >
            <CDBSidebar className='sidebar'>
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a
                        href="/"
                        className="text-decoration-none"
                    >
                        Sidebar
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/transaksibuyer" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/tablebuyer" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/analytics" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">
                                Analytics
                            </CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink
                            exact
                            to="/hero404"
                            target="_blank"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="exclamation-circle">
                                404 page
                            </CDBSidebarMenuItem>
                        </NavLink>
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