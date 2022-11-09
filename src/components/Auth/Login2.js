import React from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login2 = ({ modalLogin, setModalLogin, setModalRegister }) => {
  // const navigate = useNavigate();
  return (
    <>
      <Modal show={modalLogin} onHide={() => setModalLogin(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered
      >
        <Modal.Body className="modal-body">
          <h2 className="text-darkblue mb-4">Sign In</h2>
          <form>
            <div className="mb-3">
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-blue text-light fw-bold w-100 mb-4" 
            // onClick={() => navigate("/guest")}
            >
              Sign In
            </button>
          </form>
          <p className="text-center">
            Don't have an account ? Click{" "}
            <span
              className="click-here fw-bold"
              onClick={() => {
                setModalRegister(true);
                setModalLogin(false);
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

export default Login2;