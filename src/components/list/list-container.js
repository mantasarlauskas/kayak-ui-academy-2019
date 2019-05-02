import { connect } from 'react-redux';
import { resetSort } from '../../actions/lists';
import List from './list';

const getSortedListMovies = (lists, sortBy, id) => {
  const list = lists.find(({ id: listId }) => listId === parseInt(id, 10));
  if (list) {
    switch (sortBy) {
      case 'TITLE_DESC':
        return {
          ...list,
          results: list.results
            .slice(0)
            .sort((a, b) =>
              a.title.toUpperCase() < b.title.toUpperCase()
                ? 1
                : b.title.toUpperCase() < a.title.toUpperCase()
                ? -1
                : 0
            )
        };
      case 'DATE_ASC':
        return {
          ...list,
          results: list.results
            .slice(0)
            .sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
        };
      case 'DATE_DESC':
        return {
          ...list,
          results: list.results
            .slice(0)
            .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
        };
      case 'RATING_ASC':
        return {
          ...list,
          results: list.results.slice(0).sort((a, b) => a.vote_average - b.vote_average)
        };
      case 'RATING_DESC':
        return {
          ...list,
          results: list.results.slice(0).sort((a, b) => b.vote_average - a.vote_average)
        };
      default:
        return {
          ...list,
          results: list.results
            .slice(0)
            .sort((a, b) =>
              a.title.toUpperCase() > b.title.toUpperCase()
                ? 1
                : b.title.toUpperCase() > a.title.toUpperCase()
                ? -1
                : 0
            )
        };
    }
  }
  return null;
};

const mapStateToProps = (
  { lists },
  {
    match: {
      params: { id }
    }
  }
) => ({
  list: getSortedListMovies(lists.array, lists.sortBy, id),
  isLoading: lists.isLoading,
  id: parseInt(id, 10)
});

const mapDispatchToProps = {
  resetSort
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
