const Header = () => {
    return ( 
        <div className="flex justify-between p-5 bg-white shadow-md align-center top-0 left-0 z-20 w-full   ">
         <img src="easybank-landing-page-master/images/logo.svg" alt="" className="md:ml-14 ml-3 h-8 "/>  
        <nav>
        <ul className="md:flex hidden  space-x-4 text-gray-300">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          <li><a href="#" className="hover:text-blue-500">Careers</a></li>
        </ul>
      </nav>
      <button className="bg-[rgb(49,211,92)] w-30 text-white px-4 py-2 rounded-full mr-14 gradient hidden md:block">Request Invite</button>
      <img src="easybank-landing-page-master/images/icon-hamburger.svg" alt="" className="block md:hidden" onclick="handlemenu()" />
      <div class="absolute hidden h-screen w-[80%] bg-black p-5 right-[-40px] top-[-20px]" id="menu">
                    <img src="easybank-landing-page-master/images/icon-close.svg" alt=""  class="text-white w-full text-right text-[20px] font-medium pr-5" onclick="handlemenuclose()"/>
                    <nav class="flex flex-col gap-6 items-center">
                        <span class="text-white cursor-pointer font-[barlow]">About</span>
                        <span class="text-white cursor-pointer font-[barlow]">Services</span>
                        <span class="text-white cursor-pointer font-[barlow]">Projects</span>
                        <button class="text-black bg-white rounded-full px-3 py-2 font-[barlow]">CONTACT</button>
                    </nav>
                </div>
        </div>
    );
    
};

export default Header

