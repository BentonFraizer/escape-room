// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
// @ts-expect-error TS(2307): Cannot find module 'components/common/common' or i... Remove this comment to see the full error message
} from 'components/common/common';
// @ts-expect-error TS(2307): Cannot find module 'components/detailed-quest/deta... Remove this comment to see the full error message
import DetailedQuest from 'components/detailed-quest/detailed-quest';
// @ts-expect-error TS(2307): Cannot find module 'components/contacts/contacts' ... Remove this comment to see the full error message
import Contacts from 'components/contacts/contacts';
// @ts-expect-error TS(2307): Cannot find module 'components/home/home' or its c... Remove this comment to see the full error message
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';

const App = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <ThemeProvider theme={appTheme}>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <S.GlobalStyle />
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Router>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Switch>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Route exact path="/quest">
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DetailedQuest />
        </Route>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Route exact path="/contacts">
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Contacts />
        </Route>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Route path="/">
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Home />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
