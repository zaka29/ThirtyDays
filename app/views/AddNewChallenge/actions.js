import moment from 'moment';
import * as actionTypes from './actionTypes.js';
import { ThirtyDaysFirebase, ThirtyDaysFireDB } from '../../services/firebase.js';

export const createNewChallenge = () => {
    const dummyChallenge = {
        userId: ThirtyDaysFirebase.auth().currentUser.uid,
        name: "My first challenge",
        startDate: moment.format(),
        endDate: moment().add(30, 'days').format(),
    }



}