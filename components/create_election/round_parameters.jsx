import { Input, Select } from '../../components/index';
import { decode_token } from '../../helpers/index';

export default function Round_Parameters({
    election_to_create,
    set_election_to_create,
}) {
    function onChange(e) {
        const { name, value } = e.target;
        const token = localStorage.getItem('vote_app_token');
        const user_local_data = decode_token(token);

        if (name == 'first_round_eligibility_criteria') {
            set_election_to_create({
                ...election_to_create,
                created_by: user_local_data.id,
                [name]: parseInt(value),
            });
        }

        if (name == 'candidates_for_the_second_round') {
            set_election_to_create({
                ...election_to_create,
                created_by: user_local_data.id,
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
                    icon="fa6-solid:percent"
                    name="first_round_eligibility_criteria"
                    type="number"
                    placeholder="50"
                    onChange={onChange}
                    value={election_to_create.first_round_eligibility_criteria}
                />

                <Input
                    label="Combien de candidat souhaiteriez-vous en cas de deuxième tour ?"
                    icon="ant-design:number-outlined"
                    name="candidates_for_the_second_round"
                    type="number"
                    placeholder="2"
                    onChange={onChange}
                    value={election_to_create.candidates_for_the_second_round}
                />

                <Select
                    label=" Souhaitez-vous des élections à deux tours ?"
                    icon="carbon:boolean"
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
