import axios from 'axios';
import { GET_LEADS, ADD_LEAD, DELETE_LEAD } from './types';

// Get leads
export const getLeads = () => async (dispatch) => {
  await axios
    .get('/api/leads/')
    .then((res) => dispatch({ type: GET_LEADS, payload: res.data }))
    .catch((err) => console.log(err));
};

// Add lead
export const addLead = (lead) => async (dispatch) => {
  await axios
    .post('/api/leads/', lead)
    .then((res) => dispatch({ type: ADD_LEAD, payload: res.data }))
    .catch((err) => console.log(err));
};

// Delete lead
export const deleteLead = (id) => async (dispatch) => {
  await axios
    .delete(`/api/leads/${id}`)
    .then(() => dispatch({ type: DELETE_LEAD, payload: id }))
    .catch((err) => console.log(err));
};
