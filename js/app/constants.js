(function () {
    'use strict';

    const ARTICLES = [
        {
            date: '02/15/2019',
            description: 'Achieve a balance of new features and addressing customer feedback while under tight' +
                'deadlines',
            name: 'Maximizing Customer Satisfaction while Delivering New Features',
            link: 'maximizing-customer-satisfaction'
        },
        {
            date: '02/15/2019',
            description: 'Maximize the impact of introducing analytics to your product without disrupting engineering velocity.',
            name: 'Product Analytics: Where to Start',
            link: 'start-product-analytics'
        },
        {
            date: '02/15/2019',
            description: 'How to approach the dreaded "Do you have any questions for us?" with an emphasis on' +
                'understanding the financial stability of an organization',
            name: 'Interviewing the Startup: Finances & Funding',
            link: 'interviewing-the-startup'
        },
    ];

    angular
    	.module('rdApp')
    	.constant('articles', ARTICLES);

}());
