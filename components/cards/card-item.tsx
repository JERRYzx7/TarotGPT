import Image from "next/image";

type card = { id: number; image: string; title: string; slug: string };

function CardItem({ image, title, slug }: card) {
  return (
    <>
      <Image src={image} alt={title} width={90} height={150} />
      <h4>{title}</h4>
      <div>
        <a href={`/${slug}`}>正位</a>
        <a href={`/${slug}/reverse`}>逆位</a>
      </div>
    </>
  );
}

export default CardItem;
