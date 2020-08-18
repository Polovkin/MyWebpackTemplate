import firebase from "firebase/app";

export default {
    actions: {
        async WRITE_DATA({dispatch, commit}) {
            try {
                await firebase.database().ref('/data').set(1)
                console.log('writed')
            } catch (e) {
                throw e
            }
        },
    },
}
