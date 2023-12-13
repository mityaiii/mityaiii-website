import { Button } from "@/components/index"
import filePath from "@/assets/resume.pdf"

const TextContent = () => {
  const clickHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'resume.pdf'; 

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }

  return (
    <div className='w-[15rem] md:w-max mx-auto pt-8 md:pt-12 text-text-primary'>
        <h2 className='text-md md:text-xl'> Hello, I'm Mityai, </h2>
        <h1 className='text-[2rem] md:text-[3rem] font-bold'> Fullstack </h1>
        <h1 className='text-[2rem] md:text-[3rem] font-bold'> Developer </h1>
        <h2 className='text-md md:text-xl mb-6 md:mb-12'> based in Saint Petersburg. </h2>

        <Button onClick={ clickHandle }> Resume </Button>
    </div>
  )
}

export default TextContent