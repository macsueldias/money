import React from 'react';

import { Container } from './styles';

interface SelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
    onChange?(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    defaultValue?: string | number;
}   

const SelectInput: React.FC<SelectInputProps> = ({options, onChange, defaultValue}) => (
        <Container>
            <select onChange={onChange} defaultValue={defaultValue}>
                {   
                    options.map(option => (
                        <option 
                            key={option.value} 
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))
                }
            </select>
        </Container>
    );

export default SelectInput;