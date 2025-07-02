import React from 'react';

export default function SpecialistsSection() {
  const specialists = [
    { name: 'Dr. Awaatif Al', field: 'Dental Care' },
    { name: 'Dr. Filipa Gaspar', field: 'Pediatrics' },
    { name: 'Dr. Sukhmeet Gorae', field: 'Neurological' },
    { name: 'Dr. Siri Jakobsson', field: 'Pulmonary' },
  ];

  return (
    <section 
      className="text-center mt-5 pb-3" 
      style={{ backgroundColor: "#F8FDFF" }}
    >
      <h2 
        style={{
          color: "#003B79",
          paddingTop: "8rem",
          fontSize: '2rem'  
        }}
      >
        We Have The Best Specialists
      </h2>
      <p 
        className="mx-auto pt-3" 
        style={{ maxWidth: "600px", fontSize: '0.95rem' }}
      >
        We have a wide experience in experience design and strategy,<br />
        with locally-rooted knowledge.
      </p>

      <div className="d-flex justify-content-center flex-wrap pt-3" style={{ gap: '1rem' }}>
        {specialists.map((specialist, index) => (
          <div 
            key={index} 
            className="card mx-2 mb-3"
            style={{ 
              width: '14rem',           
              flex: '1 1 200px',        
              maxWidth: '14rem', 
              minWidth: '12rem',
              
                    
            }}
          >
            <div
              className="card-img-top"
              style={{ height: ' 13.75rem', backgroundColor: '#AED3E2' }}
            ></div>
            <div className="card-body">
              <h5 
                className="card-title mb-1" 
                style={{ color: '#002348', fontSize: '1rem' }}
              >
                <b>{specialist.name}</b>
              </h5>
              <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                {specialist.field}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-5"></div>
    </section>
  );
}
