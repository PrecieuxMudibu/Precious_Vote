import { Icon } from '@iconify/react';

export default function Input({
    name,
    type,
    placeholder,
    label,
    icon,
    onChange,
}) {
    return (
        <label>
            <span>{label}</span>
            <div className="input_group">
                <Icon icon={icon} className="icon" />
                <input
                    onChange={onChange}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                />
            </div>
        </label>
    );
}
