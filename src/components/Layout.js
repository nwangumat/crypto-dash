import React from 'react';

import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';

import styles from './Layout.module.scss';

const Layout = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.main}>
                <Header />
                <Dashboard />
            </div>
        </div>
    )
}

export default Layout;