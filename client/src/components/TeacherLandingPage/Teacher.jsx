import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "./teacher.css";

function Teacher() {
  const [file, setFile] = useState();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const formData = new FormData();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    formData.append("file", file);
    axios.post("/upload", formData);
  }
  return (
    <div className="container-fluid">
      <div className="form">
    <form onSubmit={handleSubmit} className="form-control">
      <div className="text-success p-3">
        <h2>Upload your File</h2>
      </div>
      <label className="inp-lab" htmlFor="marks">
      {/* <i className=".material-symbols-outlined">Icon </i> */}
      </label>

      <input
        className="icon-input"
        type="file"
        name="marksExcel"
        id="marks"
        accept=".xlsx"
        onChange={(e) => setFile(e.target.files[0])}
        />
      <button type="submit" className="btn btn-outline-success">Submit form</button>
    </form>
        </div>
        </div>
  );
}

export default Teacher;
