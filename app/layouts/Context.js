'use client';
import part from '@part'
import {useReducer} from "react";
export default function ContextProvider({ children }) {


    return (
        <part.socket.provider>
            <part.scrollSmoother.provider>
            <part.formContext.provider>
            <part.role.provider>
                <part.responsive.Provider>
                    <part.styleContext>
                        <part.globalTimeline.provider>
                            <part.globalScroll.provider>
                            <part.modals.provider>
                                <part.widgets.provider>
                                    {children}
                                </part.widgets.provider>
                            </part.modals.provider>
                            </part.globalScroll.provider>
                        </part.globalTimeline.provider>
                    </part.styleContext>
                </part.responsive.Provider>
            </part.role.provider>
            </part.formContext.provider>
            </part.scrollSmoother.provider>
        </part.socket.provider>
    );
}