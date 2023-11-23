/* eslint-disable react/prop-types */
import  { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [userimage, setUserImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await userData.json();
        const firstSixUsers = result.slice(0, 6);
        setUser(firstSixUsers);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const imgfetchData = async () => {
      try {
        const userData = await fetch('https://jsonplaceholder.typicode.com/photos');
        const result = await userData.json();
        const firstSixUsersImg = result.slice(0, 6);
        setUserImage(firstSixUsersImg);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };

    fetchData();
    imgfetchData();
  }, []);

  const combinedData = userimage.map((userimagedata) => {
    const matchingInfoData = user.find(infoData => infoData.id === userimagedata.id);
    return {
      image: userimagedata.url,
      name: matchingInfoData.name,
      description: matchingInfoData.company.name, 
    };
  });

  return (
    <UserContext.Provider value={combinedData}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  return useContext(UserContext);
};
