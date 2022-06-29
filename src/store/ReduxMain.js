import { configureStore, createSlice } from "@reduxjs/toolkit"


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
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Asif_Ali_Zardari_with_Obamas_%28cropped%29.jpg/220px-Asif_Ali_Zardari_with_Obamas_%28cropped%29.jpg",
                count: 0,
            },
            {
                id: "2",
                name: "Nawaz Sharief",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/PrimeMinisterNawazSharif.jpg/220px-PrimeMinisterNawazSharif.jpg",
                count: 0,
            },
            {
                id: "3",
                name: "Imran Khan",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Imran_Ahmed_Khan_Niazi_-_UNGA_%2848784380531%29_%28cropped%29.jpg/220px-Imran_Ahmed_Khan_Niazi_-_UNGA_%2848784380531%29_%28cropped%29.jpg",
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
            console.log("Data, ", action.payload)
            return { ...state, selectedPerson: action.payload }

            // ...state,
            //     selectedPerson: action.payload
        }
    },


})
export const actions = counterSlice.actions
const store = configureStore({
    reducer: counterSlice.reducer
})


export default store