/**
 * Legacy MobileMenu component - Now deprecated
 * Mobile navigation is now handled by NextNavbar component
 */
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // This component is deprecated. Mobile navigation is now handled by NextNavbar.
  return null;
};

export default MobileMenu;
