/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
import { saveAs } from 'file-saver';
import { useEffect } from 'react';
import styles from '../../styles/dashboard/add_candidates.module.css';
import { Dashboard_Layout, Item } from '../../components/index';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function My_Profile() {
    return (
        <Dashboard_Layout page_title="Paramètres généraux">
            <section>Hallo</section>;
        </Dashboard_Layout>
    );
}
