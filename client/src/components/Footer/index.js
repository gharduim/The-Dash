import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark p-3 footer text-center d-flex justify-content-between">
      <div className="">
        <p className="px-2 text-light">MADE BY GUS</p>
      </div>
      <div className="fa-lg text-light list-inline-item">
        <a href="https://github.com/gharduim/The-Dash"><i className="fab fa-github px-2"></i></a>
        <a href="https://www.linkedin.com/in/gustavo-harduim/"><i className="fab fa-linkedin px-2"></i></a>
        <a href="#"><i className="fab fa-facebook px-2"></i></a>
      </div>
      

    </footer>
  );
};

export default Footer;