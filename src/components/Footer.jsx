import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row jusitfy-center items-center sm:justify-between bg-black px-2 py-3 text-white space-y-1 text-sm font-semibold select-none">
      <div>Privacy Policy</div>
      <div>&copy; Amman Rizwan {new Date().getFullYear()} CopyRight</div>
      <div>Term and Condition</div>
    </footer>
  )
}

export default Footer;