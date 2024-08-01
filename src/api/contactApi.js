// src/api/contactApi.js
import axiosInstance from '../axios/axiosInstance';
 
export const createContact = async (contact) => {
  try {
    
    console.log('Creating contact with data:', contact); 
    const response = await axiosInstance.post('/contacts', {
      name: contact.name,
      number: contact.number,
      isMain: contact.isMain
    });
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};
 