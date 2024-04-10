import React from 'react'
import "./toggleswitch.css";
const toggleswitch = () => {
   
    const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <div className="toggle-switch" onClick={toggleSwitch}>
      <input type="checkbox" checked={isToggled} readOnly />
      <span className="slider round"></span>
    </div>

  )
}

export default toggleswitch