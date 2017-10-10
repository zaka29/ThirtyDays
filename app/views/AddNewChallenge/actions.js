import moment from 'moment';
import * as actionTypes from './actionTypes.js';
import { ThirtyDaysFirebase, ThirtyDaysFireDB } from '../../services/firebase.js';

export const createNewChallenge = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.NEW_CHALLENGE_SET_REQUEST
    })

    const dummyChallenge = {
        userId: ThirtyDaysFirebase.auth().currentUser.uid,
        name: "My Second challenge",
        startDate: moment().format(),
        endDate: moment().add(32, 'days').format(),
    }

    const challengeRef = ThirtyDaysFireDB.ref().child('challenges').push();

    challengeRef.set(dummyChallenge).catch((error) => {
        console.log(error)
    });
};