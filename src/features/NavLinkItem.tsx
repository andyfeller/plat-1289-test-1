import React, { forwardRef } from 'react';
import { NavButton, NavButtonProps } from '@forge/foundry';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface NavItemProps extends NavLinkProps {
  /** Allow you to add inner nav button props */
  NavButtonProps?: NavButtonProps;
}

/**
 * A navigation item
 */
const NavLinkItem = forwardRef<any, NavItemProps>(
  ({ NavButtonProps: NBProps, ...rest }, ref) => {
    return (
      <NavLink
        component={({ className, ...props }) => (
          <NavButton
            active={className?.includes('active')}
            {...props}
            {...NBProps}
          />
        )}
        {...rest}
        ref={ref}
      />
    );
  },
);

export default NavLinkItem;
