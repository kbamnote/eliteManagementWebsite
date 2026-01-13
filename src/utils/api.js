// API Configuration
// This module handles environment-based API calls

const getBaseUrl = () => {
  // Using Vite's environment variables
  return import.meta.env.VITE_API_BASE_URL || '/api';
};

export const API_CONFIG = {
  BASE_URL: getBaseUrl(),
  TIMEOUT: 10000, // 10 seconds
  HEADERS: {
    'Content-Type': 'application/json',
  },
};

// Utility function to make API calls
export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      ...API_CONFIG.HEADERS,
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Specific API methods
export const apiGet = (endpoint) => apiCall(endpoint, { method: 'GET' });
export const apiPost = (endpoint, data) => 
  apiCall(endpoint, { 
    method: 'POST', 
    body: JSON.stringify(data) 
  });
export const apiPut = (endpoint, data) => 
  apiCall(endpoint, { 
    method: 'PUT', 
    body: JSON.stringify(data) 
  });
export const apiDelete = (endpoint) => 
  apiCall(endpoint, { method: 'DELETE' });

export default apiCall;