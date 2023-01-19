import React, { useState } from 'react';
import './botton.css';

interface Props {
    colors: string[];
    value: boolean;
    onChange: (value: boolean) => void;
}

const Button: React.FC<Props> = (props: Props) => {
    const { value, onChange } = props;
    const [index, setIndex] = useState(0);
    const { colors } = props;

    const handleClick = () => {
        onChange(!value);
        setIndex((index + 1) % colors.length);
        const main = document.querySelector('main');
        if(main){
            main.style.background = colors[index];
        }
    }

    return (
        <div className={`ios-switch ${value ? 'on' : 'off'}`} onClick={handleClick}>
            <div className="ios-switch-button"></div>
        </div>
    );
};

export default Button;
