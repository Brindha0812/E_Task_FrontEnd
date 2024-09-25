import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './emp.css';

function Emp() {


  const url = "http://localhost:3002/list/createEmployee";

  const [formData, setFormData] = useState({

    employee_email_id: "",
    employee_name: "",
    employee_code: "",
    employee_Gender: "",
    employee_DOB: "",
    employee_Age: "",
    employee_Marital_status: "",
    employee_Fathe_name: "",
    employee_Dateofjoining: "",
    employee_WorkexperienceI: "",
    employee_WorkexperienceO: "",
    employee_Qualification: "",
    employee_PF_no: "",
    employee_Aadhar_no: "",
    employee_PAN_no: "",
    employee_Communication_add: "",
    employee_Permanent_add: "",
    employee_Present_add: "",
    employee_Bank_Acc_no: "",
    employee_Phone_no: "",
    user_Date_of_resign: "",
    employee_status: "",
    employee_classification: "",
    employee_salary: "",
    employee_Department:"",
    employee_Designation:"",
    employee_UAN_no:"",
    employee_Esic_no:""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        employee_email_id: formData.employee_email_id,
        employee_name: formData.employee_name,
        employee_code: formData.employee_code,
        employee_Gender: formData.employee_Gender,
        employee_DOB: formData.employee_DOB,
        employee_Age: formData.employee_Age,
        employee_Marital_status: formData.employee_Marital_status,
        employee_Fathe_name: formData.employee_Fathe_name,
        employee_Dateofjoining: formData.employee_Dateofjoining,
        employee_WorkexperienceI: formData.employee_WorkexperienceI,
        employee_WorkexperienceO: formData.employee_WorkexperienceO,
        employee_Qualification: formData.employee_Qualification,
        employee_PF_no: formData.employee_PF_no,
        employee_Aadhar_no: formData.employee_Aadhar_no,
        employee_PAN_no: formData.employee_PAN_no,
        employee_Communication_add: formData.employee_Communication_add,
        employee_Permanent_add: formData.employee_Permanent_add,
        employee_Present_add: formData.employee_Present_add,
        employee_Bank_Acc_no: formData.employee_Bank_Acc_no,
        employee_Phone_no: formData.employee_Phone_no,
        user_Date_of_resign: formData.user_Date_of_resign,
        employee_status: formData.employee_status,
        employee_classification: formData.employee_classification,
        user_Date_of_resign: formData.user_Date_of_resign,
        employee_salary: formData.employee_salary,
        employee_Department:formData.employee_Department,
        employee_UAN_no:formData.employee_UAN_no,
        employee_Esic_no:formData.employee_Esic_no


      })
      .then((response) => {
        console.log("Client created successfully:", response.data);
        alert("Client created successfully!");
      })
      .catch((error) => {
        console.error("Error creating client:", error);
      });
  };








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
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <label htmlFor="employeeType">EmployeeType</label>
            <select onChange={ handleChange } value={formData.employee_classification} id='employee_classification' >
              <option label="">Select Employee Type</option>
              <option label="">Labour</option>
            </select>

            <label htmlFor="employeeName">EmployeeName</label>
            <input type="text" id="employee_name" label="employeeName" value={formData.employee_name} onChange={ handleChange } placeholder=" Employee Name" />
            <label htmlFor="employeeCode">EmployeeCode</label>
            <input type="id" id="employeeCode" label=" EmployeeCode" placeholder="Employee Code" />
          </div>
          <div className="form-fields">
            <label htmlFor="Gender">Gender</label>
            <select onChange={ handleChange } value={formData.employee_Gender} id='employee_gender'>
              <option label="">Select Gender</option>
              <option label="">Male</option>
              <option label="">Female</option>
            </select>
            <label htmlFor="DOB">DateOfBirth</label>
            <input type="date" id="employee_DOB" placeholder="Date of Birth" onChange= { handleChange } value={formData.employee_DOB} />
            <label htmlFor="AGE">Age</label>
            <input type="text" id="employee_Age" placeholder="Age" onChange= { handleChange } value={formData.employee_Age} />
          </div>
          <div className='form-fields'>
            <label htmlFor="EMAIL">EMail</label>
            <input type="text" id="employee_email_id" label="email" placeholder="E-mail" onChange= { handleChange } value={formData.employee_email_id} />
            <label htmlFor="PHONE">Phone</label>
            <input type="text" id="employee_Phone_no" label="phone" placeholder="Phone" onChange={ handleChange } value={formData.employee_Phone_no} />
            <label htmlFor="STATUS">Status</label>
            <select onChange={ handleChange } value={formData.employee_status} id='employee_status' >
              <option value="">Maretial Status</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </select>
          </div>
          <div className='form-fields'>
            <label htmlFor="Father Name">Father/SpouseName</label>
            <input type="data" id="employee_Fathe_name" label="Father/Spouse Name" placeholder="Father/Spouse Name" onChange={ handleChange } value={formData.employee_Fathe_name} />
            <label htmlFor="Department">Department</label>
            <select onChange={ handleChange } value={formData.employee_Department} id="employee_Department"  >
              <option label="dapartment">Department</option>
              <option label="Sales">Sales</option>
              <option label="Marketing">Marketing</option>
            </select>
            <label htmlFor="Designation">Designation</label>
            <select onChange={ handleChange } value={formData.employee_Designation} id='employee_Designation'>
              <option label="Designation">Designation</option>
              <option label="Admin">Admin</option>
              <option label="Employee">Employee</option>
            </select>

          </div>
          <div className='form-fields'>
            <label htmlFor="Dateofjoining">DateOfJoining</label>
            <input type="date" id="employee_Dateofjoining" label="date of joining" placeholder="Date Of Joining" onChange={ handleChange } value={formData.employee_Dateofjoining} />
            <label htmlFor="work experience in generic">WorkExperienceInGeneric</label>
            <input type="text" id="employee_WorkexperienceI" label="work experience in generic cnc" onChange={ handleChange } value={formData.employee_WorkexperienceI} placeholder="Work Experience in Generic CNC" />
            <label htmlFor="work experience outside">WorkExperienceOutside</label>
            <input type="text" id="employee_WorkexperienceO" label="work experience outside" onChange={ handleChange } value={formData.employee_WorkexperienceO} placeholder="Work Experience outside" />
          </div>

          <div className='form-fields'>
            <label htmlFor="Qualification">Qualification</label>
            <input type="text" id="employee_Qualification" label="Qualification" placeholder="Qualification" onChange={ handleChange } value={formData.employee_Qualification} />
            <label htmlFor="UAN Number">UANNumber</label>
            <input type="text" id="employee_UAN_no" label="UAN Number" placeholder="UAN Number" onChange={ handleChange } value={formData.employee_UAN_no} />
            <label htmlFor="ESIC Number">ESICNumber</label>
            <input type="text" id="employee_Esic_no" label="ESIC Number" placeholder="ESIC Number" onChange={handleChange} value={formData.employee_Esic_no}/>
          </div>

          <div className='form-fields'>
            <label htmlFor="PF Number">PFNumber</label>
            <input type="text" id="employee_PF_no" label="PF Number" placeholder="PF Number" onChange={ handleChange } value={formData.employee_PF_no} />
            <label htmlFor="Aadhar Number">AadharNumber</label>
            <input type="text" id="employee_Aadhar_no" label="Aadhar Number" placeholder="Aadhar Number" onChange={ handleChange } value={formData.employee_Aadhar_no} />
            <label htmlFor="Pan Number">PanNumber</label>
            <input type="text" id="employee_PAN_no" label="Pan Number" placeholder="Pan Number" onChange={ handleChange } value={formData.employee_PAN_no} />
          </div>

          <div className='form-fields'>
            <label htmlFor="communication address">CommunicationAddress</label>
            <textarea id="employee_Communication_add" label="communication address" placeholder=" Communication Address" onChange={ handleChange } value={formData.employee_Communication_add}></textarea>
            <label htmlFor="Permanent Address">PermanentAddress</label>
            <textarea id="employee_Permanent_add" label="Permanent address" placeholder="Permanent Address" onChange={ handleChange } value={formData.employee_Permanent_add}></textarea>
            <label htmlFor="present address">PresentAddress</label>
            <textarea id="employee_Present_add" label="present address" placeholder="Present Address" onChange={ handleChange } value={formData.employee_Present_add}></textarea>
          </div>
          <div className='form-fields'>
            <label htmlFor="Bank account Number">BankAccountNumber</label>
            <input type="text" id="employee_Bank_Acc_no" label="Bank account Number" placeholder=" Bank Account Number" onChange={ handleChange } value={formData.employee_Bank_Acc_no} />
            <label htmlFor="Date Of Resignation">DateOfResignation</label>
            <input type="date" id="user_Date_of_resign" label="Date Of Resignationr" placeholder="Date Of Resignation" onChange={ handleChange } value={formData.user_Date_of_resign} />
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
          {/* <form onSubmit={handleSubmit}> */}
          <Link to="/card">
            <button type="submit" className="submit-button">
              Create
            </button>
            {/* </form> */}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Emp;





