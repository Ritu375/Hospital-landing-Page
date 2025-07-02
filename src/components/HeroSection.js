
import React from 'react';
import Header from './header';
import OurServices from './Service';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Header />
      <div className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="fw-bold" style={{ color: '#002348' }}>Welcome to MediCare+ Clinic</h3>
            <h1 className="hero-title mt-4">Best Specialists</h1>
           <p className="fw-normal" style={{ color: '#002348' }}>
              We are on the leading edge of cancer care. Providing the full <br />
              continuum of cancer treatments and supportive care services in a <br />
              single convenient location.
            </p>
            <div className="row g-2 mt-3">
              <div className="col-6">
                <button className="btn btn-primary w-100 rounded-pill py-2 fw-bold">
                  Make an Appointment
                </button>
              </div>
              <div className="col-6">
                <button className="btn btn-outline-primary w-100 rounded-pill py-2 fw-bold">
                  Departments
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hero-image w-100 h-100 "></div>
          </div>
        </div>
      </div>
      <div className="my-5"></div>
      <OurServices />
    </section>
  );
}

