import React from "react";
import TestmonialSlide from "./TestmonialSlide";


const Testimonials = () =>{

    return (
        <section className='h-[346px] lg:mb-[120px]'>

            <div className="container mx-auto h-full flex items-center justify-end">
                <div className="w-full mx-auto lg:mx-0 lg:max-w-[570px]">
                    <TestmonialSlide/>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
