import { SignOutButton } from '@clerk/clerk-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface DropdownMenuProps {
  isUserMenuOpen: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isUserMenuOpen }) => {
  return (
    <div style={{ position: 'relative' }}>
      {isUserMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '-22px',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '2px',
            width: '160px', // 110px na telefonie
            zIndex: 1000,
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link to="/orders" className="Header__navigation--user-text">
                Orders
              </Link>
            </li>
            <li>
              <SignOutButton>
                <div className="Header__navigation--user-text">Sign out</div>
              </SignOutButton>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
