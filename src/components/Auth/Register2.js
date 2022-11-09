import React from "react";
import { Modal } from "react-bootstrap";

const Register2 = ({ modalRegister, setModalRegister, setModalLogin }) => {
  return (
    <>
      <Modal show={modalRegister} onHide={() => setModalRegister(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className="modal-body">
          <h2 className="text-darkblue mb-4">Sign Up</h2>
          <form>
            <div className="mb-3">
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Password" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Full Name" />
            </div>
            <div className="mb-3">
              <select class="form-select" aria-label="Default select example">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Phone" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Address" />
            </div>
            <button type="submit" className="btn btn-blue text-light fw-bold w-100 mb-4">
              Sign Up
            </button>
          </form>
          <p className="text-center">
            Already have an account ? Click{" "}
            <span
              className="click-here fw-bold"
              onClick={() => {
                setModalLogin(true);
                setModalRegister(false);
              }}
            >
              Here
            </span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Register2;