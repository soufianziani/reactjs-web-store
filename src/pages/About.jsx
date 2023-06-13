import React from 'react';

function About() {
  return (
    
    <section class="bg-white ">
    <div class="relative flex">
        <div class="min-h-screen lg:w-1/3"></div>
        <div class="hidden w-3/4 min-h-screen bg-[#F0DDCF]  lg:block"></div>

        <div
            class="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
                What our <span class="text-[#B64E18]">customers</span> <br/> are saying
            </h1>

            <div class="mt-10 lg:mt-20 lg:flex lg:items-center">
                <img class="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src="https://i.pinimg.com/564x/8e/e4/a0/8ee4a05e0d94950ca4184cdab3ef452c.jpg" alt=""/>

                <div class="mt-8 lg:px-10 lg:mt-0">
                    <h1 class="text-2xl font-semibold text-gray-800  lg:w-72">
                        Help us improve our productivity
                    </h1>

                    <p class="max-w-lg mt-6 text-gray-500 ">
                        “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                        tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                        aperiam dolorum, obcaecati corrupti aspernatur a. ”
                    </p>

                    <h3 class="mt-6 text-lg font-medium text-[#B64E18]">Ronik Ederson</h3>
                    <p class="text-gray-600 ">Marketing Manager at Stech</p>
                </div>
            </div>

           
            </div>
        </div>
</section>

  );
}

export default About;
