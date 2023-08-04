 
/* This example requires Tailwind CSS v3.0+ */
export default function CtaSimpleCentered(props) {
    return (
      <div className="bg-white">
        <div className="px-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
             {props.children}
            </div>
          </div>
     </div>
      
    )
  }
  