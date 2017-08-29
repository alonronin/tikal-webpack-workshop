import React from 'react';
import { render } from 'react-dom';

import App from './App';

const div = document.createElement('div');
document.body.append(div);

render(<App />, div);