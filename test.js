const is_privite_ip = (ip) => {
    const ip_regex = /^(?:10|127|172\.(?:1[6-9]|2[0-9]|3[01])|192\.168)\..*/g
    const result = ip_regex.exec(ip);

    return Array.isArray(result) && result.length > 0;
}


console.log(is_privite_ip('127.0.0.1'));
console.log(is_privite_ip('8.8.8.8'));
