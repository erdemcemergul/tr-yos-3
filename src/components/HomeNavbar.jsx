import React from 'react'

const HomeNavbar = () => {
  return (
    <nav id="header" className="w-full z-30 top-10 py-3 bg-darkBlue shadow-lg border-b border-blue-400 mt-25 ">
    <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
      <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
        <svg className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
            <li><a className="inline-block no-underline hover:text-rose font-medium text-lg py-2 px-4 lg:ml-2" href="home">Home </a></li>
            <li><a className="inline-block no-underline hover:text-rose font-medium text-lg py-2 px-4 lg:ml-2" href="products">Products</a></li>
            <li><a className="inline-block no-underline hover:text-rose font-medium text-lg py-2 px-4 lg:ml-2" href="about">About</a></li>
          </ul>
        </nav>
      </div>
      <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
        <div className="auth flex items-center w-full md:w-full">
          <button className="bg-white text-gray-800  p-2 rounded  mr-4 hover:bg-blue-500 hover:text-white">Sign in</button>
          <button className="bg-rose text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-white">Sign up</button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default HomeNavbar