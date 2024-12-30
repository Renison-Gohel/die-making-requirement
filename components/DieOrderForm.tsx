'use client'

import React, { useState } from 'react'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { RequirementType } from '../types/formTypes'
import SampleForm from './SampleForm'
import DieForm from './DieForm'
import DieLineForm from './DieLineForm'

export default function DieOrderForm() {
  const [requirementType, setRequirementType] = useState<RequirementType | ''>('')
  const { control, handleSubmit, reset } = useForm()

  const onSubmit = async (data: any) => {
    // TODO: Implement Supabase submission logic here
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormControl fullWidth>
        <InputLabel>Type of Requirement</InputLabel>
        <Controller
          name="requirementType"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              onChange={(e) => {
                field.onChange(e)
                setRequirementType(e.target.value as RequirementType)
              }}
            >
              <MenuItem value="Sample">Sample</MenuItem>
              <MenuItem value="Die">Die</MenuItem>
              <MenuItem value="DieLine">Die Line</MenuItem>
            </Select>
          )}
        />
      </FormControl>

      {requirementType === 'Sample' && <SampleForm control={control} />}
      {requirementType === 'Die' && <DieForm control={control} />}
      {requirementType === 'DieLine' && <DieLineForm control={control} />}

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit Order
      </Button>
    </form>
  )
}

