import { combineReducers } from 'redux';

import search from './search';
import favorites from './favorites';
import selectedMovie from './selectedMovie';
import lists from './lists';
import currentList from './currentList';

export default combineReducers({ search, favorites, selectedMovie, lists, currentList });
