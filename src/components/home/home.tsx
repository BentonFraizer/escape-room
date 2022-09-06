import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
// @ts-expect-error TS(2307): Cannot find module 'components/common/common' or i... Remove this comment to see the full error message
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

const HomePage = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <MainLayout>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <S.Main forwardedAs="main">
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <PageHeading>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <PageTitle>Выберите тематику</PageTitle>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
      </PageHeading>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <QuestsCatalog />
    </S.Main>
  </MainLayout>
);

export default HomePage;
