import React from "react";
import Header from "./Header";
import Appointement from "./Appointement";

import LawyerImage from '../assets/img/lawyer_banner.png';
import chefs from '../assets/img/CHEF8.png';

const Banner = ()=>{

    return(
        <section id='home' className='lg:h-full lg:max-h-800 
        bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]'>
            <Header/>
            <div className='container mx-auto h-full lg:flex pt-32'>

            <div className="text-center mx-auto h-full lg:text-left px-8 md:p-0">
                <h1 className="font-primary font-black text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]">Votre problème<br></br>
                <span className="text-accent">Notre objectif.</span>
                </h1>
                <p className="max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]">
                Nous prenons en charge pour nos clients la sécurité et la défense juridique 
                qui leur permettent de se consacrer 
                à l'essentiel : la réussite de leurs projets. 
                </p>
                {/* APPOINEMENT */}

              <div className="lg:absolute mx-auto max-w-[445px] lg:mx-0">
              <Appointement/>
              </div>

            </div>
            {/* right Side*/}
            <div className='hidden flex-1 lg:flex lg:flex-col items-end'>
            <img src={chefs} alt="" />
            </div>
            </div>
        </section>
    )
}

export default Banner