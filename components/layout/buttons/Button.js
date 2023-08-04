import Link from "next/link";

const Button = (props) => {
    if (props.link) {
        return (
            <Link href={props.link} className="rounded-md bg-black px-3.5 py-2.5 text-xl font-semibold leading-7 text-white shadow-sm hover:bg-mrhYellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{props.children}</Link>
         );
       }
    
       return <div className="rounded-md bg-black px-3.5 py-2.5 text-xl font-semibold leading-7 text-white shadow-sm hover:bg-mrhYellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={props.onClick}>{props.children}</div>
}
  
export default Button;