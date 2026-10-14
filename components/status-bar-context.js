"use client";

import { createContext, useContext } from "react";

export const StatusBarContext = createContext(() => {});
export const useStatusBar = () => useContext(StatusBarContext);
