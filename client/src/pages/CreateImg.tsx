import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import FormInput from "../components/FormInput";
import Image from "../components/Image";


const CreateImg = () => {
  const [isGenerating, setGenerating] = useState<boolean>(false);
  const [photo, setPhoto] = useState<string>("");
  const [responseError, setResponseError] = useState<string>("");
  const promptRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const {value} = promptRef.current!;
    if (value !== "") {
      generateImg(value);
    }
  }

  const generateImg = async (prompt: string) => {
    setGenerating(true);
    try {
      const data = await fetch(import.meta.env.VITE_OPENAI_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({prompt})
      });
      const result = await data.json();
      setPhoto(`data:image/jpeg;base64,${result.photo}`);
    } catch (error) { 
      setResponseError(error as string);
    } finally {
      setGenerating(false);
    }
  }

  const downloadImg = () => {

  }

  const shareImage = () => {

  }

  return (
    <section className="container">
      <div>
        <h1 className="text-4xl">Generate Image</h1>
        <p className="my-2 text-base max-w-[500px]">Make your own DALL-E powered image!</p>
      </div>

      <form className="max-w-3xl mt-16" onSubmit={handleSubmit}>
          <FormInput 
            ref={promptRef}
            label="Prompt" 
            type="text"
            placeholder="What should be generated?"
            name="prompt"
          />
          <button>Generate</button>
      </form>

      <Image photo={photo} isGenerating={isGenerating}/>
     
    </section>
  )
}

export default CreateImg