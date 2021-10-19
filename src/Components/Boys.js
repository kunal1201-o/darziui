import React from 'react'

import { BsArrowLeft } from 'react-icons/bs'



import {BiCart, BiHeartCircle} from 'react-icons/bi'

import {AiFillEye} from 'react-icons/ai'
import { useHistory } from 'react-router'
import Footer from './Footer';
const Boys = () => {
    let history=useHistory();
    return (
        <div>
            <>
                <div className="navbars">
                    <div className="upper">
                        <div className="left">
                            <BsArrowLeft onClick={() => { history.push("/Readymade"); }} />
                            Boy Collection
                        </div>
                    </div>

                </div>
                <div className="productsview">
                    <div className="container">
                        <div className="productList">
                            <div className="imgpro">
                                <img src="Images/pic4.jpg" alt="" />
                            </div>
                            <div className="despro">
                                <h3>Lee</h3>
                                <p>Womens Shirt</p>
                                <p style={{ fontWeight: "bold" }}>$500</p>
                                <p>Gubergren amet dolor ea diam takimata consetetur fa</p>

                            </div>
                            <div className="cardIcon">
                                <div className="cario">
                                    <BiHeartCircle />
                                </div>
                                <div className="cario">
                                    <AiFillEye />
                                </div>
                                <div className="cario">
                                    <BiCart />
                                </div>




                            </div>
                        </div>

                        <div className="productList" onClick={() => { history.push('/SingleProduct') }}>
                            <div className="imgpro">
                                <img src="Images/pic4.jpg" alt="" />
                            </div>
                            <div className="despro">
                                <h3>Lee</h3>
                                <p>Womens Shirt</p>
                                <p style={{ fontWeight: "bold" }}>$500</p>
                                <p>Gubergren amet dolor ea diam takimata consetetur fa</p>

                            </div>
                            <div className="cardIcon">
                                <div className="cario">
                                    <BiHeartCircle />
                                </div>
                                <div className="cario">
                                    <AiFillEye />
                                </div>
                                <div className="cario">
                                    <BiCart />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </>
        </div>
    )
}

export default Boys
