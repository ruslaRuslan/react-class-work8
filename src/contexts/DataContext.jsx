import { createContext } from "react";

const DataContext = createContext("")

import React from 'react'

const DataContextProvider = () => {
  return (
    <>
    <DataContext.Provider value="Ruslanin Datasi">

    </DataContext.Provider>
    </>
  )
}

export default DataContextProvider