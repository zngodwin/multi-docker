import React from  'react';

const Link = ({className, href, children}) => {
    const onClick = (event) => {
        if(event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();
        //Changes URL without doing full page reload
        window.history.pushState({}, '', href);
        //communicates to route components that urls have changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick} className={className} href={href}> {children} </a>;
};

export default Link;