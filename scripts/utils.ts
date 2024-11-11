export const deepCopy = (obj : any) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const copy:any = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}