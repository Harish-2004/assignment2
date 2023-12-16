import React, { useState } from 'react';

const CompanyForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [interns, setInterns] = useState([]);
  const [internCount, setInternCount] = useState(null);
  const [stipendData, setStipendData] = useState([]);

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch interns
      const internsResponse = await fetch(`/api/internship/${encodeURIComponent(companyName)}`);
      const internsData = await internsResponse.json();
      setInterns(internsData);

      // Fetch intern count
      const countResponse = await fetch(`/api/internship/count/${encodeURIComponent(companyName)}`);
      const countData = await countResponse.json();
      setInternCount(countData.count);

      // Fetch stipend data
      const stipendResponse = await fetch(`/api/internship/stipend/${encodeURIComponent(companyName)}`);
      const stipendData = await stipendResponse.json();
      setStipendData(stipendData);
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  return (
    <div>
      <h2>Company Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={companyName}
          onChange={handleCompanyNameChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Interns:</h3>
        <pre>{JSON.stringify(interns, null, 2)}</pre>
      </div>

      <div>
        <h3>Intern Count:</h3>
        <p>{internCount}</p>
      </div>

      <div>
        <h3>Stipend Data:</h3>
        <pre>{JSON.stringify(stipendData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default CompanyForm;

