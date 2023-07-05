import styles from '../styles/details_item.module.css';

export default function Details_Item({ item, index }) {
    return (
        <>
            <div className={styles.row}>
                <div>{index + 1}</div>
                <div>{item.first_name}</div>
                <div>{item.name}</div>
                <div>1ction</div>
            </div>

            {/* <div className={styles.row}>
                <div>2</div>
                <div>first_name</div>
                <div>item.name </div>
                <div>1ction</div>
            </div> */}
        </>
    );
}

// <>
// <div>{index + 1}</div>
// <div>
//     {item.picture && (
//         <img
//             src={item.picture}
//             alt={item.name}
//             className={styles.image}
//         />
//     )}
//     {/* <Image src={item.picture} alt={first_name} width={65} height={65} /> */}
// </div>
// <div>{item.first_name}</div>
// <div>{item.name}</div>
// <div>{item.email}</div>
// </>
