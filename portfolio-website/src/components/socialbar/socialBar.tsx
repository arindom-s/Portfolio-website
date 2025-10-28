import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import styles from './socialBar.module.scss';

const SocialBar = () => {
    return (
        <div className={styles.socialBarContainer}>
            <div className={styles.verticalLine}></div>
            <ul className={styles.socialList}>
                <li>
                    <a href="https://github.com/arindom-s" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://leetcode.com/u/heisenburger123/" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/arindom-sarmah-324076255" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
        </div>
    );
}; export default SocialBar;