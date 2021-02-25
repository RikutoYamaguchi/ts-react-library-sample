import React, { PropsWithChildren } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = {};

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing = ({
  children,
}: PropsWithChildren<Props>): React.ReactElement => {
  return <div>{children || 'the snozzberries taste like snozzberries'}</div>;
};
