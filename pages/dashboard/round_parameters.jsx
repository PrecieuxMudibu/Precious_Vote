import {  Input, Select } from '../../components/index';
import { applicationContext } from '../_app';
import { useContext } from 'react';

export default function Round_Parameters({
    election_to_create,
    set_election_to_create,
}) {
    const { connectedUser } = useContext(applicationContext);

    function onChange(e) {
        const { name, value } = e.target;

        if (name == 'first_round_eligibility_criteria') {
            set_election_to_create({
                ...election_to_create,
                user_id: connectedUser._id,
                [name]: parseInt(value),
            });
        }

        if (name == 'candidates_for_the_second_round') {
            set_election_to_create({
                ...election_to_create,
                user_id: connectedUser._id,
                [name]: parseInt(value),
            });
        }

        if (name == 'two_rounds') {
            console.log('ICI', name, value);
            set_election_to_create({
                ...election_to_create,
                [name]: value == 'Oui' ? true : false,
            });
        }
    }

    return (
        <section>
            <div>
                <Input
                    label="Pour qu'un candidat soit élu au premier tour, il doit avoir quel pourcentage au minimum ?"
                    icon="ic:round-drive-file-rename-outline"
                    name="first_round_eligibility_criteria"
                    type="number"
                    placeholder="50"
                    onChange={onChange}
                    value={election_to_create.first_round_eligibility_criteria}
                />

                <Input
                    label="Combien de candidat souhaiteriez-vous en cas de deuxième tour ?"
                    icon="ic:round-drive-file-rename-outline"
                    name="candidates_for_the_second_round"
                    type="number"
                    placeholder="2"
                    onChange={onChange}
                    value={election_to_create.candidates_for_the_second_round}
                />

                <Select
                    label=" Souhaitez-vous des élections à deux tours ?"
                    icon="ic:round-drive-file-rename-outline"
                    name="two_rounds"
                    placeholder="Oui"
                    onChange={onChange}
                    options={['Oui', 'Non']}
                    value={
                        election_to_create.two_rounds === true ? 'Oui' : 'Non'
                    }
                />
            </div>
        </section>
    );
}
