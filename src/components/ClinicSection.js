import React from 'react';
import doctorImg from '../images/doctor1.png';
import nurseImg from '../images/nurse1.png';
import ambulanceImg from '../images/ambulance1.png';

export default function ClinicSection() {
  return (
    <section className="clinic-section d-flex justify-content-between p-4">
      <div className="clinic-left ms-5">
        <h1 className="mb-4 " style={{color:"#003B79"}}>Clinic With Innovation</h1>
        <p className="mb-4"style={{color:"#002348"}}>
          We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.
        </p>
        <button className="clinic-btn btn btn-primary rounded-pill px-4">Learn More</button>
      </div>
      <div className="clinic-right d-flex flex-column align-items-center me-5">
        <div className="clinic-card card-doctor mb-3 p-2">
          <img src={doctorImg} alt="Qualified Doctors" className="mb-2" />
          <p className="mb-0 pt-2"><b>Qualified Doctors</b></p>
        </div>
        <div className="clinic-card card-ambulance mb-3 p-2">
          <img src={ambulanceImg} alt="24 Hours Service" className="mb-2" />
          <p className="mb-0 pt-2"><b>24 Hours Service</b></p>
        </div>
        <div className="clinic-card card-nurse p-2">
          <img src={nurseImg} alt="Emergency Care" className="mb-2" />
          <p className="mb-0 pt-2"><b>Emergency Care</b></p>
        </div>
      </div>
    </section>
  );
}
