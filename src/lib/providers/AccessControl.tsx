"use client";
import React, { createContext, useContext } from "react";
// import { ZonePermissions } from "@/lib/venue";

type UserAccess = {
  name: string;
  roles: Array<"member" | "user">;
};
export const AccessContext = createContext<UserAccess | null>(null);

export const AccessProvider = ({
  children,
  userAccess,
}: {
  children: React.ReactElement;
  userAccess: UserAccess;
}) => {
  return (
    <AccessContext.Provider value={userAccess}>
      {children}
    </AccessContext.Provider>
  );
};

export const useAccess = () => useContext(AccessContext);

export const checkHasAccess = (
  roles: UserAccess["roles"],
  access: UserAccess | null,
) => {
  if (roles.length === 0) {
    return true;
  }

  return roles.some((role) => access?.roles?.includes(role));
};

export default AccessProvider;