import React from "react";

// import skills data 

import { skills } from '../data';


const Skills = () =>{

    return(
        <section id='skills' className='section bg-[#f8f3eca1] pb-32 '>
        
        <div className="container mx-auto text-center">
            <h2 className="text-5xl font-primary font-extrabold mb-4">Nos comptétences</h2>
             <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">    
      'Adepte d'une approche à la fois moderne et pragmatique du droit,l'équipe de <b> <i>BULA & ASSOCIATES </i></b>
      s'applique à en faire un outil pratique favorisant le développement 
      de l'activité des entreprises, en toute sécurité et mieux de leurs 
      intérêts juridiques et économiques.',<br></br>
      Partenaire privilégié de ses clients, <b><i>BULA & ASSOCIATES </i></b> 
      les accompagne tout au long de leur évolution et propose des solutions créatives et innovantes.
    Le cabinet veille au respect des valeurs indispensables de rigueur, d'éthique,de confiance, de loyauté et de fidélité.
            </p>
            <p>
              
            </p>
            {/* SKILLS grid */}
            <div className='lg:grid lg:grid-cols-3 gap-12'>
                {skills.map((item,index) =>{
                    const {icon,title, description} = item;
                    return <div className='flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0'>

                        <img className='mb-6' src={icon} alt=""/>
                        <h4 className='text-2xl mb-2 font-primary font-bold'>{title}</h4>
                        <p className='max-w-[332px] lg:max-w-[350px]'>{description}</p>
                    </div>
                })}
            </div>
            skills
        </div>

        </section>
    )
}

export default Skills;