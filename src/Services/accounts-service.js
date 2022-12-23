import * as serviceWrapper from './serviceWrapper';

export default {
    get: {
        accounts: async (user) => 
         await serviceWrapper.GET(
            `mobile`,
            'accounts/'
         ),
         getCurrentUser : async (headers) =>
         await serviceWrapper.GET(
             'mobile',
             'accounts/current/',
             headers
         )
    },
    post: {
        getToken: async (headers,params) => 
        await serviceWrapper.POST1(
            'mobile',
            'uaa/oauth/token',
            headers,
            params
        )
    }
}