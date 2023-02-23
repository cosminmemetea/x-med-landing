import { ReactNode } from 'react';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Layout;
