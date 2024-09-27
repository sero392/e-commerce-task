import React, { useEffect, useState } from "react";
import CardComp from "../../Utils/CardComp";
import { getData } from "../../Api/Api";
import ButtonComp from "../../Utils/ButtonComp";
import '../../Assets/css/basket.css';
import ToastrComp from "../../Utils/ToastrComp";
import searchIcon from '../../Assets/images/icons/search.svg';
import home from '../../Assets/images/icons/home.svg';

export default function BasketComp() {
    const [data, setData] = useState([]);
    const [basket, setBasket] = useState([]);
    const [tempData, setTempData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [walletValue, setWalletValue] = useState(100);
    const [toastrMessage, setToastrMessage] = useState(null);


    const getProducts = async () => {
        window.loading(true);
        var url = 'https://dummyjson.com/products?limit=10';
        const response = await getData(url);
        window.loading(false);
        //Apiden sepete eklenen ürün sayısı tarzı bir prop gelmiyor, Bu yüzden yapıldı.
        response.products = response.products.map(m => {
            return {
                ...m,
                basketCount: 0,
            }
        });
        if (response.products) {
            setData(response.products)
            setTempData(response.products);
        }
    }
    const filterSearch = (searchValue) => {
        setSearchValue(searchValue);
    };
    const completeOrder = () => {
        if (basket.length === 0) {
            setToastrMessage({ message: 'Sepete ürün eklemediniz.', type: 'error' })
            setTimeout(() => {
                setToastrMessage(null);
            }, 2000)
            return;
        }
        const totalArr = basket.map((m) => m.price * m.basketCount);
        const totalCost = totalArr.reduce((o, n) => {
            return o + n
        });
        if (totalCost > walletValue) {
            setToastrMessage({ message: 'cüzdanınızda bulunan miktar yeterli değil!', type: 'error' })
            setTimeout(() => {
                setToastrMessage(null);
            }, 2000)
            return;
        }

        setToastrMessage({ message: 'Şipariş Tamamlandı!', type: 'success' })
        setTimeout(() => {
            setToastrMessage(null);
        }, 2000);
        setClearBasketCount();
        setBasket([]);
        setWalletValue(walletValue - totalCost);
    }
    const setClearBasketCount = () => {
        const arr = data.map(m => {
            return {
                ...m,
                basketCount: 0
            }
        });
        setData([...arr]);
    }
    useEffect(() => {
        getProducts();
    }, []);
    useEffect(() => {
        var searchedArray = tempData.map((m) => {
            return {
                text: `${m.title}`.toLowerCase(), //Arama yapılacak tüm alanları burada tek bir stringte topluyorum.
                id: m.id,
                data: m,
            };
        });
        var searchArr = searchedArray
            .filter((f) => { return f.text.includes(searchValue.toLowerCase()) })
            .map((m) => m.data);
        setData([...searchArr]);
    }, [tempData, searchValue]);
    const operation = function (value, object) {
        const result = object.basketCount + value;
        if (result < 0)
            return;


        object.basketCount = result;
        const index = basket.findIndex(item => item.id === object.id);

        if (index !== -1)
            basket[index] = object;
        else
            basket.push(object);

        setBasket([...basket])
        setData([...data])
    }
    useEffect(() => {
        const emptyBasket = basket.every(f => f.basketCount === 0)
        if (emptyBasket && basket.length > 0)
            setBasket([]);
    }, [basket])
    return (
        <div>
            {
                toastrMessage && (
                    <ToastrComp message={toastrMessage.message}
                        type={toastrMessage.type}
                        onClose={() => setToastrMessage(null)} />
                )
            }

            <div className="product-bar ml-2">
               <div className="home-page-button">
               <ButtonComp onClick={() => window.navigateUrl('/')}
                    borderRadius="1px">
                    <img alt="Search"
                        className="img-fluid"
                        style={{ width: '12px' }}
                        src={home} />
                    <span className="ml-2">
                        Ana Sayfa
                    </span>
                </ButtonComp>
               </div>
                <div className="search-bar d-flex align-items-center">
                    <div className="search-bar-input">
                        <input type="text"
                            placeholder="Ara"
                            onChange={(event) => filterSearch(event.target.value)} />
                    </div>

                    <div className="icon">
                        <img alt="Search" className="img-fluid" src={searchIcon} />
                    </div>
                </div>
            </div>
            <div className="product-list">
                <div className="container">
                    <div className="row">
                        <div className="col-8 col-sm-12  sm-order-2">
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
                                                <div className="mt-1 card-body-basket">
                                                    <span className="basket-price">
                                                        {m.price}
                                                    </span>
                                                    <div className="basket-buttons-main">
                                                        <button className="button-basket " onClick={() => operation(-1, m)}>
                                                            -
                                                        </button>
                                                        <span className="count-in-basket">
                                                            {m.basketCount}
                                                        </span>
                                                        <button className="button-basket " onClick={() => operation(1, m)}>
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </CardComp>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-4 col-sm-12 mt-3  sm-order-1">
                            <div className="row">
                                <div className="col-12">
                                    <div className="wallet-container">
                                        <div className="wallet-title">
                                            Cüzdandaki Para
                                        </div>
                                        <div className="wallet-money">
                                            {walletValue.toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basket-card">
                                <div className="basket-card-title">
                                    Sepetiniz
                                </div>
                                <div className="basket-card-body">
                                    {
                                        basket.length === 0 ? (
                                            <div className="row">
                                                <div className="col-8">
                                                    Hiç bir ürün sepete eklenmedi!
                                                </div>
                                            </div>
                                        ) :
                                            basket.map((m, index) => m.basketCount > 0 ? (
                                                <div className="row" key={index}>
                                                    <div className="col-8 ">
                                                        {m.title}
                                                        <span className="ml-1">
                                                            <span className="font-weight-bold">
                                                                Adet:
                                                                {m.basketCount}

                                                            </span>

                                                        </span>
                                                    </div>
                                                    <div className="col-4">
                                                        <span>
                                                            {Number(m.price.toFixed(2))}
                                                        </span>

                                                    </div>
                                                </div>
                                            )
                                                : (<template></template>)
                                            )
                                    }
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <ButtonComp backgroundColor="#59707d" onClick={() => completeOrder()}>
                                        Siparişi Tamamla
                                    </ButtonComp>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}