import React from "react";
import '../../Assets/css/header.css'
import adidas from '../../Assets/images/Adidas.png';
import koton from '../../Assets/images/Koton.png';
import mavi from '../../Assets/images/Mavi.png';
import nike from '../../Assets/images/Nike.png';
import puma from '../../Assets/images/Puma.png';
import lacoste from '../../Assets/images/Lacoste.png';
import lufian from '../../Assets/images/Lufian.png';
import skechers from '../../Assets/images/Skechers.png';
import upoloassn from '../../Assets/images/USPoloassn.png';
import kigili from '../../Assets/images/KigIli.png';
import calvinklein from '../../Assets/images/Calvinklein.png';
import hummel from '../../Assets/images/Hummel.png';
import lumberjack from '../../Assets/images/Lumberjack.png';
export default function HeaderComp(){
    const images = [
        {
            text:'adidas',
            value:adidas
        },
        {
            text:'koton',
            value:koton
        },
        {
            text:'mavi',
            value:mavi
        },
        {
            text:'nike',
            value:nike
        },
        {
            text:'puma',
            value:puma
        },
        {
            text:'lacoste',
            value:lacoste
        },
        {
            text:'lufian',
            value:lufian
        },
        {
            text:'skechers',
            value:skechers
        },{
            text:'upoloassn',
            value:upoloassn
        },
        {
            text:'kigili',
            value:kigili
        },
        {
            text:'calvinklein',
            value:calvinklein
        },
        {
            text:'hummel',
            value:hummel
        },
        {
            text:'lumberjack',
            value:lumberjack
        }
    ];
    return (
        <div className="header-brands">
            <div className="header-brand-group">
              {images.map((m,index) => (
                <div key={index} className="header-brand-item">
                  <div className="header-brand-img">
                      <img alt="Header Resim" src={m.value}></img>
                  </div>
                  <div className="header-brand-text">
                      {m.text}
                  </div>
                </div>
    
              ))}
            </div>
        </div>
    )
}