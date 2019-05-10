import { combineReducers } from 'redux';
import search from './search';
import favorites from './favorites';
import selectedMovie from './selectedMovie';
import lists from './lists';
import authorization from './authorization';

export default combineReducers({ search, favorites, selectedMovie, lists, authorization });
