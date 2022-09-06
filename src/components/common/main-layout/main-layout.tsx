// @ts-expect-error TS(2307): Cannot find module 'components/common/common' or i... Remove this comment to see the full error message
import { Header, Footer } from 'components/common/common';

const MainLayout = ({
  children
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Header />
    {children}
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Footer />
  </>
);

export default MainLayout;
