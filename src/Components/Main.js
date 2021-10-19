import React from 'react'
import { FcRedo } from 'react-icons/fc'
import AdsBanner from './AdsBanner'
import Banner from './Banner'
import BannerLast from './BannerLast'
import Box from './Box'
import Carder from './Carder'
import CardSlider from './CardSlider'
import Footer from './Footer'
import Header from './Header'
import OfferSlider from './OfferSlider'
import SliderBanner from './SliderBanner'

import Toppicyou from './Toppicyou'
import Tranding from './Tranding'

const Main = () => {
    return (
        <div>
           <Header/>
      <div className="containerer">
      <SliderBanner/>
      <Carder/>
      <Box/>
      <OfferSlider/>
      <Banner/>
      <Toppicyou/>
      <AdsBanner/>
      <Tranding/>
      <div className="trad">
      <h3>Trending</h3>
      <CardSlider/>
      </div>
     
      <BannerLast/>
     
      </div>
      
      <Footer/>
      <div className="bottom-footer">
          <div className="footer-1">
          <div className="footer-contant">
             <FcRedo/>
          </div>
          </div>
          <div className="footer-2">
               <div className="footer-contant">
               <h4>DARZI</h4>
                  <p>About</p>
                  <p>Jobs</p>
                  <p>Contact</p><p>Term & Conditions</p><p>Privacy Policy</p><p>Darzi Parners</p><p>Darzi for Business</p>
          </div>
              </div>
              <div className="footer-3">
              <div className="footer-contant">
              <h4>SERVICEABLE CITIES</h4>
                  <p>Patna</p>
                  <p>Ranchi</p>
                  <p>Purnia</p><p>Bihta</p><p>Jahanabad</p><p>Rohtas</p><p>Nalanda</p>
              </div>
              </div>
              <div className="footer-4">
              <div className="footer-contant">
              <h4>GET IN TOUCH</h4>
                  <p>Email</p>
                  <p>Twitter</p>
                  <p>Facebook</p><p>Instagram</p><p>Linkedin</p><p>About</p><p>About</p>
              </div>
              </div>
      </div>
        </div>
    )
}

export default Main
