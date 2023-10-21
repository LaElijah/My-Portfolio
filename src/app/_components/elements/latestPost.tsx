import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link"
import Tag from "./tag";
import styles from "@/app/_styles/elements/latestPost.module.scss";


type Author = {
    name: string;
    imageUrl: string;
}

interface BlogData {
    title: string;
    date: string;
    description: string;
    category: string | string[];
    tags: string | string[];
    author: Author;
    _id: string; // TODO: Change to force to use _id it should expect it
    media?: string;
}




export default function LatestPost({
    title,
    date,
    description,
    category,
    tags,
    author,
    media,
_id }: BlogData) {



    return (
        <section className={styles.container}>
            <h3>{date}</h3>

            <h1>{title}</h1>

            <h2>{description}</h2>

            <Link href={`${_id}`}>Continue reading <IconArrowRight /></Link>

            {author && ( <Tag />)}
        </section>
    )

}

