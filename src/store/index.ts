import React, { createContext } from 'react';
import { useLocalStore, observer } from 'mobx-react-lite';

export const MyContent = createContext(null);

// export const 