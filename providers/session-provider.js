"use client";

import { GetSession } from "@/db/authentication";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

// Initial session state
const initialSession = {
  status: "loading",
  user: { username: undefined, role: undefined },
};

// Create the SessionContext with default values
const SessionContext = createContext({
  session: initialSession,
  setSession: () => {},
});

// SessionProvider component
const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(initialSession);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await GetSession();

        if (response.status >= 200 && response.status < 300) {
          setSession({
            status: "authenticated",
            user: {
              name: response.data.session.name,
              role: response.data.session.role,
            },
          });
        } else {
          setSession({ status: "unauthenticated", user: {} });
        }
      } catch (error) {
        setSession({ status: "unauthenticated", user: {} });
      }
    };

    fetchSession();
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook to use the SessionContext
const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

export { SessionProvider, useSession };
