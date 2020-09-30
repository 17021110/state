const initState = {
    list: [{ id: 1, title: 'tuan' }, { id: 2, title: 'tuan2' }],
    ID: null
}


const hoblyReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_HOBLY': {
            const newList = [...state.list];
            newList.push(action.payload)
            return {
                ...state,
                list: newList,
            };
        }
        case 'SET_ACTIVE_HOBLY': {
            const newId = action.payload.id;
            return {
                ...state,
                ID: newId,
            };
        }
        case 'DELETE_HOBLY': {
            const newList1 = [...state.list];
            const delete1 = action.payload.id;
            for (var i = 0; i < newList1.length; i++) {
                if (delete1 === newList1[i].id) {
                    newList1.splice(i, 1)
                }
            }

            return {
                ...state,
                list: newList1
            }
        }
        case 'LOAD_HOBLY': {
            const newList = [...action.payload];

            return {
                ...state,
                list: newList,
            };
        }
        case 'SUA_HOBLY': {
            const newList2 = [...state.list];
            const sua = action.payload.id;
            for (var i = 0; i < newList2.length; i++) {
                if (sua === newList2[i].id) {
                    newList2[i].title = action.payload.title;
                }
            }

        }
        default:
            return state;
    }
}

export default hoblyReducer;