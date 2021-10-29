import AddFriendSuggest from '../type/may_know/_main/AddFriendSuggest';
import AddFriendRequested from '../type/requested/_main/AddFriendRequested';
import AddFriendSent from '../type/sent/_main/AddFriendSent';

//
export const title_add_friend_arr = [
    {
        request: 'may_know',
        title: 'Maybe know',
    },
    {
        request: 'sent',
        title: 'Sent',
    },
    {
        request: 'requested',
        title: 'Requested',
    },
];

//
export const add_friend_component_obj = {
    may_know: AddFriendSuggest,
    sent: AddFriendSent,
    requested: AddFriendRequested,
};
