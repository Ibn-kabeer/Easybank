const Hero = () => {
    return (
        <section className="md:p-10  bg-gray-100 grid md:flex items-center gap-72 relative overflow-hidden h-[500px] ">
            { /* left content */}
            <div className=" order-last grid md:flex md:order-first">
                <h2 className="text-4xl  ">Next generation digital banking</h2>
                <p className="text-gray-600 mt-4">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button className="mt-5 bg-green-500 text-white px-4 py-2 rounded-full">Request Invite</button>
            </div>
            { /* Right Image Section */}
            <div className="w-full md:order-last order-first relative ">
                <img src="easybank-landing-page-master/images/bg-intro-desktop.svg" alt="Mobile UI" className="md:block hidden absolute -top-0 -right-16 w-[100%] max-w-none" />
                <img src="easybank-landing-page-master/images/image-mockups.png" alt="" className="md:relative absolute  z-0 -top-20 md:-right-40  " />
                <img src="easybank-landing-page-master/images/bg-intro-mobile.svg" alt="" className="md:hidden block -top-16 w-[400px] " />   
            </div>
        </section>
    );
};

export default Hero