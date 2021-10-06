import clsx from 'clsx';
import UnstyledLink from './UnstyledLink';

export default function CustomLink({
  children,
  openNewTab = undefined,
  className = '',
  ...rest
}) {
  return (
    <UnstyledLink
      {...rest}
      openNewTab={openNewTab}
      className={clsx(
        'inline-flex items-center justify-center text-xl font-bold animated-underline dark:animated-underline-dark',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
