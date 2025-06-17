import React from 'react';

import Lang from '@/language';

const NotFoundPage = () => (
    <div className='NotFoundPage'>
        <div>
            <h1>{Lang.get('errors.404.code')}</h1>
        </div>
        <div>
            <h2>{Lang.get('errors.404.message')}</h2>
        </div>
    </div>
)

export default NotFoundPage;