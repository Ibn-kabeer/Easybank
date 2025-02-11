const Body = () => {
    return (
        <div>
           <div className=" bg-gray-100 grid items-center justify-between relative mt-52">
            <div className="ml-10 ">
                <h2 className="text-4xl mt-10">Why choose Easybank</h2>
                <p className="text-gray-600 mt-4">We leverage Open Banking to turn your bank account into your financial hub. <br /> Control 
  your finances like never before.</p>
            </div>


           <div className="md:flex grid gap-5 md:ml-20 md:p-20 p-10 mr-20 items-center ">
            <div>
            <img src="easybank-landing-page-master/images/icon-online.svg" alt="" />
            <p className="mt-2">
           <h1 className=""> Online Banking</h1>
           <p className="text-sm text-slate-300 w-15">
  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.
  </p>
          </p>
            </div>
            <div>
            <img src="easybank-landing-page-master/images/icon-budgeting.svg" alt="" />
            <p className="mt-2">
            <h1>Simple Budgeting</h1>
            <p className="text-sm text-slate-300 w-25">
  See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.
            </p>
            </p>
            </div>
            <div>
            <img src="easybank-landing-page-master/images/icon-onboarding.svg" alt="" />
            <p className="mt-2">
            <h1>Fast Onboarding</h1>
            <p className="text-sm text-slate-300">
  We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.
  </p>
            </p>
            </div>
            <div>
            <img src="easybank-landing-page-master/images/icon-api.svg" alt="" />
            <p className="mt-2">
           <h1>Open API</h1>
           <p className="text-sm text-gray-300">
  Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.
  </p>
            </p>
            </div>
           </div>
        </div>
        </div>
               
    )
}
export default Body