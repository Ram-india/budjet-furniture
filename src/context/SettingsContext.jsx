import { createContext, useContext, useEffect, useState } from "react";
import { getSettings } from '../api/settingsApi';


const SettingsContext = createContext(null);

export const SettingsProvider = ({children}) => {
   const [settings, setSettings] = useState(null);
   const[loading, setLoading] = useState(true);

   useEffect(()=>{
    const fetchSettings =  async () =>{
        let cached = null;
        
        try {
            cached = JSON.parse(localStorage.getItem("settings"));
            if (cached) setSettings(cached);
          } catch (e) {
            localStorage.removeItem("settings"); // auto-fix corrupted cache
        }

        try{
            const res = await getSettings();
            setSettings(res.data);
            localStorage.setItem("settings",JSON.stringify(res.data));
        }catch(error){
            console.warn("Offline mode: using cached settings", error);
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