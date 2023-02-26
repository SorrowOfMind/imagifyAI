import openaiLogo from "../assets/openai_logo.svg";

const Logo = () => {
  return (
    <div className="logo text-2xl w-max sm:text-4xl">
        imagifyAI
        <div className="sm:text-xs text-[10px] flex items-center sm:justify-end justify-start leading-3">
            <span>powered by</span>
            <img src={openaiLogo} alt="openAI logo" className="inline pl-2" />
        </div>
    </div>
  )
}

export default Logo