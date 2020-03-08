import React from 'react';
import css from './Header.module.css';
import publicUrl from '../utils/publicUrl';


function Header(props) {

    return (
        <nav className={css.header}>
            <div className={css.headerItem}>
                <button>
                    <img src={publicUrl('assets/camera.svg')} alt="Camera"/>
                </button>
            </div>
            <div className={css.headerItem}>
                <button>
                    <img src={publicUrl('assets/logo.png')} alt="Logo"/>
                </button>
            </div>
            <div className={css.headerItem}>
                <button>
                    <img src={publicUrl('assets/message.svg')} alt="Message"/>
                </button>
            </div>
        </nav>
    );
}

export default Header;
