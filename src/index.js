import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects'
import { Provider } from 'react-redux';
import axios from 'axios';

// Reducers ---------------------
const searchReducer = (state = [], action) => {
    if(action.type === 'SET_RESULTS'){
        return action.payload;
    }
    return state;
}

// Saga -----------------------
// Saga generator function
function* rootSaga(){
    yield takeEvery('FETCH_SEARCH', fetchSearch);
}

function* fetchSearch(action){
    try{
        const res = yield axios.get(`/api/search/${action.payload}`);
        yield put({type: 'SET_RESULTS', payload: res.data.data})
    }catch(err){
        alert( `ERROR in fetchSearch. See console.`)
        console.log(err);
    }
}

const sagaMiddleware = createSagaMiddleware(rootSaga);

// Store ------------------
const store = createStore( 
    combineReducers({
        searchReducer
    }),
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('react-root'));
