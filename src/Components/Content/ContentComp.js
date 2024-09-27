import React, { useRef, useState } from "react";
import '../../Assets/css/content.css';
import burgerMenuIcon from '../../Assets/images/burger-menu.svg';
import ButtonComp from "../../Utils/ButtonComp";
import MainBanner from "../../Assets/images/main-banner.png";
import SubBanner1 from "../../Assets/images/sub-banner-1.png";
import SubBanner2 from "../../Assets/images/sub-banner-2.png";
import SubSmallImage1 from "../../Assets/images/sub-small-image-1.png";
import SubSmallImage2 from "../../Assets/images/sub-small-image-2.png";


export default function ContentComp() {
    const menuGroup = useRef(null);
    const [isOpen, setOpen] = useState(true);
    const openMenu = () => {
        const div = menuGroup.current;
        setOpen(!isOpen);
        if (!isOpen) {
            div.style.visibility = 'visible';
            div.style.height = `350px`;
        }
        else {
            div.style.height = `0px`;
            div.style.visibility = 'hidden';
        }

    }
    return (
        <div className="content-container  row justify-content-center mt-2">
            <div className="content-left col-8 col-sm-12 sm-order-2">
                <div className="content-left-main">
                    <img alt="main banner" src={MainBanner} />
                </div>
                <div className="content-sub row">
                    <div className="col-8 col-sm-12">
                        <img className="img-fluid image-large" alt="main banner" src={SubBanner1} />
                    </div>
                    <div className="col-4 col-sm-12">
                        <img className="img-fluid image-small" alt="main banner" src={SubSmallImage1} />
                    </div>
                </div>
                <div className="content-sub row mt-2">
                <div className="col-8 col-sm-12">
                        <img className="img-fluid image-large" alt="main banner" src={SubBanner2} />
                    </div>
                    <div className="col-4 col-sm-12">
                        <img className="img-fluid image-small" alt="main banner" src={SubSmallImage2} />
                    </div>
                </div>
            </div>
            <div className="content-right col-4 col-sm-12 sm-order-1">
                <div className="row">
                    <div className="col-12 ml-2">
                        <ButtonComp onClick={() => window.navigateUrl('/Basket')}>
                            Siparişler Sayfasına Git
                        </ButtonComp>
                    </div>
                </div>
                <div className="content-menu">
                    <div className="content-menu-group">
                        <div className="content-menu-header" onClick={() => openMenu()}>
                            <div className="content-menu-title">
                                Menu
                            </div>
                            <div className="content-menu-icon">
                                <img className="img-fluid" alt="menu-icon" src={burgerMenuIcon} />
                            </div>
                        </div>
                        <div ref={menuGroup} className="menu-item-group center-div mt-2">
                            <div className="menu-item">
                                <div className="menu-item-title text-center">
                                    Formlar
                                </div>
                            </div>
                            <div className="menu-item mt-2">
                                <div className="menu-item-title text-center">
                                    Faydalı Linkler
                                </div>
                            </div>
                            <div className="menu-item mt-2">
                                <div className="menu-item-title text-center">
                                    Araçlar
                                </div>
                            </div>
                            <div className="menu-item mt-2">
                                <div className="menu-item-title text-center">
                                    E-Fatura
                                </div>
                            </div>
                            <div className="menu-item mt-2">
                                <div className="menu-item-title text-center">
                                    Sizi Dinliyoruz
                                </div>
                            </div>
                            <div className="menu-item mt-2">
                                <div className="menu-item-title text-center">
                                    BEK Akademi
                                </div>
                            </div>
                            <div className="menu-item mt-2">
                                <div className="menu-item-title text-center" onClick={() => window.navigateUrl('/Products')}>
                                Çekiliş Listesine Git

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}