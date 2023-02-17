import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import FormInput from "../components/FormInput";
import Image from "../components/Image";

interface FormDataInterface {
  nickname: string;
  photo: string;
  prompt: string;
}

const CreateImg = () => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isSharing, setIsSharing] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataInterface>({
    nickname: "Unknown",
    photo: "",
    prompt: ""
  });
  const navigate = useNavigate();
  const nicknameRef = useRef<HTMLInputElement>(null);
  const promptRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nick = nicknameRef.current!.value;
    
  }

  const generateImg = () => {

  }

  return (
    <section className="container">
      <div>
        <h1 className="text-4xl">Generate Image</h1>
        <p className="my-2 text-base max-w-[500px]">Make your own DALL-E powered image!</p>
      </div>

      <form className="max-w-3xl mt-16" onSubmit={handleSubmit}>
        <div className="flex gap-5 flex-col">
          <FormInput 
            ref={nicknameRef} 
            label="Your nickname" 
            type="text"
            placeholder="Unknown"
            name="nickname"
          />
        </div>
        <div className="flex gap-5 flex-col">
          <FormInput 
            ref={promptRef} 
            label="Prompt" 
            type="text"
            placeholder="What should be generated?"
            name="prompt"
          />
        </div>
      </form>

      <Image photo={formData!.photo} isGenerating={isGenerating}/>

      <div className="mt5">
        <button 
          type="button" 
          onClick={generateImg}
          className="rounded-md text-white text-sm bg-lightGreen w-full sm:w-auto px-5 py-2.5 text-center hover:bg-lightGreen2 transition-colors duration-100"
        >
          {isGenerating ? "Generating..." : "Generate"}
        </button>
      </div>

      <div className="mt-10">
        <button type="submit" className="mt-3">
          {isSharing ? "Sharing..." : "Share"}
        </button>
      </div>

    </section>
  )
}

export default CreateImg