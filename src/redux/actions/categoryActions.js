/* eslint-disable no-unused-vars */
import { createNormalAction, createApiAction, createSagaAction } from '../../reduxHelper/actionHelper';


const exportActions = {};
const appendAction = (typeCreator, actionName, options) => {
    exportActions[actionName] = typeCreator(actionName, options);
};

appendAction(createApiAction, 'getCategories', {
    url: 'http://54.255.220.116:10001/products/',
    method: 'get'
});

appendAction(createApiAction, 'getSKU', {
    url: 'http://54.255.220.116:10001/skus/',
    method: 'get'
});

appendAction(createApiAction, 'appendCategory', {
    url: 'http://54.255.220.116:10001/products/',
    method: 'post'
});

appendAction(createApiAction, 'updateCategory', {
    url: 'http://54.255.220.116:10001/products/',
    method: 'put'
});

appendAction(createApiAction, 'deleteCategory', {
    url: 'http://54.255.220.116:10001/products/',
    method: 'delete'
});

module.exports = exportActions;

// export const getSKU = createApiAction('getSKU', {
//     url: '/getSKU',
//     method: 'get',
// });
//
// export const getCategories = createSagaAction('getCategories', {
//     url: '/getCategories',
//     method: 'get',
// });
//
// export const appendCategory = createApiAction('appendCategory', {
//     url: '/appendCategory',
//     method: 'post',
// });

