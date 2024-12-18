import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row jusitfy-center items-center sm:justify-between bg-[#2F2D29] px-2 py-3 text-white space-y-1 text-sm select-none">
      <div>Privacy Policy</div>
      <a href="/whyuse" className="hover:underline">Why To Use</a>
      <div>&copy; Amman Rizwan {new Date().getFullYear()} CopyRight</div>
      <a href="/use" className="hover:underline">How To Use</a>
      <div>Term and Condition</div>
    </footer>
  )
}

export default Footer;