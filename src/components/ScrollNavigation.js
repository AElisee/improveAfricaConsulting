import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollNavigation = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sauvegarder le comportement de défilement actuel
    const scrollBehavior = document.documentElement.style.scrollBehavior;

    // Désactiver le comportement de défilement fluide
    document.documentElement.style.scrollBehavior = "auto";

    // Faire défiler vers le haut
    window.scrollTo(0, 0);

    // Restaurer le comportement de défilement après un court délai
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = scrollBehavior;
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollNavigation;
