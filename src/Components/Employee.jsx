import React, { useState, useEffect } from "react";
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning, faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';
import './Employee.css';

function Employee(props) {

  const[editMode, setEditMode] = useState(false);
  const[firstAndLastName, setFullName] = useState("");
  const[department, setDepartment] = useState("");
  const[phoneNumber, setPhoneNumber] = useState("");
  const[address, setAddress] = useState("");
  const[age, setAge] = useState();

  useEffect(() => {
    setFullName(props.employee.employeeName);
    setDepartment(props.employee.employeeDepartment);
    setPhoneNumber(props.employee.employeeContact);
    setAddress(props.employee.employeeAddress);
    setAge(props.employee.age);
  }, []);

  const saveEmployee = () => {
    setEditMode(false);
    const updatedEmployee = {employeeName:firstAndLastName, employeeDepartment:department, employeeContact:phoneNumber, employeeAddress:address, age:age, id:props.employee.id, image:props.employee.image}
    props.updateEmployee(updatedEmployee);
  }

return (
    <div className='card'>
            <img src={props.employee.image} alt="Happy Employee" className='card-img-top mx-auto'/>
            {!editMode && <ul className='list-group list-group-flush'>
              <li className='list-group-item text-center'>{props.employee.employeeName}</li>
              <li className='list-group-item text-center'>{props.employee.employeeDepartment}</li>
              <li className='list-group-item text-center'>{props.employee.employeeContact}</li>
              <li className='list-group-item text-center'>{props.employee.employeeAddress}</li>
              <li className='list-group-item text-center'>{props.employee.age}</li>
              <button type='button' className='btn btn-danger' onClick={() => props.removeEmployee(props.employee)}>Delete Employee <FontAwesomeIcon icon={faWarning} /></button>
              <button type='button' className='btn btn-warning' onClick={() => setEditMode(true)}>Edit <FontAwesomeIcon icon={faMagicWandSparkles} /></button>
            </ul>
            }
            {editMode &&
              <ul className='list-group list-group-flush'>
              <li className='list-group-item text-center'><input type='text' className="form-control" value={firstAndLastName} onChange={(evt) => setFullName(evt.currentTarget.value)} /></li>
              <li className='list-group-item text-center'><input type='text' className="form-control" value={department} onChange={(evt) => setDepartment(evt.currentTarget.value)} /></li>
              <li className='list-group-item text-center'><input type='tel' className="form-control" value={phoneNumber} onChange={(evt) => setPhoneNumber(evt.currentTarget.value)} /></li>
              <li className='list-group-item text-center'><input type='text' className="form-control" value={address} onChange={(evt) => setAddress(evt.currentTarget.value)} /></li>
              <li className='list-group-item text-center'><input type='text' className="form-control" value={age} onChange={(evt) => setAge(evt.currentTarget.value)} /></li>
              <li className="list-group-item"><button id='btnSave' className='btn btn-secondary' onClick={saveEmployee}>Save</button></li>
          </ul>
            }
    </div>
)};

export default Employee;