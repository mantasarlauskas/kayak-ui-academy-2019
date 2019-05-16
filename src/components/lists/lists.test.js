import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { removeList } from '../../actions/lists';
import Lists from './lists-container';

describe('Lists component: ', () => {
  let wrapper;
  const mockStore = configureStore([]);
  const initialState = {
    lists: {
      array: [
        {
          iso_639_1: 'en',
          id: 111254,
          page: 1,
          iso_3166_1: 'US',
          total_results: 4,
          object_ids: {
            'movie:300248': '5453c84fc3a368147c0018b1',
            'movie:672': '4bc89159017a3c122d00c288',
            'movie:652': '4bc89118017a3c122d00bbfb',
            'movie:353486': '55c4dd3b92514142920001fd'
          },
          revenue: 2336218198,
          total_pages: 1,
          name: 'Random movies!',
          public: true,
          comments: {
            'movie:300248': null,
            'movie:672': null,
            'movie:652': null,
            'movie:353486': 'wow!'
          },
          sort_by: 'original_order.asc',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum ullamcorper convallis. Duis ante libero, gravida a ligula at, pulvinar ultrices eros. Integer vel nisl dapibus elit tempus molestie ac eget arcu. Pellentesque a enim scelerisque, luctus erat eu, iaculis enim. Integer leo magna, sodales at posuere quis, viverra at mi. Sed ac urna non lorem aliquet consequat id quis dui. Sed nisl nulla, consequat sit amet commodo nec, auctor et magna. Fusce venenatis mattis turpis et pretium. Quisque finibus odio a mi hendrerit, egestas consectetur mi eleifend. Nulla vitae ultrices nisl. Quisque aliquam, lorem porttitor convallis ornare, tellus neque rhoncus libero, non pellentesque purus justo ac odio. Donec id iaculis nisi. Morbi ac purus non augue molestie maximus ac ac neque. Nam tristique elit est, rhoncus euismod turpis pellentesque nec.',
          backdrop_path: null,
          results: [
            {
              vote_average: 7.7,
              vote_count: 11603,
              id: 672,
              video: false,
              media_type: 'movie',
              title: 'Harry Potter and the Chamber of Secrets',
              popularity: 41.879,
              poster_path: '/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
              original_language: 'en',
              original_title: 'Harry Potter and the Chamber of Secrets',
              genre_ids: [12, 14, 10751],
              backdrop_path: '/avqzwKn89VetTEvAlBePt3Us6Al.jpg',
              adult: false,
              overview:
                'Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.',
              release_date: '2002-11-13'
            },
            {
              vote_average: 7,
              vote_count: 5315,
              id: 652,
              video: false,
              media_type: 'movie',
              title: 'Troy',
              popularity: 19.814,
              poster_path: '/z7iMeZpNAxUIzD2oJfvoaq8YkT8.jpg',
              original_language: 'en',
              original_title: 'Troy',
              genre_ids: [12, 36],
              backdrop_path: '/lIyNUZbIeEwWpaWXAO5gnciB8Dq.jpg',
              adult: false,
              overview:
                'In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnom to help him get her back. Agamemnon sees this as an opportunity for power. So they set off with 1,000 ships holding 50,000 Greeks to Troy. With the help of Achilles, the Greeks are able to fight the never before defeated Trojans.',
              release_date: '2004-05-03'
            },
            {
              vote_average: 6.7,
              vote_count: 7093,
              id: 353486,
              video: false,
              media_type: 'movie',
              title: 'Jumanji: Welcome to the Jungle',
              popularity: 15.831,
              poster_path: '/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg',
              original_language: 'en',
              original_title: 'Jumanji: Welcome to the Jungle',
              genre_ids: [28, 12, 35, 14],
              backdrop_path: '/rz3TAyd5kmiJmozp3GUbYeB5Kep.jpg',
              adult: false,
              overview:
                "The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
              release_date: '2017-12-09'
            },
            {
              vote_average: 0,
              vote_count: 0,
              id: 300248,
              video: false,
              media_type: 'movie',
              title: 'NBA Courtside Comedy',
              popularity: 0.6,
              poster_path: '/r9p6RGDlFXzne4GG3fjNtVS3sOY.jpg',
              original_language: 'en',
              original_title: 'NBA Courtside Comedy',
              genre_ids: [],
              backdrop_path: null,
              adult: false,
              overview:
                "Even the greatest athletes in the world have their off-moments. NBA players are known for their power and GRACE, but with 1189 games played each NBA regular season, there are bound to be some events that weren't in the coaches game plan. NBA Courtside Comedy captures the funniest moments.",
              release_date: '1997-01-01'
            }
          ],
          average_rating: 5.341,
          runtime: 443,
          created_by: {
            gravatar_hash: 'b250a01a9dd917cdc4287653a58cf3f9',
            name: '',
            id: '5cc752a2c3a36820b58664db'
          },
          poster_path: null
        },
        {
          iso_639_1: 'en',
          id: 110980,
          page: 1,
          iso_3166_1: 'US',
          total_results: 6,
          object_ids: {
            'movie:300248': '5453c84fc3a368147c0018b1',
            'movie:674': '4bc89164017a3c122d00c386',
            'movie:675': '4bc8916c017a3c122d00c3f4',
            'movie:671': '4bc89154017a3c122d00c1fa',
            'movie:984': '4bc8944e017a3c122d011c1d',
            'movie:672': '4bc89159017a3c122d00c288'
          },
          revenue: 3723273806,
          total_pages: 1,
          name: 'Harry Potter movies',
          public: true,
          comments: {
            'movie:300248': null,
            'movie:674': null,
            'movie:675': null,
            'movie:671': null,
            'movie:984': null,
            'movie:672': 'Great movie, recommend to everyone'
          },
          sort_by: 'original_order.asc',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum ullamcorper convallis. Duis ante libero, gravida a ligula at, pulvinar ultrices eros. Integer vel nisl dapibus elit tempus molestie ac eget arcu. Pellentesque a enim scelerisque, luctus erat eu, iaculis enim. Integer leo magna, sodales at posuere quis, viverra at mi. Sed ac urna non lorem aliquet consequat id quis dui. Sed nisl nulla, consequat sit amet commodo nec, auctor et magna. Fusce venenatis mattis turpis et pretium. Quisque finibus odio a mi hendrerit, egestas consectetur mi eleifend. Nulla vitae ultrices nisl. Quisque aliquam, lorem porttitor convallis ornare, tellus neque rhoncus libero, non pellentesque purus justo ac odio. Donec id iaculis nisi. Morbi ac purus non augue molestie maximus ac ac neque. Nam tristique elit est, rhoncus euismod turpis pellentesque nec.',
          backdrop_path: null,
          results: [
            {
              vote_average: 7.7,
              vote_count: 11603,
              id: 672,
              video: false,
              media_type: 'movie',
              title: 'Harry Potter and the Chamber of Secrets',
              popularity: 41.879,
              poster_path: '/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
              original_language: 'en',
              original_title: 'Harry Potter and the Chamber of Secrets',
              genre_ids: [12, 14, 10751],
              backdrop_path: '/avqzwKn89VetTEvAlBePt3Us6Al.jpg',
              adult: false,
              overview:
                'Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.',
              release_date: '2002-11-13'
            },
            {
              vote_average: 7.8,
              vote_count: 13719,
              id: 671,
              video: false,
              media_type: 'movie',
              title: "Harry Potter and the Philosopher's Stone",
              popularity: 50.91,
              poster_path: '/dCtFvscYcXQKTNvyyaQr2g2UacJ.jpg',
              original_language: 'en',
              original_title: "Harry Potter and the Philosopher's Stone",
              genre_ids: [12, 14, 10751],
              backdrop_path: '/hziiv14OpD73u9gAak4XDDfBKa2.jpg',
              adult: false,
              overview:
                "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
              release_date: '2001-11-16'
            },
            {
              vote_average: 7.7,
              vote_count: 10944,
              id: 674,
              video: false,
              media_type: 'movie',
              title: 'Harry Potter and the Goblet of Fire',
              popularity: 30.787,
              poster_path: '/6sASqcdrEHXxUhA3nFpjrRecPD2.jpg',
              original_language: 'en',
              original_title: 'Harry Potter and the Goblet of Fire',
              genre_ids: [12, 14, 10751],
              backdrop_path: '/gzKW3emulMxIHzuXxZoyDB1lei9.jpg',
              adult: false,
              overview:
                'Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure – but Voldemort lurks, awaiting his chance to destroy Harry and all that he stands for.',
              release_date: '2005-11-16'
            },
            {
              vote_average: 7.6,
              vote_count: 10641,
              id: 675,
              video: false,
              media_type: 'movie',
              title: 'Harry Potter and the Order of the Phoenix',
              popularity: 30.083,
              poster_path: '/4YnLxYLHhT4UQ8i9jxAXWy46Xuw.jpg',
              original_language: 'en',
              original_title: 'Harry Potter and the Order of the Phoenix',
              genre_ids: [12, 14, 10751, 9648],
              backdrop_path: '/gGt4ePOhD8ilxd3FYhKB06L2CyG.jpg',
              adult: false,
              overview:
                "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students – dubbed 'Dumbledore's Army' – to defend themselves against the dark arts.",
              release_date: '2007-06-28'
            },
            {
              vote_average: 7.5,
              vote_count: 1031,
              id: 984,
              video: false,
              media_type: 'movie',
              title: 'Dirty Harry',
              popularity: 15.763,
              poster_path: '/4j2tBAusIVev4ZaScncIHknP7eV.jpg',
              original_language: 'en',
              original_title: 'Dirty Harry',
              genre_ids: [28, 80, 53],
              backdrop_path: '/t3OZS8yMs0NL4YgWWc04eXHTn1X.jpg',
              adult: false,
              overview:
                "When a madman dubbed 'Scorpio' terrorizes San Francisco, hard-nosed cop, Harry Callahan – famous for his take-no-prisoners approach to law enforcement – is tasked with hunting down the psychopath. Harry eventually collars Scorpio in the process of rescuing a kidnap victim, only to see him walk on technicalities. Now, the maverick detective is determined to nail the maniac himself.",
              release_date: '1971-12-21'
            },
            {
              vote_average: 0,
              vote_count: 0,
              id: 300248,
              video: false,
              media_type: 'movie',
              title: 'NBA Courtside Comedy',
              popularity: 0.6,
              poster_path: '/r9p6RGDlFXzne4GG3fjNtVS3sOY.jpg',
              original_language: 'en',
              original_title: 'NBA Courtside Comedy',
              genre_ids: [],
              backdrop_path: null,
              adult: false,
              overview:
                "Even the greatest athletes in the world have their off-moments. NBA players are known for their power and GRACE, but with 1189 games played each NBA regular season, there are bound to be some events that weren't in the coaches game plan. NBA Courtside Comedy captures the funniest moments.",
              release_date: '1997-01-01'
            }
          ],
          average_rating: 6.39033,
          runtime: 710,
          created_by: {
            gravatar_hash: 'b250a01a9dd917cdc4287653a58cf3f9',
            name: '',
            id: '5cc752a2c3a36820b58664db'
          },
          poster_path: null
        }
      ],
      isLoading: false
    }
  };

  beforeEach(() => {
    const store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Lists removeList={removeList} />
        </Router>
      </Provider>
    );
  });

  it('should render', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have proper h2', () => {
    expect(
      wrapper
        .find('h2')
        .at(0)
        .equals(<h2 className="text-centered mb-3">My lists</h2>)
    ).toEqual(true);
  });

  it('should render all lists in table rows', () => {
    expect(wrapper.find('tbody tr').length).toEqual(initialState.lists.array.length);
  });
});
