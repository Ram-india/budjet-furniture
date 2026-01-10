import { createContext, useContext, useEffect, useState } from "react";
import { getSettings } from '../api/settingsApi';
import Loading from '../components/common/Loading';

const SettingsContext = createContext(null);

export const SettingsProvider = ({children}) => {
   const [settings, setSettings] = useState(null);
   const[loading, setLoading] = useState(true);

   useEffect(()=>{
    const fetchSettings =  async () =>{
        try{
            const res = await getSettings();
            setSettings(res.data);
        }catch(error){
            console.error("Settings API Error:", error);
        }finally{
            setLoading(false);
        }
    };
    fetchSettings();
   },[]);

   return(
    <SettingsContext.Provider value={{settings,loading}}>
    {children}
    </SettingsContext.Provider>
   ); 
   
}
// custom Hook
export const useSettings = () => {
    return useContext(SettingsContext)
   }