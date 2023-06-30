import React from 'react';
import { Textarea, Input } from '../../components';

export default function General_Parameters({election_to_create, set_election_to_create}) {
    function onChange(e) {
        const { name, value } = e.target;
        set_election_to_create({ ...election_to_create, [name]: value });
    }
    
    return (
        <>
            <Input
                label="Nom de votre élection"
                icon="ic:round-drive-file-rename-outline"
                name="name"
                type="text"
                placeholder="Election du comité de G1 Math-Info"
                onChange={onChange}
            />

            <Textarea
                label="Description"
                icon="fluent:text-description-24-filled"
                name="description"
                onChange={onChange}
            />
        </>
    );
}
