import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea type="text" className="form-control" id="description" />
        </div>

        <div className="form-group">
          <button className="form-control btn btn-primary btn-color" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
export default Form;

//item, description, phone-no, foundAt
