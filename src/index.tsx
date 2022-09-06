// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { StrictMode } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { render } from 'react-dom';
// @ts-expect-error TS(2307): Cannot find module 'components/app/app' or its cor... Remove this comment to see the full error message
import App from 'components/app/app';

render(
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <StrictMode>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
