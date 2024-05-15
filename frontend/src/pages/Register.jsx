import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Register() {
  return (
    <div>
      <Navbar />


      <div className='card shadow text-start p-5 w-75' style={{ marginLeft: "240px", marginTop: "90px" }} >
        <form>
          <div className="form-group p-2">
            <label className='mb-2' htmlFor="exampleFormControlInput1">Employee Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="anjana tharanga"
            />
          </div>

          <div className="form-group p-2">
            <label className='mb-2' htmlFor="exampleFormControlInput1">Age</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="18"
            />
          </div>

          <div className="form-group p-2">
            <label className='mb-2' htmlFor="exampleFormControlInput1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="18"
            />
          </div>

          <div className="form-group p-2">
            <label className='mb-2' htmlFor="exampleFormControlInput1">Mobile Number</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="077-4436594"
            />
          </div>

          <div className="form-group p-3">
            <label className='mb-2' htmlFor="exampleFormControlSelect2">Gender</label>
            <select multiple="" className="form-control" id="exampleFormControlSelect2">
              <option>select gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

          </div>
          <div className="form-group p-3">
            <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
        </form>

      </div>

      <div className='' style={{ marginTop: "100px" }}>
        <Footer />
      </div>


    </div>
  )
}
