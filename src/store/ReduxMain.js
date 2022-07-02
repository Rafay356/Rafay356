import { configureStore, createSlice } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';




const counterSlice = createSlice({
    name: "details",
    initialState: {
        allPersons: [
            {
                id: "0",
                name: "Shahbaz Sharief",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/CM_Punjab_Shehbaz_Sharif_%2835771008313%29_%28cropped%29.jpg/220px-CM_Punjab_Shehbaz_Sharif_%2835771008313%29_%28cropped%29.jpg",
                afterHitAvatar: "/images/shahbaz_sharif_2.png",
                count: 0,
            },
            {
                id: "1",
                name: "Asif Ali Zardari",
                image:
                    "/images/Asif1.jpg",
                afterHitAvatar: "/images/Asif.jpg",
                count: 0,
            },
            {
                id: "2",
                name: "Nawaz Sharief",
                image:
                    "/images/Nawaz_Sharif2.jpg",
                afterHitAvatar: "/images/Nawaz_Sharif1.jpg",
                count: 0,
            },
            {
                id: "3",
                name: "Imran Khan",
                image:
                    "/images/ImranKhan2.jpg",
                afterHitAvatar: "/images/ImranKhan.jpg",
                count: 0,
            },
        ],
        selectedPerson: {
            id: "0",
            name: "Shahbaz Sharief",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/CM_Punjab_Shehbaz_Sharif_%2835771008313%29_%28cropped%29.jpg/220px-CM_Punjab_Shehbaz_Sharif_%2835771008313%29_%28cropped%29.jpg",
            afterHitAvatar: "./images/shahbaz_sharif_2.png",
            count: 0,
            maxSpeed: 0,

        }
    },

    reducers: {
        increment(state, action) {
            //Update Selected Person
            var selectedPerson = state.selectedPerson;
            var updatedCount = selectedPerson.count + 1;
            var updatedSelectedPerson = { ...selectedPerson, count: updatedCount };


            //Updated All Persons
            var updatedAllPersons = state.allPersons.map(
                (person) => person.id === selectedPerson.id ?
                    {
                        ...person, count: person.count + 1
                    } :
                    person)


            return {
                ...state,
                selectedPerson: updatedSelectedPerson,
                allPersons: updatedAllPersons
            }

        },

        setPerson(state, action) {
            return { ...state, selectedPerson: action.payload }
            // ...state,
            //     selectedPerson: action.payload
        }
    },
})

const persistConfig = {
    key: 'root',
    storage,
}


//const persistedReducer = persistReducer(persistConfig, counterSlice.reducer)


export const actions = counterSlice.actions
const store = configureStore({
    reducer: counterSlice.reducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)
export { store }