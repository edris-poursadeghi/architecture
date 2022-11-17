/* import { IPrimaryLayout } from './PrimaryLayout';

const base: IPrimaryLayout = {
  sampleTextProp: 'Hello world!',
};

export const mockPrimaryLayoutProps = {
  base,
};
 */

import { IPrimaryLayout } from './PrimaryLayout';

const base: IPrimaryLayout = {
  children: '{{component}}',
};

export const mockPrimaryLayoutProps = {
  base,
};
