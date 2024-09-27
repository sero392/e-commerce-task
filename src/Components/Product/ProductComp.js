import React, { useEffect, useState } from "react";
import CardComp from "../../Utils/CardComp";
import { getData } from "../../Api/Api";
import ButtonComp from "../../Utils/ButtonComp";


export default function ProductComp() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        window.loading(true);
        var url = 'https://dummyjson.com/products?limit=10'
        const response = await getData(url);
        window.loading(false);
        if (response.products)
            setData(response.products)
    }
    return (
        <div className="container">
            <div className="product-bar">
                <ButtonComp onClick={()=> window.navigateUrl('/')}>
                    Ana Sayfaya Dön
                </ButtonComp>
            </div>
            <div className="product-list">
                <div className="container">
                    <div className="row">
                        {
                            data?.map(m => (
                                <div key={m.id} className="col">
                                    <CardComp image={m.images[0]} title={m.title}>
                                        <div>
                                            <span>
                                                {m.brand}
                                            </span>
                                        </div>
                                        <div className="mt-1">
                                            <span>
                                                Çekilişe verilecek ürün adeti : 2
                                            </span>
                                        </div>
                                    </CardComp>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}