import { Icon } from '@iconify/react';

export default function Input({
    name,
    type,
    placeholder,
    label,
    icon,
    onChange,
    value
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
                    value={value}
                    placeholder={placeholder}
                />
            </div>
        </label>
    );
}
