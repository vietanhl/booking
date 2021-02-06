import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import * as api from '../../containers/AdminEmployeeContainer/AdminEmployeeContainer';
import styled from 'styled-components';

const ContainerUl = styled.ul`
  padding-top: 20px;
  text-align: center;
  list-style: none;
  font-family: 'Abril Fatface', cursive;

  &:hover {
    color: #282c34;
  }
`;

const ContainerLi = styled.li`
  display: inline;
  padding-right: 20px;

  &:hover {
    color: #282c34;
  }
`;
// name: any, email: any, treatments:any, workdays:any

const AdminButtons: React.FunctionComponent = (body: any, props:any) => {
  useEffect(() => {
    console.log('PROPS from Admin button : ' + JSON.stringify(props));
  }, [props]);
  const editEmployee = () => {
    // console.log('Edit employee clicked' + id.id);
    console.log('body:' + JSON.stringify(body)); 
    console.log('body:' + JSON.stringify(props));      
    var reqBody = {
      details: {
        name: body.name,
        email: body.email,
      },
      treatments: body.treatments,
      workDays: body.workdays
    };
    console.log("REQUEST BODY: " + JSON.stringify(reqBody));

    api.EditEmployee(body.id, reqBody);
  };
  const deleteEmployee = async () => {
    const res = await api.deleteEmployee(body.id);
    console.log(res);
  };
  return (
    <>
      <ContainerUl>
        <ContainerLi>
          {' '}
          <Button variant="outline-secondary" size="lg" onClick={editEmployee}>
            Update Employee
          </Button>
        </ContainerLi>
        <ContainerLi>
          <Button
            variant="outline-secondary"
            size="lg"
            onClick={deleteEmployee}
          >
            Delete Employee
          </Button>
        </ContainerLi>
      </ContainerUl>
    </>
  );
};

export default AdminButtons;
