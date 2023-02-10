import React from "react";
import "./AddProject.css";

function AddProject() {
  return (
    <div>
      <div className="main-block">
        <h1>Add Project</h1>
        <form action="/">
          <div className="account-type">
            <input
              type="text"
              placeholder="Project Name"
              value=""
              name="account"
            />
          </div>
          <div className="account-type">
            <input
              type="text"
              placeholder="Description"
              value=""
              name="account"
            />
          </div>
          <div className="account-type">
            <p>Type</p>
            <select required>
              <option value="1">Billable</option>
              <option value="2">Non-Billable</option>
            </select>
          </div>
          <div className="account-type">
            <p>Status</p>
            <select required>
              <option value="1">Confirmed</option>
              <option value="2">Probable</option>
            </select>
          </div>
          <div className="account-type">
            <p>Admin Id</p>
            <select required>
              <option value="1">192912</option>
              <option value="2">1982318</option>
            </select>
          </div>
          <div className="btn-block">
            {/* <p>
              By clicking Register, you agree on our{" "}
              <a href="https://www.w3docs.com/privacy-policy">
                Privacy Policy for W3Docs
              </a>
              .
            </p> */}
            <button type="submit" href="/">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProject;
