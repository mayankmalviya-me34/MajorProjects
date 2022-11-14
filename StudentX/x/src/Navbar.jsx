import { Link } from "react-router-dom";
import LoginButton from "./Component/Login";
import LogoutButton from "./Component/Logout";
  




/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Information-Form', href: '#' },
    { name: 'Docs-view', href: '#' },
    { name: 'About', href: '#' },
  ]
  
  
  export default function Navbar() {
    return (
      <header className="bg-white shadow">
        <nav className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b  border-indigo-500 lg:border-none  ">
            <div className=" flex items-center justify-center " style={{"display": "flex", "align-content": "center","flex-direction": "row"}}>
              <Link to="/">
                <span className="sr-only">Acropolis</span>
                <img
                  className="h-10 w-auto"
                  src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/institutes/logo/170x170/671.jpg?v=1615349785"
                  alt=""
                />
              </Link>

              
              <div className="  flex ml-10 space-x-8 ">
              <Link to="/">
                <div className="text-base font-medium text-black-400 hover:text-gray-500 hover:bg-gray-100">Home</div>
              </Link>
              <Link to="/informationform">
                <div className="text-base font-medium text-black-400 hover:text-gray-500 hover:bg-gray-100">Information-Form</div>
              </Link>
              <Link to="/docview">
                <div className="text-base font-medium text-black-400 hover:text-gray-500 hover:bg-gray-100">Docs-view</div>
              </Link>
              <Link to="/about">
                <div className="text-base font-medium text-black-400 hover:text-gray-500 hover:bg-gray-100">About</div>
              </Link>
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <div
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium cursor-pointer text-white hover:bg-opacity-75"
              >
                <LoginButton/>
              </div>

              

              <div className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium cursor-pointer text-white hover:bg-opacity-75" >
                <LogoutButton/>
              </div>

             

              
              
            </div>
          </div>
          

          

          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <div key={link.name}  className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </div>
            ))}
          </div>
        </nav>
      </header>
    );
  }
  