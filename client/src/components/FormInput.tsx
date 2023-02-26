import { forwardRef, useId } from 'react'

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({label, name, type, placeholder}, ref) => {
  const id = useId();
  return (
    <div>
      <div className="flex gap-2 mb-2 items-center">
        <label htmlFor={id}>{label}</label>
        <input
          className="text-black"
          type={type} 
          id={id} 
          name={name}
          ref={ref}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
})

export default FormInput