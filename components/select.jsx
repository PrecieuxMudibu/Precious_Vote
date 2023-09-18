import { Icon } from '@iconify/react';
import { isObject } from '../helpers';

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
                    {options && isObject(options[0])
                        ? options?.map((item, index) => (
                              <option key={index} value={item._id}>
                                  {item?.name}
                              </option>
                          ))
                        : options?.map((item, index) => (
                              <option key={index} value={item}>
                                  {item}
                              </option>
                          ))}
                </select>
            </div>
        </label>
    );
}
