import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";


const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map(({
                id,
                title,
                description,
                className,
                img,
                spareImg,
                imgClassName,
                titleClassName
            }) => (
                <BentoGridItem 
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    spareImg={spareImg}
                    titleClassName={titleClassName}
                />))}
        </BentoGrid>
    </section>
  )
}

export default Grid