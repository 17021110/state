

const initState1 = {
    list1: [{ id: 1, username: 'tuan', pass: 'tuan', state: false }, { id: 2, username: 'tuan2', pass: 'tuan', state: false }],
    ID1: false
}



const userReducers = (state1 = initState1, action) => {
    switch (action.type) {
        case 'DANG_NHAP': {
            // console.log('tuan')
            // console.log(state.list1)
            const newList1 = [...state1.list1]
            for (var i = 0; i < newList1.length; i++) {
                if (action.payload.username === newList1[i].username && action.payload.pass === newList1[i].pass) {
                    console.log('thanhcong');
                    newList1[i].state = true;
                    state1.ID1 = true;
                    console.log(newList1[i].state)

                }
            }
            return {
                ...state1,
                list1: newList1
            }

        }
        case 'DANG_XUAT': {
            console.log('dang xuat thanh cong');
            const newList2 = [...state1.list1]
            for (var i = 0; i < newList2.length; i++) {
                if (action.payload.username === newList2[i].username) {
                    console.log('thanhcong');
                    newList2[i].state = false;
                    state1.ID1 = false;
                    console.log(newList2[i].state)

                }
                return {
                    ...state1,
                    list1: newList2
                }
            }
        }
        default:
            return state1;
    }
}

export default userReducers;