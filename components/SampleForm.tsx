'use client'

import React, { useState } from 'react'
import { TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { Controller } from 'react-hook-form'
import Image from 'next/image'
import { Material, BoxPattern } from '../types/formTypes'

const materials: Material[] = ['Duplex', '3ply ef', '3ply nf', '5ply ef', '5ply nf', '7ply ef', '7ply nf']
const boxPatterns: BoxPattern[] = ['reverstuck', 'interlock', 'ring flap', 'cartoon', 'hardware folding', 'mobile folding', 'inner tre', 'outer sleeve', 'top bottom pin', 'top bottom folding']

export default function SampleForm({ control }: { control: any }) {
  const [showMaterial, setShowMaterial] = useState(false)
  const [showBoxPattern, setShowBoxPattern] = useState(false)
  const [showSize, setShowSize] = useState(false)

  return (
    <>
      <Controller
        name="productName"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Product Name/Job Name"
            fullWidth
            onChange={(e) => {
              field.onChange(e)
              setShowMaterial(!!e.target.value)
            }}
          />
        )}
      />

      {showMaterial && (
        <FormControl fullWidth>
          <InputLabel>Material</InputLabel>
          <Controller
            name="material"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                onChange={(e) => {
                  field.onChange(e)
                  setShowBoxPattern(true)
                }}
              >
                {materials.map((material) => (
                  <MenuItem key={material} value={material}>
                    {material}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      )}

      {showBoxPattern && (
        <FormControl fullWidth>
          <InputLabel>Box Pattern</InputLabel>
          <Controller
            name="boxPattern"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                onChange={(e) => {
                  field.onChange(e)
                  setShowSize(true)
                }}
              >
                {boxPatterns.map((pattern) => (
                  <MenuItem key={pattern} value={pattern}>
                    <div className="flex items-center">
                      <Image
                        src={`/placeholder.svg?height=50&width=50&text=${pattern}`}
                        alt={pattern}
                        width={50}
                        height={50}
                        className="mr-2"
                      />
                      {pattern}
                    </div>
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      )}

      {showSize && (
        <>
          <Controller
            name="sizeUnit"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup {...field} row>
                <FormControlLabel value="inch" control={<Radio />} label="Inch" />
                <FormControlLabel value="mm" control={<Radio />} label="mm" />
              </RadioGroup>
            )}
          />

          <Controller
            name="length"
            control={control}
            rules={{ required: true, min: 0 }}
            render={({ field }) => (
              <TextField {...field} label="Length" type="number" fullWidth />
            )}
          />

          <Controller
            name="width"
            control={control}
            rules={{ required: true, min: 0 }}
            render={({ field }) => (
              <TextField {...field} label="Width" type="number" fullWidth />
            )}
          />

          <Controller
            name="height"
            control={control}
            rules={{ required: true, min: 0 }}
            render={({ field }) => (
              <TextField {...field} label="Height" type="number" fullWidth />
            )}
          />

          <Controller
            name="sizeType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup {...field} row>
                <FormControlLabel value="box" control={<Radio />} label="Box Size" />
                <FormControlLabel value="product" control={<Radio />} label="Product Size" />
              </RadioGroup>
            )}
          />

          <Controller
            name="quantity"
            control={control}
            rules={{ required: true, min: 1 }}
            render={({ field }) => (
              <TextField {...field} label="Quantity" type="number" fullWidth />
            )}
          />

          <Controller
            name="notes"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Notes" multiline rows={4} fullWidth />
            )}
          />
        </>
      )}
    </>
  )
}

