import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    employeeName: '',
    age: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: null,
    gender: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData({ ...formData, dateOfBirth: date });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 className='mb-4'>Employee details</h2>
            <div className="form-group p-2">
              <label className='mb-2' htmlFor="employeeName">Employee Name</label>
              <input
                type="text"
                className="form-control"
                id="employeeName"
                name="employeeName"
                placeholder="anjana tharanga"
                value={formData.employeeName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group p-2">
              <label className='mb-2' htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                name="age"
                placeholder="18"
                value={formData.age}
                onChange={handleInputChange}
              />

              <div className="form-group p-2">
                <label className='mb-2' htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group p-2">
                <label className='mb-2' htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="077-4436594"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group p-2">
                <label className='mb-2' htmlFor="datePicker">Date of Birth</label>
                <div>
                  <DatePicker
                    id="datePicker"
                    className="form-control"
                    placeholderText="Select Date of Birth"
                    dateFormat="dd/MM/yyyy"
                    selected={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
              </div>

              <div className="form-group p-3">
                <label className='mb-2' htmlFor="gender">Gender</label>
                <select
                  className="form-control"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className='mb-4'>Work details</h2>

            <div className="form-group p-2">
              <label className='mb-2' htmlFor="employeeName">Employee Name</label>
              <input
                type="text"
                className="form-control"
                id="employeeName"
                name="employeeName"
                placeholder="anjana tharanga"
                value={formData.employeeName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group p-2">
              <label className='mb-2' htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                name="age"
                placeholder="18"
                value={formData.age}
                onChange={handleInputChange}
              />

              <div className="form-group p-2">
                <label className='mb-2' htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group p-2">
                <label className='mb-2' htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="077-4436594"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group p-2">
                <label className='mb-2' htmlFor="datePicker">Date of Birth</label>
                <div>
                  <DatePicker
                    id="datePicker"
                    className="form-control"
                    placeholderText="Select Date of Birth"
                    dateFormat="dd/MM/yyyy"
                    selected={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
              </div>

              <div className="form-group p-3">
                <label className='mb-2' htmlFor="gender">Gender</label>
                <select
                  className="form-control"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

            </div>

          </>
        );
      case 3:
        return (
          <>
                      <h2 className='mb-4'>Dependent details</h2>
            <div className="form-group p-2">
              <label className='mb-2' htmlFor="employeeName">Employee Name</label>
              <input
                type="text"
                className="form-control"
                id="employeeName"
                name="employeeName"
                placeholder="anjana tharanga"
                value={formData.employeeName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group p-2">
              <label className='mb-2' htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                name="age"
                placeholder="18"
                value={formData.age}
                onChange={handleInputChange}
              />

              <div className="form-group p-2">
                <label className='mb-2' htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group p-2">
                <label className='mb-2' htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="077-4436594"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group p-2">
                <label className='mb-2' htmlFor="datePicker">Date of Birth</label>
                <div>
                  <DatePicker
                    id="datePicker"
                    className="form-control"
                    placeholderText="Select Date of Birth"
                    dateFormat="dd/MM/yyyy"
                    selected={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
              </div>

              <div className="form-group p-3">
                <label className='mb-2' htmlFor="gender">Gender</label>
                <select
                  className="form-control"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className='card shadow text-start p-5 w-75' style={{ marginLeft: "240px", marginTop: "90px" }}>
        <form>
          {renderStep()}
          <div className='mt-4 d-flex justify-content-between'>
            <div>
              {currentStep > 1 && (
                <button className='btn btn-secondary' onClick={handlePrevStep}>
                  Previous
                </button>
              )}
            </div>
            <div>
              {currentStep < 3 && (
                <button className='btn btn-info text-white fs-5' onClick={handleNextStep}>
                  Next
                </button>
              )}
              {currentStep === 3 && (
                <button className='btn btn-success text-white fs-5'>
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className='' style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
}