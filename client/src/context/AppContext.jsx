import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/users/credits', {
        headers: {token} // Correct header format
      });

      if (data.success) {
        setCredit(data.creditBalance);
        setUser(data.user);
      } else {
        toast.error(data.message || 'Failed to load credits');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || 'An error occurred while fetching credits data');
    }
  };

  const generateImage = async (prompt)=>{
    try{
      const {data} =  await axios.post(backendUrl + '/api/images/generate', {prompt}, {headers: {token}})

      if(data.success){
        loadCreditsData()
        return data.resultImage
      }else{
        toast.error(data.message)
       loadCreditsData();
        if(data.creditBalance === 0){
          navigate('/buy')
        }

      }
    }catch(error){
      toast.error(error.message)
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    if (token) {

      loadCreditsData();
      
    }
  }, [token]); // Will run when token changes

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
