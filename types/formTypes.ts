export type RequirementType = 'Sample' | 'Die' | 'DieLine'

export type Material = 'Duplex' | '3ply ef' | '3ply nf' | '5ply ef' | '5ply nf' | '7ply ef' | '7ply nf'

export type BoxPattern = 'reverstuck' | 'interlock' | 'ring flap' | 'cartoon' | 'hardware folding' | 'mobile folding' | 'inner tre' | 'outer sleeve' | 'top bottom pin' | 'top bottom folding'

export interface FormData {
  requirementType: RequirementType
  productName?: string
  material?: Material
  boxPattern?: BoxPattern
  sizeUnit?: 'inch' | 'mm'
  length?: number
  width?: number
  height?: number
  sizeType?: 'box' | 'product'
  quantity?: number
  notes?: string
  dieSpecificField?: string
  dieLineSpecificField?: string
}

