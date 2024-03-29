import React from 'react';
import HelmetComponent from '../../../components/helmet';
import DashboardAllProductComponent from '../../../components/dashboard/product/all';
function DashboardProductAll() {
    window.scrollTo(0,0)
    return (
        <>
            <HelmetComponent title="all product"></HelmetComponent>
            <DashboardAllProductComponent></DashboardAllProductComponent>
        </>
    )
};

export default DashboardProductAll;