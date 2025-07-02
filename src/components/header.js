import React from 'react';

export default function Header() {
  return (
    <div className="row m-0 p-0">

      <header className="d-flex justify-content-between align-items-center px-4 py-3">
        <div className='col-6'>
          <h2 className="px-4">
            <span style={{ color: '#007bff' }}>Medi</span>
            <span style={{ color: 'orange' }}>Care</span>+
          </h2></div>
        <div className='col-3 d-flex flex-wrap gap-5 gap-md-4 gap-lg-5 me-5'>
          <a className="text-primary fw-semibold text-decoration-none" href="#home"><b>Home</b></a>
          <a className="text-primary fw-semibold text-decoration-none" href="#about">About</a>
          <a className="text-primary fw-semibold text-decoration-none" href="#services">Services</a>
          <a className="text-primary fw-semibold text-decoration-none" href="#news">News</a>
        </div>
         <div className='col-3'>
          <a className="btn btn-primary rounded-pill px-4 py-2" href="#contact">Contact</a>
        </div>
      </header>
    </div>
  );
}
