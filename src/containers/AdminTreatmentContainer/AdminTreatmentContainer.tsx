import axios from 'axios';
import * as endpoints from '../../Api/endpoints';

export const getAllTreatmentTypes = async () => {
  var response: any = null;
  const fetchData = async () => {
    await axios
      .get(`${endpoints.treatmentType}`)
      .then((res) => {
        response = res.data;
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  };
  await fetchData();
  return response;
};

export const getTreatmentsByType = async (treatmentTypeId: string) => {
  var response: any = null;
  const fetchData = async () => {
    await axios
      .get(`${endpoints.treatmentType}/${treatmentTypeId}`)
      .then((res) => {
        response = res.data;
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  };
  await fetchData();
  return response;
};



