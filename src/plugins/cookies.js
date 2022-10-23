import parseJwt from './parseJwt';
const setCookies = (name, value, { datetime }) => {
    const d = new Date();
    if (datetime) d.setTime(datetime);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;`;
    console.log(name, value)

};

const getCookies = (name) => {
    const cookies = `; ${document.cookie}`;
    const byValue = cookies.split(`; ${name}=`);
    console.log(byValue);
    if (byValue.length == 2) return byValue.pop().split(';').shift();
};

const delCookies = (name) => {
    setCookies(name, '', -1);
}

const certCookies = () => {
    const token = getCookies('CERT');
    // console.log(token)
    if (token) {
        const { id, n: name, ri: role, exp } = parseJwt(token);
        if (!id) return delCookies('CERT');
        return {
            id, name, role, exp,
        };

    }

    return {
        id: undefined,
        name: undefined,
        role: undefined,
        exp: undefined,
    };

};

export { setCookies, getCookies, delCookies, certCookies }