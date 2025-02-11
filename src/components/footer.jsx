const Footer = () => {
    return (
        <div className="bg-[#2D314D] h-300 ">
            <div className="md:flex grid md:p-10 p-14 gap-44">
            <div className="grid p-10 ml-20  ">
                <img src="easybank-landing-page-master/images/logo.svg" alt="" className="h-5 text white" />
                <div className="md:flex grid gap-3 md:mt-12 mt-8 ">
                   <img src="easybank-landing-page-master/images/icon-facebook.svg" alt="" />
                   <img src="easybank-landing-page-master/images/icon-youtube.svg" alt="" />
                   <img src="easybank-landing-page-master/images/icon-twitter.svg" alt="" />
                   <img src="easybank-landing-page-master/images/icon-pinterest.svg" alt="" />
                   <img src="easybank-landing-page-master/images/icon-instagram.svg" alt="" />
                </div>
                </div>
                <div className="grid h-32 text-white md:pt-10 pt-4">
                   <p>  About Us  </p>
                   <p> Contact  </p>
                   <p> Blog  </p>
                </div>
               <div className="grid h-32 text-white md:pt-10 pt-4" >
              <p> Careers</p>
             <p>Support</p>
             <p>Privacy Policy</p>
               </div>
            <div className="pt-10 ml-40 grid">
            <button className="bg-[rgb(49,211,92)] w-40 text-white px-4 py-2 rounded-full mr-14 gradient">Request Invite</button>
            <p className="text-slate-100 text-sm pt-5">  © Easybank. All Rights Reserved</p>
            </div>
        </div>
        </div>
    )
}
export default Footer