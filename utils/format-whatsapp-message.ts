export function formatWhatsAppMessage(formData: any): string {
  const sizeString = `${formData.length} x ${formData.width} x ${formData.height} ${formData.sizeUnit} ${formData.sizeType === 'box' ? 'OD' : 'ID'} size`
  const message = `
  *New Die Making Order*
  ------------------

  *Type:* ${formData.requirementType}
  *Product Name:* ${formData.productName}
  *Material:* ${formData.material}
  *Box Pattern:* ${formData.boxPattern}
  
  *Size Details*
  -------------
  ${sizeString}
  
  *Quantity:* ${formData.quantity}
  ${formData.notes ? `\n*Notes:*\n${formData.notes}` : ''}
  `.trim()

  return encodeURIComponent(message)
}

