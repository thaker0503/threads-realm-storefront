import React from 'react'

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center p-4 gap-4">
      <h1 className="text-3xl font-bold">Contact - Threads Realm Pvt. Ltd.</h1>
      <p className="text-lg">Email: <a href="mailto:contact@threadsrealm.in">
        contact@threadsrealm.in </a>
      </p>
      <p className="text-lg">Phone: <a href="tel:+919233617536">
        +91 92336 17536
      </a>
      </p>
      <p className="text-lg">Address: 31 G. T. ROAD (NORTH), Howrah R.S, Howrah, Domjur, West Bengal, India, 711101</p>

      <h2 className="text-2xl font-bold mt-4">Customer Support</h2>
      <p className="text-lg">For any queries or assistance, please contact our customer support team at <a href="mailto:contact@threadsrealm.in">contact@threadsrealm.in</a> or call us at <a href="tel:+919233617536">+91 92336 17536</a>.</p>

      {/* Map React Leaflet */}
      
    </div>
  )
}

export default ContactPage
