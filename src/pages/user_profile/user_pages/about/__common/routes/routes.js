import React from 'react';

//
const PfAboutOverview = React.lazy(() =>
    import('../../right/overview/_main/PfAboutOverview')
);

const PfAboutPlaces = React.lazy(() =>
    import('../../right/place_lived/_main/PfAboutPlaces')
);

const PfAboutWorkEdu = React.lazy(() =>
    import('../../right/work_edu/_main/PfAboutWorkEdu')
);

const PfAboutContactBasis = React.lazy(() =>
    import('../../right/contact_basis/_main/PfAboutContactBasis')
);

const PfAboutRelation = React.lazy(() =>
    import('../../right/relationships/_main/PfAboutRelation')
);

const PfAboutDetails = React.lazy(() =>
    import('../../right/details/_main/PfAboutDetails')
);

const PfAboutLifeEvents = React.lazy(() =>
    import('../../right/life_events/_main/PfAboutLifeEvents')
);

//
export const AboutRoutes = [
    {
        component: PfAboutOverview,
        search: '?sk=about_overview',
        title: 'Overview',
    },
    {
        component: PfAboutPlaces,
        search: '?sk=about_place_lived',
        title: 'Place lived',
    },
    {
        component: PfAboutWorkEdu,
        search: '?sk=about_work_edu',
        title: 'Work and education',
    },
    {
        component: PfAboutContactBasis,
        search: '?sk=about_contact',
        title: 'Contact and basis info',
    },
    {
        component: PfAboutRelation,
        search: '?sk=about_family_relationships',
        title: 'Family and relationships',
    },
    {
        component: PfAboutDetails,
        search: '?sk=about_details',
        title: 'Details',
    },
    {
        component: PfAboutLifeEvents,
        search: '?sk=about_life_events',
        title: 'Life events',
    },
];
