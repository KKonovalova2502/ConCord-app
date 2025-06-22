import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }:LayoutProps) {
  return (
    <>
      <AppBar />
      <div className={css.container}>{children}</div>
    </>
  );
}
