import "../../scss/compar_product/compar_product.scss"
import ComparProductCart from "../compar_product/compar_product_cart";

function ComparProductComponent() {
    let productData = [
        {
            header: 'amera soman detram sandra elit cursus 33/55.6',
            img1 : "/images/mobile.jpg",
            img2 : "/images/mobile2.jpg",
            brand : "sony",
            type : "speakers",
            sku : "skuoss",
            availability: 'in stoke',
            price : "$60.00",
            size:"xxl",
            oldPrice : "$75.00",

        },
        {
            header: 'vite magnes fuces 42mm/55hh laoreet bluetooth',
            img1 : "/images/camera10.png",
            img2 : "/images/camera11.png",
            brand : "havelis",
            type : "tablet computer",
            sku : "skuoo4",
            availability: 'in stoke',
            price : "$60.00",
            size:"xxl",
            oldPrice : "$75.00",
        },
        {
            img1 : "/images/speker1.jpg",
            img2 : "/images/speker2.jpg",
            type : "watched",
            header: 'vite magnes fuces laoreet bluetooth vite magnes fuces',
            price : "$90.00",
            size:"xxl",
            oldPrice : "$260.00",
            availability: 'in stoke',
            brand : "bajaj",
            sku : "skuoo5",
        },
        {
            img1 : "/images/smart_phone.png",
            img2 : "/images/black_mike.jpg",
            type : "camera lances",
            header: 'amera soman detram sandra elit cursus',
            price : "$90.00",
            size:"xxl",
            oldPrice : "$260.00",
            availability: 'in stoke',
            brand : "bajaj",
            sku : "skuoo5",
        },
        {
            header: 'vite magnes fuces 42mm/55hh laoreet bluetooth',
            img1 : "/images/camera10.png",
            img2 : "/images/camera11.png",
            brand : "havelis",
            type : "tablet computer",
            sku : "skuoo4",
            availability: 'in stoke',
            price : "$60.00",
            size:"xxl",
            oldPrice : "$75.00",
        },
        {
            img1 : "/images/laptop.jpg",
            img2 : "/images/watch.jpg",
            type : "watched",
            header: 'vite magnes fuces laoreet bluetooth vite magnes fuces',
            price : "$90.00",
            size:"xxl",
            oldPrice : "$260.00",
            availability: 'in stoke',
            brand : "bajaj",
            sku : "skuoo5",
        },
        {
            img1 : "/images/smart_phone.png",
            img2 : "/images/black_mike.jpg",
            type : "camera lances",
            header: 'amera soman detram sandra elit cursus',
            price : "$90.00",
            size:"xxl",
            oldPrice : "$260.00",
            availability: 'in stoke',
            brand : "bajaj",
            sku : "skuoo5",
        },
    ]
    return ( 
        <>
            <div className="compar-product m-0 py-5 ">
                <div className="container-xxl">
                    <div className="row">
                        {
                            productData.map((ele , index) => (
                                <div className="col-md-3 mb-3">
                                    <ComparProductCart product={ele} key={index}></ComparProductCart>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
     );
} 

export default ComparProductComponent ;