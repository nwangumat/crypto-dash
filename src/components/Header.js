import React from 'react';

import bell from '../assets/images/bell-svgrepo-com.svg';
import avatar from '../assets/images/user-svgrepo-com.svg';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.heading}>
                <span className={styles.headingPrimary}>Coins</span>
                <span className={styles.headingSecondary}>Overview</span>
            </div>
            <div className={styles.notifications}>
                <div className={styles.notification}>
                    <img src={bell} alt="bell icon" />
                </div>
                <div className={styles.avatar}>
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </header>
    )
}

export default Header;