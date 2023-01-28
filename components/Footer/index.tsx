import * as React from 'react';

const Footer: React.FunctionComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="flex flex-col space-y-4">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Puente Works</p>
        <p>Company</p>
        <p>Manufacturers</p>
        <p>Verification Process</p>
        <p>Security</p>
      </div>

      <div className="flex flex-col space-y-4">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Diversity & Belonging</p>
        <p>Accessibility</p>
        <p>Associates</p>
        <p>Frontline Stays</p>
        <p>Referrals</p>
      </div>
      <div className="flex flex-col space-y-4">
        <h5 className="font-bold">JOIN</h5>
        <p>Become a Member</p>
        <p>Explore</p>
        <p>Responsible sourcing</p>
        <p>Schedule a call</p>
        <p>Resource Center</p>
      </div>
      <div className="flex flex-col space-y-4">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Our COVID-19 Response</p>
        <p>Help Center</p>
        <p>Cancellation options</p>
        <p>Neighborhood Support</p>
        <p>Trust & Safety</p>
      </div>
    </div>
  );
};

export default Footer;
