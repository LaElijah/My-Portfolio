import Tag from "./tag";
import styles from "@/app/_styles/elements/blogPost.module.scss";
import LinkWrapper from "./linkWrapper";





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




export default function BlogPost({
    title,
    date,
    description,
    category,
    tags,
    author,
    media,
    _id
}: BlogData) {

    return (
        <div className={styles.container}>

            <LinkWrapper href={`/`} className={styles.text}>
                <h3>{date}</h3>
                <h2>{title}</h2>
                <h2>{description}</h2>
            </LinkWrapper>

            {author && (<Tag />)}
        </div>

    )

}