// import React from 'react';
// import { Link } from 'react-router-dom';
// // import Breadcrumbs from '../breadcrumbs/breadcrumbs';
// import './emp.css';

// const Emp = () => {

//   return (
//     <div className="main-container">
//         <header>
//             <nav>
//                 <ul>
//                     <p>Basic info</p>
//                 </ul>
//             </nav>
//         </header>
//         {/* <Breadcrumbs/> */}

//         <div className="form-container">
//           <div className="profile-image">
//             <img src='./assets/hari.png' alt="Emp Profile" className="profile-icon" />
//           </div>
//           <div className="form-fields">
//             <label htmlFor="employeeType">EmployeeType</label>
//             <select name="employeeType" value="employeeType" >
//               <option label="">Select Employee Type</option>
//               <option label="Labour">Labour</option>
//             </select>
//             <label htmlFor="employeeName">EmployeeName</label>
//             <input type="text" name="employeeName" label="employeeName"  placeholder=" Employee Name" />
//             <label htmlFor="employeeCode">EmployeeCode</label>
//             <input type="id" name="employeeCode" label=" EmployeeCode"  placeholder="Employee Code" />
//           </div>
//           <div className="form-fields">
//           <label htmlFor="Gender">Gender</label>
//             <select name="gender" value="gender" >
//               <option label="">Select Gender</option>
//               <option label="Male">Male</option>
//               <option label="Female">Female</option>
//             </select>
//             <label htmlFor="DOB">DateOfBirth</label>
//             <input type="date" name="dob"  placeholder="Date of Birth" />
//             <label htmlFor="AGE">Age</label>
//             <input type="text" name="age"  placeholder="Age" />
//           </div>
//           <div className='form-fields'>
//           <label htmlFor="EMAIL">EMail</label>
//             <input type="text" name="email" label="email"  placeholder="E-mail" />
//             <label htmlFor="PHONE">Phone</label>
//             <input type="text" name="phone" label="phone"  placeholder="Phone" />
//             <label htmlFor="STATUS">Status</label>
//               <select name="status" value="status" >
//                 <option label="">Maretial Status</option>
//                 <option label="Married">Married</option>
//                 <option label="Unmarried">Unmarried</option>
//               </select>
//           </div>
//           <div className='form-fields'>
//           <label htmlFor="Father Name">Father/SpouseName</label>
//             <input type="data" name="father/spouse name" label="Father/Spouse Name"  placeholder="Father/Spouse Name" />
//             <label htmlFor="Department">Department</label>
//               <select name="department" value="department" >
//                 <option label="dapartment">Department</option>
//                 <option label="Sales">Sales</option>
//                 <option label="Marketing">Marketing</option>
//               </select>
//               <label htmlFor="Designation">Designation</label>
//               <select name="Designation" value="Designation" >
//                 <option label="Designation">Designation</option>
//                 <option label="Admin">Admin</option>
//                 <option label="Employee">Employee</option>
//               </select>

