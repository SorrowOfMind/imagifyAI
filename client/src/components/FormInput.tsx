import { forwardRef, useId } from 'react'

interface FormInputProps {
  label: string;
  value: string;
  name: string;
  type: string;
  placeholder?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({label, value, name, type, placeholder}, ref) => {
  const id = useId();
  return (
    <div>
      <div className="flex gap-2 mb-2 items-center">
        <label htmlFor={id}>{label}</label>
        <input 
          type={type} 
          id={id} 
          name={name}
          value={value}
          ref={ref}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
})

export default FormInput