"use client";
import Image from "next/image";

const AboutSection = () => {

  return (
    <section className="relative bg-slate-800 text-lightText py-20 px-8 min-h-screen">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1482385916434-814664df9c5b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D')] bg-cover bg-fixed opacity-80"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-6xl">
        
        {/* Text Section */}
        <div className="lg:w-1/2 w-full lg:pr-10 text-left select-none">
          <h2 className="text-3xl font-bold mb-4 select-none ">Discover The Space</h2>
          <p className="mb-8 ">
            {' '}
            <span className="inline-block text-2xl ">
              ÆTHEREUM
            </span>{' '} is the annual astrofest organized through a collaboration between Gagan Vedhi (IIT Tirupati) and Celestic (IISER Tirupati). Held in 2022 for the first time,
            It is an event that spans 2-3 weeks and includes lots of astronomy and astrophysics themed activities such as talks, technical workshops, various contests, and much more. Students from various colleges throughout the country participate along with eminent professors and astronomers in the field.
            <br />
            <br />
            ÆTHEREUM 1.O was held in 2022 under Pranav Sutar (Club Head).
            <br />
            ÆTHEREUM 2.O was held in 2023 under Manas Poddar (Club Head).
          </p>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0 flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4 glitter-text select-none transform transition-transform duration-300 hover:scale-125 ">
              {/* transform transition-transform duration-300 hover:scale-125 */}
              ÆTHEREUM x IIT Tirupati x IISER Tirupati
            </h2>
            <img
              src="https://i.postimg.cc/dVRW3KQh/Screenshot-2024-08-30-182308-removebg-preview-1-removebg-preview.png"
              alt="aethereum"
              width={400}
              height={200}
              className="rounded-lg  w-full"
            />

            <div className="absolute -bottom-20 left-4 bg-opacity-50 p-4 rounded glitter-text">
              <p className="text-base select-none">ÆTHEREUM 3.O</p>
            </div>


            <div className="absolute -bottom-15 right-4 flex items-center">
              <div className="w-40 h-28 animate-bounce">
                <img
                  src="https://i.postimg.cc/x8FWC3t6/Whats-App-Image-2024-08-30-at-17-21-50-6b0c3704-removebg-preview.png"
                  alt="Animated Sticker"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

      </div>



      {/* Guide Section */}
      <div className="relative top-300 flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-20">

        <div className="relative flex flex-col lg:flex-row justify-center items-center mt-16 lg:mt-8">
          {/* Guide Box */}
          <div className="relative bg-darkbrown-900 bg-opacity-100 text-white flex flex-col lg:flex-row w-full max-w-2xl lg:max-w-3xl min-h-[300px] lg:min-h-[350px]">
            {/* Image Section - Left half */}
            <div className="w-full lg:w-1/2 h-[200px] lg:h-auto bg-[url('https://i.postimg.cc/4xfYGcWH/401106820-273282245201964-1024072017944465526-n.jpg')] bg-contain bg-center bg-no-repeat"></div>

            {/* Text Section - Right half */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-5">
              <p className="text-sm font-light select-none">
                Join us in ÆTHEREUM 3.O.
              </p>
              <p className="mt-2 text-sm font-light select-none">
                Last year ÆTHEREUM 2.O. with IIT Tirupati x IISER Tirupati.
              </p>
              <p className="mt-2 text-sm font-light select-none">
                With your collaboration, we will make ÆTHEREUM 3.0 an astrofest unlike any other! Together, we'll explore new frontiers, celebrate the wonders of the cosmos, and inspire minds with groundbreaking ideas. Let's create an unforgettable experience that transcends boundaries and lights up the universe!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
