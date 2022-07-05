import { createStore } from 'redux';
import loveReducer from '../reducer';

const store = createStore(loveReducer);

export default store;