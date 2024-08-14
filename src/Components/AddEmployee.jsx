import React, {useState} from 'react';
import {nanoid} from 'nanoid';
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './AddEmployee.css';

function AddEmployee(props) {

    const[firstAndLastName, setFullName] = useState("");
    const[department, setDepartment] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("");
    const[address, setAddress] = useState("");
    const[selectedFile, setSelectedFile] = useState();
    const[age, setAge] = useState();


    const doWork = () => {
        const newEmployee = {"id":nanoid(), "employeeName":firstAndLastName, "employeeDepartment":department, "employeeContact":phoneNumber, "employeeAddress":address, "image":URL.createObjectURL(selectedFile), "age":parseInt(age)};
        props.addEmployee(newEmployee);
    }

    const imageUpdate = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    return (
        <div className='row mt-4' id='addEmployee'>
            <h3>Add Employee</h3>
            <div className='col-md-2'>
                <label htmlFor='txtFullName' className='form-label'>Full Name</label>
                <input type='text' id='txtFullName' placeholder='Full Name' className='form-control' onChange={(evt) => setFullName(evt.currentTarget.value)} value={firstAndLastName} />
            </div>
            <div className='col-md-2'>
            <label htmlFor='txtDepartment' className='form-label'>Department</label>
            <input type='text' id='txtDepartment' placeholder='Department' className='form-control' onChange={(evt) => setDepartment(evt.currentTarget.value)} value={department} />
            </div>
            <div className='col-md-2'>
            <label htmlFor='txtPhoneNumber' className='form-label'>Phone Number</label>
            <input type='tel' id='txtPhoneNumber' placeholder='Phone Number' className='form-control' onChange={(evt) => setPhoneNumber(evt.currentTarget.value)} value={phoneNumber} />
            </div>
            <div className='col-md-2'>
            <label htmlFor='txtAddress' className='form-label'>Address</label>
            <input type='text' id='txtAddress' placeholder='Address' className='form-control' onChange={(evt) => setAddress(evt.currentTarget.value)} value={address} />
            </div>
            <div className='col-md-2'>
                <label htmlFor='fileUpload' className='form-label'>Employee Image</label>
                <input type='file' name='file' id='fileUpload' onChange={imageUpdate}/>
            </div>
            <div className='col-md-2'>
            <label htmlFor='txtAge' className='form-label'>Age</label>
            <input type='text' id='txtAge' placeholder='Age' className='form-control' onChange={(evt) => setAge(evt.currentTarget.value)} value={age} />
            </div>
            <div className='col-md-2'>
                <button type='button' id='btnAdd' className='btn btn-success btn-lg' onClick={doWork}>Add Employee <FontAwesomeIcon icon={faPlusCircle} /></button>
            </div>
        </div>
    );

}

export default AddEmployee;