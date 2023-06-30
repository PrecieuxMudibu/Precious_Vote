import { Icon } from '@iconify/react';

export default function Select({
    name,
    label,
    icon,
    onChange,
    options,
    value,
}) {
    return (
        <label>
            <span>{label}</span>
            <div className="input_group">
                <Icon icon={icon} className="icon" />

                <select onChange={onChange} name={name} id={name} value={value}>
                    {options.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </label>
    );
}
