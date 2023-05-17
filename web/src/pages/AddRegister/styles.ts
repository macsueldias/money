import styled from 'styled-components'

export const Container = styled.div`
  display: 'flex';
  justify-content: 'center';
  max-widht: '800px';
`

export const Form = styled.form`
  display: 'flex';
`

export const InputGroup = styled.div`
  display: 'flex';
  flex-direction: 'column';

  variant({
    size: {
        sm: {
            width: '3rem'; 
        },
        md: {
            width: '50%';
        }
        lg: {
            width: '100%';
        }
    }
    default: {
        md: {
            width: '50%';
        }
    }
  })
`

export const Label = styled.label``

export const Input = styled.input``
