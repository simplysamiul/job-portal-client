import React, { use } from 'react';
import { AuthContext } from '../context/AuthContrext/AuthContrext';

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
};

export default useAuth;