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

const favoriteReducer = (state =[], action) => {
    if(action.type === 'SET_FAVORITES'){
        return action.payload
    }
    return state;
}

// Saga -----------------------
// Saga generator function
function* rootSaga(){
    yield takeEvery('FETCH_SEARCH', fetchSearch);
    yield takeEvery('ADD_FAVORITE', addFavorite);
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
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
function* addFavorite(action){
    try{
        console.log(action.payload);
        const res = yield axios.post(`/api/favorite`, action.payload);
    }catch(err){
        alert(`ERROR in addFavorite. See console.`)
        console.log(err);
    }
}
function* fetchFavorites(action){
    try{
        const res = yield axios.get('/api/favorite');
        yield put({type: 'SET_FAVORITES', payload: res.data});
    }catch(err){
        
    }
}

const sagaMiddleware = createSagaMiddleware(rootSaga);

// Store ------------------
const store = createStore( 
    combineReducers({
        searchReducer,
        favoriteReducer
    }),
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('react-root'));
