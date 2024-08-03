import { useState, useEffect } from 'react';

function LimitText({ text, maxLen }) {

    useEffect(() => {
        const handleResize = () => {
          setMaxLength(getMaxLength());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getMaxLength = () => {
        if (window.innerWidth >= 1440) {
          return 100;
        } else if (window.innerWidth > 1250) {
          return 100;
        } else if (window.innerWidth > 1170) {
          return 80;
        } else if (window.innerWidth > 1070){
          return 70;
        } else if (window.innerWidth > 980){
          return 60;
        } else if (window.innerWidth > 885){
          return 50;
        } else if (window.innerWidth > 792){
          return 40;
        } else if (window.innerWidth > 700){
          return 30;
        } else if (window.innerWidth > 610){
          return 20;
        } else if (window.innerWidth > 530){
          return 10;
        } else {
            return 0;
        }
    };

    const [maxLength, setMaxLength] = useState(getMaxLength());

    if (text.length <= maxLength) {
        return <div class="text-secondary fs-6">{text}</div>;
    }

    if(maxLength === 0) {
        return null;
    }

    return(
        <div class="text-secondary fs-6">{text.substring(0, maxLength)}...</div>
    );
}

export default LimitText;