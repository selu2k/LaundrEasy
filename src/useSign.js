import {useState} from 'react';

export default function useSign() {
    const getSign = () => {
        const SignString = sessionStorage.getItem('Sign');
        const userSign = JSON.parse(SignString);
        return userSign?.sign
    };
    const [sign, setSign] = useState(getSign());

    const saveSign = userSign => {
        sessionStorage.setItem('Sign', JSON.stringify(userSign));
        setSign(userSign.sign);
    };
    return {
        setSign: saveSign,
        sign
    }
}