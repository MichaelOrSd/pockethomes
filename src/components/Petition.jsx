import React from 'react'

const FORM_HANDLER_SERVICE_URL = "http://PocketHomesBackend-env-1.eba-deqwwwvu.us-east-2.elasticbeanstalk.com"; 

const Petition = () => {
  return (
    <div className='max-w-[1000px] h-[500px] mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-1 gap-4'>
        <div>
            <h3 className='text-2xl font-bold mb-4'>Support This Project</h3>
            <p>Sign this petition to demonstrate your support for our initiative, dedicated to fostering a community-oriented, sustainable, and affordable housing environment. Together, we can make a meaningful difference.</p>
        </div>  
        <div>
        <form onSubmit={(e)=>{
          e.preventDefault()
          const form_inputs = e.target.querySelectorAll("input");
          let form_data = {};
          for(let ip of form_inputs){
            form_data[ip.name] = ip.value;
          }
          fetch(FORM_HANDLER_SERVICE_URL, {method: "POST", headers: {'Content-Type' : 'application/json'}, body:JSON.stringify(form_data)})
            .then((r)=>r.text())
            .then((v)=>console.log(v))
        }}>
          <label htmlFor="first_name">First Name</label><input type="text" name="first_name" />
          <label htmlFor="last_name">Last Name</label><input type="text" name="last_name" />
          <label htmlFor="email">Email</label><input type="text" name="email" />
          <label htmlFor="phone_number">Phone Number</label><input type="text" name="phone_number" />
          <label htmlFor="address">Address</label><input type="text" name="address" />
          <label htmlFor="postal_code">Postal Code</label><input type="text" name="postal_code" />
          <label htmlFor="city">City</label><input type="text" name="city" />
          <label htmlFor="country">Country</label><input type="text" name="country" />
          <button type="submit">Submit!</button>
        </form>

        </div>  
    </div>
  )
}

export default Petition