import React, { useEffect } from 'react';
import 'regenerator-runtime';
import axios from 'axios';
import PropTypes from 'prop-types';

//
LearnAPIHeroku.propTypes = {};

//
function LearnAPIHeroku(props) {
    //
    useEffect(() => {
        getData_API_Phone();
    }, []);

    //
    async function getData_API_Phone() {
        // const res = await axios({
        //     url: 'https://react-django-heroku.herokuapp.com/api/phone/phone-lap-l/',
        //     method: 'GET',
        // });

        // console.log(res);

        // const res2 = await axios({
        //     url: 'https://react-django-heroku.herokuapp.com/api/account/define-user/',
        //     method: 'GET',
        // });

        // console.log(res2);
    }

    //
    return <div></div>;
}

export default LearnAPIHeroku;
