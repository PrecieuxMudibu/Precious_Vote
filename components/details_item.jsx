import styles from '../styles/details_item.module.css';

export default function Details_Item({ item, index, display }) {
    return (
        <div className={styles.row}>
            {display === 'electors' && (
                <>
                    <div>{index + 1}</div>
                    <div>{item.first_name}</div>
                    <div>{item.name}</div>
                </>
            )}
            {display === 'candidates' && (
                <>
                    <div>{index + 1}</div>
                    <img
                        src={item.picture}
                        alt={item.name}
                        className={styles.image}
                    />
                    <div>{item.first_name}</div>
                    <div>{item.name}</div>
                </>
            )}
        </div>
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
