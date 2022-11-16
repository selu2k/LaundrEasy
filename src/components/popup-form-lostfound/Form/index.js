import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="item">Item Name</label>
        <input type="text" className="form-control" id="item" />
      </div>
      <div className="form-group">
        <label htmlFor="foundAt">Location</label>
        <input type="text" className="form-control" id="foundAt" />
      </div>

      <div className="form-group">
        <label htmlFor="phNo">Phone Number</label>
        <input type="text" className="form-control" id="phNo" />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea type="text" className="form-control" id="description" />
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary btn-color" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
