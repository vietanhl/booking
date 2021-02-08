import React, { useState, useEffect } from 'react';
import * as api from '../../containers/AdminEmployeeContainer/AdminEmployeeContainer';
import TreatmentList from '../../components/ServiceList';
import { FormGroup, FormControlLabel, Checkbox, MenuItem, Select, InputLabel, FormControl, createStyles, Theme, styled } from '@material-ui/core';
import AdminButtons from '../../components/AdminButtons/AdminButtons';
import { makeStyles } from '@material-ui/core';
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

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
  }),
);
const classes = useStyles();


  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    setEmployeeSelected(event.target.value);    
  };
  const [employee, setEmployee]: any = React.useState<State>({
    id: '',
    name: '',
    email: '',
    treatments: [],
    workdays: '',
  });
  const [event, setEvent] = useState();
  const eventSelected = (ev: any) => {
    setEvent(ev);    
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
    }
    fetchMyApi();
  }, []);

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

  useEffect(() => {    
    var bod = {...employeeSelected};    
    var weekDaySelected = {...weekdays};
    for(var day in weekDaySelected){
      if(weekDaySelected[day] === false){
        delete weekDaySelected[day];
      }}    
    var weekDayArray = Object.keys(weekDaySelected);    
    bod.workdays = weekDayArray;
    setEmployeeSelected(bod);
  },  [weekdays]);

  return (
    <>    
    {(employeeSelected.id === '')?
    <p><br/> Please select an employee:</p>: null}
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-customized-select-label">Employees</InputLabel>
        
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={
            employeeSelected
          }
          onChange={handleChange} 
          autoWidth={true}             
        >
          <MenuItem disabled value="">
            <em>Employees</em>
          </MenuItem>
          {Object.keys(employee).map((key, val) => {        
         return( <MenuItem value={employee[key]}>{employee[key].name}</MenuItem> )
  })}
        </Select>
      </FormControl>  
      {(employeeSelected.id !== '')?
      <>
      {      
          <div>
            <h1>{employeeSelected.name}</h1>
            <form>
              <p>
                Name:
                <input
                  type="text"
                  name="ssfdsfsd"
                  defaultValue={employeeSelected.name}
                ></input>
              </p>
              <br />
              <p>
                Email:
                <input
                  type="text"
                  name="ssfdsfsd"
                  defaultValue={employeeSelected.email}
                ></input>
              </p>     
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
              preSelectedTreatmentId={employeeSelected.treatments}
              parentCallBack={eventSelected}
              {...props}
            />                     
            <AdminButtons id={employeeSelected?.id} name={employeeSelected?.name} email={employeeSelected?.email} treatments={event} workdays={employeeSelected?.workdays} {...props} />                        
          </div>     
      }
    </>
    : null}
    
</>

    )
  }




export default AdminEmployee;