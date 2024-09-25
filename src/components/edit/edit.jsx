import React, { useState } from 'react';
import './edit.css';

const Edit = () => {

  return (
    <div className="main-container">
              <header>
            <nav>
                <ul>
                    <p>Basic info</p>
                </ul>
            </nav>
        </header>
      

      <div className="form-container">
        <div className="profile-image">
          <img src='./assets/hari.png' alt="Emp Profile" className="profile-icon" />
          <button type='submit' className='edit-btn'>Edit</button>
        </div>
        <div className="form-fields">
          <label htmlFor="employeeType">EmployeeType</label>
          <select name="employeeType" value="employeeType" >
            <option label="">Select Employee Type</option>
            <option label="Labour">Labour</option>
            {/* Add more options as needed */}
          </select>
          <label htmlFor="employeeName">EmployeeName</label>
          <input type="text" name="employeeName" label="employeeName"  placeholder=" Employee Name" />
          <label htmlFor="employeeCode">EmployeeCode</label>
          <input type="id" name="employeeCode" label=" EmployeeCode"  placeholder="Employee Code" />
        </div>
        <div className="form-fields">
        <label htmlFor="Gender">Gender</label>
          <select name="gender" value="gender" >
            <option label="">Select Gender</option>
            <option label="Male">Male</option>
            <option label="Female">Female</option>
          </select>
          <label htmlFor="DOB">DateOfBirth</label>
          <input type="date" name="dob"  placeholder="Date of Birth" />
          <label htmlFor="AGE">Age</label>
          <input type="text" name="age"  placeholder="Age" />
        </div>
        <div className='form-fields'>
        <label htmlFor="EMAIL">EMail</label>
          <input type="text" name="email" label="email"  placeholder="E-mail" /> 
          <label htmlFor="PHONE">Phone</label>
          <input type="text" name="phone" label="phone"  placeholder="Phone" /> 
          <label htmlFor="STATUS">Status</label>
            <select name="status" value="status" >
              <option label="">Maretial Status</option>
              <option label="Married">Married</option>
              <option label="Unmarried">Unmarried</option>
            </select>
        </div>
        <div className='form-fields'>
        <label htmlFor="Father Name">Father/SpouseName</label>
          <input type="data" name="father/spouse name" label="Father/Spouse Name"  placeholder="Father/Spouse Name" />
          <label htmlFor="Department">Department</label>
            <select name="department" value="department" >
              <option label="dapartment">Department</option>
              <option label="Sales">Sales</option>
              <option label="Marketing">Marketing</option>
            </select>
            <label htmlFor="Designation">Designation</label>
            <select name="Designation" value="Designation" >
              <option label="Designation">Designation</option>
              <option label="Admin">Admin</option>
              <option label="Employee">Employee</option>
            </select>

        </div>
        <div className='form-fields'>
        <label htmlFor="Dateofjoining">DateOfJoining</label>
          <input type="date" name="dateofjoining" label="date of joining"  placeholder="Date Of Joining" />
          <label htmlFor="work experience in generic">WorkExperienceInGeneric</label>
          <input type="text" name="work experience in generic" label="work experience in generic cnc"  placeholder="Work Experience in Generic CNC" /> 
          <label htmlFor="work experience outside">WorkExperienceOutside</label>
          <input type="text" name="work experience outside" label="work experience outside"  placeholder="Work Experience outside" /> 
        </div>

        <div className='form-fields'>
        <label htmlFor="Qualification">Qualification</label>
          <input type="text" name="Qualification" label="Qualification"  placeholder="Qualification" />
          <label htmlFor="UAN Number">UANNumber</label>
          <input type="text" name="UAN Number" label="UAN Number" placeholder="UAN Number"  /> 
          <label htmlFor="ESIC Number">ESICNumber</label>
          <input type="text" name="ESIC Number" label="ESIC Number"  placeholder="ESIC Number" /> 
        </div>

        <div className='form-fields'>
        <label htmlFor="PF Number">PFNumber</label>
          <input type="text" name="PF Number" label="PF Number"  placeholder="PF Number" />
          <label htmlFor="Aadhar Number">AadharNumber</label>
          <input type="text" name="Aadhar Number" label="Aadhar Number"  placeholder="Aadhar Number" />
          <label htmlFor="Pan Number">PanNumber</label> 
          <input type="text" name="Pan Number" label="Pan Number"  placeholder="Pan Number" /> 
        </div>

        <div className='form-fields'>
        <label htmlFor="communication address">CommunicationAddress</label> 
          <textarea name="communication address" label="communication address"  placeholder=" Communication Address"></textarea>
          <label htmlFor="Permanent Address">PermanentAddress</label> 
          <textarea name="Permanent address" label="Permanent address"  placeholder="Permanent Address"></textarea>
          <label htmlFor="present address">PresentAddress</label> 
          <textarea name="present address" label="present address"  placeholder="Present Address"></textarea>
        </div>   
        <div className='form-fields'>
        <label htmlFor="Bank account Number">BankAccountNumber</label> 
          <input type="text" name="Bank account Number" label="Bank account Number"  placeholder=" Bank Account Number" />
          <label htmlFor="Date Of Resignation">DateOfResignation</label> 
          <input type="date" name="Date Of Resignation" label="Date Of Resignationr"  placeholder="Date Of Resignation" /> 
        </div>
        {/* <div className='sub-container'>
            <div className='form1-fields'>
            <label htmlFor="Department">Department</label>
                <select name="department" value="department" >
                <option label="dapartment">Department</option>
                <option label="Sales">Sales</option>
                <option label="Marketing">Marketing</option>
                </select>
            </div>
        </div> */}
          <button type="submit" className="save-button">Save</button>

      </div>
    </div>
  );
};

export default Edit;