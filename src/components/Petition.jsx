import React from 'react'
import {useRef} from 'react';

const FORM_HANDLER_SERVICE_URL = "https://diftxiihiaqqcholvm2qe4cb3a0ipmgb.lambda-url.us-east-2.on.aws/"; 

export const RESPONSE_TYPE_ERROR = "error";
export const RESPONSE_TYPE_SUCCESS = "success";

const Petition = () => {
  const errorOutputRef = useRef();

  return (
    <div className='max-w-[1000px] h-[500px] mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-1 gap-4'>
        <div>
            <h2 className='text-6xl font-bold mb-4'>Support This Project</h2>
            <p className='text-xl'>Sign this petition to demonstrate your support for our initiative, dedicated to fostering a community-oriented, sustainable, and affordable housing environment. Together, we can make a meaningful difference.</p>
        </div>  
        <div>
        <form onSubmit={async (e) => {
          e.preventDefault();
          const form_inputs = e.target.querySelectorAll("input");
          let form_data_json = {};
          for(let ip of form_inputs){
            form_data_json[ip.name] = ip.value;
          }

          // const form_data = new FormData();
          // for (let ip of form_inputs) {
          //   form_data.append(ip.name, ip.value);
          // }
          // console.log(form_data);
          


          const response = await fetch(FORM_HANDLER_SERVICE_URL, {method: "POST", headers: {'Content-Type' : 'text/plain', 'Origin' : window.location.href}, body: JSON.stringify(form_data_json)})
          // console.log(await response.text())
          const response_json = await response.json();
          console.log(response_json);
          if(response_json.type === RESPONSE_TYPE_SUCCESS){
            const button = e.target.querySelector('button');
            button.classList.remove('bg-teal-600');
            button.classList.remove('hover:bg-teal-800');
            button.classList.add('bg-gray-600');
            button.disabled = true;
            button.innerText = "Submitted!"
          }else{
            if(errorOutputRef.current){
              errorOutputRef.current.hidden = false;
              errorOutputRef.current.innerText = response_json.msg;
            } 
          }
      }} className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 [&>input]:border-solid [&>input]:border-2 [&>*]:rounded [&>input]:h-10 [&>input]:border-gray-600 [&>button]:col-span-1 [&>button]:sm:col-span-2 [&>output]:col-span-1 [&>output]:sm:col-span-2">
          {/* <label htmlFor="first_name" className="first_name_label">First Name</label> */}
          <input placeholder=" First Name" type="text" name="first_name"/>
          {/* <label htmlFor="last_name" className="last_name_label">Last Name</label> */}
          <input placeholder=" Last Name"type="text" name="last_name" />
          {/* <label htmlFor="email" className="email_label">Email</label> */}
          <input placeholder=" Email"type="text" name="email" />
          {/*<label htmlFor="phone_number" className="phone_number_label">Phone Number</label>
          <input placeholder=" Phone Number" type="text" name="phone_number" className="phone_number" />
          <label htmlFor="address" className="address_label">Address</label>
          <input placeholder=" Address" type="text" name="address" className="address" />
          <label htmlFor="postal_code" className="postal_code_label">Postal Code</label>
      <input placeholder=" Postal Code" type="text" name="postal_code" className="postal_code" />*/}
          {/* <label htmlFor="city" className="city_label">City</label> */}
          <input placeholder=" City" type="text" name="city" />
          {/*<label htmlFor="country" className="country_label">Country</label>
          <input placeholder=" Country" type="text" name="country" className="country" />*/}
          <button className="border py-2 px-4 rounded-md hover:bg-teal-800 border-black bg-teal-600 text-white hover:shadow-xl" type="submit" >Submit!</button>
          <output hidden className="border-red bg-red-300 text-red" ref={errorOutputRef}></output>
        </form>
        </div>  
    </div>
  )
}

export default Petition
