import styles from '../../styles/layouts/modal_layout.module.css';
import { Icon } from '@iconify/react';

export default function Modal_Layout({ children }) {
    return (
        <div
            className={`modal fade`}
            id="addClientModal"
            aria-labelledby="addClientModalLabel"
            aria-hidden="true"
        >
            <div className={`${styles} modal-dialog`}>
                <div className={`modal-content ${styles.modal_container}`}>
                    <div>
                        <button
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <Icon icon="ic:twotone-close" />
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    );
}
