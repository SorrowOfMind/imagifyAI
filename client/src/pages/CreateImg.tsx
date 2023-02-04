import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import FormInput from "../components/FormInput";

interface FormDataInterface {
  nickname: string;
  photo: string;
}

const CreateImg = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataInterface>();
  const nicknameRef = useRef<HTMLInputElement>();

  const handleSubmit = () => {

  }

  return (
    <section className="container">
      <div>
        <h1 className="text-4xl">Generate Image</h1>
        <p className="my-2 text-base max-w-[500px]">Make your own DALL-E powered image!</p>
      </div>

      <form className="max-w-3xl mt-16" onSubmit={handleSubmit}>
        <div className="flex gap-5 flex-col">
          <FormInput ref={nicknameRef} />
          <FormInput />
        </div>
      </form>
    </section>
  )
}

export default CreateImg