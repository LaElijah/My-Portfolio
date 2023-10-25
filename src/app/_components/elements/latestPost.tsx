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
    file: string;
}




export default function LatestPost({
    title,
    date,
    description,
    category,
    tags,
    author,
    media,
    file,
_id }: BlogData) {


    const dateString = new Date(date).toISOString().split('T')[0]

    return (
        <section className={styles.container}>
            <h3>{dateString}</h3>

            <h1>{title}</h1>

            <h2>{description}</h2>

            <div className={styles.actions}>
            {author && ( <Tag />)}
            <Link href={`/blog/${file}`}>Continue reading <IconArrowRight /></Link>

           
            </div>

        </section>
    )

}

