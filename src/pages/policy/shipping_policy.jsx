import Breadcrumb from "../../components/breadcrumb";
import HelmetComponent from "../../components/helmet";
import ShippingPolicyComponent from "../../components/policy/shipping_policy";



export default function ShippingPolicyPage () {
    window.scrollTo(0,0)
    return ( 
        <>
            <HelmetComponent title="shipping policy"></HelmetComponent>
            <Breadcrumb title="shipping policy"></Breadcrumb>
            <ShippingPolicyComponent></ShippingPolicyComponent>
        </>
     );
}

