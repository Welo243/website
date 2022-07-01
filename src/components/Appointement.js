import React from "react";

const Appointement = ()=>{

    return(
        <div className='bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto'>

            <h3 className='text-white text-[28px] font-bold tracking-[0.3px] text-center'>
            Obtenir un rendez-vous
            </h3>
            <div className='w-[54px] h-[3px] bg-white my-6 mx-auto'></div>

            {/* Input group */}

            <div className='space-y-[24px]'>

                <input  className='form-control' 
                placeholder="Full name" type="text" />

                <input  className='form-control' 
                placeholder="Phone number" type="text" />

                <input  className='form-control' 
                placeholder="Email address" type="email" />

                <textarea className='resize-none w-full h-[132px] outline-none rounded-sm 
                p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary' 
                placeholder="Votre message"></textarea>

                <button className='btn bg-primary hover:bg-primary-hover transition-all'>Send Message</button>
                
            </div>


        </div>

    )
}

export default Appointement