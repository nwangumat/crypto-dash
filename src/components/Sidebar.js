import React from 'react';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            {/* <div>CryptoDash</div>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <img src={dashboard} alt="dashboard icon" />
                        <span>Dashboard</span>
                    </li>
                    <li className={styles.listItem}>
                        <img src={sell} alt="transaction icon" />
                        <span>Buy/Sell</span>
                    </li>
                    <li className={styles.listItem}>
                        <img src={message} alt="paper plane icon" />
                        <span>Send/Request</span>
                    </li>
                    <li className={styles.listItem}>
                        <img src={account} alt="book icon" />
                        <span>Accounts</span>
                    </li>
                    <li className={styles.listItem}>
                        <img src={tools} alt="tools icon" />
                        <span>Tools</span>
                    </li>
                </ul>
            </nav> */}
        </div>
    )
}

export default Sidebar;