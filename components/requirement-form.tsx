"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Clock, SendHorizontal, Send } from 'lucide-react'
import Image from "next/image"
import { boxPatterns, BoxPatternType } from "@/types/box-patterns"
import { formatWhatsAppMessage } from "@/utils/format-whatsapp-message"
import { useRouter } from "next/navigation"
import "./custom-radio.css"

const formSchema = z.object({
    requirementType: z.enum(["Sample", "Die", "DieLine"]),
    productName: z.string().min(2, "Product name must be at least 2 characters"),
    material: z.enum([
        "Duplex",
        "3ply ef",
        "3ply nf",
        "5ply ef",
        "5ply nf",
        "7ply ef",
        "7ply nf",
    ]),
    boxPattern: z.string().min(1, "Box pattern is required"),
    sizeUnit: z.enum(["inch", "mm"]),
    length: z.string().min(1, "Length is required"),
    width: z.string().min(1, "Width is required"),
    height: z.string().min(1, "Height is required"),
    sizeType: z.enum(["box", "product"]),
    quantity: z.string().min(1, "Quantity is required"),
    notes: z.string().optional(),
})

export function RequirementForm() {
    const [showFields, setShowFields] = useState({
        material: false,
        boxPattern: false,
        size: false,
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            notes: "",
        },
    })

    const { watch } = form;

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // TODO: Submit to your API here
        console.log(values)
        const formattedMessage = formatWhatsAppMessage(values)
        const whatsappUrl = `https://wa.me/7405248966?text=${formattedMessage}`

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank')

    }

    const materials = [
        "Duplex",
        "3ply ef",
        "3ply nf",
        "5ply ef",
        "5ply nf",
        "7ply ef",
        "7ply nf",
    ]

    //   const boxPatterns = [
    //     "reverstuck",
    //     "interlock",
    //     "ring flap",
    //     "cartoon",
    //     "hardware folding",
    //     "mobile folding",
    //     "inner tre",
    //     "outer sleeve",
    //     "top bottom pin",
    //     "top bottom folding",
    //   ]

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Die Making Order Form</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="requirementType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type of Requirement</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select requirement type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Sample">Sample</SelectItem>
                                            <SelectItem value="Die">Die</SelectItem>
                                            <SelectItem value="DieLine">Die Line</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="productName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Name/Job Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            onChange={(e) => {
                                                field.onChange(e)
                                                setShowFields((prev) => ({ ...prev, material: true }))
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {showFields.material && (
                            <FormField
                                control={form.control}
                                name="material"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Material</FormLabel>
                                        <Select
                                            onValueChange={(value) => {
                                                field.onChange(value)
                                                setShowFields((prev) => ({ ...prev, boxPattern: true }))
                                            }}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select material" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {materials.map((material) => (
                                                    <SelectItem key={material} value={material}>
                                                        {material}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}

                        {showFields.boxPattern && (
                            // <FormField
                            //     control={form.control}
                            //     name="boxPattern"
                            //     render={({ field }) => (
                            //         <FormItem>
                            //             <FormLabel>Box Pattern</FormLabel>
                            //             <Select
                            //                 onValueChange={(value) => {
                            //                     field.onChange(value)
                            //                     setShowFields((prev) => ({ ...prev, size: true }))
                            //                 }}
                            //             >
                            //                 <FormControl>
                            //                     <SelectTrigger>
                            //                         <SelectValue placeholder="Select box pattern" />
                            //                     </SelectTrigger>
                            //                 </FormControl>
                            //                 <SelectContent>
                            //                     {boxPatterns.map((pattern: BoxPatternType) => (
                            //                         <SelectItem key={pattern.id} value={pattern.id}>
                            //                             <div className="flex items-center gap-2">
                            //                                 <Image
                            //                                     src={pattern.imageUrl}
                            //                                     alt={pattern.name}
                            //                                     width={40}
                            //                                     height={40}
                            //                                     className="rounded object-cover"
                            //                                     // Fallback to placeholder if image fails to load
                            //                                     onError={(e) => {
                            //                                         const target = e.target as HTMLImageElement
                            //                                         target.src = `/placeholder.svg?height=40&width=40&text=${pattern.name}`
                            //                                     }}
                            //                                 />
                            //                                 {pattern.name}
                            //                             </div>
                            //                         </SelectItem>
                            //                     ))}
                            //                 </SelectContent>
                            //             </Select>
                            //             <FormMessage />
                            //         </FormItem>
                            //     )}
                            // />
                            <FormField
                                control={form.control}
                                name="boxPattern"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Box Pattern</FormLabel>
                                        <Select
                                            onValueChange={(value) => {
                                                field.onChange(value)
                                                setShowFields((prev) => ({ ...prev, size: true }))
                                            }}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue>
                                                        {field.value ? (
                                                            <div className="flex items-center gap-2">
                                                                <div className="relative w-16 h-16">
                                                                    <Image
                                                                        src={boxPatterns.find(p => p.id === field.value)?.imageUrl || ''}
                                                                        alt={boxPatterns.find(p => p.id === field.value)?.name || ''}
                                                                        fill
                                                                        className="rounded object-contain"
                                                                        onError={(e) => {
                                                                            const target = e.target as HTMLImageElement
                                                                            target.src = `/placeholder.svg?height=64&width=64&text=${field.value}`
                                                                        }}
                                                                    />
                                                                </div>
                                                                <span>{boxPatterns.find(p => p.id === field.value)?.name}</span>
                                                            </div>
                                                        ) : (
                                                            "Select box pattern"
                                                        )}
                                                    </SelectValue>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <div className="grid grid-cols-2 gap-2 p-2">
                                                    {boxPatterns.map((pattern: BoxPatternType) => (
                                                        <SelectItem key={pattern.id} value={pattern.id} className="flex flex-col items-center p-2">
                                                            <Image
                                                                src={pattern.imageUrl}
                                                                alt={pattern.name}
                                                                width={100}
                                                                height={100}
                                                                className="rounded object-cover mb-2"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement
                                                                    target.src = `/placeholder.svg?height=100&width=100&text=${pattern.name}`
                                                                }}
                                                            />
                                                            <span className="text-center">{pattern.name}</span>
                                                        </SelectItem>
                                                    ))}
                                                </div>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}

                        {showFields.size && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="sizeUnit"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3 space-x-3">
                                            <FormLabel>Size Unit</FormLabel>
                                            <FormControl>
                                                <div className="custom-radio-group">
                                                    <div className="custom-radio-item">
                                                        <input
                                                            type="radio"
                                                            id="inch"
                                                            value="inch"
                                                            checked={field.value === "inch"}
                                                            onChange={field.onChange}
                                                        />
                                                        <label htmlFor="inch">Inch</label>
                                                    </div>
                                                    <div className="custom-radio-item">
                                                        <input
                                                            type="radio"
                                                            id="mm"
                                                            value="mm"
                                                            checked={field.value === "mm"}
                                                            onChange={field.onChange}
                                                        />
                                                        <label htmlFor="mm">mm</label>
                                                    </div>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-3 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="length"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Length</FormLabel>
                                                <FormControl>
                                                    <Input type="number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="width"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Width</FormLabel>
                                                <FormControl>
                                                    <Input type="number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="height"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Height</FormLabel>
                                                <FormControl>
                                                    <Input type="number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="sizeType"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel>Size Type</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-row space-x-4"
                                                >
                                                    <FormItem className="flex items-center space-x-2">
                                                        <FormControl>
                                                            <RadioGroupItem value="box" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">Box Size</FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-2">
                                                        <FormControl>
                                                            <RadioGroupItem value="product" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">Product Size</FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="quantity"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Quantity (ups)</FormLabel>
                                            <FormControl>
                                                <Input type="number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="notes"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Notes (Optional)</FormLabel>
                                            <FormControl>
                                                <Textarea {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Alert className="bg-primary/10 border-primary/20">
                                    <Clock className="h-4 w-4" />
                                    <AlertDescription>
                                        {form.watch("requirementType") === "Sample"
                                            ? "Your order will be processed within 3-6 hours"
                                            : "Your order will be processed within 24-48 hours"
                                        }
                                    </AlertDescription>
                                </Alert>

                                <Alert className="bg-green-700/5 border-primary/20">
                                    <SendHorizontal className="h-4 w-4 text-green-500" />
                                    <AlertDescription>
                                        Click on send button on the WhatsApp.
                                    </AlertDescription>
                                </Alert>

                                <div className="flex justify-end space-x-4">
                                    <Button
                                        variant="outline"
                                        type="button"
                                        onClick={() => {
                                            form.reset()
                                            setShowFields({ material: false, boxPattern: false, size: false })
                                        }}
                                    >
                                        Reset
                                    </Button>
                                    <Button type="submit">
                                        <Send className="w-4 h-4 mr-2" />
                                        Submit Order
                                    </Button>
                                </div>
                            </>
                        )}
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

