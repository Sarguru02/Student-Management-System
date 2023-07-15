import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Teacher() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(currentUser);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    let file = e.target.uploadFile.files[0];
    console.log(file);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="marks">Choose Excel file for marks: </label>
      <input type="file" name="marksExcel" id="marks" accept=".xlsx" />

      <button type="submit">Submit form</button>
    </form>
  );
}

export default Teacher;
