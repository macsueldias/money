import React, { useMemo, useState, useEffect } from 'react'

import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput'

import { gains } from '../../repositories/gains'
import { expenses } from '../../repositories/expenses'
import formatCurrency from '../../utils/formatCurrency'
import FormatDate from '../../utils/formatDate'
import listOfMonths from '../../utils/months'

import { Container, Content, Filters } from './styles'

interface RouteParams {
  match: {
    params: {
      type: string
    }
  }
}

interface IData {
  id: string
  title: string
  amountFormatted: string
  frequency: string
  dateFormated: string
  tagColor: string
}

const List: React.FC<RouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([])
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1,
  )
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear(),
  )
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState([
    'recorrente',
    'eventual',
  ])

  const movimentType = match.params.type

  const pageData = useMemo(() => {
    return movimentType === 'balance-entry'
      ? {
          title: 'Entradas',
          lineColor: '#059669',
          data: gains,
        }
      : {
          title: 'Saídas',
          lineColor: '#ef4444',
          data: expenses,
        }
  }, [movimentType])

  const years = useMemo(() => {
    const { data } = pageData

    const uniqueYears: number[] = []
    data.forEach((item) => {
      const year = Number(item.date.split('-', 1))

      if (!uniqueYears.includes(year)) uniqueYears.push(year)
      setYearSelected(year)
    })

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      }
    })
  }, [pageData])

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })
  }, [])

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(
      (item) => item === frequency,
    )

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(
        (item) => item !== frequency,
      )
      setFrequencyFilterSelected(filtered)
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency])
    }
  }

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    } catch {
      throw new Error('invalid month value. Is accept 0 - 11')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setYearSelected(parseYear)
    } catch {
      throw new Error('invalid year value. Is accept 0 - 11')
    }
  }

  useEffect(() => {
    const { data } = pageData

    const filteredData = data.filter((item) => {
      const date = new Date(item.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      return (
        month === monthSelected &&
        year === yearSelected &&
        frequencyFilterSelected.includes(item.frequency)
      )
    })

    const formattedData = filteredData.map((item) => {
      return {
        id: String(Math.random()),
        title: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormated: FormatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#059669' : '#ef4444',
      }
    })

    setData(formattedData)
  }, [
    pageData,
    monthSelected,
    yearSelected,
    data.length,
    frequencyFilterSelected,
  ])

  return (
    <Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Filters>
        <button
          type="button"
          className={`
                        tag-filter tag-filter-recurrent 
                        ${
                          frequencyFilterSelected.includes('recorrente') &&
                          'tag-actived'
                        }
                    `}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>

        <button
          type="button"
          className={`
                        tag-filter tag-filter-eventual 
                        ${
                          frequencyFilterSelected.includes('eventual') &&
                          'tag-actived'
                        }
                    `}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </Filters>
      <Content>
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            cardColor="#313862"
            tagColor={item.tagColor}
            title={item.title}
            subtitle={item.dateFormated}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  )
}

export default List
