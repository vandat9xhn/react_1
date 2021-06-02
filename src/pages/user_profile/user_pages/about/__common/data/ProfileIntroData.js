import { IconsProfileAbout } from '../../../../../../_groups_icon/about/GroupIconProfileAbout';
// 
import { AboutCommonRoutes } from '../routes/routes';

//
export const common_about_title = AboutCommonRoutes.map((item) => ({
    search: item.search,
    title: item.title,
}));

// 
export const common_overview_icon = [
    {
        Icon: IconsProfileAbout.work,
        key_data: 'work',
        search: 'work_edu',
    },
    {
        Icon: IconsProfileAbout.university,
        key_data: 'university',
        search: 'work_edu',
    },
    {
        Icon: IconsProfileAbout.school,
        key_data: 'school',
        search: 'work_edu',
    },
    {
        Icon: IconsProfileAbout.hometown,
        key_data: 'hometown',
        search: 'place_lived',
    },
    {
        Icon: IconsProfileAbout.city,
        key_data: 'city',
        search: 'place_lived',
    },
    {
        Icon: IconsProfileAbout.address,
        key_data: 'address',
        search: 'contact',
    },
]

// 
export const relation_arr = [
    'Father',
    'Mother',
    'Child',
    'Brother',
    'Sister',
    'Girl friend',
    'Boy friend',
];
