import { forwardRef, useId } from 'react'

interface ForwardedInputProps {
    label?: string;
    type: string;
    placeholder?: string;
    name: string;
    icon?: string;
}

const ForwardedInput = forwardRef<HTMLInputElement, ForwardedInputProps>(({label, type, placeholder, name, icon}, ref) => {
    const id = useId();
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                className="bg-transparent text-black"
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                ref={ref}
            />
        </div>
    )
});

export default ForwardedInput;