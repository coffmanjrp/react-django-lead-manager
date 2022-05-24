import axios from 'axios';
import { GET_LEADS, ADD_LEAD, DELETE_LEAD } from './types';
import { tokenConfig } from './auth';
import { createMessage, returnErrors } from './messages';

// Get leads
export const getLeads = () => async (dispatch, getState) => {
  await axios
    .get('/api/leads/', tokenConfig(getState))
    .then((res) => dispatch({ type: GET_LEADS, payload: res.data }))
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Add lead
export const addLead = (lead) => async (dispatch, getState) => {
  await axios
    .post('/api/leads/', lead, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addLead: 'Lead Added' }));
      dispatch({ type: ADD_LEAD, payload: res.data });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete lead
export const deleteLead = (id) => async (dispatch, getState) => {
  await axios
    .delete(`/api/leads/${id}`, tokenConfig(getState))
    .then(() => {
      dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
      dispatch({ type: DELETE_LEAD, payload: id });
    })
    .catch((err) => console.log(err));
};
