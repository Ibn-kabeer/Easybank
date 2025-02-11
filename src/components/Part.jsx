const Part = () => {
    return (
        <div className=" grid items-center justify-between relative mt-16 p-10">
          <h1 className="text-2xl ml-10 ">
          Latest Articles
          </h1>
          
          <div className="md:flex grid gap-8 p-10 w-50% ml-10 mr-20">

             <div>
             <img src="easybank-landing-page-master/images/image-currency.jpg" alt=""  />
             <p className="mt-2 bg-white shadow-md h-50 w-65">
            <h1 className="p-3 text-slate-300"> By Claire Robinson</h1>
            <p className="text-sm text-slate-300 p-3">
              <p className="text-blue-500">Receive money in any currency with no fees</p>
  The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …
  </p>
             </p>
             </div>

             <div>
             <img src="easybank-landing-page-master/images/image-restaurant.jpg" alt="" />
             <p className="mt-2 bg-white shadow-md h-50 w-65">
            <h1 className="p-3 text-slate-300"> By Wilson Hutton</h1>
            <p className="text-sm text-slate-300 p-3">
            <p className="text-blue-500">Treat yourself without worrying about money</p>
  Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …
  </p>
             </p>
             </div>

             <div>
             <img src="easybank-landing-page-master/images/image-plane.jpg" alt="" />
             <p className="mt-2 bg-white shadow-md h-50 w-65">
             <h1 className="p-3 text-slate-300">By Wilson Hutton</h1>
             <p className="text-sm text-slate-300 w-25 p-3">
           <p className="text-blue-500">Take your Easybank card wherever you go</p>
  We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …
  </p>
             </p>
             </div>

             <div>
              <img src="easybank-landing-page-master/images/image-confetti.jpg" alt="" />
              <p className="mt-2 bg-white shadow-md h-50 w-65">
              <h1 className="p-3 text-slate-300">By Claire Robinson</h1>
              <p className="text-sm text-slate-300 p-3">
  <p className="text-blue-500" >Take your Easybank card wherever you go</p>
  We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …
              </p>
              </p>
             </div>

          </div>
        </div>
    )
}
export default Part