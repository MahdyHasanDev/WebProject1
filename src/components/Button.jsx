
const Button = ({btnText,className}) => {
  return (
<button className={`px-6 py-4 font-inter font-medium text-[18px] border rounded-2xl ${className}`}>{btnText}</button>
      )
}

export default Button