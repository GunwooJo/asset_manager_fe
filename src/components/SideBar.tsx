import React from "react";
import styles from "./SideBar.module.css";

const SideBar: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li><a href="#">홈</a></li>
                <li><a href="#">포트폴리오</a></li>
                <li><a href="#">배당금</a></li>
                <li><a href="#">숨기기</a></li>
            </ul>
        </div>
    );
}

export default SideBar;