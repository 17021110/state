export const addnewHobbly = (hobby) => {
    return {
        type: 'ADD_HOBLY',
        payload: hobby,
    }
}
export const setActivehobby = (hobby) => {
    return {
        type: 'SET_ACTIVE_HOBLY',
        payload: hobby,
    }
}
export const deleteActivehobby = (hobby) => {
    return {
        type: 'DELETE_HOBLY',
        payload: hobby,
    }
}
export const suaActivehobby = (hobby) => {
    return {
        type: 'SUA_HOBLY',
        payload: hobby,
    }
}
export const laodActivehobby = (hobby) => {
    return {
        type: 'LOAD_HOBLY',
        payload: hobby,
    }
}
export const dangnhap = (hobby) => {
    return {
        type: 'DANG_NHAP',
        payload: hobby,
    }
}
export const dangxuat1 = (hobby) => {
    return {
        type: 'DANG_XUAT',
        payload: hobby,
    }
}


