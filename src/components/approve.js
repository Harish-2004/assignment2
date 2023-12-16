
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
export default  function Approve() {
    let nav=useNavigate()
  const [showContent, setShowContent] = useState(false);
 const handle=()=>nav('/internship-form/approve/comp')
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 10000);
    return () => clearTimeout(timeoutId);
  }, []);  return (
    <div>
      <button onClick={() => setShowContent(!showContent)}>My Application Ready for verification</button>
      {showContent &&<><h5>Your Application is verified successfully!!
        You can now go to nextstep</h5><button onClick={handle}>NextStep</button></>}
    </div> );}
