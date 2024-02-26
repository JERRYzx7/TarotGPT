import Image from "next/image";
import styles from "./page.module.css";
import CardGrid from "@/components/cards/card-grid";
import classes from "./page.module.css";
export default function Home() {
  return (
    <>
      <div></div>
      <div className={classes.container}>
        <CardGrid
          cards={[
            {
              id: 0,
              image: "/AceOfCups.jpg",
              title: "Ace",
              slug: "/minor/ace",
            },
            {
              id: 0,
              image: "/AceOfCups.jpg",
              title: "Ace",
              slug: "/minor/ace",
            },
            {
              id: 0,
              image: "/AceOfCups.jpg",
              title: "Ace",
              slug: "/minor/ace",
            },
            {
              id: 0,
              image: "/AceOfCups.jpg",
              title: "Ace",
              slug: "/minor/ace",
            },
            {
              id: 0,
              image: "/AceOfCups.jpg",
              title: "Ace",
              slug: "/minor/ace",
            },
            {
              id: 0,
              image: "/AceOfCups.jpg",
              title: "Ace",
              slug: "/minor/ace",
            },
            {
              id: 0,
              image: "/AceOfCups.jpg",
              title: "Ace",
              slug: "/minor/ace",
            },
            {
              id: 0,
              image: "/AceOfCups.jpg",
              title: "Ace",
              slug: "/minor/ace",
            },
          ]}
        />
      </div>
    </>
  );
}
