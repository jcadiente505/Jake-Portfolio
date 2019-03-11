import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/App.scss';

ReactDOM.render(<App/>, document.getElementById('app'));

import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 1500, 'swing');
});