//           </div>
//           <div className='form-fields'>
//           <label htmlFor="Dateofjoining">DateOfJoining</label>
//             <input type="date" name="dateofjoining" label="date of joining"  placeholder="Date Of Joining" />
//             <label htmlFor="work experience in generic">WorkExperienceInGeneric</label>
//             <input type="text" name="work experience in generic" label="work experience in generic cnc"  placeholder="Work Experience in Generic CNC" />
//             <label htmlFor="work experience outside">WorkExperienceOutside</label>
//             <input type="text" name="work experience outside" label="work experience outside"  placeholder="Work Experience outside" />
//           </div>

//           <div className='form-fields'>
//           <label htmlFor="Qualification">Qualification</label>
//             <input type="text" name="Qualification" label="Qualification"  placeholder="Qualification" />
//             <label htmlFor="UAN Number">UANNumber</label>
//             <input type="text" name="UAN Number" label="UAN Number" placeholder="UAN Number"  />
//             <label htmlFor="ESIC Number">ESICNumber</label>
//             <input type="text" name="ESIC Number" label="ESIC Number"  placeholder="ESIC Number" />
//           </div>

//           <div className='form-fields'>
//           <label htmlFor="PF Number">PFNumber</label>
//             <input type="text" name="PF Number" label="PF Number"  placeholder="PF Number" />
//             <label htmlFor="Aadhar Number">AadharNumber</label>
//             <input type="text" name="Aadhar Number" label="Aadhar Number"  placeholder="Aadhar Number" />
//             <label htmlFor="Pan Number">PanNumber</label>
//             <input type="text" name="Pan Number" label="Pan Number"  placeholder="Pan Number" />
//           </div>

//           <div className='form-fields'>
//           <label htmlFor="communication address">CommunicationAddress</label>
//             <textarea name="communication address" label="communication address"  placeholder=" Communication Address"></textarea>
//             <label htmlFor="Permanent Address">PermanentAddress</label>
//             <textarea name="Permanent address" label="Permanent address"  placeholder="Permanent Address"></textarea>
//             <label htmlFor="present address">PresentAddress</label>
//             <textarea name="present address" label="present address"  placeholder="Present Address"></textarea>
//           </div>
//           <div className='form-fields'>
//           <label htmlFor="Bank account Number">BankAccountNumber</label>
//             <input type="text" name="Bank account Number" label="Bank account Number"  placeholder=" Bank Account Number" />
//             <label htmlFor="Date Of Resignation">DateOfResignation</label>
//             <input type="date" name="Date Of Resignation" label="Date Of Resignationr"  placeholder="Date Of Resignation" />
//           </div>
//           <Link to="/card">
//             <button type="submit" className="submit-button">Create</button>
//           </Link>
//         </div>
//     </div>
//   );
// };

// export default Emp;