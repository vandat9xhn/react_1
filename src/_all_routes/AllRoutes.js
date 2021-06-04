import React from 'react';

// All components

// Home
const Home = React.lazy(() => import('../pages/home/_main/Home'));
// Profile
const Profile = React.lazy(() => import('../pages/user_profile/_main/Profile'));

// 
const UserPost = React.lazy(() => import('../pages/user_post/_main/UserPost'));

// New feed
const NewFeed = React.lazy(() => import('../pages/new_feed/_main/NewFeed'));

// post vid pic
const ZoomVidPicItem = React.lazy(() => import('../component/posts/_zoom_post/zoom_vid_pic/_main/ZoomVidPicItem'))

// list add friend add
const AddFriend = React.lazy(() => import('../pages/add_friend/_main/AddFriend'));

// Login form
const LoginForm = React.lazy(() => import('../pages/login_form/_main/LoginForm'));

// Registration form
const Registration = React.lazy(() => import('../pages/registration/_main/Registration'));

// Learn HTML
const LearnHTML = React.lazy(() => import('../pages/learn/_main/LearnHTML'));

// PhoneLaptop + Item
const PhoneLaptop = React.lazy(() => import('../pages/phone_laptop/pages/__home_page/_main/PhoneLaptop'));
const PhoneLaptopDetail = React.lazy(() => import('../pages/phone_laptop/pages/_product_detail/_main/PhoneLaptopDetail'));
const Laptops = React.lazy(() => import('../pages/phone_laptop/pages/_laptops/_main/Laptops'));
const Phones = React.lazy(() => import('../pages/phone_laptop/pages/_phones/_main/Phones'));

// City + Add new
const CityStreet = React.lazy(() => import('../pages/city_street/pages/cities/_main/Cities'));
const NewCity = React.lazy(() => import('../pages/city_street/pages/_add_new_city/_main/AddNewCity'));

// Fashion + Item
const Fashion = React.lazy(() => import('../pages/fashion/pages/_fashion_list/Fashion'));
const FashionShop = React.lazy(() => import('../pages/fashion/pages/shop/_main/Shop'));
const FashionItem = React.lazy(() => import('../pages/fashion/pages/fashion_item/_main/FashionItem'));
const FashionCart = React.lazy(() => import('../pages/fashion/pages/cart/_main/FashionCart'));
const FashionBuy = React.lazy(() => import('../pages/fashion/pages/buy/_main/FashionBuy'));
const FashionSearch = React.lazy(() => import('../pages/fashion/pages/search/_main/FashionSearch'));
const FashionPersonal = React.lazy(() => import('../pages/fashion/pages/personal/_main/FashionPersonal'));
// const FashionUserProduct = React.lazy(() => import('../pages/fashion/pages/user_products/_main/FashionUserProduct'));
const FashionOnWork = React.lazy(() => import('../pages/fashion/pages/on_work/FashionOnWork'));

// zoom
const ZoomVidPics = React.lazy(() => import('../component/_zoom_vid_pics/_main/ZoomVidPics'));


// All paths
export const RoutesExact = [

  // home
  {
    path: '/home',
    component: Home,
  },

  // login
  {
    path: '/login-form',
    component: LoginForm,
  },

  // registry
  {
    path: '/registration-form',
    component: Registration,
  },

  // Profile
  {
    path: '/profile/:id',
    component: Profile,
  },
  // user post
  {
    path: '/posts/:id',
    component: UserPost,
  },
  // new feed
  {
    path: '/new-feed',
    component: NewFeed,
  },
  // post vid pic
  {
    path: '/post/photos/:id',
    component: ZoomVidPicItem,
  },

  // list add friend add
  {
    path: '/add-friend-add',
    component: AddFriend,
  },

  // laptop phone
  {
    path: '/phone-laptop',
    component: PhoneLaptop,
  },
  {
    path: '/phone-laptop::id',
    component: PhoneLaptopDetail,
  },
  {
    path: '/phone-laptop-phones',
    component: Phones,
  },
  {
    path: '/phone-laptop-laptops',
    component: Laptops,
  },

  // city
  {
    path: '/city-street',
    component: CityStreet,
  },
  {
    path: '/new-city',
    component: NewCity,
  },

  // fashion
  {
    path: '/fashion',
    component: Fashion,
  },
  {
    path: '/fashion/shop/:id',
    component: FashionShop,
  },
  {
    path: '/fashion::id',
    component: FashionItem,
  },
  {
    path: '/fashion/cart',
    component: FashionCart,
  },
  {
    path: '/fashion/buy',
    component: FashionBuy,
  },
  {
    path: '/fashion/search',
    component: FashionSearch,
  },
  // {
  //   path: '/fashion/user/products',
  //   component: FashionUserProduct,
  // },
  // fashion on work
  {
    path: '/fashion/mall',
    component: FashionOnWork,
  },
  {
    path: '/fashion/extra-ship',
    component: FashionOnWork,
  },
  {
    path: '/fashion/premium',
    component: FashionOnWork,
  },
  {
    path: '/fashion/brand-discount',
    component: FashionOnWork,
  },
  {
    path: '/fashion/brand-1',
    component: FashionOnWork,
  },
  {
    path: '/fashion/condition',
    component: FashionOnWork,
  },

  // learn html
  {
    path: '/learn-html',
    component: LearnHTML,
  },
];

export const RoutesNotExact = [

  // fashion personal
  {
    path: '/fashion/personal',
    component: FashionPersonal,
  },
]
