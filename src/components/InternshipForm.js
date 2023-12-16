  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import './Intern.css';

  const InternshiphtmlForm = () => {
   const navigate = useNavigate();
    const [endDate, setEndDate] = useState('2023-11-30');

    const handleEndDateChange = (event) => {
      setEndDate(event.target.value);
      console.log(typeof endDate);
      localStorage.setItem('data', endDate);
    };

    const handle = async () => {
      const companyName = document.getElementById('companyName').value;
      const rollNumber = document.getElementById('rollNumber').value;
      const studentName = document.getElementById('studentName').value;
      const projectTitle = document.getElementById('projectTitle').value;
      const yearSemester = document.getElementById('yearSemester').value;
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      const numberOfDays = document.getElementById('numberOfDays').value;
      const stipend = document.getElementById('stipend').value;
     
      const formData = new FormData();
      formData.append('companyName', companyName);
      formData.append('rollNumber', rollNumber);
      formData.append('studentName', studentName);
      formData.append('projectTitle', projectTitle);
      formData.append('yearSemester', yearSemester);
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);
      formData.append('numberOfDays', numberOfDays);
      formData.append('stipend', stipend);
      console.log(formData);
      const response = await fetch('http://localhost:5001/api/internship/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Log the response message from the server
        console.log("error");
        navigate('/internship-form/approve');
      } else {
        console.error('Failed to submit internship data');
      }
    };

    return (
      <div>
     
        <div className="containers">
          <h1>Internship Application</h1>
          <form method="post">
          <label htmlFor="companyName">Name of the Company / Industry:</label>
              <input type="text" id="companyName" name="companyName" required/>

              <label htmlFor="rollNumber">Roll Number:</label>
              <input type="text" id="rollNumber" name="rollNumber" required/>

              <label htmlFor="studentName">Name of the Student:</label>
              <input type="text" id="studentName" name="studentName" required/>

              <label htmlFor="projectTitle">Title of the Project Work in Company:</label>
              <input type="text" id="projectTitle" name="projectTitle" required/>

              <label htmlFor="yearSemester">Year/Sem:</label>
              <input type="text" id="yearSemester" name="yearSemester" pattern="[0-9]{1,2}" required/>

              <label htmlFor="startDate">Start Date (dd-mm-yy htmlFormat):</label>
              <input type="date" id="startDate" name="startDate" required/>

              <label htmlFor="endDate">End Date (dd-mm-yy htmlFormat):</label>
              <input type="date" id="endDate" value={endDate}
            onChange={handleEndDateChange} name="endDate" required/>

            
              <label htmlFor="numberOfDays">No. of Days:</label>
              <input type="number" id="numberOfDays" name="numberOfDays" pattern="[0-9]{1,3}" required/>

              <label htmlFor="stipend">Stipend Per Month:</label>
              <input type="number" id="stipend" name="stipend" pattern="[0-9]{1,8}" required/>

              <label htmlFor="offerLetter">Upload Internship Offer Letter:</label>
              <input type="file" id="offerLetter" name="offerLetter" accept=".pdf" required/>

              <button type="submit" onClick={handle}>Submit</button>
              <button type="reset">Reset</button>
          </form>
          
        </div>
      </div>
    );
  };

  export default InternshiphtmlForm;
