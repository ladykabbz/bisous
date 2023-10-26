import React from "react";
import "./App.css";


class Appointment extends React.Component {
    handleClick = () => {
      alert('We will get back to you shortly');
    }
  
    render() {
      return (
        <form>
          <div className="form-field">
            <input type="submit" className="sendinput" value="SEND" onClick={this.handleClick} />
          </div>
        </form>
      );
    }
  }
  
  export default Appointment;
  