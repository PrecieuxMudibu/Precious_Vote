import { Icon } from '@iconify/react';

export default function Textarea({
    name,
    placeholder,
    label,
    icon,
    onChange,
    value,
}) {
    return (
        <label>
            <span>{label}</span>
            <div className="input_group">
                <Icon icon={icon} className="icon" />
                <textarea
                    onChange={onChange}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                />
            </div>
        </label>
    );
}
