import { HANDLE_CHANGE_DROPDOWN_VALUE } from "src/actions/admin";

export const initialState = {
  promos : [ 
    {
      'key': 'Valhalla',
      'text': 'Valhalla',
      'value': 'Valhalla',
      'student' : [ 
        {
          'key': 'Ali Gator',
          'text': 'Ali Gator',
          'value': 'Ali Gator',
        }, {
          'key': 'Edith Orial',
          'text': 'Edith Orial',
          'value': 'Edith Orial',
        }, {
          'key': 'Gérard Manvussa',
          'text': 'Gérard Manvussa',
          'value': 'Gérard Manvussa',
        }
      ]
    }, {
      'key': 'Astro',
      'text': 'Astro',
      'value': 'Astro',
      'student' : [ 
        {
          'key': 'Marie Age',
          'text': 'Marie Age',
          'value': 'Marie Age',
        }, {
          'key': 'Nestor Nade',
          'text': 'Nestor Nade',
          'value': 'Nestor Nade',
        }, {
          'key': 'Odile Deray',
          'text': 'Odile Deray',
          'value': 'Odile Deray',
        }
      ]
    }, {
      'key': 'Tipix',
      'text': 'Tipix',
      'value': 'Tipix',
      'student' : [ 
        {
          'key': 'Alex Cité',
          'text': 'Alex Cité',
          'value': 'Alex Cité',
        }, {
          'key': 'Jean Cérien',
          'text': 'Jean Cérien',
          'value': 'Jean Cérien',
        }, {
          'key': 'Gérard Manvussa',
          'text': 'Gérard Manvussa',
          'value': 'Gérard Manvussa',
        }
      ]
    }
  ],
  dropdownValue: 'Valhalla'
}

const adminReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_CHANGE_DROPDOWN_VALUE:
      return {
        ...state,
        dropdownValue: action.value
      };
    default:
      return state;
  }
}

export default adminReducer;
