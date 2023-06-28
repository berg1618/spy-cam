import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authMiddleware = (Component) => {
  const AuthWrapper = (props) => {
    const navigation = useNavigation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkAuthentication = async () => {
        try {
          const token = await AsyncStorage.getItem("access_token");

          if (token) {
            // Additional token validation if necessary
            setIsAuthenticated(true);
          }

          setIsLoading(false);
        } catch (error) {
          console.log("Authentication error:", error);
          setIsLoading(false);
        }
      };

      checkAuthentication();
    }, []);

    useEffect(() => {
      if (!isAuthenticated) {
        navigation.navigate("login");
      }
    }, [isAuthenticated, navigation]);

    if (isLoading) {
      // Render a loading state while checking authentication
      return null;
    }

    if (!isAuthenticated) {
      // Redirect to the login screen if not authenticated
      return null;
    }

    return <Component {...props} />;
  };

  return AuthWrapper;
};

export default authMiddleware;
