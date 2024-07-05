import { useEffect } from 'react';
import * as database from '../../database';
import * as SplashScreen from 'expo-splash-screen';

export default function AppLoader({ setTasks }) {

  useEffect(() => {
  
    (async () => {
    //Load the database here
    const data = await database.load();

    //Load to-dos
    setTasks(data);

    //Hides the Splash Screen after data is loaded
    SplashScreen.hideAsync()
    })();

  }, []);

}