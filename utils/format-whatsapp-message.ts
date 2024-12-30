export function formatWhatsAppMessage(formData: any): string {
    const message = `
  *New Die Making Order*
  ------------------
  *Type:* ${formData.requirementType}
  *Product Name:* ${formData.productName}
  *Material:* ${formData.material}
  *Box Pattern:* ${formData.boxPattern}
  
  *Size Details*
  -------------
  Unit: ${formData.sizeUnit}
  Length: ${formData.length}
  Width: ${formData.width}
  Height: ${formData.height}
  Size Type: ${formData.sizeType}
  
  *Quantity:* ${formData.quantity}
  ${formData.notes ? `\n*Notes:*\n${formData.notes}` : ''}
  `.trim()
  
    return encodeURIComponent(message)
  }
  
  