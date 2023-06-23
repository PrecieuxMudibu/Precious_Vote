export default function Button({ label, onClick }) {
    return (
        <button className="button_primary" onClick={onClick}>
            {label}
        </button>
    );
}
