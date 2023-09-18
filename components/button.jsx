import { Button as ButtonMaterial } from '@mui/material';
export default function Button({ label, onClick }) {
    return (
        <ButtonMaterial
            onClick={onClick}
            variant="contained"
            color="primary"
            sx={{
                border: 'none',
                padding: '10px 0',
                fontSize: '16px',
                color: '#ffffff',
                fontWeight: 'bold',
                width: '200px',
            }}
        >
            {label}
        </ButtonMaterial>
    );
}
