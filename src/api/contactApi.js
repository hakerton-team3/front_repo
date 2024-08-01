// src/api/contactApi.js
import axiosInstance from '../axios/axiosInstance';

export const getContacts = async () => {
  try {
    const response = await axiosInstance.get('/contacts');
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const createContact = async (contact) => {
  try {
    // 서버가 요구하는 데이터 형식에 맞춰 요청을 보냅니다.
    console.log('Creating contact with data:', contact); // 로그 추가
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

export const deleteContact = async (contactId) => {
  try {
    await axiosInstance.delete(`/contacts/${contactId}`);
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};

export const updateContact = async (contactId, updatedContact) => {
  try {
    const response = await axiosInstance.patch(`/contacts/${contactId}`, updatedContact);
    return response.data;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};
