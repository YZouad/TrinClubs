import { createContext, useState } from 'react';

//create a context, with createContext api
export const globalSiteContext = createContext();

export default function GlobalSiteProvider(props) {
        // this state will be shared with all components 
    const [contactForm, setContactForm] = useState(false);

    return (
                // this is the provider providing state
        <globalSiteContext.Provider value={[contactForm, setContactForm]}>
            {props.children}
        </globalSiteContext.Provider>
    );
}