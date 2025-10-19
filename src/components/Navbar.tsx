/**
 * Legacy Navbar component - Now deprecated
 * Navigation is now handled by NextNavbar component
 */
interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  // This component is deprecated. Navigation is now handled by NextNavbar.
  return null;
};

export default Navbar;
