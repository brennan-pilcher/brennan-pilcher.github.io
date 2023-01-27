import './MenuOverlay.css';

interface MenuOverlayProps {
  navigation: JSX.Element;
  closeMenuOverlay: () => void;
}

const MenuOverlay = ({ navigation, closeMenuOverlay }: MenuOverlayProps) => {
  return (
    <div className='menu-overlay'>
      <span className="material-symbols-outlined menu-icon" onClick={closeMenuOverlay}>
        menu_open
      </span>
      {navigation}
    </div>
  );
}

export default MenuOverlay;