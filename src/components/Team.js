import React from "react";

// import team data
import { team } from '../data';


const Team = () => {

    return (
        <section id='team' className='section'>

            <div className='contanair mx-auto text-center'>

                <h2 className='text-5xl font-primary
                 font-extrabold mb-4'> 
                 Nos Avocats
                 </h2>

                <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>
                    'Le cabinet dispose d'une équipe restreinte, unie et 
                    dynamique accompagnant chacun de ses clients au mieux de leur demande.',
                    Chacun des avocats s'engage à assurer une disponibilité permanente, 
                    anticiper les besoins des clients et faire preuve d'une grande
                    rapidité d'intervention et de pragmatisme dans la recherche des solutions proposées.
                </p>

                {/* team members grid */}
                <div className='lg:grid lg:grid-cols-3 lg:gap-x-[30px]'>

                {team.map((item, index) => {
                        const { image, name, position, description } = item;

                        return <div className='text-center lg:text-left mb-1 lg:mx-20' key={index}>
                            <img className='mx-auto lg:mx-0 mb-6' src={image} alt='' />
                            <h4 className="text-2xl mb-2 font-primary font-bold">{name}</h4>
                            <p className='text-sm uppercase tracking-[0.3px] mb-4'>{position}</p>
                            <p className='max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0'>{description}</p>
                              </div>
                    })}
                    
                </div>

                   
                


            </div>
        </section>
    )
}

export default Team;