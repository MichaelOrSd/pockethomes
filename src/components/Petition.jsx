import React from 'react'

const FORM_HANDLER_SERVICE_URL = "http://PocketHomesBackend-env-1.eba-deqwwwvu.us-east-2.elasticbeanstalk.com"; 

const Petition = () => {
  return (
    <div className='max-w-[1000px] h-[500px] mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-1 gap-4'>
        <div>
            <h2 className='text-6xl font-bold mb-4'>Support This Project</h2>
            <p className='text-xl'>Sign this petition to demonstrate your support for our initiative, dedicated to fostering a community-oriented, sustainable, and affordable housing environment. Together, we can make a meaningful difference.</p>
        </div>  
        <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          const form_inputs = e.target.querySelectorAll("input");
          let form_data = {};
          for (let ip of form_inputs) {
            form_data[ip.name] = ip.value;
          }
          fetch(FORM_HANDLER_SERVICE_URL, {method: "POST", headers: {'Content-Type' : 'application/json'}, body: JSON.stringify(form_data)})
            .then((r) => r.text())
            .then((v) => console.log(v))
        }} className="formPetition">
          {/* <label htmlFor="first_name" className="first_name_label">First Name</label> */}
          <input placeholder=" First Name" type="text" name="first_name" className="first_name" />
          {/* <label htmlFor="last_name" className="last_name_label">Last Name</label> */}
          <input placeholder=" Last Name"type="text" name="last_name" className="last_name" />
          {/* <label htmlFor="email" className="email_label">Email</label> */}
          <input placeholder=" Email"type="text" name="email" className="email" />
          {/*<label htmlFor="phone_number" className="phone_number_label">Phone Number</label>
          <input placeholder=" Phone Number" type="text" name="phone_number" className="phone_number" />
          <label htmlFor="address" className="address_label">Address</label>
          <input placeholder=" Address" type="text" name="address" className="address" />
          <label htmlFor="postal_code" className="postal_code_label">Postal Code</label>
      <input placeholder=" Postal Code" type="text" name="postal_code" className="postal_code" />*/}
          {/* <label htmlFor="city" className="city_label">City</label> */}
          <input placeholder=" City" type="text" name="city" className="city" />
          {/*<label htmlFor="country" className="country_label">Country</label>
          <input placeholder=" Country" type="text" name="country" className="country" />*/}
          <button type="submit" className="button">Submit!</button>
        </form>

        </div>  
    </div>
  )
}

export default Petition
