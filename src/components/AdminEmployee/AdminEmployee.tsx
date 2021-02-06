import React, { useState, useEffect } from 'react';
import * as api from '../../containers/AdminEmployeeContainer/AdminEmployeeContainer';
import TreatmentList from '../../components/ServiceList';
import { FormGroup, FormControlLabel, Checkbox, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';
import AdminButtons from '../../components/AdminButtons/AdminButtons';
interface State {
  id: string;
  name: string;
  email: string;
  treatments: any;
  workdays: any;
}

const AdminEmployee: React.FunctionComponent = (props: any) => {
  const [employeeSelected, setEmployeeSelected]: any = React.useState<State>({
    id: '',
    name: '',
    email: '',
    treatments: [],
    workdays: '',
  });
  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    setEmployeeSelected(event.target.value);
    console.log(event.target.value);
    //1. Get all employees ID, couple with their Name (X)
    //2. Display this on the dropdown (X)
    //3. Once clicked (X)
    //4. Set employee to that employee
  };
  const [employee, setEmployee]: any = React.useState<State>({
    id: '',
    name: '',
    email: '',
    treatments: [],
    workdays: '',
  });
  const [event, setEvent] = useState();
  const [editBooking, setEditBooking] = useState(false);
  console.log('event from admin page' + JSON.stringify(event));
  const eventSelected = (ev: any) => {
    setEvent(ev);
    console.log('ev' + JSON.stringify(ev));
    if (editBooking === false) {
      setEditBooking(true);
    }
  };

    

  useEffect(() => {
    async function fetchMyApi() {
      const response = await api.getAllEmployees();
      console.log(response);
      const eventsMapped = response.map(
        (employeeInfo: {
          ID: any;
          Details: { Name: any; Email: any };
          Treatments: any;
          WorkDays: any;
        }) => {
          return {
            id: employeeInfo.ID,
            name: employeeInfo.Details.Name,
            email: employeeInfo.Details.Email,
            treatments: employeeInfo.Treatments,
            workdays: employeeInfo.WorkDays,
          };
        }
      );
      setEmployee(eventsMapped);
      // console.log("Events Mapped "+ JSON.stringify(eventsMapped));
    }
    fetchMyApi();
  }, []);
  // const handleChange = (prop: keyof State) => (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setEmployee({ ...employee, [prop]: event.target.value });
  // };

  // const weekdays = ['Monday', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const [weekdays, setWeekdays]:any = React.useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });
  const handleDays = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeekdays({ ...weekdays, [event.target.name]: event.target.checked });
   
  };

  // - --- -- - - - - - -- - TO FIX WEEKDAYS
  useEffect(() => {
    // console.log("fdsafdsa" +JSON.stringify(weekdays));
    var bod = {...employeeSelected};
    console.log("111111" + JSON.stringify(bod));
    // console.log("BEFORE ANY MODS: " + JSON.stringify(bod));
    var weekDaySelected = {...weekdays};
    for(var day in weekDaySelected){
      if(weekDaySelected[day] === false){
        delete weekDaySelected[day];
      }
    }
    console.log("TEST2" + JSON.stringify(weekDaySelected));
    var weekDayArray = Object.keys(weekDaySelected);
    // console.log("TEST3" + typeof weekDayArray);
    // delete bod.workdays;
    console.log("WEEKDAYSARRAY" + weekDayArray);
    
    bod.workdays = weekDayArray;
    console.log("prev employee: " + JSON.stringify(bod));
    // setUpdatedEmployee({
    //   id: employee.id,
    //   name: employee.name,
    //   email: employee.email,
    //   treatments: employee.treatments,
    //   workdays: employee.workdays,
    // });
    setEmployeeSelected(bod);
    console.log("new employee: " + JSON.stringify(bod));
  },  [weekdays]);
  useEffect(() => {
    console.log("Employee" + JSON.stringify(employeeSelected))
    console.log("FIELD1 " + employeeSelected.id);
  },[employeeSelected]);

  return (
    <>
    <p>Select employee to edit</p>
    <FormControl >
        <InputLabel id="demo-customized-select-label">Employees</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={
            employeeSelected
          }
          onChange={handleChange}          
        >
          {Object.keys(employee).map((key, val) => {        
         return( <MenuItem value={employee[key]}>{employee[key].name}</MenuItem> )
  })}
        </Select>
      </FormControl>
      {Object.keys(employee).map((key, val) => {
        // console.log(employee[val]);
        return (
          <div>
            <h1>{employee[key].name}</h1>
            <form>
              <p>
                Name:
                <input
                  type="text"
                  name="ssfdsfsd"
                  defaultValue={employee[key].name}
                ></input>
              </p>
              <br />
              <p>
                Email:
                <input
                  type="text"
                  name="ssfdsfsd"
                  defaultValue={employee[key].email}
                ></input>
              </p>
              {/* <p>Treatments: {employee[key].treatments}</p>
              <br />
              <p>Work days: {employee[key].workdays}</p> */}
            </form>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Monday" />}
                label="Monday"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Tuesday" />}
                label="Tuesday"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Wednesday" />}
                label="Wednesday"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Thursday" />}
                label="Thursday"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Friday" />}
                label="Friday"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Saturday" />}
                label="Saturday"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleDays} name="Sunday" />}
                label="Sunday"
              />
            </FormGroup>
            <TreatmentList
              preSelectedTreatmentId={employee.treatments}
              parentCallBack={eventSelected}
              {...props}
            />

            <AdminButtons id={employeeSelected?.id} name={employeeSelected?.name} email={employeeSelected?.email} treatments={employeeSelected?.treatments} workdays={employeeSelected?.workdays} {...props} />            
            <p> -------- </p>
          </div>
        );
      })}
    </>
  );
};

export default AdminEmployee;