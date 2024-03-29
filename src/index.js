import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-virtualized/styles.css';
import 'rodal/lib/rodal.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min';

render(
    <App />,
    document.getElementById('root')
);
