import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext({
    notification: null,
    showNotification: function(notificationData) {},
    hideNotification: function() {}
});

export function NotificationContextProvider(props) {
    const [activeNotification, setActivateNotification] = useState();


    //why use useEffect and when to place than dependency as an parameter

    useEffect(() => {
        if(activeNotification && 
            (activeNotification.status === 'success' || 
            activeNotification.status === 'error')
        ) {
            const timer = setTimeout(() => {
                setActivateNotification(null);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [activeNotification]); 
   

    function showNotificationHandler(notificationData) {
        setActivateNotification(
            notificationData
        );
    }

    function hideNotificationHandler() {
        setActivateNotification(null);
    }

    const context = {
        notification: activeNotification, 
        showNotification: showNotificationHandler, 
        hideNotification: hideNotificationHandler,
    };

    return (
        <NotificationContext.Provider value={context} >
            {props.children}
        </NotificationContext.Provider>
    );
}


export default NotificationContext;