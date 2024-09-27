import React from "react";
import '../Assets/css/card.css'

export default function CardComp({ title, children, image }) {
    return (
        <div className="card">
            {
                image && (
                    <div className="card-image">
                        <img src={image} alt="Card" />
                    </div>
                )
            }

            <div className="card-header">
                <h2 className="mt-1">{title}</h2>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}