import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      
      <div className="form-group">
        <label htmlFor="clothesNum">Number of Articles</label>
        <input type="number" className="form-control" id="clothesNum" />
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
