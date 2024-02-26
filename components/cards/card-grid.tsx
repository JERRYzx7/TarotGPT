import CardItem from "./card-item";

type Card = { id: number; image: string; title: string; slug: string };

type Cards = Card[];

interface Props {
  cards: Cards;
}

export default function ({ cards }: Props) {
  return (
    <ul>
      {cards.map((card) => (
        <li key={card.id}>
          <CardItem {...card} />
        </li>
      ))}
    </ul>
  );
}
