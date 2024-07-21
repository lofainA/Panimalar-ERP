import { useState, useEffect } from 'react';

function LimitText({ text }) {

    useEffect(() => {
        const handleResize = () => {
          setMaxLength(getMaxLength());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getMaxLength = () => {
        if (window.innerWidth >= 1440) {
          return 139;
        } else if (window.innerWidth > 1250) {
          return 100;
        } else if (window.innerWidth > 1095) {
          return 80;
        } else if (window.innerWidth > 870){
          return 50;
        } else if (window.innerWidth >= 540){
          return 10;
        } else if (window.innerWidth > 477){
          return 3;
        } else {
            return 0;
        }
    };

    const [maxLength, setMaxLength] = useState(getMaxLength());

    if (text.length <= maxLength) {
        return <p>{text}</p>;
    }

    if(maxLength === 0) {
        return null;
    }

    return(
         `${text.substring(0, maxLength)}...`
    );
}

export default LimitText;