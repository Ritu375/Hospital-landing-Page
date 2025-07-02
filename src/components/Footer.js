import React from 'react';

export default function FooterSection() {
  return (
    <footer>
      <div className="row my-5 p-0">
        <div className="col-4 offset-2">
          <span className="logo-blue fw-bold">Medi</span><span className="logo-orange fw-bold">Care+</span>
        </div>
        <div className="col-4 m-0 p-0 d-flex justify-content-end">
          <nav className="footer-links fw-light">
            <a href="/" className="active mx-2">Home</a>
            <a href="/"  className=" mx-2">About</a>
            <a href="/"  className=" mx-2">Services</a>
            <a href="/"  className=" mx-2">News</a>
          </nav>
        </div>
      </div>
      <div className='footer-bottom'>
      <div className="row m-0 p-0 ">
        <div className="col-4 offset-2 d-flex p-0">
           <a href="/"><div className="icon-circle mt-4"><i className="bi bi-facebook"></i></div></a>
          <a href="/"><div className="icon-circle mt-4"><i className="bi bi-google"></i></div></a>
          <a href="/"><div className="icon-circle mt-4"><i className="bi bi-twitter"></i></div></a></div>
      </div>
      <div className="row   mt-3 pb-5">
        <div className="col-4 offset-2 p-0">
          <span style={{color:"#667C94"}}>©2023 - 011BQ</span>
        </div>
      </div>
      </div>
    </footer>
  );
}
