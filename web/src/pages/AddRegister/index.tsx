import React from 'react'
import { Container } from '../Dashboard/styles'
import ContentHeader from '../../components/ContentHeader'
import { Form, InputGroup, Label } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '../../components/Button'
import Input from '../../components/Input'

const registerFormSchema = z.object({
  //   user_id: z.string().uuid(),
  description: z.string().min(3),
  amount: z.number(),
  type: z.string(),
  frenquecy: z.string(),
  //   date: z.date(),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

const AddRegister: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  function handleAddOperation(data: RegisterFormData) {
    console.log(data)
  }

  return (
    <Container>
      <ContentHeader title="Adicionar Operação" lineColor="#059669">
        <span></span>
      </ContentHeader>

      <Form onSubmit={handleSubmit(handleAddOperation)}>
        <InputGroup>
          <Label htmlFor="description">Descrição</Label>
          <Input id="description" {...register('description')} />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="amount">Valor</Label>
          <Input id="amount" {...register('amount', { valueAsNumber: true })} />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="type">Tipo</Label>
          <Input id="type" {...register('type')} />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="frequency">Frequência</Label>
          <Input id="frequency" {...register('frenquecy')} />
        </InputGroup>
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  )
}

export default AddRegister
