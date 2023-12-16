
import React from 'react';
import { useNavigate } from 'react-router-dom';
function ConditionalContent() {
   const currentDate = new Date();
  const v = currentDate.getMonth() + 1
  const con = currentDate.getFullYear() + '-' + v + '-' + currentDate.getDate()
  const targetDate = localStorage.getItem('data')
  const shouldDisplayContent = con === targetDate;
  console.log(shouldDisplayContent)
 let navigate=useNavigate()
  return (
    <div>
      {shouldDisplayContent ? (<div>
        <form  method="get"  >
          <label htmlForfor="offerLetter">Upload Internship Completion Letter:</label>
          <input type="file" id="offerLetter" name="offerLetter" accept=".pdf" required/>
            <br/>
              <br/>
                <button type="submit" onClick={()=>navigate("/")}>Submit</button>
              </form>
              <p>This content will only be displayed on {targetDate}.</p> </div>) : (
            <p>Content will not be displayed today.</p>)}
          </div>);}
export default ConditionalContent;
