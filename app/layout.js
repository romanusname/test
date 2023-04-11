"use client"
import '../styles/globals.css'
import '@config/fonts.scss'
import appConfig from '@config/app.config'
import React from 'react'
import part from '@part'


import ScrollSmoother from "@layouts/ScrollSmoother";
import ContextProvider from '@layouts/Context'
import Loader from "@layouts/loader/Loader";


export default function RootLayout({ children }) {


  return (
                    <html>
                      <head />
                      <body>
  {appConfig.loader && <Loader/>}
                         <div id="smooth-wrapper">
                             <ContextProvider>
                             <part.Header/>
                             <ScrollSmoother/>
                                 <part.widgets.scrollBar/>
                                 <part.widgets/>
  {appConfig.socket &&  <part.socket.connect/>}
                             <div id="smooth-content">
                                {children}
                             </div>
                            </ContextProvider>
                         </div>
                      </body>
                    </html>
  )
}
