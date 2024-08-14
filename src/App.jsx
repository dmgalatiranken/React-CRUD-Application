import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import AddEmployee from './Components/AddEmployee';
import _ from 'lodash';
import Employee from './Components/Employee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {

  const[allEmployees, setAllEmployees] = useState(null);
  const[searchResults, setSearchResults] = useState(null);
  const[keywords, setKeywords] = useState("");
  const[age, setAge] = useState("");


  useEffect(() => {
    saveEmployees(employees)
  }, []);


  const saveEmployees = (employees) => {
    setAllEmployees(employees);
    setSearchResults(employees);
  }

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...allEmployees, newEmployee];
    saveEmployees(updatedEmployees);
  }

  const searchEmployees = () => {
    let keywordsArray = [];
    
    if (keywords) {
      keywordsArray = keywords.toLowerCase().split(' ');
    }

    if (age) {
      keywordsArray.push(age.toString());
    }

    if (keywordsArray.length > 0) {
      const searchResults = allEmployees.filter(employee => {
        for (const word of keywordsArray) {
          if (employee.employeeName.toLowerCase().includes(word) || employee.employeeDepartment.toLowerCase().includes(word) || employee.age === parseInt(word)) {
            return true;
          }
        }
        return false
      });
      setSearchResults(searchResults);
    }
    else {
      setSearchResults(allEmployees);
    }
  }

  const removeEmployee = (employeeToDelete) => {
    console.table(employeeToDelete);
    const updatedEmployeesArray = allEmployees.filter(employee => employee.id !== employeeToDelete.id);
    saveEmployees(updatedEmployeesArray);
  }

  const updateEmployee = (updatedEmployee) => {
    console.table(updatedEmployee);
    const updatedEmployeesArray = allEmployees.map(employee => employee.id === updatedEmployee.id ? {...employee,...updatedEmployee} : employee);
    saveEmployees(updatedEmployeesArray);
  }

  const employees = [{
    id:nanoid(),
    employeeName: "Giorgio Loker",
    employeeDepartment: "Training",
    employeeContact: "194-637-4249",
    employeeAddress: "3 Nobel Drive",
    image:'images/employee1.png',
    age: 63
  }, {
    id:nanoid(),
    employeeName: "Torie Doncom",
    employeeDepartment: "Engineering",
    employeeContact: "604-631-7282",
    employeeAddress: "5564 Mallard Hill",
    image:'images/employee2.png',
    age: 31
  }, {
    id:nanoid(),
    employeeName: "Clarence Herity",
    employeeDepartment: "Services",
    employeeContact: "976-768-2912",
    employeeAddress: "0 Packers Street",
    image:'images/employee3.png',
    age: 33
  }, {
    id:nanoid(),
    employeeName: "Nicolais Conring",
    employeeDepartment: "Research and Development",
    employeeContact: "591-166-0288",
    employeeAddress: "7 Jay Pass",
    image:'images/employee4.png',
    age: 32
  }, {
    id:nanoid(),
    employeeName: "Ella Matterson",
    employeeDepartment: "Research and Development",
    employeeContact: "591-891-8757",
    employeeAddress: "7 Milwaukee Hill",
    image:'images/employee5.png',
    age: 29
  }, {
    id:nanoid(),
    employeeName: "Arnuad Gallimore",
    employeeDepartment: "Marketing",
    employeeContact: "158-118-8336",
    employeeAddress: "1131 Delladonna Center",
    image:'images/employee6.png',
    age: 64
  }, {
    id:nanoid(),
    employeeName: "Marje Lankester",
    employeeDepartment: "Product Management",
    employeeContact: "398-141-7479",
    employeeAddress: "0 Arkansas Lane",
    image:'images/employee7.png',
    age: 41
  }, {
    id:nanoid(),
    employeeName: "Holly Sebyer",
    employeeDepartment: "Product Management",
    employeeContact: "873-773-5759",
    employeeAddress: "3 Claremont Way",
    image:'images/employee8.png',
    age: 27
  }, {
    id:nanoid(),
    employeeName: "Crichton Bolletti",
    employeeDepartment: "Sales",
    employeeContact: "199-733-6529",
    employeeAddress: "0 Magdeline Terrace",
    image:'images/employee9.png',
    age: 33
  }, {
    id:nanoid(),
    employeeName: "Ingunna Easseby",
    employeeDepartment: "Research and Development",
    employeeContact: "325-822-0909",
    employeeAddress: "590 Atwood Crossing",
    image:'images/employee10.png',
    age: 34
  }];


  return (
    <div className='container'>
      <div className='row' id='allEmployees'>
        <h3>Current Employees</h3>
        {searchResults && searchResults.map((employee) =>
        (<div className='col-md-2' key={employee.id}>
          <Employee employee={employee} removeEmployee={removeEmployee} updateEmployee={updateEmployee} />
          </div>)
        )}
      </div>
      {/* !allEmployees && <button type="button" className='btn btn-lg btn-success' onClick={() => saveEmployees(employees)}>Save Employees</button> */}
      <AddEmployee addEmployee={addEmployee} />
      <div className='row mt-4' id='searchEmployees'>
        <h3>Employee Search</h3>
        <div className='col-md-4'>
          <label htmlFor='txtKeywords'>Search by Name or Department</label>
          <input type='text' className='form-control' placeholder='John Doe' onChange={evt => setKeywords(evt.currentTarget.value)} value={keywords} />
        </div>
        <div className='col-md-4'>
          <select value={age} onChange={evt => setAge(evt.currentTarget.value)} className='form-select'>
            <option value=''>Select Age</option>
            {_(allEmployees).map(employee => employee.age).sort().uniq().map(age => <option key={age} value={age}>{age}</option>).value()}
          </select>
        </div>
        <div className='col-md-4'>
          <button type='button' className='btn btn-primary' onClick={searchEmployees}>Search Employees <FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>
    </div>
  );
}

export default App
