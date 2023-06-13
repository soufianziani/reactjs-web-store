import { Link } from "react-router-dom";

const Footer = () => {
return (
<> 


<footer className="bg-white rounded-lg m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/">  
          <div div className="flex items-center mb-4 sm:mb-0">
            <img
              src="/Logo3 (2).png"
              alt="Logo"
              className="h-10 w-10"
              style={{ width: "130px", height: "70px" }}
            /> </div></Link>
            
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li className="mr-4 hover:underline md:mr-6 ">
                   <Link to='/'> Home</Link>
                </li>
                <li className="mr-4 hover:underline md:mr-6 ">
                <Link to='/About'> About</Link>
                </li>
                <li className="mr-4 hover:underline md:mr-6 ">
                   <Link to='/Products'> Product</Link>
                </li>
                <li className="mr-4 hover:underline md:mr-6 ">
                   <Link to='/Contact'> Contact</Link>
                </li>
               
                
            </ul>
        </div>
        <hr className="my-6  sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 B-pastry™. All Rights Reserved.</span>
    </div>
</footer>



 </>
);
};

export default Footer;