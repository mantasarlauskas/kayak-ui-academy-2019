import { connect } from 'react-redux';
import { resetSort } from '../../actions/lists';
import ListMovies from './list-movies';

const getSortedListMovies = (list, sortBy) => {
  switch (sortBy) {
    case 'TITLE_DESC':
      return list
        .slice(0)
        .sort((a, b) =>
          a.title.toUpperCase() < b.title.toUpperCase()
            ? 1
            : b.title.toUpperCase() < a.title.toUpperCase()
            ? -1
            : 0
        );
    case 'DATE_ASC':
      return list.slice(0).sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    case 'DATE_DESC':
      return list.slice(0).sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    case 'RATING_ASC':
      return list.slice(0).sort((a, b) => a.vote_average - b.vote_average);
    case 'RATING_DESC':
      return list.slice(0).sort((a, b) => b.vote_average - a.vote_average);
    default:
      return list
        .slice(0)
        .sort((a, b) =>
          a.title.toUpperCase() > b.title.toUpperCase()
            ? 1
            : b.title.toUpperCase() > a.title.toUpperCase()
            ? -1
            : 0
        );
  }
};

const mapStateToProps = ({ lists: { sortBy } }, { list, id }) => ({
  currentList: getSortedListMovies(list, sortBy),
  id
});

const mapDispatchToProps = {
  resetSort
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMovies);
