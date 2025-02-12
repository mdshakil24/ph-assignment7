import banner from '../../assets/banner.png'

const Hero = () => {
    return (
        <div className="px-4 ">
            <div style={{
                background: `url(${banner})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',}} 
                className="max-w-7xl mx-auto py-16 sm:py-20 px-5  lg:px-10 xl:py-32 xl:px-52 rounded-2xl text-center">
    
                <h1 className='font-bold text-3xl sm:text-4xl sm:10 md:text-5xl text-white md:leading-14 xl:w-[88%] mx-auto'>Discover Delicious Possiblities at CalorieCanvas</h1>

                <p className='font-normal text-base leading-5 mt-5 mb-5 text-white mt sm:text-lg sm:leading-6 md:w-[90%] md:mx-auto '>Dive into a world of flavors with our diverse cooking classes. Whether you're a novice or a seasoned cook, CalorieCanvs will help you explore new tastes and refine your culinary skills.</p>

                <div className='flex flex-col sm:flex-row justify-center items-center'>
                <a className='bg-[#0BE58A] text-[#150B2B] border border-[#0BE58A] font-bold text-lg py-3 md:text-xl md:py-4 px-6 rounded-full hover:text-white hover:bg-transparent hover:border-white transition-all mb-4 sm:mr-3' href="#">Explore Now</a>
                <a className='bg-transparent text-white border border-white font-bold text-lg py-3 md:text-xl md:py-4 px-6 rounded-full hover:text-[#150B2B] hover:bg-[#0BE58A] hover:border-[#0BE58A] transition-all mb-4 sm:ml-3' href="#">Our Feedback</a>
                </div>
            
            </div>
        </div>
    );
};

export default Hero;