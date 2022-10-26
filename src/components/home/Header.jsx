
import React, { useState} from 'react';
import { Button } from 'react-bootstrap'
import { Link} from "react-router-dom";
import HeaderNav from '../common/HeaderNav';
import axios from 'axios';
import data from '../../db.json'

function Header() {
    const [cards, setCards] = useState(data.cards);
    const [filteredCard, setfilteredCard] = useState(data.cards)

    if (!cards) {
        return <h1>Loading</h1>
    }

    const filterItems = (cate) => {
        console.log(cate)
        if (cate) {
            setfilteredCard(cards)
            const updateCards = cards.filter((cruntEle) => {
                return cruntEle.category === cate && cate;
            })
            setfilteredCard(updateCards);
        }
        else {
            setfilteredCard(cards)
        }
    }

    return (
        <div>
            <div className="hero">
                <HeaderNav />
                <div className="hero-content">
                    <div className="hero-content-heading">
                        <h1>Tools To Fix File Problems</h1>
                    </div>
                    <div className="hero-content-des">
                        <p>Find below a collection of tools to help with any of your file needs.</p>
                    </div>
                    <div className="hero-content-nav">
                        <Button className="hero-content-nav-home-btn" onClick={() => filterItems()} >All</Button>
                        <Button className="hero-content-nav-dis-btn" onClick={() => filterItems('PDF Tools')}>PDF Tools</Button>
                        <Button className="hero-content-nav-pro-btn" onClick={() => filterItems('CSS Tools')}>CSS Tools</Button>
                        <Button className="hero-content-nav-sys-btn" onClick={() => filterItems('JSON Tools')}>JSON Tools</Button>
                        <Button className="hero-content-nav-com-btn" onClick={() => filterItems('HTML Tools')}>HTML Tools</Button>
                    </div>
                </div>
            </div>
            <div className='main-content'>
                {
                    filteredCard.map((ele) => {
                        const { id, title, image, desc, category, categorysty,link } = ele;

                        return (
                            <div className={`main-content-card ${categorysty}`} key={id}>
                                <Link to={link}>
                                    <img src={image} alt="" />
                                    <h2 className="main-content-card-heading">
                                        {title}
                                    </h2>
                                    <label className={`main-content-card-${categorysty}`}>{category}</label>
                                    <p>
                                        {desc}
                                    </p>
                                </Link>
                            </div>
                        )
                    })
                }               
            </div>
        </div>
    )
}

export default Header;