import styles from '../../styles/dashboard/my_projects.module.css';
import { Election_Card, Create_Election_Card } from '../../components/index';
import { Icon } from '@iconify/react';
import Dashboard_Layout from '../../components/layouts/dashboard_layout';

export default function My_Projects() {
    return (
        <Dashboard_Layout page_title="Mes projets">
            <section>
                <div className={styles.title_and_search_bar}>
                    <h1>Vos projets</h1>
                    <div>
                        <Icon icon="ic:outline-search" className="icon" />
                        <input
                            type="email"
                            placeholder="Recherchez votre projet ici"
                        />
                    </div>
                </div>
                <Create_Election_Card />

                <div className={styles.elections_group}>
                    <Election_Card />
                    <Election_Card />
                    <Election_Card />
                    <Election_Card />
                    <Election_Card />
                    <Election_Card />
                    <Election_Card />
                    <Election_Card />
                    <Election_Card />
                    <Election_Card />
                    <Election_Card />
                    <Election_Card />
                </div>
            </section>
        </Dashboard_Layout>
    );
}
